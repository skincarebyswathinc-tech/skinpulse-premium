import PageHeader from "@/components/PageHeader";

const Settings = () => (
  <div className="animate-fade-in">
    <PageHeader title="Settings" subtitle="Manage your account and preferences" />
    <div className="glass-card-static" style={{ padding: "var(--space-4)" }}>
      <p className="text-card-title mb-3">Profile</p>
      <div className="flex flex-col gap-3">
        {[
          { label: "Name", value: "Varun" },
          { label: "Skin Type", value: "Combination" },
          { label: "Notifications", value: "Enabled" },
        ].map((item) => (
          <div key={item.label} className="flex justify-between items-center" style={{ padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <span className="text-body">{item.label}</span>
            <span className="text-micro">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Settings;
