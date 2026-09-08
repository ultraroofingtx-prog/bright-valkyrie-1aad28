export interface CityData {
  name: string;
  slug: string;
  county: string;
  population: string;
  neighbors: { slug: string; name: string }[];
  intro: string;
  residential: string;
  commercial: string;
  storm: string;
  faqs: { q: string; a: string }[];
}

export const cityData: Record<string, CityData> = {
  dallas: {
    name: "Dallas",
    slug: "dallas",
    county: "Dallas County",
    population: "1,304,000",
    neighbors: [
      { slug: "irving", name: "Irving" },
      { slug: "garland", name: "Garland" },
      { slug: "richardson", name: "Richardson" },
    ],
    intro:
      "Dallas is the largest city in Dallas County and one of the most diverse roofing markets in Texas. Properties range from early 1900s Craftsman bungalows in Lakewood, M Streets, and Oak Lawn to modern high-rises downtown, and each style demands a different roofing approach. Our crews understand the specific building codes enforced by the City of Dallas and work with inspectors regularly to keep every job compliant.",
    residential:
      "Older Dallas neighborhoods often have layered roofing systems that need a full tear-off before new material can go on. We install IKO Dynasty Class 3 impact-resistant shingles on homes throughout East Dallas, Oak Cliff, and Lake Highlands, giving homeowners a durable upgrade that many insurers reward with a premium discount. For properties in historic overlay districts, we coordinate with homeowners on material choices that satisfy both city guidelines and long-term performance.",
    commercial:
      "Dallas has one of the densest concentrations of flat-roof commercial buildings in North Texas, from warehouse districts to mixed-use developments along Stemmons Freeway and the Design District. TPO single-ply membrane is our most-requested system for these structures because it reflects heat and holds up under ponding water. We also handle R-panel metal installations on light industrial buildings where durability and low maintenance matter most.",
    storm:
      "Severe thunderstorms roll through Dallas County multiple times each spring, and hailstones large enough to crack shingles are not unusual. After major storms, we offer free inspections to document damage for insurance claims. Our project managers work directly with adjusters so homeowners do not have to navigate the claims process alone.",
    faqs: [
      {
        q: "What roofing permits does the City of Dallas require?",
        a: "Dallas requires a building permit for any full roof replacement. We pull the permit, schedule the city inspection, and handle all paperwork so the homeowner does not have to visit city hall.",
      },
      {
        q: "Are impact-resistant shingles worth it in Dallas?",
        a: "Yes. Dallas County sees frequent hail, and many insurance companies offer a discount on premiums when Class 3 or Class 4 shingles are installed. The savings often offset the higher material cost within a few years.",
      },
      {
        q: "How long does a typical residential roof replacement take in Dallas?",
        a: "Most single-family homes in Dallas can be re-roofed in one to two days, depending on the size of the roof and whether a full tear-off is needed.",
      },
      {
        q: "Do you work on historic homes in Dallas?",
        a: "We do. We have completed projects in several Dallas historic districts and understand the material and aesthetic requirements that come with those designations.",
      },
      {
        q: "Can you repair a flat roof on a Dallas commercial building without a full replacement?",
        a: "In many cases, yes. If the TPO or built-up membrane is still structurally sound, we can patch damaged sections and extend the life of the roof.",
      },
    ],
  },

  "fort-worth": {
    name: "Fort Worth",
    slug: "fort-worth",
    county: "Tarrant County",
    population: "958,000",
    neighbors: [
      { slug: "arlington", name: "Arlington" },
      { slug: "keller", name: "Keller" },
      { slug: "mansfield", name: "Mansfield" },
    ],
    intro:
      "Fort Worth sits on the western edge of the DFW metroplex where open terrain and Tarrant County weather patterns produce some of the most intense hailstorms in the region. The city blends old ranching heritage near the Stockyards with booming suburban development along the I-35W and Chisholm Trail corridors. We have roofing crews positioned across Fort Worth so we can respond quickly after storms move through.",
    residential:
      "Homes on the west side of Fort Worth tend to be more exposed to weather coming off the open plains, so we frequently recommend IKO Dynasty Class 3 impact-resistant shingles for that extra layer of protection. In established neighborhoods like Ridglea, Wedgwood, and Arlington Heights, we see a lot of 20-year-old three-tab roofs that are past their useful life and ready for an upgrade. Standing seam metal roofing has also gained popularity among Fort Worth homeowners who want a 40-plus-year solution.",
    commercial:
      "Fort Worth has a growing commercial corridor along Camp Bowie, Hulen Street, and West 7th with strip centers, restaurants, and professional offices that rely on flat-roof systems. We install TPO single-ply membrane on these buildings to handle the intense summer heat that Tarrant County is known for. For agricultural and equestrian properties west of the city, R-panel metal is the practical choice because it covers large spans at a reasonable cost.",
    storm:
      "Tarrant County regularly appears on the list of most hail-damaged counties in Texas, and Fort Worth absorbs the worst of it. When a storm hits, we mobilize crews within 24 hours to tarp exposed areas and begin damage assessments. We photograph every section of the roof, compile a detailed scope, and present it to the homeowner and their insurance adjuster together.",
    faqs: [
      {
        q: "Why does Fort Worth get so much hail damage?",
        a: "Fort Worth sits at the western edge of the metroplex with fewer urban heat islands to weaken incoming storm cells. Storms crossing open Parker and western Tarrant County often carry large hail by the time they reach the city.",
      },
      {
        q: "Is metal roofing a good option for Fort Worth homes?",
        a: "Standing seam metal performs well in Fort Worth because it resists hail, sheds wind-driven rain, and handles the extreme summer heat. It is one of the longest-lasting options available.",
      },
      {
        q: "How do I know if my Fort Worth roof has hail damage?",
        a: "Look for dented gutters, cracked or missing shingles, and dark spots where granules have been knocked loose. We offer free inspections and can identify damage that is not visible from the ground.",
      },
      {
        q: "Do Fort Worth building codes require a permit for roof replacement?",
        a: "Yes. The City of Fort Worth requires a permit for full replacements. We handle the permit application and coordinate the required inspection after the job is complete.",
      },
      {
        q: "What is the most common roofing material on Fort Worth homes?",
        a: "Architectural asphalt shingles are the most common. Many homeowners are upgrading to impact-resistant varieties to lower insurance costs and improve storm durability.",
      },
    ],
  },

  irving: {
    name: "Irving",
    slug: "irving",
    county: "Dallas County",
    population: "256,000",
    neighbors: [
      { slug: "dallas", name: "Dallas" },
      { slug: "coppell", name: "Coppell" },
      { slug: "grapevine", name: "Grapevine" },
    ],
    intro:
      "Irving straddles the line between Dallas County urban density and the mid-cities suburban feel, with everything from 1960s ranch homes in South Irving and Valley Ranch to the modern Las Colinas urban center. Roofing needs here vary block by block, and we tailor every estimate to the specific age and style of the structure. Our teams are familiar with Irving building department requirements and maintain strong working relationships with local inspectors.",
    residential:
      "Many Irving homes built in the 1960s and 1970s still have their original roof decking, which sometimes needs reinforcement before new shingles go on. We install IKO Dynasty Class 3 impact-resistant shingles across Irving to protect against the hail events that sweep through Dallas County each spring. In the Las Colinas area, we also work on townhome and condo communities where HOA specifications dictate material color and style.",
    commercial:
      "Irving is home to a dense concentration of office parks, hotels, and corporate campuses, particularly in the Las Colinas corridor and near DFW Airport. TPO single-ply membrane is the standard for these flat-roof commercial buildings because it withstands ponding water and reflects UV radiation. We schedule commercial work to minimize disruption to tenants and coordinate closely with property management teams.",
    storm:
      "Irving sits in the path of storms that track northeast across Dallas County, and hail damage is a recurring issue for both homes and commercial properties. We provide free post-storm inspections and generate documentation that meets insurance company standards. Our team walks homeowners through every step of the claims process, from initial filing to final adjuster walkthrough.",
    faqs: [
      {
        q: "Do you handle roofing for HOA communities in Irving?",
        a: "Yes. We work with several HOA-managed communities in Irving, matching shingle color and style to association guidelines and coordinating schedules to minimize disruption to residents.",
      },
      {
        q: "How does Irving proximity to DFW Airport affect roofing?",
        a: "Airport-area properties face above-average jet exhaust residue and vibration. We recommend materials that clean easily and inspect flashing and seals more closely on these roofs.",
      },
      {
        q: "What type of roofing is most common on Irving commercial buildings?",
        a: "Most Irving office parks and hotels use flat-roof systems. TPO single-ply membrane is the current standard for new installations and replacements.",
      },
      {
        q: "Is a roof inspection free in Irving?",
        a: "We offer free inspections for Irving homeowners and commercial property managers. There is no obligation to move forward with any repairs.",
      },
    ],
  },

  arlington: {
    name: "Arlington",
    slug: "arlington",
    county: "Tarrant County",
    population: "394,000",
    neighbors: [
      { slug: "fort-worth", name: "Fort Worth" },
      { slug: "mansfield", name: "Mansfield" },
      { slug: "irving", name: "Irving" },
    ],
    intro:
      "Arlington is one of the largest cities in Tarrant County and sits right between Dallas and Fort Worth, making it a crossroads for severe weather moving in either direction. The housing stock is broad, from mid-century brick ranches near North Arlington and Dalworthington Gardens to newer subdivisions along the southern corridors. We serve Arlington homeowners and property managers with roofing solutions matched to the age and construction of each building.",
    residential:
      "Arlington experienced major residential growth in the 1970s through 1990s, so many homes are now reaching the point where the original roof needs full replacement. We tear off worn three-tab shingles and install IKO Dynasty Class 3 impact-resistant shingles that stand up to Tarrant County hail. For homeowners looking for longevity, we also offer standing seam metal roofing, which performs especially well on the steeper-pitch homes found in newer Arlington subdivisions.",
    commercial:
      "The entertainment district around AT&T Stadium and Globe Life Field and the retail corridors along major highways give Arlington a significant commercial roofing market. TPO single-ply membrane handles the wide, flat expanses of retail and restaurant rooftops efficiently. We also maintain and replace R-panel metal on light industrial buildings in south Arlington, where warehouses and distribution centers are common.",
    storm:
      "Arlington catches severe storms from both the west and the south, and the city has experienced multiple damaging hail events in recent years, including several in recent years. We deploy tarping crews within hours of major events and begin full inspections the following day. Our documentation package is designed to give insurance adjusters everything they need so claims move forward without delays.",
    faqs: [
      {
        q: "How often does Arlington experience significant hail?",
        a: "Tarrant County averages several reportable hail events per year, and Arlington is frequently in the path. Most roof damage comes from stones measuring one inch or larger.",
      },
      {
        q: "What is the best shingle for an Arlington home?",
        a: "We recommend IKO Dynasty Class 3 impact-resistant shingles for most Arlington homes. They provide strong hail resistance and often qualify for insurance premium discounts in Tarrant County.",
      },
      {
        q: "Do you replace roofs on Arlington townhomes and duplexes?",
        a: "Yes. We handle multi-family roofing in Arlington and work with property managers and HOAs on scheduling, material approvals, and phased replacements.",
      },
      {
        q: "Can Arlington homeowners get an insurance discount for a new roof?",
        a: "Many insurers offer reduced premiums when impact-resistant shingles are installed. We provide the documentation needed to submit to your insurance company.",
      },
    ],
  },

  plano: {
    name: "Plano",
    slug: "plano",
    county: "Collin County",
    population: "285,000",
    neighbors: [
      { slug: "frisco", name: "Frisco" },
      { slug: "allen", name: "Allen" },
      { slug: "richardson", name: "Richardson" },
    ],
    intro:
      "Plano is a mature suburb in Collin County known for well-maintained neighborhoods, top-rated schools, and a strong corporate presence. The city saw its biggest building boom in the 1980s and 1990s, which means thousands of roofs are now in the replacement window. We understand Plano building codes and work with the city inspection process daily.",
    residential:
      "Plano neighborhoods like Willow Bend, Deerfield, and Kings Gate feature brick homes with medium-pitch roofs that are ideal candidates for IKO Dynasty Class 3 impact-resistant shingles. Many of these homes are on their second roof, and we pay careful attention to decking condition during tear-off to catch any moisture damage before new material goes on. Plano homeowners tend to be detail-oriented, and we provide clear timelines, material spec sheets, and a thorough final walkthrough on every project.",
    commercial:
      "The Legacy business park and surrounding corridors give Plano a large inventory of flat-roof commercial buildings, from corporate headquarters to medical offices. TPO single-ply membrane is the preferred system for these structures because it delivers energy savings through reflectivity and requires minimal maintenance. We schedule commercial projects around business hours and work in sections when a building cannot be fully vacated.",
    storm:
      "Collin County is one of the most hail-prone areas in North Texas, and Plano regularly sustains roof damage during spring storm season. We respond to storm damage calls promptly and document every impact point with photos and measurements that meet insurance standards. Homeowners who file claims receive a dedicated project manager who communicates with the adjuster on their behalf.",
    faqs: [
      {
        q: "When should a Plano homeowner replace their roof?",
        a: "Most asphalt shingle roofs last 20 to 25 years. Many Plano homes built in the 1980s and 1990s are at or past that point. A professional inspection can determine remaining life.",
      },
      {
        q: "Does Plano require a roof replacement permit?",
        a: "Yes. The City of Plano requires a building permit for all roof replacements. We pull the permit and schedule the inspection as part of our standard process.",
      },
      {
        q: "What roofing materials qualify for insurance discounts in Collin County?",
        a: "Class 3 and Class 4 impact-resistant shingles typically qualify. We install IKO Dynasty Class 3 shingles and provide the certification your insurer needs.",
      },
      {
        q: "Do you work on commercial roofs in the Plano Legacy area?",
        a: "Yes. We have completed multiple TPO and modified bitumen projects on Legacy-area office buildings and coordinate with property management firms throughout the corridor.",
      },
      {
        q: "How does Plano compare to other Collin County cities for hail risk?",
        a: "Plano faces the same elevated hail risk as the rest of Collin County. The area averages more hail events per year than the national average, making impact-resistant materials a practical investment.",
      },
    ],
  },

  frisco: {
    name: "Frisco",
    slug: "frisco",
    county: "Collin County",
    population: "220,000",
    neighbors: [
      { slug: "plano", name: "Plano" },
      { slug: "mckinney", name: "McKinney" },
      { slug: "prosper", name: "Prosper" },
    ],
    intro:
      "Frisco is one of the fastest-growing cities in Collin County, with new subdivisions and commercial developments opening each year. That rapid growth means a mix of brand-new construction and neighborhoods from the early 2000s that are approaching their first roof replacement cycle. We stay current with Frisco building codes, which have evolved alongside the city and now emphasize wind and impact resistance.",
    residential:
      "Newer Frisco homes in communities like Phillips Creek Ranch and Hollyhock often have builder-grade three-tab shingles that were the minimum spec at the time of construction. Upgrading to IKO Dynasty Class 3 impact-resistant shingles gives these homes a significant durability boost and often qualifies for insurance discounts. We also install standing seam metal on the growing number of modern farmhouse-style homes in northern Frisco where aesthetics and performance both matter.",
    commercial:
      "Frisco has added significant retail, restaurant, and office space along the Dallas North Tollway and SH-121 corridors, and nearly all of it uses flat-roof construction. TPO single-ply membrane is our primary recommendation for these buildings because it handles the intense Collin County summer heat while keeping cooling costs manageable. We work with developers and general contractors on new builds as well as existing property managers on replacements.",
    storm:
      "Spring storms regularly push through Collin County, and Frisco has seen several major hail events in the last decade, including several in recent years. After a hail event, entire Frisco neighborhoods may need roof replacement at the same time, and we have the crew capacity to handle volume work while maintaining quality on every home. We assist homeowners with insurance claims from start to finish.",
    faqs: [
      {
        q: "Are Frisco builder-grade roofs already failing?",
        a: "Homes built in the early 2000s with basic three-tab shingles are now 20-plus years old and commonly show wear. A professional inspection will confirm whether repair or replacement is the right step.",
      },
      {
        q: "What shingle colors are popular in Frisco HOA communities?",
        a: "Neutral tones like weathered wood, charcoal, and slate gray are common. We carry a full range of IKO Dynasty colors and can help match your HOA requirements.",
      },
      {
        q: "Does Frisco allow metal roofing on residential homes?",
        a: "Frisco city code allows metal roofing on residential properties, though some HOAs may have restrictions. We recommend checking your HOA guidelines before selecting material.",
      },
      {
        q: "How quickly can you start a roof replacement in Frisco after a storm?",
        a: "We typically begin within one to two weeks of insurance approval. In high-demand periods after major storms, we prioritize homes with active leaks or structural exposure.",
      },
      {
        q: "Do you work with Frisco new-home builders?",
        a: "Yes. We partner with builders on new construction roofing and offer upgraded material packages for buyers who want better-than-standard protection from day one.",
      },
    ],
  },

  mckinney: {
    name: "McKinney",
    slug: "mckinney",
    county: "Collin County",
    population: "200,000",
    neighbors: [
      { slug: "frisco", name: "Frisco" },
      { slug: "allen", name: "Allen" },
      { slug: "prosper", name: "Prosper" },
    ],
    intro:
      "McKinney blends a well-preserved historic downtown with some of the fastest-growing master-planned communities in Collin County. That combination creates a roofing market where crews must be comfortable working on both century-old structures around the town square and brand-new production homes on the northern edge. We understand the distinct requirements of each and bring the right approach to every project.",
    residential:
      "In the historic core of McKinney, homes often have steep pitches and unique architectural details that require careful material selection and skilled installation. We work with homeowners in these areas to choose options that preserve the character of the home while improving weather resistance. Out in communities like Stonebridge Ranch and Craig Ranch, we install IKO Dynasty Class 3 impact-resistant shingles on modern homes where the priority is durability and insurance savings.",
    commercial:
      "McKinney has attracted a growing number of medical offices, retail plazas, and mixed-use developments along US-75 and the SH-121 corridor. These commercial properties use flat-roof systems almost exclusively, and TPO single-ply membrane is the go-to choice for energy efficiency and longevity. We also handle R-panel metal for the agricultural supply and light industrial buildings that remain part of McKinney east-side commerce.",
    storm:
      "Collin County sits in one of the highest hail frequency zones in the United States, and McKinney takes direct hits regularly. After recent major storms, we inspected hundreds of McKinney homes and helped homeowners file accurate, well-documented claims. We coordinate directly with insurance adjusters to resolve claims efficiently and begin work as soon as approval comes through.",
    faqs: [
      {
        q: "Can you match roofing materials on historic McKinney homes?",
        a: "We can. We carry a range of dimensional and specialty shingles that complement the architectural styles found in historic McKinney without sacrificing modern performance.",
      },
      {
        q: "How bad is hail damage in McKinney compared to the rest of Collin County?",
        a: "McKinney experiences hail at roughly the same frequency as the rest of Collin County, which is well above the national average. Impact-resistant shingles are a practical investment here.",
      },
      {
        q: "What permits does McKinney require for a roof replacement?",
        a: "The City of McKinney requires a building permit for full replacements. We handle the permit process and schedule the final inspection.",
      },
      {
        q: "Do you offer free roof inspections in McKinney?",
        a: "Yes. We provide no-cost inspections for McKinney homeowners, whether you suspect storm damage or just want to know the condition of your roof.",
      },
      {
        q: "Is standing seam metal roofing available for McKinney homes?",
        a: "It is. Standing seam metal is growing in popularity in McKinney, especially on new-construction homes with modern or farmhouse-style architecture.",
      },
    ],
  },

  denton: {
    name: "Denton",
    slug: "denton",
    county: "Denton County",
    population: "150,000",
    neighbors: [
      { slug: "lewisville", name: "Lewisville" },
      { slug: "flower-mound", name: "Flower Mound" },
      { slug: "frisco", name: "Frisco" },
    ],
    intro:
      "Denton is the county seat of Denton County and home to two major universities, giving the city a mix of student rental properties, older family homes near the downtown square, and new suburban developments on the south and east sides. Roofing needs here are as varied as the housing stock, and we adjust our approach based on whether we are working with a homeowner, a landlord, or a commercial property manager.",
    residential:
      "Near the Denton square and the university campuses, many homes date to the mid-20th century and feature pier-and-beam foundations with older roof structures that sometimes need decking repairs during replacement. We install IKO Dynasty Class 3 impact-resistant shingles on these properties to bring them up to current wind and hail standards. In newer Denton subdivisions south of town, rolled roofing on outbuildings and detached garages is also a common request.",
    commercial:
      "Denton has a growing commercial base along I-35W and I-35E, with retail centers, restaurants, and university-related facilities that use flat-roof systems. TPO single-ply membrane handles the Denton County summer heat well and keeps energy costs down for building owners. We also work on R-panel metal roofs for the feed stores, workshops, and light industrial spaces that reflect the area rural roots.",
    storm:
      "Denton County gets hit by severe weather each spring, and storms often intensify as they cross the open terrain north and west of the city. We offer free post-storm inspections to Denton property owners and generate thorough documentation for insurance claims. Our team has experience managing multi-property claims for landlords who own several rental homes in the Denton area.",
    faqs: [
      {
        q: "Do you work on rental properties in Denton?",
        a: "Yes. We work with landlords and property managers throughout Denton, handling everything from single-family rentals near campus to small multi-unit properties.",
      },
      {
        q: "What roofing material holds up best in Denton County weather?",
        a: "Impact-resistant asphalt shingles and standing seam metal both perform well. The best choice depends on budget, aesthetic preference, and the pitch of the roof.",
      },
      {
        q: "Does the City of Denton have specific roofing code requirements?",
        a: "Denton follows the International Residential Code with local amendments. A building permit is required for full replacements, and we manage that process for every project.",
      },
      {
        q: "Can you install metal roofing on a Denton barndominium or workshop?",
        a: "Absolutely. R-panel metal is a cost-effective option for barndominiums, workshops, and agricultural buildings common in the Denton area.",
      },
    ],
  },

  lewisville: {
    name: "Lewisville",
    slug: "lewisville",
    county: "Denton County",
    population: "113,000",
    neighbors: [
      { slug: "flower-mound", name: "Flower Mound" },
      { slug: "denton", name: "Denton" },
      { slug: "carrollton", name: "Carrollton" },
    ],
    intro:
      "Lewisville sits along the southern edge of Denton County near Lewisville Lake, and many of its neighborhoods were built in the 1980s and 1990s during a period of rapid suburban expansion. That means a large portion of the city housing stock is now at or beyond the typical lifespan of its original roof. We serve Lewisville homeowners with straightforward assessments and honest recommendations.",
    residential:
      "The majority of Lewisville homes feature standard-pitch roofs on single-story and two-story brick construction, ideal for architectural shingles. We install IKO Dynasty Class 3 impact-resistant shingles as our standard recommendation because Denton County hail makes impact resistance a practical necessity rather than a luxury. In lakeside communities near Lewisville Lake, wind exposure is higher, and we pay extra attention to starter strips and hip-and-ridge details.",
    commercial:
      "Lewisville has a significant retail and light industrial base along I-35E and Highway 121, with flat-roof buildings that range from 5,000 to 50,000 square feet. TPO single-ply membrane is the most cost-effective solution for these properties, delivering strong UV resistance and straightforward maintenance. We also maintain and repair older modified bitumen systems on Lewisville commercial buildings that are not yet ready for a full replacement.",
    storm:
      "Storms crossing Denton County frequently track right over Lewisville, and the lake effect can contribute to localized wind gusts that compound hail damage. After a storm, we offer no-cost inspections and can have a crew on-site within days to begin emergency tarping if needed. We photograph and document every damaged area to support a smooth insurance claim.",
    faqs: [
      {
        q: "Are Lewisville roofs from the 1980s due for replacement?",
        a: "Most likely. Asphalt shingle roofs have a 20- to 25-year lifespan, and many 1980s-era Lewisville homes have already exceeded that. A professional inspection will confirm the condition.",
      },
      {
        q: "Does living near Lewisville Lake affect roofing choices?",
        a: "Lakeside properties face higher wind exposure. We recommend impact-resistant shingles with enhanced wind warranties and take extra care with edge and ridge fastening on these homes.",
      },
      {
        q: "What is TPO roofing, and is it used in Lewisville?",
        a: "TPO is a single-ply reflective membrane used on flat commercial roofs. It is one of the most common systems on Lewisville retail and industrial buildings.",
      },
      {
        q: "How do I file a roof damage insurance claim in Lewisville?",
        a: "Contact your insurance company to open a claim, then schedule an inspection with us. We provide the documentation your adjuster needs and can meet them on-site.",
      },
    ],
  },

  "flower-mound": {
    name: "Flower Mound",
    slug: "flower-mound",
    county: "Denton County",
    population: "79,000",
    neighbors: [
      { slug: "lewisville", name: "Lewisville" },
      { slug: "grapevine", name: "Grapevine" },
      { slug: "coppell", name: "Coppell" },
    ],
    intro:
      "Flower Mound is an affluent Denton County community known for its tree-lined streets, large lot sizes, and well-kept homes. Many properties here were built in the 1990s and early 2000s with higher-end finishes, including steeper roof pitches and complex rooflines with multiple valleys and dormers. These architectural details make precision installation essential, and our crews are experienced with the craftsmanship Flower Mound homes demand.",
    residential:
      "The complex rooflines common in Flower Mound require more flashing, valley work, and cut shingles than a simple ranch-style home. We install IKO Dynasty Class 3 impact-resistant shingles and take the time to get every detail right, from drip edge alignment to pipe boot seals. Homeowners in Bridlewood and Wellington frequently ask about standing seam metal accents over entryways and porches, which we fabricate and install to complement the shingle field.",
    commercial:
      "Flower Mound commercial development is concentrated along FM 2499 and Long Prairie Road, with medical offices, retail plazas, and restaurants that rely on flat-roof systems. TPO single-ply membrane is the standard choice for these properties because it handles the Denton County heat and minimizes long-term maintenance. We coordinate closely with Flower Mound property managers to schedule work during low-traffic hours.",
    storm:
      "Denton County storm cells frequently pass over Flower Mound, and the mature tree canopy can add falling limb damage on top of hail impact. We inspect for both shingle damage and structural issues caused by debris after every major storm. Our insurance documentation covers all damage types so homeowners can file a comprehensive claim.",
    faqs: [
      {
        q: "Why do Flower Mound roofs cost more to replace than simpler homes?",
        a: "Flower Mound homes often have steep pitches, multiple dormers, and complex valleys that require more labor and material. The complexity adds time, but we price transparently and explain every line item.",
      },
      {
        q: "Do you offer standing seam metal accent roofing in Flower Mound?",
        a: "Yes. Metal accents over porches, entryways, and bay windows are popular in Flower Mound. We fabricate panels to fit and match the color palette of the primary shingle roof.",
      },
      {
        q: "Is tree debris damage covered by homeowner insurance in Flower Mound?",
        a: "In most cases, yes. Damage from fallen limbs during a storm is typically covered under your homeowner policy. We document the damage for your adjuster.",
      },
      {
        q: "What is the average lifespan of a Flower Mound roof?",
        a: "A quality architectural shingle roof in Flower Mound typically lasts 20 to 30 years, depending on hail history and ventilation. Impact-resistant shingles tend to last longer.",
      },
    ],
  },

  grapevine: {
    name: "Grapevine",
    slug: "grapevine",
    county: "Tarrant County",
    population: "54,000",
    neighbors: [
      { slug: "coppell", name: "Coppell" },
      { slug: "southlake", name: "Southlake" },
      { slug: "flower-mound", name: "Flower Mound" },
    ],
    intro:
      "Grapevine is a mid-sized Tarrant County city with a charming Main Street district, proximity to DFW Airport, and a housing stock that ranges from older cottages near downtown to larger homes around Grapevine Lake. The city has strict code enforcement and a well-defined permitting process, both of which we navigate routinely. Our teams know the Grapevine inspection process and build to meet it every time.",
    residential:
      "Homes near historic downtown Grapevine tend to be smaller with simpler rooflines, making them efficient projects that we can often complete in a single day. Lakeside homes near Grapevine Lake are larger, with higher wind exposure that calls for IKO Dynasty Class 3 impact-resistant shingles and reinforced ridge venting. Regardless of size, every Grapevine project gets the same attention to cleanup and final inspection.",
    commercial:
      "Grapevine Main Street hosts dozens of restaurants, wine tasting rooms, and retail shops, many in older buildings with flat or low-slope roofs. TPO single-ply membrane is our recommendation for these properties because it handles ponding water and reflects heat effectively. We also work on hotel and hospitality roofs near DFW Airport, where R-panel metal is used on maintenance structures and loading areas.",
    storm:
      "Grapevine is positioned in the path of storms moving northeast across Tarrant County, and the lake can amplify local wind speeds. After a major hail event, we prioritize Grapevine homes with visible damage and begin inspections within 48 hours. We handle the insurance claim documentation and keep homeowners updated at every stage of the process.",
    faqs: [
      {
        q: "Does Grapevine have special roofing requirements for lakeside homes?",
        a: "Grapevine code applies citywide, but lakeside homes benefit from enhanced wind-rated materials due to higher exposure. We recommend impact-resistant shingles with strong wind warranties for these properties.",
      },
      {
        q: "Can you work on historic buildings along Grapevine Main Street?",
        a: "Yes. We have experience with the older flat-roof structures in the Main Street district and use materials that meet both city code and the aesthetic expectations of the historic area.",
      },
      {
        q: "How fast can you replace a small Grapevine home roof?",
        a: "Most single-story Grapevine homes with straightforward rooflines can be completed in one day, from tear-off to final cleanup.",
      },
      {
        q: "Do you handle DFW Airport-area commercial roofing?",
        a: "We do. We work on hotel, office, and industrial roofs near DFW Airport in the Grapevine area, including both TPO membrane and metal systems.",
      },
    ],
  },

  carrollton: {
    name: "Carrollton",
    slug: "carrollton",
    county: "Dallas County",
    population: "141,000",
    neighbors: [
      { slug: "lewisville", name: "Lewisville" },
      { slug: "richardson", name: "Richardson" },
      { slug: "coppell", name: "Coppell" },
    ],
    intro:
      "Carrollton spans parts of Dallas, Denton, and Collin counties, but the majority of its residential neighborhoods fall within Dallas County jurisdiction. The city has a mix of 1970s and 1980s ranch homes in established areas and newer construction in the northern sections. We work across all of Carrollton and understand the permitting differences that can apply depending on which county jurisdiction a property falls in.",
    residential:
      "Established Carrollton neighborhoods like Rosemeade and Indian Creek feature single-story brick ranch homes that are straightforward to re-roof but often reveal decking issues during tear-off after 30 or 40 years. We replace damaged decking at no surprise cost because we include decking assessment in every estimate. IKO Dynasty Class 3 impact-resistant shingles are our standard recommendation for Carrollton homes, offering improved hail resistance over the basic three-tab shingles most of these homes were built with.",
    commercial:
      "Carrollton has a substantial light industrial and warehouse district along I-35E and the DART rail corridor, with flat-roof buildings that need durable, low-maintenance systems. TPO single-ply membrane is our primary installation for these commercial properties. We also work on the strip retail centers along Belt Line Road, where older built-up roofs are being replaced with modern single-ply systems.",
    storm:
      "Storms moving south through Denton County frequently reach Carrollton with enough energy to cause meaningful hail damage. We respond quickly with free inspections and detailed damage reports. Our project managers assist Carrollton homeowners with the insurance process, from opening the claim to coordinating the adjuster meeting.",
    faqs: [
      {
        q: "Does Carrollton fall under Dallas County building codes?",
        a: "Most of Carrollton is in Dallas County, but some northern areas cross into Denton or Collin counties. We verify the jurisdiction for every address and pull the correct permit.",
      },
      {
        q: "How do you handle rotted decking found during a Carrollton roof tear-off?",
        a: "We replace damaged decking as we go. Our estimates include a per-sheet cost for decking replacement so there are no surprises if we find soft spots.",
      },
      {
        q: "What is the most common roof type on Carrollton homes?",
        a: "Three-tab and architectural asphalt shingles are the most common. Many homeowners are upgrading to impact-resistant varieties during replacement.",
      },
      {
        q: "Do you offer commercial roof maintenance in Carrollton?",
        a: "Yes. We provide annual inspection and maintenance programs for Carrollton commercial buildings to extend roof life and catch small problems before they become expensive repairs.",
      },
    ],
  },

  richardson: {
    name: "Richardson",
    slug: "richardson",
    county: "Dallas County",
    population: "121,000",
    neighbors: [
      { slug: "plano", name: "Plano" },
      { slug: "dallas", name: "Dallas" },
      { slug: "garland", name: "Garland" },
    ],
    intro:
      "Richardson sits at the northern edge of Dallas County and is home to the Telecom Corridor, a dense concentration of technology companies that makes the city a mix of residential neighborhoods and corporate campuses. Homes here were largely built in the 1960s through 1980s, so roof replacement is a common need. We serve Richardson with the same attention to code compliance and workmanship that the city inspectors expect.",
    residential:
      "Many Richardson homes have relatively low-pitch roofs typical of mid-century ranch and split-level construction. These roofs shed water more slowly, so proper underlayment and flashing are critical during replacement. We install IKO Dynasty Class 3 impact-resistant shingles on Richardson homes and pay special attention to valleys and transitions where water can collect. In neighborhoods like Canyon Creek and Cottonwood Heights, tree cover is dense, so we also address moss buildup and debris accumulation during inspections.",
    commercial:
      "The Telecom Corridor gives Richardson a large inventory of office parks and data centers with flat-roof systems that must perform without failure. TPO single-ply membrane is our standard installation for these mission-critical buildings because it resists ponding water and provides excellent UV protection. We work closely with facility managers to schedule installations around operational requirements.",
    storm:
      "Dallas County hailstorms regularly affect Richardson, and the older housing stock is especially vulnerable because many original roofs were three-tab shingles with limited impact resistance. We provide free storm inspections and build insurance-ready documentation that includes aerial and close-up photography. Our goal is to make the claims process as straightforward as possible for every Richardson homeowner.",
    faqs: [
      {
        q: "Are Richardson mid-century homes harder to re-roof?",
        a: "Not necessarily harder, but they require attention to the lower pitch and older decking. We inspect decking during tear-off and replace any compromised sections.",
      },
      {
        q: "Do you work on data center roofs in Richardson?",
        a: "Yes. We install and maintain TPO membrane systems on data centers and other mission-critical facilities in the Richardson Telecom Corridor.",
      },
      {
        q: "How does tree cover affect Richardson roofs?",
        a: "Heavy tree cover traps moisture and debris, accelerating shingle wear. We recommend regular debris removal and inspect for moss or algae growth during every assessment.",
      },
      {
        q: "What is the permit process for roof replacement in Richardson?",
        a: "Richardson requires a building permit for full roof replacements. We submit the application, pay the fee, and schedule the post-installation inspection.",
      },
    ],
  },

  garland: {
    name: "Garland",
    slug: "garland",
    county: "Dallas County",
    population: "246,000",
    neighbors: [
      { slug: "dallas", name: "Dallas" },
      { slug: "richardson", name: "Richardson" },
      { slug: "mesquite", name: "Mesquite" },
    ],
    intro:
      "Garland is a large Dallas County city east of Dallas with a housing stock that spans post-war bungalows in the older core to suburban tract homes built through the 1990s. The city also has a sizable manufacturing and industrial base, creating steady demand for both residential and commercial roofing. We work throughout Garland and understand the permitting requirements of the city building department.",
    residential:
      "Garland older neighborhoods near Firewheel and Duck Creek have homes with simple gable roofs that are efficient to replace but often reveal aging plywood decking. We include decking inspection in every tear-off and replace sheets as needed. For these homes, IKO Dynasty Class 3 impact-resistant shingles are a smart upgrade that provides better protection than the original three-tab shingles and qualifies for insurance discounts. In newer Garland subdivisions, we also see demand for upgraded ventilation systems during re-roofing.",
    commercial:
      "Garland manufacturing district includes metal buildings, warehouses, and industrial parks that rely on R-panel metal and TPO single-ply membrane roofing. We handle both new installations and re-roofing on these large-footprint structures, where minimizing downtime is a priority for business owners. Retail plazas along the I-30 corridor round out our commercial work in the city.",
    storm:
      "Garland occupies the eastern portion of Dallas County, where storms often arrive with strong winds after crossing the urban core. Hail and wind damage are both common, and we inspect for each separately to ensure nothing is missed on the insurance claim. Our documentation process is thorough, and we coordinate directly with adjusters to keep claims moving.",
    faqs: [
      {
        q: "Does Garland have a lot of older roofs that need replacement?",
        a: "Yes. Many homes in central and south Garland were built in the 1960s through 1980s and are well past the typical shingle lifespan. Inspections frequently confirm the need for full replacement.",
      },
      {
        q: "Can you replace an R-panel metal roof on a Garland warehouse?",
        a: "We can. We remove and replace R-panel metal on industrial and agricultural buildings in Garland, including new fasteners and trim.",
      },
      {
        q: "How do wind and hail differ in terms of roof damage in Garland?",
        a: "Hail cracks and dislodges granules from shingles, while wind lifts edges and tears material. We inspect for both types because they require different repair approaches.",
      },
      {
        q: "Do you add attic ventilation during a Garland roof replacement?",
        a: "We evaluate ventilation on every project. Adding ridge vents or improving soffit intake during a replacement helps extend roof life and lower cooling costs.",
      },
    ],
  },

  mesquite: {
    name: "Mesquite",
    slug: "mesquite",
    county: "Dallas County",
    population: "150,000",
    neighbors: [
      { slug: "garland", name: "Garland" },
      { slug: "dallas", name: "Dallas" },
    ],
    intro:
      "Mesquite lies on the eastern side of Dallas County and is known for its rodeo heritage and affordable housing market. The city experienced steady residential growth from the 1970s through the 2000s, producing a large inventory of homes that are now entering or have passed the replacement window for their original roofs. We provide honest assessments and competitive pricing for Mesquite homeowners.",
    residential:
      "The typical Mesquite home is a single-story or two-story brick house with a standard-pitch gable roof, making re-roofing efficient and predictable. We install IKO Dynasty Class 3 impact-resistant shingles as our go-to option because the Dallas County hail risk makes anything less a short-term solution. In neighborhoods like Creek Crossing and Town East, we frequently replace roofs that have already been patched multiple times and need a clean start.",
    commercial:
      "Mesquite commercial roofing demand centers on the retail corridors along I-30 and Town East Boulevard, where flat-roof strip centers and big-box buildings are common. TPO single-ply membrane is our standard recommendation for these structures because it reflects heat and resists standing water. We also work on the metal roofs of rodeo and event facilities in the area.",
    storm:
      "Eastern Dallas County, including Mesquite, gets pummeled by spring storms that carry hail and strong straight-line winds. We offer free storm damage inspections and build detailed claim packages for Mesquite homeowners. Our process includes before-and-after photography and a line-item scope that matches what insurance adjusters need to approve the claim.",
    faqs: [
      {
        q: "What is the average cost to replace a roof in Mesquite?",
        a: "Cost depends on roof size, pitch, and material choice. We provide free estimates with transparent line items so you know exactly what you are paying for.",
      },
      {
        q: "How long do Mesquite roofs typically last?",
        a: "Standard architectural shingles last 20 to 25 years in the Dallas County climate. Impact-resistant shingles can extend that with better hail tolerance.",
      },
      {
        q: "Do you handle insurance claims for Mesquite storm damage?",
        a: "We assist with every step. We document the damage, meet with your adjuster on-site, and ensure the scope of work aligns with what your policy covers.",
      },
      {
        q: "Can I get a roof replacement in Mesquite without a permit?",
        a: "No. The City of Mesquite requires a building permit for roof replacements. We pull the permit and schedule the inspection as part of our service.",
      },
    ],
  },

  allen: {
    name: "Allen",
    slug: "allen",
    county: "Collin County",
    population: "107,000",
    neighbors: [
      { slug: "plano", name: "Plano" },
      { slug: "mckinney", name: "McKinney" },
      { slug: "wylie", name: "Wylie" },
    ],
    intro:
      "Allen is a family-oriented Collin County suburb that grew rapidly in the late 1990s and 2000s, and many of those homes are now due for their first roof replacement. The city is well-planned with consistent neighborhood standards, and most homes feature similar construction styles that we know well. Our crews are experienced with Allen permitting and inspection requirements.",
    residential:
      "Allen homes are predominantly two-story brick construction with multi-plane rooflines that include valleys, hips, and gable features. We install IKO Dynasty Class 3 impact-resistant shingles on these homes, which provides meaningful protection in a county that sees above-average hail frequency. In communities like Twin Creeks and Waterford Parks, HOA guidelines specify approved shingle colors, and we carry the full IKO Dynasty palette to match.",
    commercial:
      "Allen commercial development is concentrated along US-75 and Stacy Road, with shopping centers, medical offices, and restaurants that rely on flat-roof construction. TPO single-ply membrane is the efficient choice for these buildings, offering strong heat reflectivity and a clean installation. We coordinate with Allen business owners to minimize disruption during roof work.",
    storm:
      "Collin County is one of the most hail-active regions in Texas, and Allen is no exception. After a hail event, hundreds of Allen homes can sustain damage in a single evening. We scale up our inspection and installation teams during these events to serve the community quickly, and we help every homeowner navigate their insurance claim from beginning to end.",
    faqs: [
      {
        q: "Are Allen homes from the early 2000s ready for roof replacement?",
        a: "Many are. Homes built with builder-grade shingles around 2000 to 2005 are now 20-plus years old, and Collin County hail often shortens that lifespan further.",
      },
      {
        q: "What shingle colors do Allen HOAs typically approve?",
        a: "Neutral and earth tones are most common. We carry the full IKO Dynasty color range and can help you identify options that meet your HOA requirements.",
      },
      {
        q: "How do you handle a large-scale hail event in Allen?",
        a: "We add crews and extend hours to inspect and re-roof Allen homes as quickly as possible while maintaining our quality standards.",
      },
      {
        q: "Does the City of Allen require a roofing permit?",
        a: "Yes. A building permit is required for all full roof replacements in Allen. We manage the entire permit and inspection process.",
      },
    ],
  },

  "the-colony": {
    name: "The Colony",
    slug: "the-colony",
    county: "Collin County",
    population: "44,000",
    neighbors: [
      { slug: "frisco", name: "Frisco" },
      { slug: "plano", name: "Plano" },
      { slug: "lewisville", name: "Lewisville" },
    ],
    intro:
      "The Colony sits along the eastern shore of Lewisville Lake in Collin County, and that lakeside position creates unique roofing considerations including higher wind exposure and occasional lake-effect weather. The city has a mix of 1980s and 1990s homes near the lake and newer construction inland. We serve The Colony with materials and methods suited to the local conditions.",
    residential:
      "Lakeside homes in The Colony are more exposed to sustained winds, so we recommend IKO Dynasty Class 3 impact-resistant shingles with enhanced wind ratings for these properties. In established neighborhoods like Stewart Peninsula and Tribute, many homes still have their original 1980s-era three-tab shingles and are well overdue for replacement. We inspect decking on every tear-off and replace softened or delaminated plywood before installing new material.",
    commercial:
      "The Colony commercial development has grown with the addition of new retail and entertainment venues near the lake. These newer buildings typically feature flat-roof TPO single-ply membrane systems that we install and maintain. Older strip centers along Main Street use built-up or modified bitumen systems that we evaluate for remaining life and replace with TPO when the time comes.",
    storm:
      "The Colony proximity to Lewisville Lake can amplify wind speeds during storms, adding wind damage to the hail impact that is common across Collin County. We inspect for both hail strikes and wind-lifted shingles after every major weather event. Our claim documentation captures all damage types so homeowners get fair coverage from their insurance provider.",
    faqs: [
      {
        q: "Does The Colony lakeside location affect roofing?",
        a: "Yes. Lakeside homes face higher wind loads. We use enhanced wind-rated materials and fastening patterns to account for the increased exposure near Lewisville Lake.",
      },
      {
        q: "Are older homes in The Colony due for new roofs?",
        a: "Most 1980s and early 1990s homes in The Colony have exceeded the typical shingle lifespan and should be professionally inspected to assess their condition.",
      },
      {
        q: "What is the best roofing material for a wind-prone The Colony home?",
        a: "Impact-resistant architectural shingles with a high wind warranty perform well. Standing seam metal is another option for maximum wind resistance.",
      },
      {
        q: "Do you work on the newer commercial buildings near The Colony lakefront?",
        a: "We do. We install and maintain TPO membrane systems on the newer retail and mixed-use buildings in the lakefront development area.",
      },
    ],
  },

  coppell: {
    name: "Coppell",
    slug: "coppell",
    county: "Dallas County",
    population: "41,000",
    neighbors: [
      { slug: "irving", name: "Irving" },
      { slug: "flower-mound", name: "Flower Mound" },
      { slug: "grapevine", name: "Grapevine" },
    ],
    intro:
      "Coppell is a tightly knit Dallas County community with excellent schools and well-maintained neighborhoods that were largely built in the 1980s and 1990s. The city is nearly fully developed, so almost all of our work here is re-roofing rather than new construction. Coppell homeowners take pride in their properties, and we deliver the quality of workmanship and cleanup that reflects that standard.",
    residential:
      "Coppell homes are primarily two-story brick construction with moderate complexity rooflines. Most were originally roofed with three-tab or early architectural shingles that have now reached end of life. We replace these with IKO Dynasty Class 3 impact-resistant shingles, which provide a noticeable visual upgrade along with better hail and wind performance. In Riverchase and Northlake Woodlands, HOA color standards are consistent, and we keep popular Coppell shingle colors in stock for faster turnaround.",
    commercial:
      "Coppell commercial properties are concentrated along Denton Tap Road and Sandy Lake Road, with medical offices, small retail plazas, and professional services buildings. These flat-roof structures are well suited to TPO single-ply membrane, which we install with fully adhered or mechanically fastened methods depending on the building structure. We schedule commercial work to avoid disrupting business operations.",
    storm:
      "Coppell catches storms moving northeast through Dallas County, and the city has sustained significant hail damage in multiple recent storm seasons. We offer free post-storm inspections to Coppell homeowners and provide same-week turnaround on damage reports. Our documentation meets insurance industry standards, and our project managers attend adjuster meetings on behalf of homeowners.",
    faqs: [
      {
        q: "How do I know if my Coppell roof needs replacement or just repair?",
        a: "If the roof is 20-plus years old or has sustained hail damage across a large area, replacement is usually the better investment. We provide an honest assessment after inspection.",
      },
      {
        q: "Do Coppell HOAs have strict roofing requirements?",
        a: "Most Coppell HOAs specify approved shingle colors and styles. We work within those guidelines and can show samples that match your association requirements.",
      },
      {
        q: "How long does a Coppell roof replacement take?",
        a: "Most Coppell homes take one to two days from tear-off to completion, depending on roof size and complexity.",
      },
      {
        q: "Will you handle the Coppell building permit for my roof?",
        a: "Yes. We pull the permit, manage the process, and schedule the city inspection after installation is complete.",
      },
    ],
  },

  southlake: {
    name: "Southlake",
    slug: "southlake",
    county: "Tarrant County",
    population: "32,000",
    neighbors: [
      { slug: "grapevine", name: "Grapevine" },
      { slug: "keller", name: "Keller" },
      { slug: "flower-mound", name: "Flower Mound" },
    ],
    intro:
      "Southlake is one of the most affluent communities in Tarrant County, with large custom homes, estate properties, and a town center that reflects the city high standards. Roofing on Southlake homes is rarely simple: steep pitches, turrets, dormers, and mixed-material designs are common. We bring the skilled labor and project management these complex jobs require.",
    residential:
      "Southlake homes often feature 10/12 and 12/12 roof pitches that require safety staging and experienced crews comfortable working at steep angles. We install IKO Dynasty Class 3 impact-resistant shingles on the main roof field and integrate standing seam metal accents on entryways, bay windows, and cupolas where the architectural plan calls for it. In estates throughout Timarron and Southlake Town Square, copper flashing and custom gutter integration are standard parts of a Southlake roof replacement.",
    commercial:
      "Southlake Town Square and the surrounding retail and office buildings represent the city primary commercial roofing market. These buildings use a mix of flat-roof TPO single-ply membrane on the main structure and decorative steep-slope elements on street-facing facades. We handle both systems and coordinate with property management to maintain the polished appearance Southlake Town Square is known for.",
    storm:
      "Tarrant County hailstorms do not discriminate by property value, and Southlake homes sustain the same storm damage as anywhere else in the region. The difference is that the cost of replacement on a large, complex Southlake roof is significant, making thorough insurance documentation critical. We build comprehensive claim packages with aerial measurements, detailed photography, and line-item scopes that leave nothing out.",
    faqs: [
      {
        q: "Why is Southlake roof replacement more expensive than in other cities?",
        a: "Southlake homes typically have steep pitches, complex designs, and premium materials that require more labor hours and specialized installation techniques. We provide detailed estimates that explain every cost.",
      },
      {
        q: "Do you install copper flashing on Southlake homes?",
        a: "Yes. Copper flashing and accents are common on Southlake estates. We source and install copper components that match the architectural design of the home.",
      },
      {
        q: "Can you match the existing metal accents on my Southlake roof?",
        a: "We fabricate standing seam metal panels in a range of colors and profiles to match or complement existing roof features on Southlake homes.",
      },
      {
        q: "How do Southlake building codes affect roofing projects?",
        a: "Southlake has detailed building standards including material specifications and aesthetic guidelines. We are familiar with the city requirements and build every project to meet them.",
      },
    ],
  },

  keller: {
    name: "Keller",
    slug: "keller",
    county: "Tarrant County",
    population: "48,000",
    neighbors: [
      { slug: "southlake", name: "Southlake" },
      { slug: "fort-worth", name: "Fort Worth" },
    ],
    intro:
      "Keller is a well-established Tarrant County suburb north of Fort Worth known for its spacious lots and quality schools. The city saw most of its residential growth in the 1990s and early 2000s, and many of those roofs are now approaching the 25-year mark. We work throughout Keller and keep up with the city building department requirements for permits and inspections.",
    residential:
      "Keller homes tend to be larger single-family properties with multi-plane roof systems that include hips, valleys, and gable accents. We install IKO Dynasty Class 3 impact-resistant shingles on these homes, paying particular attention to the valley and transition details that can fail first on a complex roof. Homeowners in Hidden Lakes and Marshall Ridge often ask about attic ventilation improvements during re-roofing, which we evaluate and recommend on a case-by-case basis.",
    commercial:
      "Keller commercial properties line Keller Parkway and Bear Creek Parkway, with small offices, retail shops, and restaurants. Most use flat-roof systems that we maintain and replace with TPO single-ply membrane as they age. The commercial footprint in Keller is smaller than some neighboring cities, so we give each project close personal attention.",
    storm:
      "Keller sits in northern Tarrant County where storms coming from the west and northwest arrive with full strength. We see consistent hail claims from Keller homeowners after spring storm events and respond with prompt inspections. Our project managers build insurance documentation that stands up to scrutiny and helps homeowners receive fair settlements.",
    faqs: [
      {
        q: "When should Keller homeowners start thinking about roof replacement?",
        a: "If your Keller home was built in the late 1990s or early 2000s, the roof is nearing or past the typical 20- to 25-year lifespan. An inspection now can help you plan and budget.",
      },
      {
        q: "Is attic ventilation important for Keller homes?",
        a: "Very. Keller summers are intense, and proper ridge and soffit ventilation reduces heat buildup in the attic, extending shingle life and lowering cooling costs.",
      },
      {
        q: "Does Keller get as much hail as Fort Worth?",
        a: "Yes. Keller and Fort Worth share the same storm exposure in northern Tarrant County. Impact-resistant shingles are a practical choice for both cities.",
      },
      {
        q: "What does a Keller roof replacement permit cost?",
        a: "Permit fees are set by the City of Keller and vary by project scope. We include the permit cost in our estimate and handle the entire application process.",
      },
    ],
  },

  rockwall: {
    name: "Rockwall",
    slug: "rockwall",
    county: "Rockwall County",
    population: "47,000",
    neighbors: [
      { slug: "wylie", name: "Wylie" },
      { slug: "garland", name: "Garland" },
      { slug: "mesquite", name: "Mesquite" },
    ],
    intro:
      "Rockwall is the county seat of Rockwall County, the smallest county in Texas, and sits along the eastern shore of Lake Ray Hubbard. The lakeside setting brings both higher wind exposure and a community that values property appearance. Homes here range from established neighborhoods near the historic downtown to upscale lakefront properties, and we bring the right roofing approach to each.",
    residential:
      "Lakefront and near-lake homes in Rockwall face sustained winds off Lake Ray Hubbard, so we recommend IKO Dynasty Class 3 impact-resistant shingles with high wind-speed ratings for these properties. In neighborhoods like Stonebridge Ranch and Adriatica, homes have moderate-pitch roofs that are efficient to replace but still benefit from upgraded materials. Standing seam metal roofing is popular on Rockwall waterfront homes where homeowners want maximum lifespan and wind resistance.",
    commercial:
      "Rockwall commercial activity centers on I-30 and the areas around the historic downtown square, with restaurants, retail shops, and professional offices. These buildings use a mix of flat-roof TPO single-ply membrane and sloped shingle systems. We handle both and work with Rockwall business owners to schedule projects during off-peak hours.",
    storm:
      "Rockwall County gets hit hard by storms tracking east across the metroplex, and the open water of Lake Ray Hubbard can amplify wind speeds on the east side of the lake. After a storm, we prioritize lakefront properties that may have wind damage in addition to hail. Our insurance documentation captures every type of damage so homeowners receive complete claim coverage.",
    faqs: [
      {
        q: "Does Lake Ray Hubbard affect Rockwall roofing needs?",
        a: "Yes. Properties near the lake face higher winds, which increases the importance of proper installation technique and wind-rated materials.",
      },
      {
        q: "Is Rockwall County in a high hail risk area?",
        a: "Rockwall County experiences hail events comparable to the rest of the DFW metroplex. Impact-resistant shingles are a sound investment here.",
      },
      {
        q: "Do you serve the entire Rockwall County area?",
        a: "We do. We work in Rockwall and the surrounding Rockwall County communities, including lakefront properties and rural acreages.",
      },
      {
        q: "What permits does Rockwall require for roofing?",
        a: "The City of Rockwall requires a building permit for roof replacements. We manage the application and inspection process for every project.",
      },
    ],
  },

  mansfield: {
    name: "Mansfield",
    slug: "mansfield",
    county: "Tarrant County",
    population: "75,000",
    neighbors: [
      { slug: "arlington", name: "Arlington" },
      { slug: "burleson", name: "Burleson" },
      { slug: "fort-worth", name: "Fort Worth" },
    ],
    intro:
      "Mansfield is a growing Tarrant County suburb south of Arlington with a strong sense of community and neighborhoods that range from established 1990s developments to brand-new master-planned communities on the southern and eastern edges. Roofing here spans first-time replacements on older homes and warranty-driven upgrades on newer ones. We work closely with Mansfield homeowners to deliver the right solution for each property.",
    residential:
      "Homes in established Mansfield neighborhoods like Walnut Creek and Creekview Estates are reaching the 20-year mark and often need full replacement. We install IKO Dynasty Class 3 impact-resistant shingles, which are well suited to the Tarrant County hail climate. In newer Mansfield communities, homeowners sometimes opt for standing seam metal on portions of the roof for a modern aesthetic combined with superior storm performance.",
    commercial:
      "Mansfield has a growing business corridor along Highway 287 with restaurants, retail plazas, and professional offices. Flat-roof buildings in this area benefit from TPO single-ply membrane installation, which provides energy efficiency and durability. We also work on R-panel metal for the agricultural and equine properties south of town where Mansfield transitions to more rural land.",
    storm:
      "Southern Tarrant County, including Mansfield, sits in an active storm corridor that produces hail-bearing supercells each spring. We mobilize quickly after major storms and offer free inspections to every affected homeowner. Insurance claim assistance is built into our process, and our project managers guide Mansfield homeowners from damage documentation through final payment.",
    faqs: [
      {
        q: "Is Mansfield growing enough to need new-construction roofing?",
        a: "Yes. Mansfield is adding new subdivisions on its southern and eastern edges. We work with builders and homeowners on new-construction roof installations.",
      },
      {
        q: "What roofing works best on Mansfield equine or agricultural properties?",
        a: "R-panel metal roofing is the practical choice for barns, arenas, and agricultural buildings. It covers large spans economically and holds up to Tarrant County weather.",
      },
      {
        q: "How does Mansfield weather compare to Fort Worth for hail?",
        a: "Mansfield and Fort Worth share the same storm exposure in Tarrant County. Both cities see frequent hail, making impact-resistant materials a smart choice.",
      },
      {
        q: "Do you handle roof replacements on Mansfield HOA homes?",
        a: "We do. We match HOA-approved colors and styles and coordinate with association management on scheduling and compliance.",
      },
    ],
  },

  weatherford: {
    name: "Weatherford",
    slug: "weatherford",
    county: "Parker County",
    population: "35,000",
    neighbors: [
      { slug: "fort-worth", name: "Fort Worth" },
    ],
    intro:
      "Weatherford is the county seat of Parker County, located west of Fort Worth where the urban fringe gives way to ranch land and rural acreages. Roofing here serves a wide range of structures, from Victorian-era homes around the courthouse square to modern country estates and working agricultural buildings. Our crews are comfortable on all of them, and we understand the Parker County permitting process.",
    residential:
      "Weatherford homes come in more variety than most DFW suburbs. Near the town square, we work on older homes with complex trim and steep gables that require careful workmanship. On the outskirts, homes on acreage often include detached garages, workshops, and barns that need roofing alongside the main house. We install IKO Dynasty Class 3 impact-resistant shingles on primary residences and offer standing seam metal or R-panel metal for outbuildings where durability and cost efficiency matter most.",
    commercial:
      "Weatherford commercial properties include the courthouse square storefronts, retail along I-20, and agricultural supply businesses that serve the surrounding ranch community. Flat-roof buildings get TPO single-ply membrane, while metal buildings typically receive R-panel metal re-roofing. We also handle rolled roofing on smaller commercial outbuildings where a simple, budget-friendly solution is appropriate.",
    storm:
      "Parker County is often the first area hit by storms moving in from the west, and Weatherford takes the brunt before those cells reach Fort Worth. Hail can be severe, and the rural properties outside city limits sometimes go uninspected for weeks after a storm. We offer free inspections across Parker County and build insurance documentation that accounts for damage on multiple structures per property.",
    faqs: [
      {
        q: "Do you serve rural properties outside Weatherford city limits?",
        a: "Yes. We work throughout Parker County, including ranch properties, acreages, and rural homes outside city limits.",
      },
      {
        q: "Is metal roofing popular in the Weatherford area?",
        a: "Very. Standing seam and R-panel metal are common on Weatherford homes, barns, and workshops because they handle the exposed western weather well and last decades.",
      },
      {
        q: "How does Parker County hail compare to the rest of DFW?",
        a: "Parker County often takes the initial hit from westbound storms, so hail frequency is comparable to or higher than the rest of the metroplex.",
      },
      {
        q: "Can you roof both my Weatherford home and my barn in one project?",
        a: "Absolutely. We frequently handle multiple structures on a single Weatherford property and can include all buildings in one estimate and one insurance claim.",
      },
      {
        q: "Do you work on historic homes near the Weatherford courthouse square?",
        a: "We do. We have experience with the older architectural styles in downtown Weatherford and select materials that respect the historic character while improving performance.",
      },
    ],
  },

  waxahachie: {
    name: "Waxahachie",
    slug: "waxahachie",
    county: "Ellis County",
    population: "41,000",
    neighbors: [
      { slug: "mansfield", name: "Mansfield" },
      { slug: "burleson", name: "Burleson" },
    ],
    intro:
      "Waxahachie is the county seat of Ellis County, located about 30 miles south of Dallas. The city is known for its stunning courthouse, well-preserved Victorian homes, and a growing suburban population drawn by more affordable housing. Roofing projects here range from delicate historic restoration near the square to standard residential replacements in newer neighborhoods. We serve Waxahachie and surrounding Ellis County with dependable workmanship.",
    residential:
      "The historic districts of Waxahachie contain some of the most architecturally distinctive homes in North Texas, with steep pitches, fish-scale siding, turrets, and ornamental trim that all affect how a roof is approached. We work carefully on these homes to preserve their character while installing modern underlayment and shingles underneath. In newer Waxahachie subdivisions like The Villages of Waxahachie, we install IKO Dynasty Class 3 impact-resistant shingles on production-style homes where efficiency and storm resistance are the top priorities.",
    commercial:
      "Waxahachie commercial roofing includes the historic square storefronts, I-35E corridor retail and logistics buildings, and local businesses along Highway 77. Flat-roof commercial buildings receive TPO single-ply membrane, while industrial and warehouse structures often use R-panel metal. We schedule commercial work to minimize impact on Waxahachie business operations.",
    storm:
      "Ellis County sits in the southern portion of the DFW storm corridor and regularly experiences hail events during the spring months. Waxahachie homes, particularly the older ones, are vulnerable because many were built before impact-resistant materials were available. We provide free post-storm inspections and comprehensive insurance documentation for Ellis County homeowners.",
    faqs: [
      {
        q: "Do you have experience with historic Waxahachie homes?",
        a: "Yes. We have worked on homes in the Waxahachie historic districts and understand the care required to maintain architectural integrity during a roof replacement.",
      },
      {
        q: "Is Waxahachie in a high hail risk area?",
        a: "Ellis County experiences regular hail activity, particularly during spring. Impact-resistant shingles are a worthwhile investment for Waxahachie homeowners.",
      },
      {
        q: "Does Waxahachie require a roofing permit?",
        a: "Yes. The City of Waxahachie requires a building permit for full roof replacements. We manage the permit process from application through final inspection.",
      },
      {
        q: "Can you work on warehouse roofs along I-35E near Waxahachie?",
        a: "We can. We install and replace R-panel metal and TPO systems on industrial and logistics buildings along the I-35E corridor in Ellis County.",
      },
    ],
  },

  burleson: {
    name: "Burleson",
    slug: "burleson",
    county: "Tarrant County",
    population: "49,000",
    neighbors: [
      { slug: "mansfield", name: "Mansfield" },
      { slug: "fort-worth", name: "Fort Worth" },
      { slug: "waxahachie", name: "Waxahachie" },
    ],
    intro:
      "Burleson is a growing city on the southern edge of Tarrant County that has transitioned from a small rural town to a thriving suburb over the past two decades. The housing stock includes older homes near Old Town Burleson and newer master-planned communities on the city expanding perimeter. We provide roofing services to both established and new Burleson neighborhoods with equal attention to quality.",
    residential:
      "Older Burleson homes near the historic center often have simpler rooflines but aging decking and ventilation systems that need attention during replacement. In newer communities like Hidden Creek and Oak Valley, two-story homes with multi-plane roofs are the norm, and we install IKO Dynasty Class 3 impact-resistant shingles to handle the Tarrant County hail risk. Burleson is also seeing increased interest in standing seam metal roofing for homeowners who want the longest-lasting option available.",
    commercial:
      "Burleson commercial properties along I-35W and the Old Town area include restaurants, retail shops, and professional offices. Flat-roof buildings in these commercial zones receive TPO single-ply membrane, while metal structures on the rural edges of town get R-panel metal. We schedule commercial work with minimal disruption and maintain clear communication with property owners throughout the project.",
    storm:
      "Southern Tarrant County, including Burleson, is frequently in the path of spring storm systems that produce damaging hail. We deploy inspection teams to Burleson after every significant weather event and provide free damage assessments. Our insurance documentation is detailed and designed to help homeowners receive the full coverage they are entitled to under their policy.",
    faqs: [
      {
        q: "Is Burleson growing fast enough to support new-construction roofing?",
        a: "Yes. Burleson is adding new residential developments regularly, and we work with builders on new-construction roofing as well as replacements on existing homes.",
      },
      {
        q: "Do older Burleson homes need special attention during re-roofing?",
        a: "They can. Homes near Old Town Burleson may have aging decking and inadequate ventilation that should be addressed during a roof replacement for best results.",
      },
      {
        q: "What type of metal roofing do you install in Burleson?",
        a: "We install both standing seam metal for residential homes and R-panel metal for agricultural and light commercial buildings in the Burleson area.",
      },
      {
        q: "How does Burleson storm exposure compare to Fort Worth?",
        a: "Burleson shares the same southern Tarrant County storm corridor as the southern portions of Fort Worth. Hail frequency and severity are comparable.",
      },
    ],
  },

  prosper: {
    name: "Prosper",
    slug: "prosper",
    county: "Collin County",
    population: "35,000",
    neighbors: [
      { slug: "frisco", name: "Frisco" },
      { slug: "mckinney", name: "McKinney" },
      { slug: "the-colony", name: "The Colony" },
    ],
    intro:
      "Prosper is one of the fastest-growing towns in Collin County, transforming from a small farming community into a destination for new master-planned developments with custom and semi-custom homes. Nearly everything in Prosper is new construction, which means our roofing work here focuses on upgrades from builder-grade materials and first-generation replacements on the earliest subdivisions. We stay current with Prosper building codes as they evolve with the town rapid growth.",
    residential:
      "Prosper homes are predominantly new and feature large footprints with complex rooflines. Many builders install basic architectural shingles to keep costs down, and we offer homeowners the option to upgrade to IKO Dynasty Class 3 impact-resistant shingles either at initial construction or during the first replacement cycle. Custom homes in communities like Windsong Ranch and Star Trail sometimes incorporate standing seam metal accents and specialty flashing details that we fabricate on-site.",
    commercial:
      "Prosper commercial development is expanding quickly along Preston Road, US-380, and the Dallas North Tollway extension, with new retail centers, medical offices, and restaurants going up each year. These new builds use flat-roof TPO single-ply membrane almost exclusively, and we work with developers during construction as well as property managers after completion. The pace of Prosper commercial growth means we are one of the busier roofing contractors in town.",
    storm:
      "Collin County sees some of the highest hail frequency in Texas, and Prosper is no exception. Even newer homes can sustain hail damage that warrants a full roof replacement, and insurance claims on new homes can be straightforward when proper documentation is provided. We inspect, document, and assist with insurance claims for Prosper homeowners of all property ages.",
    faqs: [
      {
        q: "Should I upgrade my new Prosper home roof from builder-grade shingles?",
        a: "It depends on the material the builder used. If basic three-tab or standard architectural shingles were installed, upgrading to impact-resistant shingles can improve performance and reduce insurance costs.",
      },
      {
        q: "Does Prosper have different building codes than Frisco or McKinney?",
        a: "Prosper has its own building department and code amendments. We are familiar with the local requirements and pull Prosper-specific permits for every project.",
      },
      {
        q: "How soon after construction should I expect to replace my Prosper roof?",
        a: "With quality materials and no storm damage, 20 to 25 years is typical. However, Collin County hail can shorten that timeline, so regular inspections are important.",
      },
      {
        q: "Do you work with Prosper home builders on new-construction roofing?",
        a: "Yes. We partner with builders in Prosper to provide roofing on new homes and offer upgrade packages for buyers who want better-than-standard materials.",
      },
    ],
  },

  wylie: {
    name: "Wylie",
    slug: "wylie",
    county: "Collin County",
    population: "55,000",
    neighbors: [
      { slug: "allen", name: "Allen" },
      { slug: "plano", name: "Plano" },
      { slug: "rockwall", name: "Rockwall" },
    ],
    intro:
      "Wylie is a Collin County city east of Allen that has seen significant residential growth over the past 15 years. The city sits near the northern shore of Lake Lavon, and properties range from suburban tract homes to rural acreages with outbuildings. We serve Wylie homeowners and property owners with roofing solutions that account for both suburban and semi-rural settings.",
    residential:
      "Newer Wylie subdivisions like Birmingham Farms and Saddlebrook feature two-story homes with standard-complexity roofs that are efficient to re-roof. We install IKO Dynasty Class 3 impact-resistant shingles as our standard recommendation for Wylie because Collin County hail makes impact resistance essential. On acreage properties east of town, we also handle roofing for detached workshops, barns, and metal-frame buildings using R-panel metal or standing seam metal depending on the owner preference and budget.",
    commercial:
      "Wylie commercial growth is centered along FM 544 and Highway 78, with new retail plazas, restaurants, and service businesses. Flat-roof construction on these buildings calls for TPO single-ply membrane, which delivers reliable performance with minimal upkeep. We also serve the light industrial properties near the Lake Lavon area that use metal roofing systems.",
    storm:
      "Wylie sits in eastern Collin County, where spring storms arrive with strong energy and frequently produce large hail. After a major storm, we prioritize Wylie inspections and can scale our crews to handle neighborhood-wide replacement projects. We assist every homeowner with insurance documentation and adjuster coordination to keep the claims process on track.",
    faqs: [
      {
        q: "Does Wylie proximity to Lake Lavon affect roofing?",
        a: "Properties closer to the lake may face higher wind exposure. We recommend enhanced wind-rated materials and reinforced installation for lake-adjacent Wylie homes.",
      },
      {
        q: "Can you roof outbuildings on Wylie acreage properties?",
        a: "Yes. We install R-panel metal and standing seam metal on barns, workshops, and detached garages throughout the Wylie area.",
      },
      {
        q: "What permits does the City of Wylie require for roofing?",
        a: "Wylie requires a building permit for full roof replacements. We handle the permit application and post-installation inspection.",
      },
      {
        q: "How does Collin County hail risk affect Wylie insurance rates?",
        a: "Collin County high hail frequency can lead to higher premiums. Installing impact-resistant shingles often qualifies homeowners for insurance discounts that help offset the cost.",
      },
    ],
  },
};