import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import ScoreCircle from "@/components/ScoreCircle";

const Index = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";

  return (
    <div className="animate-fade-in">
      <PageHeader title={`${greeting}, Varun.`} subtitle="Here's your skin health overview" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-sp-3 mb-sp-4">
        <div className="glass-card flex flex-col items-center" style={{ padding: "var(--space-4)" }}>
          <p className="text-micro mb-3">Skin Health Score</p>
          <ScoreCircle score={78} label="Healthy with mild dehydration signals" />
        </div>

        <div className="glass-card flex flex-col justify-between" style={{ padding: "var(--space-4)" }}>
          <div>
            <p className="text-micro mb-2">Latest Scan</p>
            <p className="text-card-title mb-1">March 7, 2026</p>
            <p className="text-micro">5 metrics analyzed · Score: 78/100</p>
          </div>
          <div className="flex gap-3 mt-sp-3">
            <Link to="/results" className="btn-primary" style={{ fontSize: "var(--font-micro)" }}>
              View Results
            </Link>
            <Link to="/scan" className="btn-secondary" style={{ fontSize: "var(--font-micro)" }}>
              New Scan
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-sp-3">
        {["Progress Overview", "Skin Insights", "Recommendations"].map((title) => (
          <div key={title} className="glass-card-static" style={{ padding: "var(--space-3)", minHeight: 160 }}>
            <p className="text-card-title mb-2">{title}</p>
            <p className="text-micro">Coming soon — track changes over time.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
