const items = [
  "App Development", "Web Development", "Payment System",
  "React / Next.js", "Flutter", "Node.js",
  "TypeScript", "AWS / GCP", "Docker / K8s", "PG Integration",
];

function MarqueeSet() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i}>
          <span>{item}</span>
          <span className="dot">●</span>
        </span>
      ))}
    </>
  );
}

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee">
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  );
}
