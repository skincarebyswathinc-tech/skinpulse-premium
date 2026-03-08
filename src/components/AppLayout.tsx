import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarNav from "@/components/SidebarNav";

const AppLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ background: "hsl(var(--background))" }}>
      {/* Desktop sidebar */}
      <aside
        className="hidden lg:flex flex-col flex-shrink-0"
        style={{
          width: 240,
          borderRight: "1px solid rgba(0,0,0,0.06)",
          background: "hsl(var(--sidebar-background))",
        }}
      >
        <SidebarNav />
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 flex items-center justify-between"
        style={{
          height: 56,
          padding: "0 var(--space-2)",
          background: "hsl(var(--background) / 0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 700 }}>
          <span style={{ color: "hsl(var(--primary))" }}>Skin</span>Pulse
        </span>
        <button
          className="btn-ghost"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {mobileOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.3)" }}
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="absolute left-0 top-0 bottom-0 animate-fade-in"
            style={{
              width: 260,
              background: "hsl(var(--background))",
              boxShadow: "var(--shadow-elevated)",
            }}
          >
            <SidebarNav onMobileClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Main content */}
      <main
        className="flex-1 overflow-auto"
        style={{ padding: "var(--space-4)", paddingTop: "var(--space-4)" }}
      >
        <div className="lg:hidden" style={{ height: 56 }} />
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
