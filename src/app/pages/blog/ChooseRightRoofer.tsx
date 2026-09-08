import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../../components/SEO';

export default function ChooseRightRoofer() {
  return (
    <>
      <SEO
        title="How to Choose a Roofing Contractor in DFW | Avoid Storm Chasers | Ultra Roofing"
        description="Storm season brings unreliable contractors to your door. Learn exactly what to look for when hiring a roofing company in Dallas–Fort Worth — and the red flags to avoid."
        keywords="how to choose roofer DFW, avoid storm chaser roofers Texas, licensed roofing contractor Dallas, reputable roofer Fort Worth, roofing contractor red flags Texas, best roofing company DFW"
      />

      <article className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-[#FFC107] hover:text-[#FFD54F] mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <img
            loading="lazy"
            src="https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Professional roofer working on a home in DFW"
            className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
          />

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C2A39] mb-4">
            How to Choose a Roofing Contractor in DFW (And Avoid Getting Burned)
          </h1>

          <p className="text-gray-500 mb-8">Published May 1, 2026</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Every spring storm season, thousands of DFW homeowners need roof repairs. And every spring, a wave of out-of-state contractors descends on North Texas neighborhoods — knocking on doors, making big promises, and in many cases delivering poor workmanship or simply disappearing. Choosing the right roofing contractor is one of the most important decisions you'll make for your home. Here's exactly how to do it.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">
              1. Verify Texas Licensing and Insurance
            </h2>

            <p className="text-gray-700 mb-6">
              Texas doesn't require roofing contractors to hold a state-issued license for residential work (unlike electricians or plumbers), but legitimate contractors should still carry:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>General Liability Insurance</strong> — covers damage to your property if something goes wrong. Ask for a certificate of insurance (COI) naming your property.</li>
              <li className="mb-2"><strong>Workers' Compensation Insurance</strong> — protects you from liability if a worker is injured on your property. Without it, you could be personally liable.</li>
              <li className="mb-2"><strong>Business registration in Texas</strong> — verify the company is registered with the Texas Secretary of State or at minimum has a verifiable local business address.</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Never accept verbal assurances. Request certificates directly from the insurance carrier — not a copy handed to you by the contractor — or verify coverage by calling the insurer's number on the certificate.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">
              2. Check Reviews and Local Reputation
            </h2>

            <p className="text-gray-700 mb-6">
              A roofing company should have a documented history of completed projects in the DFW area. Look for:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Google reviews with responses from the business — look at the overall rating AND how they handle complaints</li>
              <li className="mb-2">BBB accreditation and complaint history</li>
              <li className="mb-2">Verified presence on platforms like Houzz, Angi, or the Better Business Bureau</li>
              <li className="mb-2">References from previous customers you can actually call — not just names on a sheet</li>
            </ul>

            <p className="text-gray-700 mb-6">
              Be skeptical of companies with no reviews, reviews all posted within the last 30 days, or only five-star reviews without any detailed descriptions of actual work.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">
              3. Demand a Written, Detailed Estimate
            </h2>

            <p className="text-gray-700 mb-6">
              Any legitimate roofing contractor will provide a written estimate that includes:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2">Specific materials to be used (manufacturer name, shingle line, weight class)</li>
              <li className="mb-2">Scope of work — tear-off, decking inspection, underlayment type, ice and water shield placement</li>
              <li className="mb-2">Warranty terms — both on materials and workmanship</li>
              <li className="mb-2">Timeline for start and completion</li>
              <li className="mb-2">Payment schedule and terms</li>
            </ul>

            <p className="text-gray-700 mb-6">
              If a contractor can't or won't provide a written estimate, walk away.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">
              4. Understand the Red Flags of Storm Chasers
            </h2>

            <p className="text-gray-700 mb-6">
              Storm chasing contractors follow severe weather events from state to state. They're not inherently criminal — some do decent work — but many exploit urgency and homeowner stress. Watch for:
            </p>

            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li className="mb-2"><strong>"We're in your neighborhood already."</strong> This is a sales tactic, not a coincidence.</li>
              <li className="mb-2"><strong>Pressure to sign today.</strong> Legitimate contractors don't create artificial urgency.</li>
              <li className="mb-2"><strong>Offering to waive or cover your deductible.</strong> This is insurance fraud in Texas. Full stop.</li>
              <li className="mb-2"><strong>Out-of-state license plates and phone numbers.</strong> Not automatically bad, but combine with other flags.</li>
              <li className="mb-2"><strong>No local physical address.</strong> A P.O. Box is not a business address.</li>
              <li className="mb-2"><strong>Requiring large upfront payment.</strong> A deposit of 10–30% is normal. Paying 50% or more upfront is risky.</li>
            </ul>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">
              5. Ask About Manufacturer Certifications
            </h2>

            <p className="text-gray-700 mb-6">
              Top shingle manufacturers — GAF, Owens Corning, CertainTeed — offer tiered contractor certification programs. Certified contractors receive additional training, use proper installation methods, and can offer extended system warranties (sometimes 50 years) that uncertified installers can't provide. Ask your contractor what certifications they hold and verify them on the manufacturer's website.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-8 mb-4">
              6. Never Pay in Full Before Work Begins
            </h2>

            <p className="text-gray-700 mb-6">
              A reasonable payment structure looks like: 10–30% deposit at signing, progress payment when materials are delivered, and final payment upon satisfactory completion. If a contractor asks for full payment upfront — especially before materials arrive — consider that a serious warning sign.
            </p>

            <div className="bg-[#F5F5F5] p-8 rounded-lg mt-8">
              <h3 className="text-xl font-bold text-[#1C2A39] mb-4">
                Ultra Roofing: Locally Owned, Fully Verified
              </h3>
              <p className="text-gray-700 mb-6">
                Ultra Roofing is an Aggie-owned company with deep roots in the Dallas–Fort Worth community. We're fully licensed, insured, and have served DFW homeowners for over a decade. Every job comes with a written estimate, detailed warranty, and our commitment to be here long after the work is done.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-[#FFC107] text-[#1C2A39] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#FFD54F] transition-colors"
              >
                Get a Free, No-Pressure Estimate
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
