// Admin tools are a client-only app (auth-gated, database-backed) — they
// render in the browser exactly as before and are excluded from indexing.
import { RouterProvider } from '../shims/react-router-dom';
import AdminRoute from '../app/components/AdminRoute';
import AdminLoginPage from '../app/pages/AdminLoginPage';
import LeadsPage from '../app/pages/LeadsPage';
import BlogSchedulerPage from '../app/pages/BlogSchedulerPage';
import SEOManagerPage from '../app/pages/SEOManagerPage';
import OutlookCalendarSetupPage from '../app/pages/OutlookCalendarSetupPage';
import OutlookCallbackPage from '../app/pages/OutlookCallbackPage';

const PROTECTED: Record<string, React.ComponentType> = {
  '/admin/leads': LeadsPage,
  '/admin/blog-scheduler': BlogSchedulerPage,
  '/admin/seo-manager': SEOManagerPage,
  '/admin/outlook-calendar-setup': OutlookCalendarSetupPage,
  '/admin/outlook-callback': OutlookCallbackPage,
};

export default function AdminIsland({ route }: { route: string }) {
  if (route === '/admin') {
    return (
      <RouterProvider pathname={route}>
        <AdminLoginPage />
      </RouterProvider>
    );
  }
  const Component = PROTECTED[route];
  if (!Component) return null;
  return (
    <RouterProvider pathname={route}>
      <AdminRoute>
        <Component />
      </AdminRoute>
    </RouterProvider>
  );
}
