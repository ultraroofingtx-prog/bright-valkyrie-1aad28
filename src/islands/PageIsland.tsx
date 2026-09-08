// Hydrated island for the three interactive pages (booking form, contact
// form, maintenance tabs). Only these pages ship their JavaScript.
import { RouterProvider } from '../shims/react-router-dom';
import HomePage from '../app/pages/HomePage';
import ContactPage from '../app/pages/ContactPage';
import MaintenancePage from '../app/pages/MaintenancePage';

const REGISTRY: Record<string, React.ComponentType> = {
  '/': HomePage,
  '/contact': ContactPage,
  '/maintenance': MaintenancePage,
};

export default function PageIsland({ route }: { route: string }) {
  const Component = REGISTRY[route];
  if (!Component) return null;
  return (
    <RouterProvider pathname={route}>
      <Component />
    </RouterProvider>
  );
}
