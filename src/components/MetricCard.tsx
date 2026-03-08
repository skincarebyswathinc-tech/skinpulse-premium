interface MetricCardProps {
  name: string;
  score: number;
  variant: "hydration" | "texture" | "pigmentation" | "inflammation" | "elasticity";
}

const levelLabel = (score: number) => {
  if (score >= 85) return { text: "Excellent", color: "hsl(160, 45%, 45%)" };
  if (score >= 65) return { text: "Good", color: "hsl(179, 27%, 51%)" };
  if (score >= 40) return { text: "Moderate", color: "hsl(40, 60%, 50%)" };
  return { text: "Low", color: "hsl(0, 50%, 55%)" };
};

const variantGradients: Record<string, string> = {
  hydration: "var(--gradient-card-hydration)",
  texture: "var(--gradient-card-texture)",
  pigmentation: "var(--gradient-card-pigmentation)",
  inflammation: "var(--gradient-card-inflammation)",
  elasticity: "var(--gradient-card-elasticity)",
};

const MetricCard = ({ name, score, variant }: MetricCardProps) => {
  const level = levelLabel(score);

  return (
    <div
      className="glass-card animate-fade-in-up"
      style={{ background: variantGradients[variant], padding: "var(--space-3)" }}
    >
      <p className="text-micro mb-2">{name}</p>
      <div className="flex items-end justify-between">
        <span style={{ fontSize: 32, fontWeight: 700, lineHeight: 1, color: "hsl(var(--foreground))" }}>
          {score}
        </span>
        <span
          style={{
            fontSize: "var(--font-micro)",
            fontWeight: 600,
            color: level.color,
            padding: "2px 10px",
            borderRadius: 9999,
            background: `${level.color}15`,
          }}
        >
          {level.text}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;
