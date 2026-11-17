import http from 'http';
import saveLeadHandler from '../api/gst/save-lead.js';
import createOrderHandler from '../api/gst/create-order.js';
import verifyPaymentHandler from '../api/gst/verify-payment.js';
import webhookHandler from '../api/gst/webhook.js';

const PORT = process.env.PORT || 5000;

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      resolve(body);
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
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, x-webhook-signature, x-webhook-timestamp, x-api-version, x-client-id, x-client-secret'
  );

  if (req.method === 'OPTIONS') {
    res.statusCode = 200;
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;

  // Populate query params onto req
  req.query = Object.fromEntries(url.searchParams.entries());

  try {
    if (pathname === '/api/gst/save-lead' && req.method === 'POST') {
      const raw = await readBody(req);
      req.rawBody = raw;
      req.body = raw ? JSON.parse(raw) : {};
      await saveLeadHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/gst/create-order' && req.method === 'POST') {
      const raw = await readBody(req);
      req.rawBody = raw;
      req.body = raw ? JSON.parse(raw) : {};
      await createOrderHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/gst/verify-payment' && (req.method === 'POST' || req.method === 'GET')) {
      if (req.method === 'POST') {
        const raw = await readBody(req);
        req.rawBody = raw;
        req.body = raw ? JSON.parse(raw) : {};
      }
      await verifyPaymentHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/gst/webhook' && req.method === 'POST') {
      const raw = await readBody(req);
      req.rawBody = raw;
      req.body = raw ? JSON.parse(raw) : {};
      await webhookHandler(req, adaptResponse(res));
      return;
    }

    if (pathname === '/api/health' || pathname === '/api/gst/health') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ status: 'ok', service: 'NK Associates GST API (Cashfree Payments)', timestamp: new Date().toISOString() }));
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Endpoint not found' }));
  } catch (err) {
    console.error('Server request error:', err);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error', details: err.message }));
  }
});

if (process.env.NODE_ENV !== 'test') {
  server.listen(PORT, () => {
    console.log(`NK Associates GST API Server running at http://localhost:${PORT}`);
  });
}

export default server;
