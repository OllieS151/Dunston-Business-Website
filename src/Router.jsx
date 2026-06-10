// Router — page state + scroll-to-top on navigation.
// Pages register themselves via window.PAGES_REGISTRY = { id: Component }.

const RouterContext = React.createContext({ page: 'home', navigate: () => {} });

function useRouter() {return React.useContext(RouterContext);}

function RouterProvider({ children }) {
  const [page, setPage] = React.useState(() => {
    const hash = window.location.hash.replace('#', '');
    return hash && window.PAGES_REGISTRY?.[hash] ? hash : 'home';
  });
  const navigate = React.useCallback((id) => {
    setPage(id);
    window.location.hash = id;
    // Scroll the main container, but only when not already at top
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      // Re-tag sections after navigation so reveal animations fire on the new page.
      setTimeout(() => window.__DBV_RETAG && window.__DBV_RETAG(), 16);
    });
  }, []);

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && window.PAGES_REGISTRY?.[hash]) setPage(hash);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <RouterContext.Provider value={{ page, navigate }}>
      {children}
    </RouterContext.Provider>);

}

// A "link" that calls navigate(). Drops the underline default on <a>.
function PageLink({ to, children, style, className, onClick, ...rest }) {
  const { navigate } = useRouter();
  return (
    <a
      href={`#${to}`}
      className={className}
      style={{ textDecoration: 'none', borderBottom: 0, ...style, color: "rgb(144, 144, 144)" }}
      onClick={(e) => {
        // Allow modifier-clicks to open in new tab normally
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        navigate(to);
        onClick && onClick(e);
      }}
      {...rest}>
      
      {children}
    </a>);

}

function PageOutlet() {
  const { page } = useRouter();
  const registry = window.PAGES_REGISTRY || {};
  const Page = registry[page] || registry.home;
  if (!Page) return null;
  // Keyed wrapper so React re-mounts on route change and CSS animation re-runs.
  return (
    <div key={page} className="anim-page-enter">
      <Page />
    </div>
  );
}

Object.assign(window, { RouterProvider, RouterContext, useRouter, PageLink, PageOutlet });