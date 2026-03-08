interface ScoreCircleProps {
  score: number;
  maxScore?: number;
  size?: number;
  label?: string;
}

const ScoreCircle = ({ score, maxScore = 100, size = 180, label }: ScoreCircleProps) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(score / maxScore, 1);
  const offset = circumference * (1 - pct);

  return (
    <div className="flex flex-col items-center gap-3">
      <div style={{ position: "relative", width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--background-secondary))"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            style={{
              animation: "score-fill 1.2s ease-out forwards",
            }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: size * 0.22, fontWeight: 700, color: "hsl(var(--foreground))", lineHeight: 1 }}>
            {score}
          </span>
          <span className="text-micro" style={{ marginTop: 4 }}>/ {maxScore}</span>
        </div>
      </div>
      {label && <p className="text-micro text-center">{label}</p>}
    </div>
  );
};

export default ScoreCircle;
