import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const scanHistory = [
  { id: 1, date: "March 7, 2026", score: 78, summary: "Hydration 72 · Texture 81 · Pigmentation 85" },
  { id: 2, date: "February 28, 2026", score: 74, summary: "Hydration 68 · Texture 79 · Pigmentation 82" },
  { id: 3, date: "February 14, 2026", score: 71, summary: "Hydration 65 · Texture 76 · Pigmentation 80" },
];

const ScanHistory = () => {
  const isEmpty = false;

  return (
    <div className="animate-fade-in">
      <PageHeader title="Scan History" subtitle="Track your skin health over time" />

      {isEmpty ? (
        <div
          className="glass-card-static flex flex-col items-center justify-center"
          style={{ padding: "var(--space-8) var(--space-4)", textAlign: "center" }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" style={{ marginBottom: 16, opacity: 0.5 }}>
            <circle cx="24" cy="24" r="18" />
            <polyline points="24,14 24,24 32,28" />
          </svg>
          <p className="text-card-title mb-2">No scans yet</p>
          <p className="text-micro mb-sp-3">Upload your first skin scan to start tracking your skin health.</p>
          <Link to="/scan" className="btn-primary">Start First Scan</Link>
        </div>
      ) : (
        <div className="flex flex-col gap-sp-2">
          {scanHistory.map((scan, i) => (
            <div
              key={scan.id}
              className="glass-card flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              style={{ opacity: 0, animation: `fade-in-up 0.4s ease-out forwards`, animationDelay: `${i * 0.06}s` }}
            >
              <div>
                <p className="text-card-title">{scan.date}</p>
                <p className="text-micro mt-1">{scan.summary}</p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: "hsl(var(--primary))",
                  }}
                >
                  {scan.score}
                </span>
                <Link to="/results" className="btn-secondary" style={{ fontSize: "var(--font-micro)", padding: "8px 20px" }}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ScanHistory;
