import { useLocation, Link } from "react-router-dom";

const navItems = [
  { path: "/", label: "Dashboard", icon: "grid" },
  { path: "/scan", label: "New Scan", icon: "scan" },
  { path: "/history", label: "Scan History", icon: "clock" },
  { path: "/insights", label: "Insights", icon: "sparkle" },
  { path: "/settings", label: "Settings", icon: "settings" },
];

const icons: Record<string, JSX.Element> = {
  grid: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="7" height="7" rx="1.5" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" />
    </svg>
  ),
  scan: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="7" />
      <circle cx="10" cy="10" r="3" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="10" y1="16" x2="10" y2="19" />
      <line x1="1" y1="10" x2="4" y2="10" />
      <line x1="16" y1="10" x2="19" y2="10" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <polyline points="10,5 10,10 14,12" />
    </svg>
  ),
  sparkle: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 1 L12 7 L18 7 L13 11 L15 17 L10 13 L5 17 L7 11 L2 7 L8 7 Z" />
    </svg>
  ),
  settings: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="3" />
      <path d="M10 1.5a1 1 0 011 1v1a6.5 6.5 0 012.6 1.1l.7-.7a1 1 0 011.4 1.4l-.7.7A6.5 6.5 0 0116.5 9h1a1 1 0 010 2h-1a6.5 6.5 0 01-1.1 2.6l.7.7a1 1 0 01-1.4 1.4l-.7-.7A6.5 6.5 0 0111 16.5v1a1 1 0 01-2 0v-1a6.5 6.5 0 01-2.6-1.1l-.7.7a1 1 0 01-1.4-1.4l.7-.7A6.5 6.5 0 013.5 11h-1a1 1 0 010-2h1a6.5 6.5 0 011.1-2.6l-.7-.7a1 1 0 011.4-1.4l.7.7A6.5 6.5 0 019 3.5v-1a1 1 0 011-1z" />
    </svg>
  ),
};

interface SidebarNavProps {
  onMobileClose?: () => void;
}

const SidebarNav = ({ onMobileClose }: SidebarNavProps) => {
  const location = useLocation();

  return (
    <nav className="flex flex-col h-full" style={{ padding: "var(--space-3)" }}>
      <div className="mb-sp-6" style={{ padding: "var(--space-2) var(--space-1)" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.02em" }}>
          <span style={{ color: "hsl(var(--primary))" }}>Skin</span>
          <span className="text-foreground">Pulse</span>
        </h1>
        <p className="text-micro mt-1">Wellness Analytics</p>
      </div>

      <div className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onMobileClose}
              className="flex items-center gap-3 rounded-lg transition-all duration-200"
              style={{
                padding: "10px 12px",
                fontSize: "var(--font-body)",
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))",
                background: isActive ? "hsl(var(--primary) / 0.08)" : "transparent",
              }}
            >
              <span style={{ opacity: isActive ? 1 : 0.6 }}>{icons[item.icon]}</span>
              {item.label}
              {isActive && (
                <span
                  style={{
                    width: 4,
                    height: 20,
                    borderRadius: 2,
                    background: "hsl(var(--primary))",
                    marginLeft: "auto",
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default SidebarNav;
