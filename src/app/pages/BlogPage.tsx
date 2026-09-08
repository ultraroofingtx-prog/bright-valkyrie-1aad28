import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function BlogPage() {
  const posts = [
    {
      slug: 'texas-heat-impacts-roof-lifespan',
      title: 'How Texas Heat Impacts Your Roof Lifespan',
      excerpt: 'Learn how DFW heat and UV exposure damage shingles, and how Ultra Roofing helps protect roofs year-round.',
      date: 'March 15, 2024',
      image: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'what-to-do-after-hailstorm-dfw',
      title: 'What to Do After a Hailstorm in Dallas Fort Worth',
      excerpt: 'Identify roof damage and file insurance claims fast with Ultra Roofing storm restoration experts.',
      date: 'March 10, 2024',
      image: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'best-roofing-materials-dfw-homes',
      title: 'Best Roofing Materials for Dallas Fort Worth Homes',
      excerpt: 'Compare asphalt, metal, and designer shingles built for Texas weather.',
      date: 'March 5, 2024',
      image: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'why-roof-maintenance-saves-money',
      title: 'Why Roof Maintenance Saves You Thousands',
      excerpt: 'Routine maintenance prevents leaks and prolongs roof life for DFW homeowners.',
      date: 'February 28, 2024',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'roof-replacement-cost-dallas-fort-worth',
      title: 'How Much Does a Roof Replacement Cost in Dallas-Fort Worth?',
      excerpt: 'Complete pricing guide for roof replacement in DFW. Learn about cost factors, material prices, and ways to save.',
      date: 'March 20, 2024',
      image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'roof-coatings-commercial-roof-life',
      title: 'Roof Coatings: The Secret to Longer Commercial Roof Life',
      excerpt: 'Discover how roof coatings prevent leaks, cut cooling costs, and extend roof life.',
      date: 'February 20, 2024',
      image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'signs-replace-roof-north-texas',
      title: '5 Signs It Is Time to Replace Your Roof in North Texas',
      excerpt: 'Learn when aging shingles or leaks mean it is time for a new roof.',
      date: 'February 15, 2024',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'spring-roof-inspection-checklist-dfw',
      title: 'Spring Roof Inspection Checklist for DFW Homeowners',
      excerpt: 'Use this checklist to catch storm damage, leaks, and wear before the Texas summer heat arrives.',
      date: 'May 1, 2026',
      image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'roof-ventilation-texas-summer',
      title: 'Why Roof Ventilation Matters Before a Texas Summer',
      excerpt: 'When DFW temps hit 100°F, your attic can reach 150°F. Poor ventilation destroys shingles and spikes energy bills.',
      date: 'May 1, 2026',
      image: 'https://images.pexels.com/photos/186980/pexels-photo-186980.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'how-to-file-roof-insurance-claim-texas',
      title: 'How to File a Roof Insurance Claim in Texas: A Step-by-Step Guide',
      excerpt: 'Learn exactly how to document damage, work with your adjuster, and maximize your claim payout after a DFW storm.',
      date: 'May 1, 2026',
      image: 'https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'metal-roofing-dfw-pros-cons-cost',
      title: 'Is Metal Roofing Worth It in DFW? Pros, Cons, and Real Costs',
      excerpt: 'After one too many hailstorms, many DFW homeowners are considering metal. Here\'s an honest look at whether it\'s worth the investment.',
      date: 'May 1, 2026',
      image: 'https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      slug: 'how-to-choose-roofing-contractor-dfw',
      title: 'How to Choose a Roofing Contractor in DFW (And Avoid Getting Burned)',
      excerpt: 'Storm season brings storm chasers. Learn exactly what to look for — and the red flags that should send you running.',
      date: 'May 1, 2026',
      image: 'https://images.pexels.com/photos/221024/pexels-photo-221024.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <>
      <SEO
        title="Roofing Tips & Guides for DFW Homeowners | Ultra Roofing Blog"
        description="Expert roofing advice for Dallas–Fort Worth homeowners. Learn about hail damage, roof replacement costs, insurance claims, maintenance, and choosing a licensed roofing contractor in North Texas."
        keywords="roofing tips Dallas Fort Worth, roof repair advice DFW, hail damage guide Texas, roof replacement guide DFW, roofing blog North Texas, how to file roof insurance claim Texas, roofing material comparison DFW, best roofer Dallas, roof maintenance tips North Texas"
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C2A39] mb-4">
              Ultra Roofing Blog
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Expert roofing tips, guides, and insights for Dallas-Fort Worth property owners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  loading="lazy"
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-[#FFC107] font-semibold mb-2">{post.date}</p>
                  <h2 className="text-xl font-bold text-[#1C2A39] mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <span className="text-[#FFC107] font-semibold hover:text-[#FFD54F]">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
