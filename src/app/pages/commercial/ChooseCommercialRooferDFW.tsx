import React from 'react';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Shield, Award, Calculator, ArrowRight } from 'lucide-react';

const ChooseCommercialRooferDFW: React.FC = () => {
  const faqItems = [
    {
      question: 'How do I verify a roofing contractor\'s license in Texas?',
      answer: 'Search the contractor\'s name on the Texas Department of Licensing and Regulation (TDLR) website at tdlr.texas.gov. A valid Texas roofing registration should appear. Do not hire any contractor who cannot produce a current TDLR registration.'
    },
    {
      question: 'What questions should I ask a commercial roofing contractor before hiring?',
      answer: 'Key questions: Are you licensed in Texas? Can I see your current Certificate of Insurance? What manufacturer certifications do you hold? Can you provide local commercial references? Does your bid include itemized scope with system specs and warranty terms?'
    },
    {
      question: 'What is an Assignment of Benefits agreement and should I sign one?',
      answer: 'An Assignment of Benefits (AOB) transfers your insurance claim rights directly to the contractor. This removes your control over the claims process. Ultra Roofing does not require AOB agreements — we work with your insurer on your behalf while you retain full control.'
    },
    {
      question: 'How do I know if a roofing contractor is storm chasing vs. locally based?',
      answer: 'Ask for a local Texas business address, TDLR registration, and references on completed commercial projects in the DFW area. A legitimate local contractor has verifiable references and no pressure to sign before the adjuster inspects.'
    },
    {
      question: 'Is Ultra Roofing a local DFW commercial roofing contractor?',
      answer: 'Yes. Ultra Roofing is based in Irving, TX and serves commercial property owners across the entire Dallas-Fort Worth metroplex — including Fort Worth, Arlington, Grand Prairie, Mansfield, North Richland Hills, Keller, Grapevine, Colleyville, and Southlake.'
    }
  ];

  return (
    <>
      <SEO
        title="How to Choose a Commercial Roofing Contractor in DFW | Ultra Roofing Irving TX"
        description="7 things every DFW commercial property owner should verify before hiring a roofing contractor. Expert guide from Ultra Roofing, serving the Dallas-Fort Worth metroplex."
        keywords="how to choose commercial roofing contractor DFW, commercial roofing contractor Dallas Fort Worth, verify roofing contractor Texas, licensed roofing contractor Irving TX, commercial roofer credentials Texas, storm chaser warning DFW, roofing contractor insurance Texas, TDLR roofing license Texas"
        canonicalUrl="https://ultraroofingtx.net/how-to-choose-commercial-roofing-contractor-dfw"
      />
      <SchemaMarkup type="faq" faqItems={faqItems} />

      <section
        className="h-[400px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2A39]/90 to-[#1C2A39]/70 z-10" />
        <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            What to Look for in a Commercial Roofing Contractor in Dallas-Fort Worth: 7 Things Every Property Owner Should Verify
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 mb-6">
            After major DFW hail events, hundreds of contractors descend on the region—many from out of state with no local accountability. Storm chasers look identical to legitimate contractors in the first phone call. But the wrong hire costs far more than the bid difference; it can void manufacturer warranties, expose your property to liability, and leave you with a failed roof system and no recourse.
          </p>
          <p className="text-lg text-gray-700">
            This guide covers the seven things every commercial property owner should verify before hiring a roofing contractor in Dallas-Fort Worth.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-12 text-center">
            7 Things to Verify Before Hiring a Commercial Roofing Contractor
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] text-xl font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
                  Verify the Texas Roofing License
                </h3>
                <p className="text-lg text-gray-700">
                  Texas requires all roofing contractors to register with the Texas Department of Licensing and Regulation (TDLR). Before signing any contract, visit tdlr.texas.gov and search for the contractor's license. Verify the license is current and active. An unlicensed contractor provides no accountability and voids manufacturer warranties on materials. Ultra Roofing is fully licensed and registered with TDLR—your assurance of accountability.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] text-xl font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
                  Confirm General Liability and Workers' Compensation Insurance
                </h3>
                <p className="text-lg text-gray-700">
                  Request a Certificate of Insurance (COI) before any work begins. General liability coverage should be at least $1 million per occurrence. Workers' compensation insurance protects you: if a crew member is injured on your property and the contractor lacks workers' comp, your property liability insurance may be forced to cover the claim. Ultra Roofing carries full general liability and workers' compensation coverage.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] text-xl font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
                  Ask About Manufacturer Certifications
                </h3>
                <p className="text-lg text-gray-700">
                  Leading commercial roofing systems—GAF, Firestone, Carlisle, Versico—require certified contractor installation for the full warranty to be valid. Without certification, you receive material warranty but lose workmanship warranty, which covers labor defects. Most commercial roofing failures stem from installation defects, not material failure. Ultra Roofing holds certifications from all major manufacturers and ensures full warranty protection on every project.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] text-xl font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
                  Ask for Local References on Commercial Projects
                </h3>
                <p className="text-lg text-gray-700">
                  Residential experience does not equal commercial flat roof expertise. Ask for references on comparable DFW commercial projects—building type, system type, square footage. A contractor who has completed dozens of TPO projects in Dallas-Fort Worth understands local market pricing, building codes, and the nuances of working with local insurance adjusters in ways a generalist cannot. Request to visit completed projects if possible.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] text-xl font-bold">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
                  Get a Fully Itemized Written Scope
                </h3>
                <p className="text-lg text-gray-700">
                  Any commercial bid must include: system type and manufacturer, membrane thickness, insulation type and R-value, tear-off vs. overlay, flashing and penetration scope, warranty terms (years), and timeline. A single-line bid stating "New TPO roof—$60,000" is a red flag. You cannot verify quality, warranty, or scope without detailed line-item breakdowns. Ultra Roofing provides fully itemized bids for every commercial project.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] text-xl font-bold">
                  6
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
                  Watch for Post-Storm Red Flags
                </h3>
                <p className="text-lg text-gray-700">
                  Storm chasers often use high-pressure tactics: unsolicited door-knocking, pressure to sign contracts immediately, requesting Assignment of Benefits (AOB) agreements that transfer your insurance claim control to them, asking for deductible payment before the adjuster inspects, or disappearing after taking a deposit. Legitimate contractors wait for adjuster inspections, work transparently with insurers, and don't pressure signing. Ultra Roofing never uses AOB agreements and respects your control over all claim decisions.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#FFC107] text-[#1C2A39] text-xl font-bold">
                  7
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#1C2A39] mb-3">
                  Understand Repair → Restore → Replace Framework
                </h3>
                <p className="text-lg text-gray-700">
                  A qualified contractor presents options, not a default replacement recommendation. If a roof has partial hail damage, the most cost-effective path may be spot repair or a restoration coating—not full replacement. If every contractor you consult leads with full replacement, get a second opinion. Ultra Roofing always follows the Repair → Restore → Replace framework and recommends the most cost-effective solution that protects your asset and meets insurance coverage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-[#FFC107]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-6">
            Get a Free Commercial Roof Assessment from a Local DFW Expert
          </h2>
          <p className="text-lg text-[#1C2A39] mb-8">
            Ready to verify your roofing contractor? Ultra Roofing offers free commercial roof assessments across the Dallas-Fort Worth metroplex. Our team will walk you through the seven verification points and ensure you make an informed decision.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:8333567233"
              className="flex items-center bg-[#1C2A39] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#2A3A49] transition-colors shadow-lg"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (833) 356-7233
            </a>
            <Link
              to="/contact"
              className="flex items-center bg-white text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              <ArrowRight className="h-5 w-5 mr-2" />
              Schedule Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-[#1C2A39] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            About Ultra Roofing
          </h2>
          <div className="space-y-6 mb-8 text-lg">
            <p>
              Ultra Roofing is based in Irving, Texas, serving commercial property owners across the entire Dallas-Fort Worth metroplex. Since our founding, we have become the trusted commercial roofing partner for hundreds of businesses, property managers, and building owners.
            </p>
            <p>
              We are fully licensed with the Texas Department of Licensing and Regulation (TDLR) and carry comprehensive general liability and workers' compensation insurance. We hold manufacturer certifications from all major roofing systems—GAF, Firestone, Carlisle, Versico, and others—ensuring that every project receives full warranty coverage.
            </p>
            <p>
              <strong>Commercial Roofing Services:</strong> TPO single-ply membranes, EPDM rubber systems, standing seam metal roofing, modified bitumen, roof coatings, roof restoration, storm damage repair, hail damage inspection, and complete insurance claim assistance.
            </p>
            <p>
              <strong>Service Area:</strong> Fort Worth, Arlington, Grand Prairie, Mansfield, North Richland Hills, Keller, Grapevine, Colleyville, Southlake, Irving, Dallas, and all surrounding DFW communities.
            </p>
            <p>
              <strong>Our Commitment:</strong> We always follow the Repair → Restore → Replace framework and recommend the most cost-effective solution that protects your commercial asset and maximizes your insurance coverage. No pressure sales. No AOB agreements. Transparent pricing. Local accountability.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1C2A39] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-[#F5F5F5] p-8 rounded-lg">
                <h3 className="text-xl font-bold text-[#1C2A39] mb-4">
                  {item.question}
                </h3>
                <p className="text-gray-700 text-lg">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1C2A39] mb-8">
            Related Commercial Roofing Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/commercial-roofing-systems-dfw"
              className="bg-[#F5F5F5] p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-[#1C2A39] mb-2">
                Commercial Roofing Systems in DFW
              </h3>
              <p className="text-gray-700">
                Compare TPO, EPDM, and metal roofing systems for commercial properties.
              </p>
            </Link>
            <Link
              to="/commercial-roofing-cost-dfw"
              className="bg-[#F5F5F5] p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-[#1C2A39] mb-2">
                Commercial Roofing Cost Guide
              </h3>
              <p className="text-gray-700">
                Understand commercial roofing pricing and ROI for DFW properties.
              </p>
            </Link>
            <Link
              to="/contact"
              className="bg-[#F5F5F5] p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-[#1C2A39] mb-2">
                Request a Free Assessment
              </h3>
              <p className="text-gray-700">
                Get a free commercial roof assessment from Ultra Roofing today.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseCommercialRooferDFW;
