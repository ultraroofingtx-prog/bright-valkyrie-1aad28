/* eslint-disable react-refresh/only-export-components */
// ============================================================
// react-router-dom SHIM for the static multi-page build.
// The original components were written for a client-side router.
// In the static site every route is its own HTML file, so:
//   <Link to="/x">  ->  <a href="/x">   (real navigation)
//   useLocation()   ->  pathname from context (SSR) or window
//   useParams()     ->  params from context (set per page at build)
//   useNavigate()   ->  window.location.assign
//   <Navigate to /> ->  client-side redirect (admin auth guard)
// Original component code runs unmodified.
// ============================================================
import React, {
  createContext,
  useContext,
  useEffect,
  type AnchorHTMLAttributes,
  type ReactNode,
} from 'react';

interface RouterCtxValue {
  pathname: string;
  params: Record<string, string | undefined>;
}

const RouterCtx = createContext<RouterCtxValue | null>(null);

export function RouterProvider({
  pathname,
  params = {},
  children,
}: {
  pathname: string;
  params?: Record<string, string | undefined>;
  children: ReactNode;
}) {
  return (
    <RouterCtx.Provider value={{ pathname, params }}>
      {children}
    </RouterCtx.Provider>
  );
}

function currentPathname(): string {
  if (typeof window !== 'undefined') return window.location.pathname;
  return '/';
}

export function useLocation() {
  const ctx = useContext(RouterCtx);
  const pathname = ctx?.pathname ?? currentPathname();
  return { pathname, search: '', hash: '', state: null, key: 'static' };
}

export function useParams<
  T extends Record<string, string | undefined> = Record<string, string | undefined>
>(): T {
  const ctx = useContext(RouterCtx);
  return (ctx?.params ?? {}) as T;
}

export function useNavigate() {
  return (to: string | number) => {
    if (typeof window === 'undefined') return;
    if (typeof to === 'number') {
      window.history.go(to);
    } else {
      window.location.assign(to);
    }
  };
}

export function useSearchParams(): [URLSearchParams, (p: URLSearchParams) => void] {
  const sp =
    typeof window !== 'undefined'
      ? new URLSearchParams(window.location.search)
      : new URLSearchParams();
  return [sp, () => {}];
}

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  replace?: boolean;
  state?: unknown;
  children?: ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ to, replace: _r, state: _s, children, ...rest }, ref) {
    return (
      <a ref={ref} href={to} {...rest}>
        {children}
      </a>
    );
  }
);

export const NavLink = Link;

export function Navigate({ to }: { to: string; replace?: boolean }) {
  useEffect(() => {
    if (typeof window !== 'undefined') window.location.replace(to);
  }, [to]);
  return null;
}

// Passthroughs so any stray imports don't break the build.
export function BrowserRouter({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
export const MemoryRouter = BrowserRouter;
export const StaticRouter = BrowserRouter;
export function Routes({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
export function Route(_props: Record<string, unknown>) {
  return null;
}
export function Outlet() {
  return null;
}
