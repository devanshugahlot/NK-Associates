import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  UserCheck,
  Scale
} from 'lucide-react';
import PageTransition from '../components/PageTransition';
import SEO from '../components/SEO';
import { contactInfo } from '../data/contactInfo';

const PrivacyPolicy = () => {
  return (
    <PageTransition>
      <SEO
        title="Privacy Policy | NK Associates Private Limited"
        description="Official Privacy Policy of NK Associates Private Limited (nkassociate.in). Learn how we collect, process, store and safeguard your tax, financial and personal information."
        keywords="NK Associates privacy policy, data security chartered accountant, client data protection Jaipur CA, tax data privacy nkassociate.in"
        canonicalPath="/privacy"
      />

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-14 lg:py-20 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-brand-sky/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-brand-navyLight/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/90 text-brand-sky text-xs font-semibold uppercase tracking-wider border border-slate-700/70 shadow-sm"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-brand-sky" />
            <span>Legal & Data Protection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
          >
            NK Associates Private Limited | Website: <a href="https://nkassociate.in" className="text-brand-sky hover:underline font-semibold">nkassociate.in</a>
          </motion.p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
              <Calendar className="w-3.5 h-3.5 text-brand-sky" />
              Effective Date: 18 September 2026
            </span>
            <span className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Last Updated: 18 September 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-8">
            <Link to="/" className="hover:text-brand-sky transition-colors font-medium">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-navy font-semibold">Privacy Policy</span>
          </nav>

          {/* Intro Notice Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-10 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-light flex items-center justify-center shrink-0 mt-0.5">
                <Lock className="w-5 h-5 text-brand-sky" />
              </div>
              <div className="space-y-3">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  At <strong>NK Associates Private Limited</strong>, we respect your privacy and are committed to protecting the personal and business information you share with us. This Privacy Policy explains how we collect, use, store, process and protect information when you visit our website, communicate with us, submit an enquiry, purchase our services or otherwise interact with us.
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  By accessing or using our website and services, you acknowledge that you have read and understood this Privacy Policy.
                </p>
              </div>
            </div>
          </div>

          {/* Policy Sections Container */}
          <div className="space-y-8 text-slate-700">

            {/* 1. About NK Associates */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">1</span>
                <span>About NK Associates</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                NK Associates Private Limited is a professional tax, accounting and business compliance service provider offering services including Company Registration, LLP Registration, GST Registration, GST Return Filing, Income Tax Return Filing, TDS/TCS Compliance, ROC/MCA Compliance, Company Annual Compliance, Accounting and Bookkeeping, Trademark Registration, MSME Registration, FSSAI Registration, Tax and Compliance Advisory and other business, taxation and regulatory services.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                For the purposes of this Privacy Policy, <strong>"NK Associates"</strong>, <strong>"we"</strong>, <strong>"us"</strong> or <strong>"our"</strong> refers to NK Associates Private Limited. <strong>"User"</strong>, <strong>"you"</strong> or <strong>"your"</strong> means any person who visits our website, contacts us, submits information, purchases our services or otherwise interacts with us.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">2</span>
                <span>Information We Collect</span>
              </h2>

              <div className="space-y-3 pl-2 border-l-2 border-slate-200 ml-1">
                <div>
                  <h3 className="text-sm font-bold text-brand-navy">2.1 Personal and Contact Information</h3>
                  <p className="text-xs text-slate-600 mt-1 mb-2">Depending on the service you request, we may collect:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    <li className="flex items-center gap-2">• Full name</li>
                    <li className="flex items-center gap-2">• Mobile number</li>
                    <li className="flex items-center gap-2">• Email address</li>
                    <li className="flex items-center gap-2">• Residential / business address</li>
                    <li className="flex items-center gap-2">• City, state and PIN code</li>
                    <li className="flex items-center gap-2">• Date of birth</li>
                    <li className="flex items-center gap-2">• Communication preferences</li>
                    <li className="flex items-center gap-2">• Business name and designation</li>
                    <li className="flex items-center gap-2">• Other contact information provided by you</li>
                  </ul>
                </div>

                <div className="pt-3">
                  <h3 className="text-sm font-bold text-brand-navy">2.2 Business and Compliance Information</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    We may collect information relating to you or your business, including CIN, LLPIN, GSTIN, PAN, TAN, DIN, Udyam/MSME details, registered office details, directors/partners/promoters information, business activity, turnover, financial information, accounting information and tax/compliance information.
                  </p>
                </div>

                <div className="pt-3">
                  <h3 className="text-sm font-bold text-brand-navy">2.3 Documents and Financial Information</h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Depending on the service, you may provide PAN Card, Aadhaar Card, passport or other identity documents, address proof, bank statements, cancelled cheque, Form 16, Form 16A, Form 26AS, AIS/TIS information, income and expense information, invoices and bills, GST records, TDS/TCS information, financial statements, books of accounts, company and ROC/MCA documents, Digital Signature Certificate-related information and other documents required for the requested service.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Information Collected Automatically */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">3</span>
                <span>Information Collected Automatically</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                When you visit our website, certain technical information may automatically be collected, including IP address, browser type, device type, operating system, pages visited, date and time of visit, referring website, website interaction information, approximate location derived from technical information, cookies and similar technologies.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                This information may be used to maintain website security, understand website usage, improve our website and services, and analyse marketing performance.
              </p>
            </div>

            {/* 4. Cookies and Similar Technologies */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">4</span>
                <span>Cookies and Similar Technologies</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Our website may use cookies, pixels, analytics tools and similar technologies.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Cookies may be used to keep the website functioning properly, remember user preferences, understand website usage, measure advertising performance, improve website functionality, provide relevant communications and detect suspicious or fraudulent activity.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                You may change your browser settings to block or delete cookies. However, certain website functionality may not work properly if cookies are disabled. Where required by applicable law, we will obtain appropriate consent before using non-essential cookies or similar technologies.
              </p>
            </div>

            {/* 5. How We Use Your Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">5</span>
                <span>How We Use Your Information</span>
              </h2>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <p><strong>Service Delivery:</strong> We may use your information to provide requested services; prepare and submit tax and compliance filings; prepare documents and applications; communicate with government or regulatory authorities where authorised; process GST, income tax, TDS, ROC/MCA and other compliance requirements; provide accounting and advisory services; and respond to service requests and enquiries.</p>
                <p><strong>Communication:</strong> We may contact you regarding your enquiry, provide service updates, request missing information/documents, send compliance reminders, communicate payment and invoice information and respond to customer support requests.</p>
                <p><strong>Payments and Billing:</strong> We may use information to process payments, generate invoices, maintain transaction records, reconcile payments and comply with applicable tax and accounting requirements.</p>
                <p><strong>Website and Business Improvement:</strong> We may use information to improve our website and services, analyse website usage, monitor website performance, detect and prevent fraud or misuse, and develop new services and features.</p>
                <p><strong>Marketing:</strong> Subject to applicable law and your communication preferences, we may send service updates, tax and compliance reminders, educational information, offers, promotions, newsletters and other information relating to our services. You may opt out of promotional communications at any time.</p>
              </div>
            </div>

            {/* 6. Processing of Tax and Financial Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">6</span>
                <span>Processing of Tax and Financial Information</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Because NK Associates provides taxation, accounting and compliance services, some services may require identity-related and financial information. Such information may include PAN, Aadhaar, bank details, income information, tax information, financial statements, invoices, Form 16, Form 26AS, AIS/TIS and other documents.
              </p>
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm text-emerald-900 font-medium">
                We use such information primarily for providing the service requested by you, fulfilling legal or regulatory obligations, maintaining records and providing related customer support. <strong>We do not sell your tax, financial or identity information as a commercial product.</strong>
              </div>
            </div>

            {/* 7. Sharing of Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">7</span>
                <span>Sharing of Information</span>
              </h2>
              <p className="text-sm text-slate-600">
                We may share information where reasonably necessary for providing services or complying with legal obligations:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 pl-2">
                <li>
                  <strong>Government and Regulatory Authorities:</strong> Where necessary or authorised, information may be submitted to or shared with the Income Tax Department, GST authorities, Ministry of Corporate Affairs, Registrar of Companies, EPFO/ESIC, Trademark authorities, FSSAI or other licensing authorities and other government or regulatory authorities.
                </li>
                <li>
                  <strong>Professional Service Providers:</strong> Where necessary for providing services, information may be accessed by authorised Chartered Accountants, Company Secretaries, lawyers, tax professionals, accountants, compliance professionals and other authorised professionals working with or for NK Associates.
                </li>
                <li>
                  <strong>Technology and Service Providers:</strong> We may use third-party providers for website hosting, cloud storage, CRM, email, WhatsApp/business communication, payment processing, analytics, customer support, document management, cybersecurity, software and automation. Such providers may process information on our behalf for the relevant business purpose.
                </li>
                <li>
                  <strong>Legal and Security Requirements:</strong> We may disclose information where reasonably necessary to comply with applicable law, respond to lawful government requests, protect our rights or property, prevent fraud or unlawful activity, protect users or other persons, investigate security incidents or enforce our agreements.
                </li>
              </ul>
            </div>

            {/* 8. Third-Party Services and Links */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">8</span>
                <span>Third-Party Services and Links</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Our website may contain links to third-party websites, applications or services, including government portals, payment gateways, social media platforms, communication services or other external websites. NK Associates does not control the privacy practices of third-party websites. You should review the privacy policy of any third-party service before providing personal information to it.
              </p>
            </div>

            {/* 9. Payment Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">9</span>
                <span>Payment Information</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Payments may be processed through third-party payment gateways. Where payment services are provided by a third-party payment processor, payment information may be processed directly by that provider according to its own privacy and security policies. NK Associates generally does not require you to provide your complete card, banking or payment credentials through ordinary website enquiry forms.
              </p>
            </div>

            {/* 10. WhatsApp, Telephone and Electronic Communication */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">10</span>
                <span>WhatsApp, Telephone and Electronic Communication</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We may communicate with you through telephone calls, WhatsApp, SMS, email, website chat and other electronic communication channels.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                If you contact us through WhatsApp or another third-party communication platform, the information may also be subject to that platform's privacy policy and terms. We may retain communication records where reasonably necessary for customer service, service delivery, compliance, dispute resolution, quality control or legal purposes.
              </p>
            </div>

            {/* 11. Data Security */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">11</span>
                <span>Data Security</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We take reasonable technical and organisational measures designed to protect personal information against unauthorised access, unauthorised disclosure, loss, misuse, alteration, destruction and accidental disclosure.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Depending on the nature of the information and our technology environment, security measures may include access controls, authentication mechanisms, secure transmission, restricted access and other reasonable safeguards. However, no electronic transmission or storage system can be guaranteed to be completely secure.
              </p>
            </div>

            {/* 12. Data Retention */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">12</span>
                <span>Data Retention</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We retain personal information only for as long as reasonably necessary for providing requested services, maintaining business and accounting records, complying with tax, corporate and other legal obligations, resolving disputes, preventing fraud and misuse, maintaining professional records, enforcing agreements and other legitimate business purposes.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Different categories of information may be retained for different periods depending on applicable legal and business requirements. When information is no longer required, we may securely delete, anonymise or otherwise dispose of it, subject to applicable legal obligations.
              </p>
            </div>

            {/* 13. Your Rights */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">13</span>
                <span>Your Rights</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Subject to applicable law, you may have rights relating to your personal data, including the ability to request information about personal data held by us, request correction of inaccurate or incomplete information, request deletion/erasure where legally applicable, withdraw consent where processing is based on consent, request information regarding processing of your personal data and raise a privacy-related complaint or grievance.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Some requests may be subject to legal, regulatory, contractual or professional record-retention requirements. To exercise applicable rights, you may contact us using the details below.
              </p>
            </div>

            {/* 14. Withdrawal of Consent */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">14</span>
                <span>Withdrawal of Consent</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Where we process personal data based on your consent, you may withdraw your consent by contacting us. Withdrawal of consent will not affect processing that was already lawfully carried out before withdrawal.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                Withdrawal may also affect our ability to provide certain services where the information is necessary to perform that service or comply with legal obligations.
              </p>
            </div>

            {/* 15. Accuracy of Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">15</span>
                <span>Accuracy of Information</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                You are responsible for providing accurate, complete and up-to-date information and documents. Where you provide information relating to another person, you should ensure that you have the necessary authority or permission to provide that information to us.
              </p>
              <p className="text-sm leading-relaxed text-slate-600">
                NK Associates may rely on information and documents provided by you for preparing filings, applications, returns and other services.
              </p>
            </div>

            {/* 16. Children's Privacy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">16</span>
                <span>Children's Privacy</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                Our services are intended primarily for businesses, individuals and persons legally capable of entering into arrangements for professional services. We do not knowingly seek to collect personal information from children where such collection is not permitted by applicable law. If you believe that information relating to a child has been provided to us improperly, please contact us.
              </p>
            </div>

            {/* 17. Data Breach and Security Incidents */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">17</span>
                <span>Data Breach and Security Incidents</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                If we become aware of a personal data breach that requires notification under applicable law, we will take appropriate steps as required by applicable legal and regulatory requirements. This may include investigating the incident, taking measures to contain and remediate it, and making notifications where legally required.
              </p>
            </div>

            {/* 18. Changes to This Privacy Policy */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">18</span>
                <span>Changes to This Privacy Policy</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                We may update this Privacy Policy from time to time to reflect changes in our services, technology, applicable laws, regulatory requirements or data-processing practices. The updated version will be published on this page with a revised Last Updated date. We encourage you to review this page periodically.
              </p>
            </div>

            {/* 19. Grievance and Privacy Contact */}
            <div className="bg-gradient-to-br from-brand-navy to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-brand-sky text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Section 19</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                19. Grievance and Privacy Contact
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                If you have questions, concerns or complaints regarding this Privacy Policy or the processing of your personal information, please contact us. We will review and respond to privacy-related requests in accordance with applicable law.
              </p>
              
              <div className="bg-white/10 rounded-2xl p-5 border border-white/15 space-y-3 text-xs sm:text-sm">
                <p className="font-bold text-white text-base">NK Associates Private Limited</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 pt-2 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Website: <a href="https://nkassociate.in" className="text-brand-sky hover:underline font-semibold">nkassociate.in</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Email: <a href="mailto:nkassociates2024@gmail.com" className="text-brand-sky hover:underline font-semibold">nkassociates2024@gmail.com</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Phone: <a href="tel:+917568820015" className="text-brand-sky hover:underline font-semibold">7568820015</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-sky shrink-0" />
                    <span>Location: Jaipur, Rajasthan, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 20. Governing Law */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">20</span>
                <span>Governing Law</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                This Privacy Policy shall be governed by the applicable laws of India. Any dispute relating to privacy or processing of personal information shall be dealt with in accordance with applicable Indian law and the applicable contractual terms governing the relevant service.
              </p>
            </div>

            {/* 21. Acceptance */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-3">
              <h2 className="text-lg sm:text-xl font-bold text-brand-navy flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-brand-light text-brand-sky flex items-center justify-center text-xs font-extrabold">21</span>
                <span>Acceptance</span>
              </h2>
              <p className="text-sm leading-relaxed text-slate-600">
                By accessing our website, submitting information to us or using our services, you acknowledge that you have read this Privacy Policy and understand how your information may be collected and processed as described above.
              </p>
              <p className="text-xs text-slate-500 italic pt-2">
                NK Associates Private Limited reserves the right to update this Privacy Policy from time to time in accordance with applicable law and business requirements.
              </p>
            </div>

          </div>

        </div>
      </section>
    </PageTransition>
  );
};

export default PrivacyPolicy;
