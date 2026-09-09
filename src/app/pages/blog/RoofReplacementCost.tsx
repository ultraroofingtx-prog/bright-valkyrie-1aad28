import { ArrowLeft, Home, DollarSign, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import SchemaMarkup from '../../components/SchemaMarkup';

export default function RoofReplacementCost() {
  const faqItems = [
    {
      question: 'How much does a roof replacement cost in Dallas-Fort Worth?',
      answer: 'Roof replacement costs in DFW typically range from $8,000 to $25,000 depending on roof size, materials, and complexity. Most homeowners pay around $12,000-$15,000 for asphalt shingle replacement.'
    },
    {
      question: 'What factors affect roof replacement cost?',
      answer: 'Key factors include roof size (square footage), roofing material choice, roof pitch and complexity, removal of old roofing, and labor costs in the Dallas-Fort Worth area.'
    },
    {
      question: 'Does insurance cover roof replacement in Texas?',
      answer: 'Insurance typically covers roof replacement if damage results from storms, hail, wind, or other covered perils. Age-related wear or poor maintenance usually is not covered.'
    },
    {
      question: 'How long does a roof replacement take?',
      answer: 'Most residential roof replacements in DFW take 1-3 days depending on roof size and weather conditions. Larger or more complex roofs may take up to a week.'
    }
  ];

  return (
    <>
      <SEO
        title="How Much Does a Roof Replacement Cost in Dallas-Fort Worth? | Ultra Roofing"
        description="Learn about roof replacement costs in Dallas-Fort Worth. Get pricing estimates, cost factors, and tips for budgeting your roofing project from Ultra Roofing."
        keywords="roof replacement cost, roof replacement price Dallas, Fort Worth roof replacement cost, new roof cost DFW, roofing prices Texas"
        canonicalUrl="https://ultraroofingtx.com/blog/roof-replacement-cost-dallas-fort-worth"
      />
      <SchemaMarkup type="faq" faqItems={faqItems} />

      <article className="min-h-screen bg-gray-50">
        <div className="bg-[#1C2A39] text-white py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/blog"
              className="inline-flex items-center text-[#FFC107] hover:text-[#FFD54F] mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How Much Does a Roof Replacement Cost in Dallas–Fort Worth?
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Complete pricing guide for roof replacement in the Dallas-Fort Worth Metroplex
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
            <img
              loading="lazy"
              src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Roof replacement cost Dallas Fort Worth TX"
              className="w-full h-64 sm:h-96 object-cover rounded-lg mb-8"
            />

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you're a homeowner in Dallas–Fort Worth considering a roof replacement, understanding the costs involved is essential for planning your roofing project. Roof replacement is a significant investment, but knowing what to expect can help you budget effectively and make informed decisions.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-10 mb-6">
                Average Roof Replacement Cost in DFW
              </h2>

              <p className="text-gray-700 mb-6">
                The average cost for roof replacement in Dallas–Fort Worth ranges from <strong>$8,000 to $25,000</strong>, with most homeowners paying around <strong>$12,000 to $15,000</strong> for a standard asphalt shingle roof replacement on a 2,000 square foot home.
              </p>

              <div className="bg-[#FFC107] bg-opacity-10 border-l-4 border-[#FFC107] p-6 my-8">
                <h3 className="text-xl font-bold text-[#1C2A39] mb-3">Cost Breakdown by Roof Size</h3>
                <ul className="space-y-2">
                  <li><strong>1,000 sq ft:</strong> $4,000 - $6,000</li>
                  <li><strong>1,500 sq ft:</strong> $6,000 - $9,000</li>
                  <li><strong>2,000 sq ft:</strong> $8,000 - $12,000</li>
                  <li><strong>2,500 sq ft:</strong> $10,000 - $15,000</li>
                  <li><strong>3,000 sq ft:</strong> $12,000 - $18,000</li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-10 mb-6">
                Factors That Affect Roof Replacement Cost
              </h2>

              <h3 className="text-xl font-bold text-[#1C2A39] mt-8 mb-4">
                1. Roofing Material Choice
              </h3>
              <p className="text-gray-700 mb-4">
                The type of roofing material you select significantly impacts the total cost:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li><strong>Asphalt Shingles:</strong> $3.50 - $5.50 per sq ft (most popular in DFW)</li>
                <li><strong>Architectural Shingles:</strong> $4.50 - $7.00 per sq ft</li>
                <li><strong>Metal Roofing:</strong> $7.00 - $12.00 per sq ft</li>
                <li><strong>Tile Roofing:</strong> $10.00 - $18.00 per sq ft</li>
              </ul>

              <h3 className="text-xl font-bold text-[#1C2A39] mt-8 mb-4">
                2. Roof Size and Pitch
              </h3>
              <p className="text-gray-700 mb-6">
                Larger roofs require more materials and labor, increasing costs. Steeper roof pitches are more difficult and dangerous to work on, adding 10-20% to labor costs.
              </p>

              <h3 className="text-xl font-bold text-[#1C2A39] mt-8 mb-4">
                3. Roof Complexity
              </h3>
              <p className="text-gray-700 mb-6">
                Roofs with multiple levels, valleys, chimneys, skylights, and dormers require more time and materials, increasing replacement costs by 15-30%.
              </p>

              <h3 className="text-xl font-bold text-[#1C2A39] mt-8 mb-4">
                4. Old Roof Removal
              </h3>
              <p className="text-gray-700 mb-6">
                Removing and disposing of your old roof typically adds $1-$2 per square foot to the project cost. Multiple layers of old roofing increase removal costs.
              </p>

              <h3 className="text-xl font-bold text-[#1C2A39] mt-8 mb-4">
                5. Underlayment and Decking Repairs
              </h3>
              <p className="text-gray-700 mb-6">
                If your roof decking has water damage or rot, repairs can add $2-$5 per square foot. Quality underlayment is essential for Texas weather protection.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-10 mb-6">
                Does Insurance Cover Roof Replacement in Texas?
              </h2>

              <p className="text-gray-700 mb-6">
                Homeowners insurance in Texas typically covers roof replacement if the damage results from:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Hail storms (very common in DFW)</li>
                <li>Wind damage from severe storms</li>
                <li>Fire or lightning strikes</li>
                <li>Falling trees or debris</li>
              </ul>

              <p className="text-gray-700 mb-6">
                Insurance generally does NOT cover roof replacement due to age, normal wear, or lack of maintenance. However, after a major storm event in Dallas–Fort Worth, it's worth filing a claim to have your roof inspected by a professional roofing contractor.
              </p>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-10 mb-6">
                Ways to Save on Roof Replacement Costs
              </h2>

              <div className="bg-white border-2 border-[#1C2A39] rounded-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-[#1C2A39] mb-4">Cost-Saving Tips</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FFC107] mr-2">✓</span>
                    <span>File an insurance claim if storm damage occurred</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC107] mr-2">✓</span>
                    <span>Get multiple quotes from licensed roofing contractors</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC107] mr-2">✓</span>
                    <span>Schedule during off-peak seasons (late fall or winter)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC107] mr-2">✓</span>
                    <span>Choose quality architectural shingles for best value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFC107] mr-2">✓</span>
                    <span>Address repairs immediately to prevent costly damage</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-10 mb-6">
                How Long Does a Roof Replacement Take?
              </h2>

              <p className="text-gray-700 mb-6">
                Most residential roof replacements in Dallas–Fort Worth are completed in <strong>1-3 days</strong>. Factors that affect timeline include:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Roof size and complexity</li>
                <li>Weather conditions</li>
                <li>Type of roofing material</li>
                <li>Extent of decking repairs needed</li>
              </ul>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-10 mb-6">
                Choosing the Right Roofing Contractor in DFW
              </h2>

              <p className="text-gray-700 mb-6">
                The roofing contractor you choose significantly impacts your roof replacement cost and quality. When selecting a roofing company in Dallas–Fort Worth:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                <li>Verify they are licensed and insured in Texas</li>
                <li>Check online reviews and references</li>
                <li>Get detailed written estimates</li>
                <li>Ask about warranty coverage</li>
                <li>Ensure they handle insurance claims if needed</li>
              </ul>

              <div className="bg-[#1C2A39] text-white rounded-lg p-8 my-10">
                <h3 className="text-2xl font-bold mb-4">Get Your Free Roof Inspection</h3>
                <p className="text-gray-300 mb-6">
                  Ultra Roofing provides free roof inspections and detailed cost estimates for homeowners throughout Dallas–Fort Worth. Our experienced roofing contractors will assess your roof and provide transparent pricing with no hidden fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:8333567233"
                    className="inline-flex items-center justify-center bg-[#FFC107] text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-[#FFD54F] transition-colors"
                  >
                    Call (833) 356-7233
                  </a>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center bg-white text-[#1C2A39] px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                  >
                    Schedule Free Inspection
                  </Link>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#1C2A39] mt-10 mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-l-4 border-[#FFC107] pl-4">
                    <h3 className="text-lg font-bold text-[#1C2A39] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-[#1C2A39] mb-4">
                  Ready to Replace Your Roof?
                </h2>
                <p className="text-gray-700 mb-6">
                  Ultra Roofing is a trusted roofing contractor serving Dallas, Fort Worth, Plano, Frisco, Arlington, and all surrounding DFW cities. Contact us today for a free roof inspection and honest pricing on your roof replacement project.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-[#1C2A39] hover:text-[#FFC107] font-semibold transition-colors"
                  >
                    <Home className="h-5 w-5 mr-2" />
                    View Our Services
                  </Link>
                  <Link
                    to="/service-areas"
                    className="inline-flex items-center text-[#1C2A39] hover:text-[#FFC107] font-semibold transition-colors"
                  >
                    <Wrench className="h-5 w-5 mr-2" />
                    Service Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
