// Общие элементы фирменного стиля СЛОМ®

// Знак бренда — треснувший круг
export function CrackedCircle({ className = 'w-10 h-10', color = '#FF0000' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden>
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="7" />
      <path
        d="M50 4 L46 26 L58 38 L42 52 L54 62 L47 96"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="miter"
      />
      <path d="M8 62 L30 55 L42 52" stroke={color} strokeWidth="5" />
      <path d="M92 30 L66 40 L58 38" stroke={color} strokeWidth="5" />
    </svg>
  );
}

// Штрихкод
export function Barcode({ className = '', label }: { className?: string; label?: string }) {
  return (
    <div className={className}>
      <div className="barcode h-10 w-full" />
      {label && (
        <div className="mt-1 text-[10px] font-mono tracking-[0.3em] text-center">{label}</div>
      )}
    </div>
  );
}

// Вращающийся круговой штамп
export function CircleStamp({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 200 200" className="w-full h-full spin-slow">
        <defs>
          <path id="stamp-circle" d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0" />
        </defs>
        <circle cx="100" cy="100" r="98" fill="#0A0A0A" stroke="#fff" strokeWidth="2" />
        <circle cx="100" cy="100" r="55" fill="none" stroke="#fff" strokeWidth="1.5" />
        <text fill="#fff" fontSize="19.5" fontFamily="'IBM Plex Mono', monospace" letterSpacing="3.5">
          <textPath href="#stamp-circle">СДЕЛАНО ИНАЧЕ ★ СЛОМ ★ СДЕЛАНО ИНАЧЕ ★</textPath>
        </text>
        <path
          d="M100 62 L96 84 L108 96 L92 110 L104 120 L97 138"
          stroke="#FF0000"
          strokeWidth="5"
          fill="none"
        />
        <circle cx="100" cy="100" r="52" fill="none" stroke="#FF0000" strokeWidth="3" strokeDasharray="6 8" />
      </svg>
    </div>
  );
}

// Ссылка-стрелка в фирменном стиле
export function ArrowLink({ children, href = '#', light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] uppercase underline underline-offset-4 decoration-1 ${
        light ? 'text-white' : 'text-slom-ink'
      }`}
    >
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
    </a>
  );
}
