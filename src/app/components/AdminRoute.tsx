import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../hooks/useAdminAuth';

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const { session, loading } = useAdminAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1C2A39]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#FFC107]"></div>
      </div>
    );
  }

  if (!session) {
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
