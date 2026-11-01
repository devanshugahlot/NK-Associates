import http from 'http';
import saveLeadHandler from '../api/gst/save-lead.js';
import createOrderHandler from '../api/gst/create-order.js';
import verifyPaymentHandler from '../api/gst/verify-payment.js';
import webhookHandler from '../api/gst/webhook.js';

const PORT = process.env.PORT || 5000;

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      if (!body) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(body));
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function adaptResponse(res) {
  return {
    status(code) {
      res.statusCode = code;
      return this;
    },
    setHeader(name, value) {
      res.setHeader(name, value);
      return this;
    },
    json(data) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      return this;
    },
    end(data) {
      res.end(data);
      return this;
    },
  };
}

const server = http.createServer(async (req, res) => {
  // Global CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Razorpay-Signature');

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  try {
    if (pathname === '/api/gst/save-lead' && req.method === 'POST') {
      req.body = await parseJsonBody(req);
      await saveLeadHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/gst/create-order' && req.method === 'POST') {
      req.body = await parseJsonBody(req);
      await createOrderHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/gst/verify-payment' && req.method === 'POST') {
      req.body = await parseJsonBody(req);
      await verifyPaymentHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/gst/webhook' && req.method === 'POST') {
      req.body = await parseJsonBody(req);
      await webhookHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/health' || pathname === '/api/gst/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', service: 'NK Associates GST API', timestamp: new Date().toISOString() }));
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  } catch (err) {
    console.error('Server error handling request:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error: ' + err.message }));
  }
});

server.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`NK Associates GST Backend Server running on port ${PORT}`);
  console.log(`- Health Check:    http://localhost:${PORT}/api/gst/health`);
  console.log(`- Create Order:    http://localhost:${PORT}/api/gst/create-order`);
  console.log(`- Verify Payment:  http://localhost:${PORT}/api/gst/verify-payment`);
  console.log(`- Webhook:         http://localhost:${PORT}/api/gst/webhook`);
  console.log(`=======================================================`);
});
