import PageHeader from "@/components/PageHeader";

const Insights = () => (
  <div className="animate-fade-in">
    <PageHeader title="Insights" subtitle="Personalized skin health recommendations" />
    <div className="glass-card-static flex flex-col items-center justify-center" style={{ padding: "var(--space-8)", textAlign: "center" }}>
      <p className="text-card-title mb-2">Coming Soon</p>
      <p className="text-micro">AI-powered skin insights and recommendations will appear here after multiple scans.</p>
    </div>
  </div>
);

export default Insights;
