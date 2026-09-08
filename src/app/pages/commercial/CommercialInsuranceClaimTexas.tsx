import React from 'react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const CommercialInsuranceClaimTexas: React.FC = () => {
  const faqItems = [
    {
      question: 'How long do I have to file a commercial roof insurance claim in Texas after a hail storm?',
      answer: 'Texas law provides a two-year statute of limitations from the storm date. However, your individual policy may require notification within a shorter window. Review your policy terms and file promptly.'
    },
    {
      question: 'Does my commercial insurance cover TPO or EPDM roof replacement after hail?',
      answer: 'Most commercial property policies cover sudden storm damage to roofing systems including TPO and EPDM membranes. Coverage depends on your specific policy terms, your deductible type, and whether damage is classified as sudden loss versus gradual deterioration.'
    },
    {
      question: 'How much is a typical commercial wind and hail deductible in Texas?',
      answer: 'Commercial wind and hail deductibles in Texas commonly range from 1–5% of your property\'s total insured value — separate from your standard deductible. On a $1 million insured property, a 2% deductible equals $20,000.'
    },
    {
      question: 'What if my insurance company underpays my commercial roof claim?',
      answer: 'You can invoke the Appraisal clause in most Texas commercial policies, allowing both parties to select an independent appraiser. This can result in a binding award without litigation.'
    },
    {
      question: 'Does Ultra Roofing help with the insurance claims process?',
      answer: 'Yes. Ultra Roofing provides free post-storm commercial roof inspections, written damage reports, and works directly with your insurance adjuster on scope and documentation across the Dallas-Fort Worth area.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Document the Damage Immediately',
      details: [
        'Begin documentation within 24–72 hours of the storm',
        'Photograph and videotape all visible damage — roof, HVAC units, vents, gutters, flashing, and downspouts',
        'Record the storm date and cross-reference NOAA weather reports',
        'Do not repair damage before the insurance adjuster inspects',
        'Emergency tarping is acceptable to prevent interior damage'
      ]
    },
    {
      number: 2,
      title: 'Get a Professional Commercial Roof Inspection',
      details: [
        'Schedule an inspection BEFORE contacting your insurance company',
        'Hire an independent contractor to assess damage',
        'Request a written damage report with measurements and photographic documentation',
        'Ultra Roofing provides free post-storm commercial roof inspections with detailed written findings'
      ]
    },
    {
      number: 3,
      title: 'Review Your Policy',
      details: [
        'Identify your wind and hail deductible — typically 1–5% of insured value',
        'Confirm your policy term and statute of limitations (Texas: 2 years)',
        'Check for Ordinance & Law coverage (covers code upgrades)',
        'Understand the difference between RCV (Replacement Cost Value) and ACV (Actual Cash Value)'
      ]
    },
    {
      number: 4,
      title: 'File Your Claim Promptly',
      details: [
        'Texas Insurance Code 542 sets strict timelines: insurers have 15 days to acknowledge, 15 days to begin investigation, and 15 business days to accept or deny',
        'Delayed acknowledgment or investigation triggers 18% interest plus attorney fees',
        'File your claim in writing with attached photos and inspection reports'
      ]
    },
    {
      number: 5,
      title: 'Meet the Adjuster on Site',
      details: [
        'Be present (or have your contractor present) when the adjuster inspects the roof',
        'Desk adjusters who never physically inspect the roof are a known issue — insist on a site visit',
        'Provide copies of your professional inspection report',
        'If you disagree with the adjuster\'s damage assessment, invoke the Appraisal clause'
      ]
    },
    {
      number: 6,
      title: 'Select Your Contractor Carefully',
      details: [
        'Verify the contractor holds a valid Texas roofing license (TREC number)',
        'Confirm general liability insurance and workers\' compensation coverage',
        'Do not sign Assignment of Benefits (AOB) agreements that give the contractor direct claim authority',
        'Obtain an itemized written scope of work that matches your insurance estimate'
      ]
    }
  ];

  return (
    <>
      <SEO
        title="How to File a Commercial Roof Insurance Claim in Texas | Ultra Roofing DFW"
        description="Step-by-step guide to filing a commercial roof insurance claim in Texas after hail or storm damage. Ultra Roofing serves Dallas-Fort Worth property owners through the entire claims process. Free inspections available."
        keywords="commercial roof insurance claim Texas, hail damage commercial roof claim DFW, storm damage roofing insurance Fort Worth, TPO roof insurance claim Dallas, commercial property insurance claim Texas, roof insurance adjuster DFW, hail damage documentation Texas, insurance claim roofing contractor Irving TX"
        canonicalUrl="https://ultraroofingtx.net/commercial-roof-insurance-claim-texas"
        ogTitle="How to File a Commercial Roof Insurance Claim in Texas | Ultra Roofing DFW"
      />
      <SchemaMarkup type="faq" faqItems={faqItems} />

      <div className="min-h-screen bg-white">
        <div
          className="h-[400px] bg-cover bg-center relative flex items-center justify-center"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50" />
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              How to File a Commercial Roof Insurance Claim in Texas After Hail or Storm Damage
            </h1>
          </div>
        </div>

        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 mb-6">
              Texas is the most hail-active state in the nation, and the Dallas-Fort Worth metropolitan area sits at the center of severe storm and hail risk. When a commercial roof is damaged by hail or wind, your response in the first few hours and days can mean the difference between a claim paid in full and one that's denied or underpaid.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Navigating the insurance claims process correctly is critical. Texas has unique statutes of limitation, adjuster regulations, and policy language that protect building owners—but only if you understand your rights and follow the proper steps.
            </p>
            <p className="text-lg text-gray-700">
              Ultra Roofing has worked with hundreds of commercial property owners across Tarrant and Dallas counties, guiding them through post-storm inspections, insurance documentation, and successful claim resolutions. In this comprehensive guide, we walk you through the six essential steps to file a commercial roof insurance claim in Texas.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1C2A39] mb-12 text-center">
              6-Step Guide to Filing Your Commercial Roof Claim
            </h2>
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-[#1C2A39] mb-4">
                      {step.title}
                    </h3>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <CheckCircle size={20} className="text-[#FFC107] mt-1 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#FFC107]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-[#1C2A39] mb-4">
              Get Your Free Post-Storm Commercial Roof Inspection
            </h2>
            <p className="text-lg text-[#1C2A39] mb-8">
              After a storm, Ultra Roofing responds quickly with comprehensive inspections and written damage documentation to support your insurance claim.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18174447472"
                className="inline-flex items-center justify-center gap-2 bg-[#1C2A39] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all"
              >
                <Phone size={20} />
                Call Us Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1C2A39] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all"
              >
                Request Inspection <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#1C2A39] mb-12">
              Frequently Asked Questions — Commercial Roof Insurance Claims in Texas
            </h2>
            <div className="space-y-8">
              {faqItems.map((item, idx) => (
                <div key={idx} className="bg-[#F5F5F5] p-6 rounded-lg">
                  <h3 className="font-bold text-lg text-[#1C2A39] mb-3">
                    Q: {item.question}
                  </h3>
                  <p className="text-gray-700">
                    A: {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Why Choose Ultra Roofing for Your Insurance Claim?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="mx-auto mb-4 text-[#FFC107]" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">Experienced Claim Support</h3>
                <p className="text-gray-300">
                  Over 20 years serving DFW commercial property owners through post-storm inspections and claims documentation.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="mx-auto mb-4 text-[#FFC107]" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">Fast Professional Inspections</h3>
                <p className="text-gray-300">
                  Free post-storm roof inspections with written damage reports and photographic documentation ready within 48 hours.
                </p>
              </div>
              <div className="text-center">
                <Phone className="mx-auto mb-4 text-[#FFC107]" size={40} />
                <h3 className="text-xl font-bold text-white mb-3">Direct Adjuster Coordination</h3>
                <p className="text-gray-300">
                  We work directly with your insurance adjuster to ensure your scope is accurate and your claim is properly documented.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#1C2A39] mb-8">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                to="/commercial-roofing-systems-dfw"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all border-l-4 border-[#FFC107]"
              >
                <h3 className="font-bold text-[#1C2A39] mb-2">Commercial Roofing Systems DFW</h3>
                <p className="text-gray-700 text-sm mb-3">Compare TPO, EPDM, and metal roofing systems for your commercial property.</p>
                <span className="inline-flex items-center text-[#FFC107] font-bold text-sm">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
              <Link
                to="/dfw-hail-season-commercial-roofing-guide"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all border-l-4 border-[#FFC107]"
              >
                <h3 className="font-bold text-[#1C2A39] mb-2">DFW Hail Season Guide</h3>
                <p className="text-gray-700 text-sm mb-3">Prepare your commercial roof for severe weather and hail season in Dallas-Fort Worth.</p>
                <span className="inline-flex items-center text-[#FFC107] font-bold text-sm">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
              <Link
                to="/contact"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all border-l-4 border-[#FFC107]"
              >
                <h3 className="font-bold text-[#1C2A39] mb-2">Contact Ultra Roofing</h3>
                <p className="text-gray-700 text-sm mb-3">Request a free post-storm inspection or roofing assessment today.</p>
                <span className="inline-flex items-center text-[#FFC107] font-bold text-sm">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommercialInsuranceClaimTexas;
