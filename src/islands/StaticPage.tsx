// Server-rendered only (no client directive) — this component and every
// static page it imports contribute ZERO JavaScript to the browser.
// It renders the requested page inside the router shim's context so
// useLocation()/useParams() work exactly as they did in the SPA.
import { RouterProvider } from '../shims/react-router-dom';
import { routeEntries, NotFoundPage } from '../registry/manifest';

export default function StaticPage({
  route,
  params = {},
}: {
  route: string;
  params?: Record<string, string>;
}) {
  const entry = routeEntries.find((e) => e.path === route);
  const Component = entry?.Component ?? NotFoundPage;
  return (
    <RouterProvider pathname={route} params={entry?.params ?? params}>
      <Component />
    </RouterProvider>
  );
}
