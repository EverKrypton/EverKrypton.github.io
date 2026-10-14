/* Authored exchange-terminal visual — no external assets. */

function pricePath(seed: number, w: number, h: number) {
  let s = seed * 2654435761;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  const n = 40;
  const pts: [number, number][] = [];
  let y = h * 0.62;
  for (let i = 0; i < n; i++) {
    y += (rnd() - 0.46) * (h * 0.14);
    y = Math.max(h * 0.1, Math.min(h * 0.9, y));
    pts.push([(i / (n - 1)) * w, y]);
  }
  const line = pts.map((p, i) => `${i ? "L" : "M"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ");
  return { line, area: `${line} L ${w} ${h} L 0 ${h} Z`, last: pts[pts.length - 1] };
}

const ASKS = [
  { p: "64,182.4", q: "0.812", d: 78 },
  { p: "64,171.0", q: "0.340", d: 44 },
  { p: "64,160.7", q: "1.204", d: 96 },
  { p: "64,149.2", q: "0.560", d: 58 },
];
const BIDS = [
  { p: "64,138.0", q: "0.940", d: 82 },
  { p: "64,127.5", q: "0.418", d: 50 },
  { p: "64,116.1", q: "1.560", d: 100 },
  { p: "64,104.9", q: "0.672", d: 62 },
];

export default function ExchangeTerminal() {
  const { line, area } = pricePath(9, 560, 148);

  return (
    <div className="mock" role="img" aria-label="Preview of the VOLT trading terminal: BTC/USDT price chart and live order book">
      <div className="mock__bar">
        <span className="mock__title">VOLT · spot terminal</span>
        <span className="mock__pill">
          <i />
          live
        </span>
      </div>

      <div className="mock__body">
        <div className="mock__chart">
          <div className="mock__head">
            <span className="mock__pair">BTC / USDT</span>
            <span className="mock__price">64,138.00</span>
            <span className="mock__chg">+2.41% · 24h</span>
          </div>
          <svg className="mock__spark" viewBox="0 0 560 148" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="mk-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--emerald)" stopOpacity="0.28" />
                <stop offset="100%" stopColor="var(--emerald)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={area} fill="url(#mk-fill)" />
            <path d={line} fill="none" stroke="var(--emerald)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>

        <div className="mock__book">
          <h4>Order book</h4>
          {ASKS.map((r) => (
            <div className="book__row ask" key={r.p}>
              <span className="fill" style={{ width: `${r.d}%` }} aria-hidden="true" />
              <span className="p">{r.p}</span>
              <span className="q">{r.q}</span>
            </div>
          ))}
          <div className="book__mid">
            <span>Spread</span>
            <span>10.4</span>
          </div>
          {BIDS.map((r) => (
            <div className="book__row bid" key={r.p}>
              <span className="fill" style={{ width: `${r.d}%` }} aria-hidden="true" />
              <span className="p">{r.p}</span>
              <span className="q">{r.q}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
