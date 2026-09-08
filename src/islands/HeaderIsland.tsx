// Hydrated header: mobile menu + dropdowns. Receives the build-time
// pathname so active-link highlighting matches on server and client.
import { RouterProvider } from '../shims/react-router-dom';
import Header from '../app/components/Header';

export default function HeaderIsland({ pathname }: { pathname: string }) {
  return (
    <RouterProvider pathname={pathname}>
      <Header />
    </RouterProvider>
  );
}
