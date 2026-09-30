// Line-art laboratory vectors. All strokes use currentColor, so colour them with text-* classes.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function Flask({ className = '', style }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} {...base} aria-hidden="true">
      <path d="M18 4h12M20 4v12L8.5 37.5A4 4 0 0 0 12 44h24a4 4 0 0 0 3.5-6.5L28 16V4" />
      <path d="M12.5 30h23l4 7.8A2.6 2.6 0 0 1 37.2 42H10.8a2.6 2.6 0 0 1-2.3-4.2z" fill="currentColor" fillOpacity=".25" stroke="none" />
      <circle cx="20" cy="36" r="1.6" className="rp-bubble" style={{ '--d': '0s' }} />
      <circle cx="27" cy="37" r="1.2" className="rp-bubble" style={{ '--d': '.8s' }} />
      <circle cx="24" cy="33" r="1" className="rp-bubble" style={{ '--d': '1.6s' }} />
    </svg>
  );
}

export function TestTube({ className = '', style }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} {...base} aria-hidden="true">
      <path d="M17 4h14M20 4v32a4 4 0 0 0 8 0V4" />
      <path d="M20 22h8v14a4 4 0 0 1-8 0z" fill="currentColor" fillOpacity=".3" stroke="none" />
      <path d="M20 12h4M20 17h3" />
    </svg>
  );
}

export function Dna({ className = '', style }) {
  const rungs = [6, 18, 26, 38, 46, 58, 66];
  return (
    <svg viewBox="0 0 40 80" className={className} style={style} {...base} aria-hidden="true">
      <path d="M8 2C8 12 32 12 32 22S8 32 8 42s24 10 24 20-24 10-24 16" />
      <path d="M32 2C32 12 8 12 8 22s24 10 24 20S8 52 8 62s24 10 24 16" />
      {rungs.map((y, i) => (
        <line key={y} x1="11" y1={y} x2="29" y2={y} className="rp-helix" style={{ '--d': `${i * 0.18}s` }} />
      ))}
    </svg>
  );
}

export function Molecule({ className = '', style }) {
  const nodes = [[24, 6], [39, 15], [39, 33], [24, 42], [9, 33], [9, 15]];
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} {...base} aria-hidden="true">
      <path d="M24 6l15 9v18l-15 9-15-9V15z" />
      <path d="M24 14l8 5v10l-8 5-8-5V19z" strokeOpacity=".5" />
      {nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="currentColor" fillOpacity=".25" />
      ))}
    </svg>
  );
}

export function Microscope({ className = '', style }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} {...base} aria-hidden="true">
      <path d="M17 6l7-3 7 16-7 3z" />
      <path d="M22.5 22.5l1.8 4.5" />
      <path d="M15 30h15" />
      <path d="M32 15c5.5 3 7.8 9.5 5.6 15.5-1.6 4.4-5.2 7.4-9.6 8.5" />
      <path d="M11 43h27M27 39v4" />
    </svg>
  );
}

export function BloodDrop({ className = '', style }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} {...base} aria-hidden="true">
      <path d="M24 4S10 20 10 30a14 14 0 0 0 28 0C38 20 24 4 24 4z" fill="currentColor" fillOpacity=".15" />
      <path d="M24 25v10M19 30h10" />
    </svg>
  );
}

export function PetriDish({ className = '', style }) {
  return (
    <svg viewBox="0 0 48 48" className={className} style={style} {...base} aria-hidden="true">
      <ellipse cx="24" cy="28" rx="19" ry="8.5" />
      <ellipse cx="24" cy="26" rx="14" ry="5.5" strokeOpacity=".5" />
      <circle cx="19" cy="26" r="1.6" fill="currentColor" />
      <circle cx="27" cy="25" r="1.1" fill="currentColor" />
      <circle cx="24" cy="28" r=".9" fill="currentColor" />
    </svg>
  );
}

// ECG trace path: flat baseline with a P-QRS-T complex every `period` units.
export function ecgPath(width = 1200, period = 200, mid = 20) {
  let d = `M0 ${mid}`;
  for (let x = 0; x < width; x += period) {
    d += ` L${x + 60} ${mid} L${x + 70} ${mid - 5} L${x + 80} ${mid} L${x + 90} ${mid}`
      + ` L${x + 96} ${mid - 16} L${x + 104} ${mid + 14} L${x + 110} ${mid}`
      + ` L${x + 125} ${mid} L${x + 136} ${mid - 7} L${x + 148} ${mid} L${x + period} ${mid}`;
  }
  return d;
}
