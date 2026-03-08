interface RadarChartSVGProps {
  data: { label: string; value: number }[];
  size?: number;
}

const RadarChartSVG = ({ data, size = 280 }: RadarChartSVGProps) => {
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.38;
  const levels = [0.25, 0.5, 0.75, 1];
  const n = data.length;
  const angleStep = (2 * Math.PI) / n;

  const getPoint = (index: number, pct: number) => {
    const angle = angleStep * index - Math.PI / 2;
    return {
      x: cx + Math.cos(angle) * maxR * pct,
      y: cy + Math.sin(angle) * maxR * pct,
    };
  };

  const dataPoints = data.map((d, i) => getPoint(i, d.value / 100));
  const pathD = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Grid levels */}
      {levels.map((l) => {
        const pts = Array.from({ length: n }, (_, i) => getPoint(i, l));
        const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";
        return <path key={l} d={d} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />;
      })}

      {/* Axis lines */}
      {data.map((_, i) => {
        const p = getPoint(i, 1);
        return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(0,0,0,0.06)" strokeWidth="1" />;
      })}

      {/* Data shape */}
      <path
        d={pathD}
        fill="hsl(179, 27%, 51%, 0.15)"
        stroke="hsl(179, 27%, 51%)"
        strokeWidth="2"
        strokeLinejoin="round"
        style={{
          animation: "fade-in 0.8s ease-out forwards",
        }}
      />

      {/* Data points */}
      {dataPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4" fill="hsl(179, 27%, 51%)" />
      ))}

      {/* Labels */}
      {data.map((d, i) => {
        const labelPoint = getPoint(i, 1.18);
        return (
          <text
            key={i}
            x={labelPoint.x}
            y={labelPoint.y}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fontSize: 11, fill: "hsl(0, 0%, 42%)", fontWeight: 500 }}
          >
            {d.label}
          </text>
        );
      })}
    </svg>
  );
};

export default RadarChartSVG;
