export function circleProgress({
  value,
  total,
}: {
  value: number;
  total: number;
}) {
  const CIRC = 2 * Math.PI * 6.5;
  const percent = value / total;
  return (
    <svg width={16} height={16} viewBox="0 0 16 16">
      <circle
        cx="8"
        cy="8"
        r="6.5"
        stroke="#d9d9d9"
        strokeWidth="3"
        fill="none"
      />
      <circle
        cx="8"
        cy="8"
        r="6.5"
        stroke="#232323"
        strokeWidth="3"
        fill="none"
        strokeDasharray={CIRC}
        strokeDashoffset={CIRC - percent * CIRC}
        style={{
          transition: "stroke-dashoffset .3s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </svg>
  );
}
