// Prerender data for all static routes of NK Associates
// Generates unique title, meta description, canonical, OG tags, JSON-LD BreadcrumbList schema, and pre-rendered semantic HTML

export const routesData = {
  'about-us': {
    title: 'About Us | NK Associates',
    description: 'NK Associates is a premier Chartered Accountancy & Tax Consultancy firm in Jaipur, Rajasthan offering corporate, GST, audit, and tax advisory across India.',
    canonical: 'https://nkassociate.in/about-us',
    breadcrumbName: 'About Us',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">About Us</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">About NK Associates - Trusted Chartered Accountants</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-6">
          Established in the pink city of Jaipur, Rajasthan, NK Associates is a distinguished Chartered Accountancy and financial consultancy firm dedicated to empowering businesses, entrepreneurs, and individuals with strategic tax planning, robust audit assurance, and proactive regulatory compliance across India.
        </p>
        <div class="grid md:grid-cols-2 gap-8 my-10">
          <div class="p-6 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 class="text-xl font-semibold text-slate-900 mb-3">Our Core Mission</h2>
            <p class="text-slate-600 leading-relaxed">
              To deliver 100% digital, transparent, and accurate financial and taxation solutions that enable Indian enterprises to stay compliant, eliminate financial penalties, and scale sustainably with complete peace of mind.
            </p>
          </div>
          <div class="p-6 bg-slate-50 border border-slate-200 rounded-xl">
            <h2 class="text-xl font-semibold text-slate-900 mb-3">Our Vision</h2>
            <p class="text-slate-600 leading-relaxed">
              To be recognized as India's most client-centric and technologically forward Chartered Accountancy practice, bridging geographical boundaries through paperless execution and unmatched domain expertise.
            </p>
          </div>
        </div>
        <h2 class="text-2xl font-bold text-slate-900 mb-4">Why Businesses Trust NK Associates</h2>
        <ul class="list-disc pl-6 space-y-3 text-slate-700 mb-8">
          <li><strong>Over a Decade of Combined CA Experience:</strong> Deep mastery in direct and indirect taxation, ROC matters, and statutory audits.</li>
          <li><strong>100% Paperless Digital Workflow:</strong> Seamless document sharing, virtual meetings, and rapid turnaround for clients in Jaipur and across India.</li>
          <li><strong>Zero Compliance Lapses:</strong> Proactive reminders and end-to-end management ensuring zero late fees or department notices.</li>
          <li><strong>Transparent Fixed Pricing:</strong> Honest, upfront pricing without hidden charges for MSMEs, startups, and corporate clients.</li>
        </ul>
        <div class="bg-sky-50 border border-sky-200 p-6 rounded-xl text-center">
          <h3 class="text-xl font-semibold text-sky-950 mb-2">Need Professional Tax or Accounting Advice?</h3>
          <p class="text-slate-600 mb-4">Our Jaipur team is ready to assist your business anywhere in India.</p>
          <a href="/contact" class="inline-block bg-sky-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-sky-700">Contact Our CAs</a>
        </div>
      </main>
    `
  },
  'about': {
    aliasOf: 'about-us'
  },
  'services': {
    title: 'Services | NK Associates',
    description: 'Explore Chartered Accountant, GST, Income Tax, Statutory Audit, Company Incorporation, and Bookkeeping services by NK Associates Jaipur & Pan-India.',
    canonical: 'https://nkassociate.in/services',
    breadcrumbName: 'Services',
    content: `
      <main class="max-w-6xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">Services</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Chartered Accountant & Tax Consultancy Services</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-10">
          NK Associates delivers an exhaustive spectrum of accounting, direct taxation, GST, statutory audit, corporate secretarial, and project financing services. Designed for modern enterprises, our solutions combine senior CA expertise with digital efficiency.
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h2 class="text-xl font-bold text-slate-900 mb-2"><a href="/services/gst" class="text-sky-600 hover:underline">GST Services</a></h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Comprehensive GST registration, monthly GSTR-1 & GSTR-3B filings, annual GSTR-9 reconciliation, Input Tax Credit (ITC) optimization, and department notice replies.
            </p>
            <a href="/services/gst" class="text-sky-600 font-medium text-sm hover:underline">View GST Practice &rarr;</a>
          </article>
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h2 class="text-xl font-bold text-slate-900 mb-2"><a href="/services/income-tax" class="text-sky-600 hover:underline">Income Tax Services</a></h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Timely Income Tax Return (ITR-1 to ITR-6) filing for individuals, LLPs, and companies, tax planning, TDS compliance (Form 24Q, 26Q), and scrutiny notice defense.
            </p>
            <a href="/services/income-tax" class="text-sky-600 font-medium text-sm hover:underline">View Income Tax Practice &rarr;</a>
          </article>
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h2 class="text-xl font-bold text-slate-900 mb-2"><a href="/services/audit-assurance" class="text-sky-600 hover:underline">Audit & Assurance</a></h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Independent Statutory Audits under Companies Act 2013, Tax Audits under Section 44AB, Internal Management Audits, and physical stock verifications.
            </p>
            <a href="/services/audit-assurance" class="text-sky-600 font-medium text-sm hover:underline">View Audit Practice &rarr;</a>
          </article>
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h2 class="text-xl font-bold text-slate-900 mb-2"><a href="/services/company-registration" class="text-sky-600 hover:underline">Company Registration</a></h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              End-to-end incorporation of Private Limited Companies, LLPs, and OPCs in India. Includes DSC, DIN, MOA/AOA drafting, PAN/TAN, and Startup India DPIIT recognition.
            </p>
            <a href="/services/company-registration" class="text-sky-600 font-medium text-sm hover:underline">View Incorporation Practice &rarr;</a>
          </article>
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h2 class="text-xl font-bold text-slate-900 mb-2"><a href="/services/accounting-bookkeeping" class="text-sky-600 hover:underline">Accounting & Bookkeeping</a></h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Day-to-day digital bookkeeping on Tally Prime, Zoho Books, and QuickBooks. Bank reconciliations, monthly P&L and Balance Sheet generation, and payroll management.
            </p>
            <a href="/services/accounting-bookkeeping" class="text-sky-600 font-medium text-sm hover:underline">View Bookkeeping Practice &rarr;</a>
          </article>
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm hover:shadow-md transition">
            <h2 class="text-xl font-bold text-slate-900 mb-2">Project Reports & CMA</h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Bankable CMA data reports, detailed project reports (DPR) for MSME bank loans, term loan syndication, and cash credit limit enhancements.
            </p>
            <a href="/contact" class="text-sky-600 font-medium text-sm hover:underline">Consult for CMA Data &rarr;</a>
          </article>
        </div>
      </main>
    `
  },
  'services/gst': {
    title: 'GST Services | NK Associates',
    description: 'Expert GST registration, monthly GSTR-1, GSTR-3B filing, annual returns GSTR-9/9C, notice reply, and ITC optimization in Jaipur & Pan-India.',
    canonical: 'https://nkassociate.in/services/gst',
    parentCrumb: { name: 'Services', url: 'https://nkassociate.in/services' },
    breadcrumbName: 'GST Services',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; 
          <a href="/services" class="text-sky-600 hover:underline">Services</a> &gt; 
          <span class="text-slate-800 font-medium">GST Services</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">GST Registration & Return Filing Services</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Goods and Services Tax (GST) compliance in India requires rigorous documentation, precise invoice matching, and timely portal filings. NK Associates provides end-to-end GST management for manufacturers, wholesalers, service providers, e-commerce sellers, and startups in Jaipur and throughout India.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Our Complete GST Practice Offerings</h2>
        <div class="space-y-6 mb-10">
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">1. Digital GST Registration</h3>
            <p class="text-slate-700 leading-relaxed">
              We manage mandatory and voluntary GST registrations under the CGST/SGST Acts. Whether you are crossing the ₹40 Lakh goods or ₹20 Lakh services turnover threshold, selling on Amazon/Flipkart, or expanding interstate, our CAs prepare and file application Form GST REG-01 with verified documentation to secure GSTIN without queries.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">2. Monthly & Quarterly GST Return Filings</h3>
            <p class="text-slate-700 leading-relaxed">
              Timely filing of GSTR-1 (outward supplies), GSTR-3B (monthly summary and tax liability), and QRMP scheme returns. We perform automatic reconciliation between purchase registers and GSTR-2B to ensure 100% legitimate Input Tax Credit (ITC) claims and avoid Section 16(4) restrictions.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">3. Annual Returns & Reconciliation (GSTR-9 & GSTR-9C)</h3>
            <p class="text-slate-700 leading-relaxed">
              Comprehensive annual compilation and self-certified reconciliation between audited financial statements and filed GST returns, eliminating spillover errors, excess ITC claims, and rate mismatch issues.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">4. GST Notice Reply & Departmental Representation</h3>
            <p class="text-slate-700 leading-relaxed">
              Received a notice under DRC-01, ASMT-10, or Section 73/74 regarding ITC discrepancies or turnover mismatch? Our tax advocates and senior CAs draft point-by-point legal submissions and represent your enterprise before GST adjudicating authorities.
            </p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions on GST</h2>
        <div class="space-y-4 mb-8 text-slate-700">
          <div>
            <h3 class="font-semibold text-slate-900">What is the penalty for late GST return filing?</h3>
            <p>Late fees of ₹50 per day (₹20 per day for nil returns) apply under Section 47 of the CGST Act, plus 18% annual interest on delayed net tax liabilities.</p>
          </div>
          <div>
            <h3 class="font-semibold text-slate-900">Can NK Associates file GST returns for businesses outside Jaipur?</h3>
            <p>Yes. Our entire GST compliance workflow is 100% digital, serving clients in Delhi NCR, Mumbai, Bengaluru, Ahmedabad, and across India via encrypted portals.</p>
          </div>
        </div>
        <div class="bg-sky-50 border border-sky-200 p-6 rounded-xl text-center">
          <p class="text-slate-800 font-semibold mb-2">Ready to streamline your GST compliance?</p>
          <a href="/contact" class="inline-block bg-sky-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-sky-700">Get in Touch with GST Experts</a>
        </div>
      </main>
    `
  },
  'services/income-tax': {
    title: 'Income Tax Services | NK Associates',
    description: 'Professional Income Tax Return (ITR) filing for individuals, firms & companies, tax planning, TDS compliance, and scrutiny notice handling in Jaipur.',
    canonical: 'https://nkassociate.in/services/income-tax',
    parentCrumb: { name: 'Services', url: 'https://nkassociate.in/services' },
    breadcrumbName: 'Income Tax Services',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; 
          <a href="/services" class="text-sky-600 hover:underline">Services</a> &gt; 
          <span class="text-slate-800 font-medium">Income Tax Services</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Income Tax Return (ITR) Filing & Tax Advisory</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Navigating direct tax laws in India requires thorough evaluation of your earnings, eligible exemptions, capital gains, and choice of tax regime. At NK Associates, our seasoned Chartered Accountants offer specialized Income Tax filing, TDS compliance, and tax litigation defense in Jaipur and across India.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Our Direct Tax Services Spectrum</h2>
        <div class="space-y-6 mb-10">
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">1. ITR Filing for All Categories (ITR-1 to ITR-6)</h3>
            <p class="text-slate-700 leading-relaxed">
              We prepare and e-file error-free returns for salaried individuals, professionals under Section 44ADA, traders under Section 44AD presumptive taxation, partnership firms, LLPs (ITR-5), and Private Limited companies (ITR-6). All computations are reconciled with AIS, TIS, and Form 26AS.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">2. Strategic Tax Planning & Regime Optimization</h3>
            <p class="text-slate-700 leading-relaxed">
              Detailed comparative analysis between the Old Tax Regime (with Chapter VI-A deductions like 80C, 80D, 80G, home loan interest) and the New Tax Regime (Section 115BAC concessional slabs). We ensure maximum legal tax savings and optimal cash flow.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">3. TDS / TCS Returns & Compliance</h3>
            <p class="text-slate-700 leading-relaxed">
              Quarterly TDS return preparation (Form 24Q for salaries, Form 26Q for contractor/rent/commission, Form 27Q for NRI payments), online challan generation, Form 16/16A generation, and TRACES correction statements.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">4. Income Tax Notice Resolution & Scrutiny Defense</h3>
            <p class="text-slate-700 leading-relaxed">
              Professional legal representation for notices under Section 139(9) (defective return), Section 143(1) (intimation mismatches), Section 142(1) (inquiry before assessment), and Section 148 (reassessment proceedings).
            </p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Capital Gains Advisory</h2>
        <p class="text-slate-700 leading-relaxed mb-8">
          Selling real estate, stocks, mutual funds, or business assets? We calculate precise short-term and long-term capital gains, indexation benefits, and exemptions under Section 54, 54EC (Capital Gain Bonds), and 54F to minimize your tax liability.
        </p>
        <div class="bg-sky-50 border border-sky-200 p-6 rounded-xl text-center">
          <p class="text-slate-800 font-semibold mb-2">File your ITR accurately before the due date.</p>
          <a href="/contact" class="inline-block bg-sky-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-sky-700">Consult Our Tax CAs</a>
        </div>
      </main>
    `
  },
  'services/audit-assurance': {
    title: 'Audit & Assurance Services | NK Associates',
    description: 'Comprehensive Statutory Audit under Companies Act, Section 44AB Tax Audit, Internal Audit, and Stock Audits in Jaipur by NK Associates.',
    canonical: 'https://nkassociate.in/services/audit-assurance',
    parentCrumb: { name: 'Services', url: 'https://nkassociate.in/services' },
    breadcrumbName: 'Audit & Assurance',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; 
          <a href="/services" class="text-sky-600 hover:underline">Services</a> &gt; 
          <span class="text-slate-800 font-medium">Audit & Assurance</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Statutory Audit, Tax Audit & Assurance Services</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Reliable financial statements are the cornerstone of stakeholder trust, bank financing, and regulatory compliance. NK Associates provides rigorous, objective audit and assurance services complying with Indian Accounting Standards (Ind AS), ICAI guidance notes, and the Companies Act.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Our Core Audit Capabilities</h2>
        <div class="space-y-6 mb-10">
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">1. Statutory Company Audits</h3>
            <p class="text-slate-700 leading-relaxed">
              Mandatory independent audit of financial books for Private Limited companies, Public Limited companies, and Section 8 entities under the Companies Act 2013. We examine internal financial controls (IFC), CARO reporting, and ensure true and fair view presentation.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">2. Tax Audits under Section 44AB</h3>
            <p class="text-slate-700 leading-relaxed">
              Comprehensive Tax Audits for businesses exceeding turnover thresholds (₹1 Crore or ₹10 Crore with 95% digital transactions) and professionals crossing ₹50 Lakhs. Preparation and filing of Form 3CA/3CB and extensive 44-clause Form 3CD disclosures before the September 30 deadline.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">3. Internal & Management Audits</h3>
            <p class="text-slate-700 leading-relaxed">
              Systematic operational audits to identify internal control gaps, revenue leakages, inventory discrepancies, and process bottlenecks. We deliver actionable recommendations to strengthen corporate governance.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">4. Stock, Inventory & Bank Audits</h3>
            <p class="text-slate-700 leading-relaxed">
              Physical inventory verification, concurrent audits, stock audit certification for bank borrowing limits (Cash Credit / Overdraft), and forensic reviews.
            </p>
          </div>
        </div>

        <div class="bg-sky-50 border border-sky-200 p-6 rounded-xl text-center">
          <p class="text-slate-800 font-semibold mb-2">Schedule your statutory or tax audit review today.</p>
          <a href="/contact" class="inline-block bg-sky-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-sky-700">Speak to Our Audit Team</a>
        </div>
      </main>
    `
  },
  'services/company-registration': {
    title: 'Company Registration | NK Associates',
    description: 'Private Limited Company, LLP, OPC incorporation, Startup India recognition, ROC annual filings, and DIN/DSC services in Jaipur & Pan-India.',
    canonical: 'https://nkassociate.in/services/company-registration',
    parentCrumb: { name: 'Services', url: 'https://nkassociate.in/services' },
    breadcrumbName: 'Company Registration',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; 
          <a href="/services" class="text-sky-600 hover:underline">Services</a> &gt; 
          <span class="text-slate-800 font-medium">Company Registration</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Company & LLP Registration Services</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Transform your entrepreneurial vision into a legally recognized corporate entity. NK Associates provides fast, transparent company registration and Ministry of Corporate Affairs (MCA) compliance for founders in Jaipur, Rajasthan and throughout India.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Entity Structures We Incorporate</h2>
        <div class="space-y-6 mb-10">
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">1. Private Limited Company (Pvt Ltd)</h3>
            <p class="text-slate-700 leading-relaxed">
              The preferred vehicle for high-growth startups and venture funding. Includes RUN name reservation, SPICe+ Part A & B filing, MOA and AOA drafting, Director Identification Number (DIN), Digital Signature Certificate (Class 3 DSC), PAN, TAN, and bank account integration.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">2. Limited Liability Partnership (LLP)</h3>
            <p class="text-slate-700 leading-relaxed">
              Ideal for professional services and family businesses seeking limited liability with lower compliance overhead compared to a company. Complete FiLLiP filing and Form 3 LLP agreement drafting.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">3. One Person Company (OPC) & Section 8 NGO</h3>
            <p class="text-slate-700 leading-relaxed">
              Sole entrepreneurs wanting corporate branding can launch an OPC with 100% single ownership. We also incorporate non-profit Section 8 companies with 12A/80G tax exemptions.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">4. Startup India DPIIT Recognition & Post-Incorporation ROC</h3>
            <p class="text-slate-700 leading-relaxed">
              Assistance with DPIIT recognition under the Startup India initiative for Section 80-IAC tax holiday and angel tax exemptions. Complete post-incorporation maintenance including Commencement of Business (INC-20A), DIR-3 KYC, AOC-4, and MGT-7 filings.
            </p>
          </div>
        </div>

        <div class="bg-sky-50 border border-sky-200 p-6 rounded-xl text-center">
          <p class="text-slate-800 font-semibold mb-2">Start your new company in 7-10 business days.</p>
          <a href="/contact" class="inline-block bg-sky-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-sky-700">Incorporate Now</a>
        </div>
      </main>
    `
  },
  'services/accounting-bookkeeping': {
    title: 'Accounting & Bookkeeping | NK Associates',
    description: 'Digital bookkeeping, cloud accounting in Tally & Zoho, bank reconciliation, MIS financial reports, and payroll management for Indian businesses.',
    canonical: 'https://nkassociate.in/services/accounting-bookkeeping',
    parentCrumb: { name: 'Services', url: 'https://nkassociate.in/services' },
    breadcrumbName: 'Accounting & Bookkeeping',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; 
          <a href="/services" class="text-sky-600 hover:underline">Services</a> &gt; 
          <span class="text-slate-800 font-medium">Accounting & Bookkeeping</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Accounting & Bookkeeping Services</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Accurate, up-to-date accounting records are fundamental to making sound managerial decisions and maintaining tax compliance. NK Associates provides outsourced bookkeeping and cloud-based accounting solutions designed for MSMEs, traders, startups, and growing enterprises in Jaipur and across India.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Our Bookkeeping Solutions</h2>
        <div class="space-y-6 mb-10">
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">1. Cloud & Desktop Accounting Management</h3>
            <p class="text-slate-700 leading-relaxed">
              We manage your ledger accounts in industry-standard platforms including Tally Prime, Zoho Books, QuickBooks, and Busy. Daily purchases, sales invoicing, expense recording, and debit/credit note tracking are maintained with pristine ledger hygiene.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">2. Bank & Payment Gateway Reconciliation</h3>
            <p class="text-slate-700 leading-relaxed">
              Regular reconciliation of business current accounts, credit cards, payment gateways (Razorpay, Cashfree, Stripe), and POS terminals to identify uncleared checks, duplicate deductions, and bank charges.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">3. Monthly Management Information Systems (MIS)</h3>
            <p class="text-slate-700 leading-relaxed">
              Custom monthly financial dossiers featuring Profit & Loss accounts, Balance Sheets, Cash Flow statements, accounts receivable aging, and vendor payable schedules to give business owners clear financial visibility.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-2">4. Payroll Accounting & Statutory Deductions</h3>
            <p class="text-slate-700 leading-relaxed">
              End-to-end payroll processing, employee salary slips, Provident Fund (PF) calculations, Employee State Insurance (ESIC) filing, and Professional Tax compliance.
            </p>
          </div>
        </div>

        <div class="bg-sky-50 border border-sky-200 p-6 rounded-xl text-center">
          <p class="text-slate-800 font-semibold mb-2">Eliminate in-house accounting overhead.</p>
          <a href="/contact" class="inline-block bg-sky-600 text-white font-medium px-6 py-2.5 rounded-lg hover:bg-sky-700">Outsource Your Bookkeeping</a>
        </div>
      </main>
    `
  },
  'careers': {
    title: 'Careers & Articleship | NK Associates',
    description: 'Join NK Associates Jaipur. Career opportunities for Chartered Accountants, Semi-Qualified CAs, CA Articles, and Tax Accountancy Trainees.',
    canonical: 'https://nkassociate.in/careers',
    breadcrumbName: 'Careers',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">Careers</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Careers & Articleship Training at NK Associates</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          At NK Associates, we foster a merit-driven, highly collaborative professional culture. We offer exceptional practical exposure in direct taxes, GST litigation, corporate secretarial practice, statutory audits, and digital accounting for aspiring professionals in Jaipur.
        </p>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">Current Open Positions</h2>
        <div class="space-y-6 mb-10">
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-1">1. CA Articleship Trainees (ICAI Students)</h3>
            <p class="text-xs text-sky-600 font-semibold mb-2">Full-Time (ICAI Guidelines) &bull; Jaipur Office</p>
            <p class="text-slate-700 leading-relaxed">
              Open to candidates who have cleared CA Intermediate (Single or Both Groups). Gain hands-on practical exposure across Tax Audits (Form 3CD), Corporate Bookkeeping, GST Return filings, and ROC compliance under the direct mentorship of senior CAs.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-1">2. Qualified Chartered Accountant (Audit & Taxation)</h3>
            <p class="text-xs text-sky-600 font-semibold mb-2">Full-Time &bull; 1-3 Years Experience &bull; Jaipur</p>
            <p class="text-slate-700 leading-relaxed">
              Seeking an ambitious qualified CA with sound analytical skills to lead audit engagements, review direct and indirect tax submissions, and mentor article trainees.
            </p>
          </div>
          <div class="p-5 border border-slate-200 rounded-xl bg-slate-50">
            <h3 class="text-lg font-bold text-slate-900 mb-1">3. Semi-Qualified CA / Senior Accountant</h3>
            <p class="text-xs text-sky-600 font-semibold mb-2">Full-Time &bull; Jaipur Office</p>
            <p class="text-slate-700 leading-relaxed">
              Experience with Tally Prime, TDS returns, GST reconciliations, and balance sheet finalization. Minimum 2+ years of prior CA firm experience required.
            </p>
          </div>
        </div>

        <h2 class="text-2xl font-bold text-slate-900 mb-4">How to Apply</h2>
        <p class="text-slate-700 leading-relaxed mb-6">
          Send your detailed curriculum vitae along with your ICAI student/membership registration number to <a href="mailto:info@nkassociates.co.in" class="text-sky-600 font-semibold hover:underline">info@nkassociates.co.in</a> or visit our Sanganer office for walk-in interviews.
        </p>
      </main>
    `
  },
  'blog': {
    title: 'Tax Blog & Insights | NK Associates',
    description: 'Latest updates and practical insights on GST regulations, Income Tax filing deadlines, Union Budget, ROC compliance, and corporate finance in India.',
    canonical: 'https://nkassociate.in/blog',
    breadcrumbName: 'Tax Blog',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">Tax Blog</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Tax & Accounting Knowledge Hub</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-10">
          Stay informed on the latest amendments under GST, Income Tax Acts, Ministry of Corporate Affairs regulations, and Central Board of Direct Taxes (CBDT) notifications through insightful articles written by our practicing Chartered Accountants.
        </p>

        <div class="space-y-8 mb-10">
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
            <span class="text-xs font-semibold text-sky-600 uppercase tracking-wide">GST Updates</span>
            <h2 class="text-xl font-bold text-slate-900 mt-1 mb-2">Mastering GSTR-2B vs Purchase Register Reconciliation</h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Why Section 16(2)(aa) makes automatic 2B reconciliation mandatory for every registered taxpayer in India, and how automated tools prevent Input Tax Credit reversals with interest under Section 50.
            </p>
            <a href="/services/gst" class="text-sky-600 font-medium text-sm hover:underline">Learn more in GST Services &rarr;</a>
          </article>
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
            <span class="text-xs font-semibold text-sky-600 uppercase tracking-wide">Income Tax</span>
            <h2 class="text-xl font-bold text-slate-900 mt-1 mb-2">Old vs New Tax Regime: Choosing the Best Option for FY 2024-25</h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              A comprehensive breakdown of tax slabs under Section 115BAC versus the traditional deduction regime under Chapter VI-A for salaried employees and professionals.
            </p>
            <a href="/services/income-tax" class="text-sky-600 font-medium text-sm hover:underline">Learn more in Income Tax Services &rarr;</a>
          </article>
          <article class="p-6 border border-slate-200 rounded-xl bg-white shadow-sm">
            <span class="text-xs font-semibold text-sky-600 uppercase tracking-wide">Startup Guide</span>
            <h2 class="text-xl font-bold text-slate-900 mt-1 mb-2">Startup India DPIIT Recognition & Tax Exemptions (Section 80-IAC)</h2>
            <p class="text-slate-600 text-sm leading-relaxed mb-4">
              Eligibility criteria for newly incorporated Private Limited and LLP entities to claim 3 consecutive years of 100% tax exemption under the Startup India program.
            </p>
            <a href="/services/company-registration" class="text-sky-600 font-medium text-sm hover:underline">Learn more in Company Registration &rarr;</a>
          </article>
        </div>
      </main>
    `
  },
  'contact': {
    title: 'Contact Us | NK Associates',
    description: 'Get in touch with NK Associates, Chartered Accountants in Jaipur. Visit our Sanganer office, call +91-75688-20015, or request digital consultation.',
    canonical: 'https://nkassociate.in/contact',
    breadcrumbName: 'Contact Us',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">Contact Us</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Contact NK Associates - CA & Tax Consultants</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Whether you need assistance with urgent GST return filing, income tax notice resolution, company incorporation, or long-term statutory audit advisory, our Chartered Accountants are ready to help.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-10">
          <div class="p-6 border border-slate-200 rounded-xl bg-slate-50">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Jaipur Corporate Office</h2>
            <p class="text-slate-700 text-sm mb-2"><strong>Address:</strong> 4th Floor, Sanjay Mansion, Shri Ramnagar Colony, Dada Gurudev Nagar, Sanganer, Jaipur, Rajasthan 302029</p>
            <p class="text-slate-700 text-sm mb-2"><strong>Phone / WhatsApp:</strong> <a href="tel:+917568820015" class="text-sky-600 font-semibold">+91-75688-20015</a></p>
            <p class="text-slate-700 text-sm mb-2"><strong>Email:</strong> <a href="mailto:info@nkassociates.co.in" class="text-sky-600 font-semibold">info@nkassociates.co.in</a></p>
            <p class="text-slate-700 text-sm"><strong>Hours:</strong> Mon - Sat: 10:00 AM - 6:30 PM</p>
          </div>
          <div class="p-6 border border-slate-200 rounded-xl bg-slate-50">
            <h2 class="text-xl font-bold text-slate-900 mb-4">Pan-India Digital Advisory</h2>
            <p class="text-slate-700 text-sm leading-relaxed mb-4">
              We serve clients in Delhi NCR, Mumbai, Bangalore, Hyderabad, Pune, and tier-2/3 cities via paperless cloud portals, video consultations, and instant WhatsApp support.
            </p>
            <a href="https://wa.me/917568820015" class="inline-block bg-emerald-600 text-white font-medium px-5 py-2 rounded-lg hover:bg-emerald-700">Chat on WhatsApp</a>
          </div>
        </div>
      </main>
    `
  },
  'contact-us': {
    aliasOf: 'contact'
  },
  'reviews': {
    title: 'Client Reviews | NK Associates',
    description: 'Read verified client reviews and testimonials for NK Associates, top-rated Chartered Accountants and tax consultants in Jaipur, Rajasthan.',
    canonical: 'https://nkassociate.in/reviews',
    breadcrumbName: 'Client Reviews',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">Reviews</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Client Reviews & Testimonials</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          With a 4.8 out of 5-star rating on Google, NK Associates takes pride in delivering exceptional client satisfaction, transparent advice, and dependable CA services.
        </p>
      </main>
    `
  },
  'gallery': {
    title: 'Office Gallery | NK Associates',
    description: 'Take a look inside the modern offices and team environment of NK Associates Chartered Accountants in Sanganer, Jaipur.',
    canonical: 'https://nkassociate.in/gallery',
    breadcrumbName: 'Office Gallery',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">Gallery</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">NK Associates Office & Workspace Gallery</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-8">
          Take a look at our professional head office located in Sanganer, Jaipur, designed to provide a productive, secure, and client-friendly consulting environment.
        </p>
      </main>
    `
  },
  'privacy': {
    title: 'Privacy Policy | NK Associates',
    description: 'Privacy policy and client data protection practices of NK Associates Chartered Accountants & Tax Consultants, Jaipur, India.',
    canonical: 'https://nkassociate.in/privacy',
    breadcrumbName: 'Privacy Policy',
    content: `
      <main class="max-w-5xl mx-auto px-4 py-16">
        <nav aria-label="Breadcrumb" class="mb-6 text-sm text-slate-500">
          <a href="/" class="text-sky-600 hover:underline">Home</a> &gt; <span class="text-slate-800 font-medium">Privacy Policy</span>
        </nav>
        <h1 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Privacy Policy - NK Associates</h1>
        <p class="text-lg text-slate-700 leading-relaxed mb-6">
          NK Associates respects the confidentiality of all client financial, tax, and personal data in strict compliance with the Chartered Accountants Act and Indian Information Technology regulations.
        </p>
      </main>
    `
  },
  'privacy-policy': {
    aliasOf: 'privacy'
  }
};
