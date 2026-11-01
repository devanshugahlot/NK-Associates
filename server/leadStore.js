import fs from 'fs';
import path from 'path';

// In-memory cache for fast lookup & serverless runtime compatibility
const memoryLeads = new Map();

const DATA_DIR = path.resolve(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

// Ensure data folder and file exist locally if filesystem is writable
function ensureLocalStore() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(LEADS_FILE)) {
      fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf8');
    }
  } catch (err) {
    // Read-only serverless environment fallback (e.g. Vercel Lambda)
  }
}

function persistToFile() {
  try {
    ensureLocalStore();
    const leadsArray = Array.from(memoryLeads.values());
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leadsArray, null, 2), 'utf8');
  } catch (err) {
    // Graceful skip in read-only environments
  }
}

// Load initial leads if file exists
try {
  ensureLocalStore();
  if (fs.existsSync(LEADS_FILE)) {
    const raw = fs.readFileSync(LEADS_FILE, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      parsed.forEach((l) => memoryLeads.set(l.id, l));
    }
  }
} catch (err) {
  // Continue with memory store
}

/**
 * Save initial lead before order creation
 */
export async function saveLead(lead) {
  const leadRecord = {
    ...lead,
    status: lead.status || 'payment_pending',
    createdAt: lead.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  memoryLeads.set(leadRecord.id, leadRecord);
  persistToFile();

  // If Supabase REST is configured in environment, sync asynchronously
  if (process.env.SUPABASE_URL && process.env.SUPABASE_KEY) {
    try {
      await fetch(`${process.env.SUPABASE_URL}/rest/v1/gst_leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.SUPABASE_KEY,
          'Authorization': `Bearer ${process.env.SUPABASE_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(leadRecord),
      });
    } catch (err) {
      console.warn('Supabase sync error:', err.message);
    }
  }

  return leadRecord;
}

/**
 * Update lead record status (e.g. marked as 'paid')
 */
export async function updateLead(leadId, updates) {
  const existing = memoryLeads.get(leadId);
  if (!existing) {
    // Try to find by razorpay_order_id
    for (const l of memoryLeads.values()) {
      if (l.orderId === leadId || l.razorpayOrderId === leadId) {
        return updateLead(l.id, updates);
      }
    }
    return null;
  }

  const updatedRecord = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };

  memoryLeads.set(leadId, updatedRecord);
  persistToFile();

  return updatedRecord;
}

/**
 * Retrieve lead by ID or Order ID
 */
export async function getLead(idOrOrderId) {
  if (memoryLeads.has(idOrOrderId)) {
    return memoryLeads.get(idOrOrderId);
  }

  for (const l of memoryLeads.values()) {
    if (l.orderId === idOrOrderId || l.razorpayOrderId === idOrOrderId) {
      return l;
    }
  }
  return null;
}
