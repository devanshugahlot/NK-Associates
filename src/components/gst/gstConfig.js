/**
 * GST Registration Landing Page Configuration
 * Contains all editable copy, package pricing, steps, trust badges, FAQs, and contact links.
 */

export const gstConfig = {
  // Brand & Contact Information (Synchronized with firm details)
  contact: {
    firmName: 'NK Associates',
    qualification: 'Chartered Accountants & Tax Consultants',
    location: 'Sanganer, Jaipur, Rajasthan',
    phoneDisplay: '+91 75688 20015',
    phoneValue: '+917568820015',
    whatsappNumber: '+917568820015',
    whatsappText: 'Hello NK Associates, I would like to get my GST Registration done.',
    email: 'info@nkassociate.in',
    processingTime: 'typically 3-7 working days, subject to GST department verification',
    workingHours: 'Monday – Saturday: 10:00 AM – 7:00 PM IST',
    termsUrl: '/privacy',
    refundUrl: '/privacy',
    privacyUrl: '/privacy',
  },

  // Trust Metrics & Verified Claims
  // NOTE: Strict compliance with Trust Rules - No competitor claims, no unverified stats or fake reviews.
  trust: {
    // Numerical stats kept null until officially verified by business owner
    yearsExperience: null,
    clientsServed: null,
    googleRating: null,
    reviewCount: null,

    // Real, true factual claims for NK Associates
    claims: [
      {
        id: 'jaipur-ca',
        title: 'Jaipur Head Office & Pan-India Desk',
        desc: 'Direct consultation with practicing Chartered Accountants based in Jaipur serving businesses nationwide.',
      },
      {
        id: 'online-process',
        title: '100% Online & Paperless',
        desc: 'Zero physical visits required. Everything handled through digital document sharing and portal filings.',
      },
      {
        id: 'dedicated-expert',
        title: 'Dedicated CA Associate',
        desc: 'A dedicated tax professional assigned to your application from document audit to GSTIN generation.',
      },
      {
        id: 'verified-timeline',
        title: 'Clear Statutory Timelines',
        desc: 'Application filed in 24-48 hours; GSTIN issued typically within 3-7 working days by tax authorities.',
      },
    ],

    // Real customer reviews array (Kept empty until authenticated client testimonials are supplied)
    reviews: [],
  },

  // 4 Packages (Prices exclude 18% GST as per prompt specification)
  packages: [
    {
      id: 'gst-complete',
      name: 'GST Complete Plan',
      price: 599,
      billingPeriod: '/ month',
      periodNote: '+ 18% GST extra',
      description: 'Complete peace of mind for active businesses needing GST registration plus ongoing monthly return filing.',
      popular: false,
      badge: null,
      features: [
        'GST registration included',
        'Complete GST return filing (GSTR-1 & GSTR-3B)',
        'GST accounting software included',
        'Continuous GST compliance monitoring',
        'Dedicated accountant assigned to your account',
        'Call, chat & email support',
      ],
      ctaText: 'Select Plan',
    },
    {
      id: 'registration-plan',
      name: 'Registration Plan',
      price: 799,
      billingPeriod: 'one-time',
      periodNote: '+ 18% GST extra',
      description: 'One-time fast-track GST registration filing for new entities, proprietorships, and startups.',
      popular: false,
      badge: null,
      features: [
        'Complete GST registration filing',
        'ARN & TRN generation & tracking',
        'HSN / SAC code selection advisory',
        'Principal place of business verification support',
        'Call, chat & email support',
      ],
      ctaText: 'Select Plan',
    },
    {
      id: 'business-growth',
      name: 'Business Compliance & Growth',
      price: 2399,
      billingPeriod: '/ month',
      periodNote: '+ 18% GST extra',
      description: 'High-growth corporate package covering GST, ITR, TDS filings, and corporate secretarial assistance.',
      popular: false,
      badge: null,
      features: [
        'GST registration & return filing',
        'GST accounting software',
        'Statutory registration assistance',
        'ITR filing & bookkeeping',
        'ROC compliance assistance',
        'TDS compliance & filing',
        'Dedicated expert',
      ],
      ctaText: 'Select Plan',
    },
    {
      id: 'smart-plan',
      name: 'Smart Plan',
      price: 7599,
      billingPeriod: '/ year',
      periodNote: '+ 18% GST extra',
      description: 'Annual flagship bundle for growing enterprises looking for full-year tax compliance and savings.',
      popular: true,
      badge: 'Best Value',
      features: [
        'GST registration free',
        'GST return filing for 12 months',
        'Bookkeeping included',
        'Income tax return filing included',
        'GST accounting software',
        'Dedicated relationship manager',
      ],
      ctaText: 'Select Plan',
    },
  ],

  // 6 How It Works Steps
  howItWorks: [
    {
      step: 1,
      title: 'Fill Form & Pay',
      desc: 'Submit your contact details and securely pay the statutory service fee online.',
    },
    {
      step: 2,
      title: 'Expert Calls You',
      desc: 'Our CA tax associate calls you within 15-30 minutes to review your business constitution.',
    },
    {
      step: 3,
      title: 'Send Documents',
      desc: 'Share simple digital copies of your PAN, Aadhaar, electricity bill, and bank proof via WhatsApp or email.',
    },
    {
      step: 4,
      title: 'Upload on GST Portal',
      desc: 'We draft Form GST REG-01, upload data to the government portal, and issue your ARN & TRN numbers.',
    },
    {
      step: 5,
      title: 'GSTIN Registered',
      desc: 'Government tax authorities process the file and approve your 15-digit GSTIN.',
    },
    {
      step: 6,
      title: 'Certificate Sent to You',
      desc: 'Your official GST Registration Certificate (Form GST REG-06) is emailed directly to your inbox.',
    },
  ],

  // Who Should Register - Data table / Stacked cards
  whoShouldRegister: [
    {
      category: 'Goods Suppliers (Normal States)',
      threshold: 'Annual turnover exceeding ₹40 Lakhs',
      timeline: 'Within 30 days of crossing limit',
      mandatory: true,
      note: 'Applicable to traders and manufacturers operating in standard non-exempt states.',
    },
    {
      category: 'Service Providers (Normal States)',
      threshold: 'Annual turnover exceeding ₹20 Lakhs',
      timeline: 'Within 30 days of crossing limit',
      mandatory: true,
      note: 'Applies to freelancers, consultants, software engineers, and agencies.',
    },
    {
      category: 'Special Category States',
      threshold: 'Annual turnover exceeding ₹10 Lakhs',
      timeline: 'Within 30 days of crossing limit',
      mandatory: true,
      note: 'Applicable in Manipur, Mizoram, Nagaland, and Tripura.',
    },
    {
      category: 'E-Commerce Sellers',
      threshold: 'Mandatory from ₹0 (First Sale)',
      timeline: 'Prior to listing on marketplace',
      mandatory: true,
      note: 'Compulsory for selling products on Amazon, Flipkart, Meesho, Myntra, etc.',
    },
    {
      category: 'Inter-State Suppliers',
      threshold: 'Mandatory from ₹0 (Any Inter-State Sale)',
      timeline: 'Before dispatching interstate goods',
      mandatory: true,
      note: 'Supplying goods from one Indian state/UT to another requires mandatory GSTIN.',
    },
    {
      category: 'Casual Taxable Persons',
      threshold: 'Mandatory from ₹0',
      timeline: 'At least 5 days prior to business commencement',
      mandatory: true,
      note: 'Persons organizing temporary trade fairs or exhibitions in another state.',
    },
    {
      category: 'Non-Resident Taxable Persons',
      threshold: 'Mandatory from ₹0',
      timeline: 'At least 5 days prior to business commencement',
      mandatory: true,
      note: 'Foreign business operators supplying goods or services to Indian customers.',
    },
  ],

  // 8 Mandatory Documents
  documents: [
    {
      id: 'pan',
      title: 'PAN of Applicant',
      desc: 'PAN card of the business proprietor, partnership firm, LLP, or private limited company.',
    },
    {
      id: 'aadhaar',
      title: 'Aadhaar Card',
      desc: 'Aadhaar of proprietor, managing partners, or directors for biometric authentication.',
    },
    {
      id: 'incorporation',
      title: 'Business Registration Proof',
      desc: 'Partnership deed, LLP agreement, or Certificate of Incorporation (COI) along with MOA & AOA.',
    },
    {
      id: 'promoters-id',
      title: 'ID, Address & Photo',
      desc: 'Passport-size photographs and valid photo identity proof of all directors or designated partners.',
    },
    {
      id: 'address-proof',
      title: 'Business Address Proof',
      desc: 'Latest electricity bill, landline bill, property tax receipt, or municipal khata under 2 months old.',
    },
    {
      id: 'bank-proof',
      title: 'Bank Statement / Cheque',
      desc: 'Cancelled cheque leaf or bank statement displaying the entity name, account number, and IFSC code.',
    },
    {
      id: 'auth-letter',
      title: 'Authorization Letter',
      desc: 'Letter of authorization or Board Resolution authorizing the signatory to file and sign GST forms.',
    },
    {
      id: 'rent-noc',
      title: 'Rent Agreement & NOC',
      desc: 'Registered rent agreement and No Objection Certificate (NOC) signed by premise owner if rented.',
    },
  ],

  // 4 Types of GST Registration
  registrationTypes: [
    {
      title: 'Regular Taxpayer',
      badge: 'Most Common',
      desc: 'Standard GST registration for business entities, traders, and service providers operating across India.',
      features: ['Full Input Tax Credit access', 'Monthly or quarterly filing options', 'No maximum turnover cap'],
    },
    {
      title: 'Casual Taxable Person',
      badge: 'Temporary / Exhibition',
      desc: 'Temporary registration with 90-day validity for seasonal businesses or out-of-state trade fairs.',
      features: ['Valid for 90 days (extendable)', 'Advance tax deposit required', 'Allows legal temporary supply'],
    },
    {
      title: 'Non-Resident Taxable Person',
      badge: 'Overseas Entities',
      desc: 'For foreign individuals or companies without a permanent physical establishment in India.',
      features: ['Appoints authorized Indian representative', 'Valid for short-term trade', 'Advance tax estimation'],
    },
    {
      title: 'E-Commerce Operator',
      badge: 'Online Platforms',
      desc: 'Special registration for digital platforms and aggregators collecting Tax Collected at Source (TCS).',
      features: ['Mandatory TCS compliance', 'Inter-state marketplace operations', 'Separate operator registration'],
    },
  ],

  // 6 Core Business Benefits
  benefits: [
    {
      title: 'Legal Business Recognition',
      desc: 'Obtain an authentic 15-digit GSTIN verified on the national GST portal, establishing trust with corporate vendors.',
    },
    {
      title: 'Seamless Input Tax Credit (ITC)',
      desc: 'Eliminate cascading taxes. Offset taxes paid on purchase of raw materials and operational services against output tax.',
    },
    {
      title: 'Unrestricted Inter-State Sales',
      desc: 'Expand and dispatch goods across all 28 states and 8 union territories legally without border inspection friction.',
    },
    {
      title: 'Sell on Amazon, Flipkart & Meesho',
      desc: 'Mandatory statutory credential required to register as an approved commercial seller on major e-commerce platforms.',
    },
    {
      title: 'Composition Scheme Eligibility',
      desc: 'Eligible small businesses up to ₹1.5 Crore turnover can pay a low flat tax rate with simplified quarterly returns.',
    },
    {
      title: 'Digital & Automated Compliance',
      desc: 'Generate electronic E-Way bills, claim automated export duty drawbacks, and manage books seamlessly online.',
    },
  ],

  // 12 Accessible FAQs (Accurate legal terminology: GSTIN vs GSTN)
  faqs: [
    {
      question: 'What is the exact difference between GSTIN and GSTN?',
      answer:
        'GSTIN (Goods and Services Tax Identification Number) is the unique 15-digit state-wise alphanumeric tax registration number assigned to your business. GSTN (Goods and Services Tax Network), on the other hand, is the non-government, non-profit technological company and portal infrastructure (gst.gov.in) that manages the digital platform for filing returns, payments, and registrations.',
    },
    {
      question: 'How much time does it take to get a GST registration number?',
      answer:
        'Once your application is submitted with complete and verified documentation, the government tax department typically issues the GSTIN within 3 to 7 working days, subject to jurisdictional officer verification and biometric Aadhaar authentication. If the department raises a clarification query (Form GST REG-03), an additional 3-5 days may be required upon submitting our response.',
    },
    {
      question: 'Is my physical presence required at any government tax office?',
      answer:
        'No, physical presence is not required. The complete GST registration process with NK Associates is 100% digital and paperless. All document reviews, application preparation, portal submission, and Aadhaar OTP authentication are executed electronically.',
    },
    {
      question: 'What are the mandatory turnover thresholds for GST registration in India?',
      answer:
        'For businesses exclusively supplying goods in standard states, registration is mandatory when annual turnover exceeds ₹40 Lakhs (₹20 Lakhs in special category states). For service providers, the mandatory limit is ₹20 Lakhs (₹10 Lakhs in special category states). However, for interstate sales or e-commerce listing, registration is mandatory regardless of turnover.',
    },
    {
      question: 'Is GST registration mandatory for selling on Amazon, Flipkart, or Meesho?',
      answer:
        'Yes. Under Section 24 of the CGST Act, any person supplying goods through an electronic commerce operator must mandatorily register for GST from their very first sale, irrespective of their annual aggregate turnover.',
    },
    {
      question: 'Can I obtain a GST registration for a home office or rented residential address?',
      answer:
        'Yes. You can legally register your residential or rented property as the principal place of business. You only need a recent electricity bill or municipal tax receipt for the premises, along with a signed No Objection Certificate (NOC) and rent agreement from the property owner.',
    },
    {
      question: 'What is an ARN and TRN generated during the application process?',
      answer:
        'TRN (Temporary Reference Number) is a 15-digit temporary number generated when you initially begin filing Form GST REG-01. ARN (Application Reference Number) is the official receipt number generated immediately after successful submission and OTP verification of your application. You can track your real-time approval status on the GST portal using your ARN.',
    },
    {
      question: 'Are there any hidden government department fees for GST registration?',
      answer:
        'The Government of India does not levy any statutory government application fee for new GST registration on the GST portal. The charges displayed in our packages represent professional consulting fees for documentation audit, HSN/SAC code classification, legal application drafting, and department follow-up by our Chartered Accountants.',
    },
    {
      question: 'Can a freelancer or salaried individual apply for voluntary GST registration?',
      answer:
        'Yes, any individual or freelancer can voluntarily register under Section 25(3) of the CGST Act even if their turnover is below the statutory threshold. Voluntary registration enables you to issue valid GST tax invoices, claim Input Tax Credit on business equipment, and work with overseas corporate clients.',
    },
    {
      question: 'What happens if the GST officer issues a clarification notice (Form GST REG-03)?',
      answer:
        'If the jurisdictional tax officer requires additional premise verification or document clarity, they issue a clarification notice (Form GST REG-03). Under all NK Associates packages, our senior CAs draft and submit a comprehensive legal reply (Form GST REG-04) at zero additional charge to secure your approval.',
    },
    {
      question: 'What is the Composition Scheme under GST?',
      answer:
        'The Composition Scheme is an optional simplified tax mechanism designed for small traders, manufacturers, and restaurants with annual turnover up to ₹1.5 Crore (₹75 Lakhs in special states). Under this scheme, businesses pay a flat tax rate (1% to 5%) without maintaining elaborate purchase ledgers and file only one simplified quarterly return (CMP-08) and one annual return (GSTR-4).',
    },
    {
      question: 'When do I need to start filing GST returns after receiving my GSTIN?',
      answer:
        'Your statutory compliance begins immediately from the month in which your registration certificate is issued. Regular taxpayers must file monthly GSTR-1 and GSTR-3B returns (or quarterly under the QRMP scheme). Even if you have zero business activity in a month, filing a "Nil Return" is mandatory to prevent automatic late fee penalties.',
    },
  ],

  // Complete List of 28 Indian States & 8 Union Territories for Form Dropdown
  states: [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi (NCT)',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ],
};
