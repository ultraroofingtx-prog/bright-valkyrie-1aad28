// Server-only footer + mobile call bar (plain links — no JS needed).
import { RouterProvider } from '../shims/react-router-dom';
import Footer from '../app/components/Footer';
import MobileCtaBar from '../app/components/MobileCtaBar';

export default function StaticChrome({ pathname }: { pathname: string }) {
  return (
    <RouterProvider pathname={pathname}>
      <Footer />
      <MobileCtaBar />
    </RouterProvider>
  );
}
