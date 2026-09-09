// AUTO-GENERATED from the original AppRoutes.tsx — one entry per public route.
// hydrate:true pages ship their JS (forms/tabs); all others are pure static HTML.
import AboutPage from '../app/pages/AboutPage';
import PrivacyPolicyPage from '../app/pages/PrivacyPolicyPage';
import SmsTermsPage from '../app/pages/SmsTermsPage';
import AllenPage from '../app/pages/cities/AllenPage';
import ArlingtonPage from '../app/pages/cities/ArlingtonPage';
import BestRoofingMaterials from '../app/pages/blog/BestRoofingMaterials';
import BlogPage from '../app/pages/BlogPage';
import BurlesonPage from '../app/pages/cities/BurlesonPage';
import CarrolltonPage from '../app/pages/cities/CarrolltonPage';
import ChooseCommercialRooferDFW from '../app/pages/commercial/ChooseCommercialRooferDFW';
import ChooseRightRoofer from '../app/pages/blog/ChooseRightRoofer';
import ColleyvillePage from '../app/pages/cities/ColleyvillePage';
import CommercialInsuranceClaimTexas from '../app/pages/commercial/CommercialInsuranceClaimTexas';
import CommercialRoofingCostDFW from '../app/pages/commercial/CommercialRoofingCostDFW';
import CommercialRoofingPage from '../app/pages/services/CommercialRoofingPage';
import CommercialRoofingSystemsDFW from '../app/pages/commercial/CommercialRoofingSystemsDFW';
import ContactPage from '../app/pages/ContactPage';
import CoppellPage from '../app/pages/cities/CoppellPage';
import DFWHailSeasonGuide from '../app/pages/commercial/DFWHailSeasonGuide';
import DallasPage from '../app/pages/cities/DallasPage';
import DentonPage from '../app/pages/cities/DentonPage';
import FlowerMoundPage from '../app/pages/cities/FlowerMoundPage';
import FortWorthPage from '../app/pages/cities/FortWorthPage';
import FortWorthRoofingPage from '../app/pages/cities/FortWorthRoofingPage';
import FriscoPage from '../app/pages/cities/FriscoPage';
import GarlandPage from '../app/pages/cities/GarlandPage';
import GrandPrairiePage from '../app/pages/cities/GrandPrairiePage';
import GrapevinePage from '../app/pages/cities/GrapevinePage';
import HailstormDFW from '../app/pages/blog/HailstormDFW';
import HasletRoofingPage from '../app/pages/cities/HasletRoofingPage';
import HomePage from '../app/pages/HomePage';
import InsuranceClaimRoofingGuide from '../app/pages/blog/InsuranceClaimRoofingGuide';
import IrvingPage from '../app/pages/cities/IrvingPage';
import KellerPage from '../app/pages/cities/KellerPage';
import LewisvillePage from '../app/pages/cities/LewisvillePage';
import MaintenancePage from '../app/pages/MaintenancePage';
import MansfieldPage from '../app/pages/cities/MansfieldPage';
import McKinneyPage from '../app/pages/cities/McKinneyPage';
import MesquitePage from '../app/pages/cities/MesquitePage';
import MetalRoofingDFW from '../app/pages/blog/MetalRoofingDFW';
import MetalRoofingPage from '../app/pages/services/MetalRoofingPage';
import NorthRichlandHillsPage from '../app/pages/cities/NorthRichlandHillsPage';
import PlanoPage from '../app/pages/cities/PlanoPage';
import ProsperPage from '../app/pages/cities/ProsperPage';
import RhomeRoofingPage from '../app/pages/cities/RhomeRoofingPage';
import RichardsonPage from '../app/pages/cities/RichardsonPage';
import RockwallPage from '../app/pages/cities/RockwallPage';
import RoofCoatingsCommercial from '../app/pages/blog/RoofCoatingsCommercial';
import RoofInspectionsPage from '../app/pages/services/RoofInspectionsPage';
import RoofMaintenanceSavesMoney from '../app/pages/blog/RoofMaintenanceSavesMoney';
import RoofRepairPage from '../app/pages/services/RoofRepairPage';
import RoofReplacementCost from '../app/pages/blog/RoofReplacementCost';
import RoofReplacementPage from '../app/pages/services/RoofReplacementPage';
import RoofVentilationTexasSummer from '../app/pages/blog/RoofVentilationTexasSummer';
import SaginawRoofingPage from '../app/pages/cities/SaginawRoofingPage';
import ServiceAreasPage from '../app/pages/ServiceAreasPage';
import ServicesPage from '../app/pages/ServicesPage';
import SignsReplaceRoof from '../app/pages/blog/SignsReplaceRoof';
import SouthlakePage from '../app/pages/cities/SouthlakePage';
import SpringRoofInspectionChecklist from '../app/pages/blog/SpringRoofInspectionChecklist';
import StormHailDamagePage from '../app/pages/services/StormHailDamagePage';
import TeamPage from '../app/pages/TeamPage';
import TexasHeatRoofLifespan from '../app/pages/blog/TexasHeatRoofLifespan';
import TheColonyPage from '../app/pages/cities/TheColonyPage';
import WaxahachePage from '../app/pages/cities/WaxahachiePage';
import WeatherfordPage from '../app/pages/cities/WeatherfordPage';
import WyliePage from '../app/pages/cities/WyliePage';
import RoofingCityPage from '../app/pages/roofing/RoofingCityPage';
import NotFoundPage from '../app/pages/NotFoundPage';
import { cityData } from '../app/data/roofingCityData';

export interface RouteEntry {
  path: string;
  Component: React.ComponentType;
  params?: Record<string, string>;
  hydrate?: boolean;
}

const HYDRATED = new Set(['/', '/contact', '/maintenance']);

export const routeEntries: RouteEntry[] = [
  { path: '/', Component: HomePage, hydrate: HYDRATED.has('/') },
  { path: '/about', Component: AboutPage, hydrate: HYDRATED.has('/about') },
  { path: '/privacy-policy', Component: PrivacyPolicyPage, hydrate: HYDRATED.has('/privacy-policy') },
  { path: '/sms-terms', Component: SmsTermsPage, hydrate: HYDRATED.has('/sms-terms') },
  { path: '/services', Component: ServicesPage, hydrate: HYDRATED.has('/services') },
  { path: '/maintenance', Component: MaintenancePage, hydrate: HYDRATED.has('/maintenance') },
  { path: '/team', Component: TeamPage, hydrate: HYDRATED.has('/team') },
  { path: '/contact', Component: ContactPage, hydrate: HYDRATED.has('/contact') },
  { path: '/blog', Component: BlogPage, hydrate: HYDRATED.has('/blog') },
  { path: '/blog/texas-heat-impacts-roof-lifespan', Component: TexasHeatRoofLifespan, hydrate: HYDRATED.has('/blog/texas-heat-impacts-roof-lifespan') },
  { path: '/blog/what-to-do-after-hailstorm-dfw', Component: HailstormDFW, hydrate: HYDRATED.has('/blog/what-to-do-after-hailstorm-dfw') },
  { path: '/blog/best-roofing-materials-dfw-homes', Component: BestRoofingMaterials, hydrate: HYDRATED.has('/blog/best-roofing-materials-dfw-homes') },
  { path: '/blog/why-roof-maintenance-saves-money', Component: RoofMaintenanceSavesMoney, hydrate: HYDRATED.has('/blog/why-roof-maintenance-saves-money') },
  { path: '/blog/roof-coatings-commercial-roof-life', Component: RoofCoatingsCommercial, hydrate: HYDRATED.has('/blog/roof-coatings-commercial-roof-life') },
  { path: '/blog/signs-replace-roof-north-texas', Component: SignsReplaceRoof, hydrate: HYDRATED.has('/blog/signs-replace-roof-north-texas') },
  { path: '/blog/roof-replacement-cost-dallas-fort-worth', Component: RoofReplacementCost, hydrate: HYDRATED.has('/blog/roof-replacement-cost-dallas-fort-worth') },
  { path: '/blog/spring-roof-inspection-checklist-dfw', Component: SpringRoofInspectionChecklist, hydrate: HYDRATED.has('/blog/spring-roof-inspection-checklist-dfw') },
  { path: '/blog/roof-ventilation-texas-summer', Component: RoofVentilationTexasSummer, hydrate: HYDRATED.has('/blog/roof-ventilation-texas-summer') },
  { path: '/blog/how-to-file-roof-insurance-claim-texas', Component: InsuranceClaimRoofingGuide, hydrate: HYDRATED.has('/blog/how-to-file-roof-insurance-claim-texas') },
  { path: '/blog/metal-roofing-dfw-pros-cons-cost', Component: MetalRoofingDFW, hydrate: HYDRATED.has('/blog/metal-roofing-dfw-pros-cons-cost') },
  { path: '/blog/how-to-choose-roofing-contractor-dfw', Component: ChooseRightRoofer, hydrate: HYDRATED.has('/blog/how-to-choose-roofing-contractor-dfw') },
  { path: '/service-areas', Component: ServiceAreasPage, hydrate: HYDRATED.has('/service-areas') },
  { path: '/service-areas/dallas', Component: DallasPage, hydrate: HYDRATED.has('/service-areas/dallas') },
  { path: '/service-areas/fort-worth', Component: FortWorthPage, hydrate: HYDRATED.has('/service-areas/fort-worth') },
  { path: '/service-areas/irving', Component: IrvingPage, hydrate: HYDRATED.has('/service-areas/irving') },
  { path: '/service-areas/arlington', Component: ArlingtonPage, hydrate: HYDRATED.has('/service-areas/arlington') },
  { path: '/service-areas/plano', Component: PlanoPage, hydrate: HYDRATED.has('/service-areas/plano') },
  { path: '/service-areas/frisco', Component: FriscoPage, hydrate: HYDRATED.has('/service-areas/frisco') },
  { path: '/service-areas/mckinney', Component: McKinneyPage, hydrate: HYDRATED.has('/service-areas/mckinney') },
  { path: '/service-areas/denton', Component: DentonPage, hydrate: HYDRATED.has('/service-areas/denton') },
  { path: '/service-areas/lewisville', Component: LewisvillePage, hydrate: HYDRATED.has('/service-areas/lewisville') },
  { path: '/service-areas/flower-mound', Component: FlowerMoundPage, hydrate: HYDRATED.has('/service-areas/flower-mound') },
  { path: '/service-areas/grapevine', Component: GrapevinePage, hydrate: HYDRATED.has('/service-areas/grapevine') },
  { path: '/service-areas/carrollton', Component: CarrolltonPage, hydrate: HYDRATED.has('/service-areas/carrollton') },
  { path: '/service-areas/richardson', Component: RichardsonPage, hydrate: HYDRATED.has('/service-areas/richardson') },
  { path: '/service-areas/garland', Component: GarlandPage, hydrate: HYDRATED.has('/service-areas/garland') },
  { path: '/service-areas/mesquite', Component: MesquitePage, hydrate: HYDRATED.has('/service-areas/mesquite') },
  { path: '/service-areas/allen', Component: AllenPage, hydrate: HYDRATED.has('/service-areas/allen') },
  { path: '/service-areas/the-colony', Component: TheColonyPage, hydrate: HYDRATED.has('/service-areas/the-colony') },
  { path: '/service-areas/coppell', Component: CoppellPage, hydrate: HYDRATED.has('/service-areas/coppell') },
  { path: '/service-areas/southlake', Component: SouthlakePage, hydrate: HYDRATED.has('/service-areas/southlake') },
  { path: '/service-areas/keller', Component: KellerPage, hydrate: HYDRATED.has('/service-areas/keller') },
  { path: '/service-areas/rockwall', Component: RockwallPage, hydrate: HYDRATED.has('/service-areas/rockwall') },
  { path: '/service-areas/mansfield', Component: MansfieldPage, hydrate: HYDRATED.has('/service-areas/mansfield') },
  { path: '/service-areas/weatherford', Component: WeatherfordPage, hydrate: HYDRATED.has('/service-areas/weatherford') },
  { path: '/service-areas/waxahachie', Component: WaxahachePage, hydrate: HYDRATED.has('/service-areas/waxahachie') },
  { path: '/service-areas/burleson', Component: BurlesonPage, hydrate: HYDRATED.has('/service-areas/burleson') },
  { path: '/service-areas/prosper', Component: ProsperPage, hydrate: HYDRATED.has('/service-areas/prosper') },
  { path: '/service-areas/wylie', Component: WyliePage, hydrate: HYDRATED.has('/service-areas/wylie') },
  { path: '/service-areas/grand-prairie', Component: GrandPrairiePage, hydrate: HYDRATED.has('/service-areas/grand-prairie') },
  { path: '/service-areas/north-richland-hills', Component: NorthRichlandHillsPage, hydrate: HYDRATED.has('/service-areas/north-richland-hills') },
  { path: '/service-areas/colleyville', Component: ColleyvillePage, hydrate: HYDRATED.has('/service-areas/colleyville') },
  { path: '/commercial-roofing-systems-dfw', Component: CommercialRoofingSystemsDFW, hydrate: HYDRATED.has('/commercial-roofing-systems-dfw') },
  { path: '/commercial-roof-insurance-claim-texas', Component: CommercialInsuranceClaimTexas, hydrate: HYDRATED.has('/commercial-roof-insurance-claim-texas') },
  { path: '/commercial-roofing-cost-dfw', Component: CommercialRoofingCostDFW, hydrate: HYDRATED.has('/commercial-roofing-cost-dfw') },
  { path: '/dfw-hail-season-commercial-roofing-guide', Component: DFWHailSeasonGuide, hydrate: HYDRATED.has('/dfw-hail-season-commercial-roofing-guide') },
  { path: '/how-to-choose-commercial-roofing-contractor-dfw', Component: ChooseCommercialRooferDFW, hydrate: HYDRATED.has('/how-to-choose-commercial-roofing-contractor-dfw') },
  { path: '/roof-replacement', Component: RoofReplacementPage, hydrate: HYDRATED.has('/roof-replacement') },
  { path: '/roof-repair', Component: RoofRepairPage, hydrate: HYDRATED.has('/roof-repair') },
  { path: '/storm-hail-damage', Component: StormHailDamagePage, hydrate: HYDRATED.has('/storm-hail-damage') },
  { path: '/commercial-roofing', Component: CommercialRoofingPage, hydrate: HYDRATED.has('/commercial-roofing') },
  { path: '/metal-roofing', Component: MetalRoofingPage, hydrate: HYDRATED.has('/metal-roofing') },
  { path: '/roof-inspections', Component: RoofInspectionsPage, hydrate: HYDRATED.has('/roof-inspections') },
  { path: '/fort-worth-roofing', Component: FortWorthRoofingPage, hydrate: HYDRATED.has('/fort-worth-roofing') },
  { path: '/rhome-roofing', Component: RhomeRoofingPage, hydrate: HYDRATED.has('/rhome-roofing') },
  { path: '/saginaw-roofing', Component: SaginawRoofingPage, hydrate: HYDRATED.has('/saginaw-roofing') },
  { path: '/haslet-roofing', Component: HasletRoofingPage, hydrate: HYDRATED.has('/haslet-roofing') },
  ...Object.keys(cityData).map((slug) => ({
    path: `/roofing/${slug}`,
    Component: RoofingCityPage,
    params: { citySlug: slug },
  })),
];

export { NotFoundPage };
