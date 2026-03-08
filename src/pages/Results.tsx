import PageHeader from "@/components/PageHeader";
import ScoreCircle from "@/components/ScoreCircle";
import MetricCard from "@/components/MetricCard";
import RadarChartSVG from "@/components/RadarChartSVG";

const metrics = [
  { name: "Hydration", score: 72, variant: "hydration" as const },
  { name: "Texture", score: 81, variant: "texture" as const },
  { name: "Pigmentation", score: 85, variant: "pigmentation" as const },
  { name: "Inflammation", score: 68, variant: "inflammation" as const },
  { name: "Elasticity", score: 79, variant: "elasticity" as const },
];

const radarData = metrics.map((m) => ({ label: m.name, value: m.score }));

const Results = () => {
  return (
    <div className="animate-fade-in">
      <PageHeader title="Scan Results" subtitle="March 7, 2026" />

      {/* Top score section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-sp-3 mb-sp-4">
        <div className="glass-card flex flex-col items-center" style={{ padding: "var(--space-4)" }}>
          <p className="text-micro mb-3">Skin Health Score</p>
          <ScoreCircle score={78} label="Healthy with mild dehydration signals" />
        </div>

        <div className="glass-card flex items-center justify-center" style={{ padding: "var(--space-3)" }}>
          <RadarChartSVG data={radarData} />
        </div>
      </div>

      {/* Metric cards */}
      <p className="text-section-title mb-sp-2">Detailed Metrics</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-sp-2 mb-sp-4">
        {metrics.map((m, i) => (
          <div key={m.name} className={`stagger-${i + 1}`} style={{ opacity: 0, animation: "fade-in-up 0.5s ease-out forwards", animationDelay: `${i * 0.08}s` }}>
            <MetricCard name={m.name} score={m.score} variant={m.variant} />
          </div>
        ))}
      </div>

      {/* Scan preview */}
      <p className="text-section-title mb-sp-2">Scan Preview</p>
      <div className="glass-card-static" style={{ padding: "var(--space-3)" }}>
        <div className="flex flex-col sm:flex-row gap-4 items-start">
          <div
            style={{
              width: 120,
              height: 160,
              borderRadius: 12,
              background: "hsl(var(--background-secondary))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5">
              <circle cx="16" cy="12" r="5" />
              <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" />
            </svg>
          </div>
          <div>
            <p className="text-card-title">Scan Date</p>
            <p className="text-body">March 7, 2026</p>
            <p className="text-micro mt-2">Skin Score: 78 / 100</p>
            <p className="text-micro mt-1">Heatmap overlay available in a future update.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
