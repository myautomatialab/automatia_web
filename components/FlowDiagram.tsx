const NODES = [
  { x: 40, y: 40, label: "Trigger" },
  { x: 40, y: 160, label: "CRM" },
  { x: 220, y: 100, label: "IA" },
  { x: 400, y: 40, label: "Slack" },
  { x: 400, y: 160, label: "Sheets" },
];

const EDGES: [number, number][] = [
  [0, 2],
  [1, 2],
  [2, 3],
  [2, 4],
];

export function FlowDiagram() {
  return (
    <svg
      viewBox="0 0 460 210"
      className="w-full max-w-md"
      role="img"
      aria-label="Diagrama de flujo de automatización"
    >
      {EDGES.map(([from, to], i) => {
        const a = NODES[from];
        const b = NODES[to];
        return (
          <line
            key={i}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke="var(--border)"
            strokeWidth={1.5}
          />
        );
      })}

      {NODES.map((node, i) => (
        <g key={i}>
          <circle
            cx={node.x}
            cy={node.y}
            r={22}
            fill="var(--surface)"
            stroke={i === 2 ? "var(--accent)" : "var(--border)"}
            strokeWidth={1.5}
          />
          <text
            x={node.x}
            y={node.y + 4}
            textAnchor="middle"
            fontSize="9"
            fontFamily="var(--font-mono)"
            fill={i === 2 ? "var(--accent)" : "var(--muted)"}
          >
            {node.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
