import { Barcode } from './shared';

const SERVICES = [
  {
    label: 'Доставка по миру',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
      </svg>
    ),
  },
  {
    label: 'Возврат 30 дней',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path d="M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7" />
      </svg>
    ),
  },
  {
    label: 'Безопасная оплата',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="5" y="10" width="14" height="10" />
        <path d="M8 10V7a4 4 0 018 0v3" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-slom-ink text-white">
      {/* Сервисная полоса */}
      <div className="border-b border-white/15">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div
              key={s.label}
              className={`flex items-center gap-4 px-4 md:px-8 py-5 ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-white/15' : ''}`}
            >
              <span className="text-slom-red">{s.icon}</span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Гигантский призыв + рассылка */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8">
          <h2 className="font-display font-bold uppercase leading-[0.96] text-[13vw] lg:text-[7.5vw]">
            <span className="block display-condensed">Стань частью</span>
            <span className="block display-condensed text-slom-red">слома</span>
          </h2>
          <a
            href="#shop"
            className="mt-8 inline-flex items-center gap-3 bg-slom-red text-white font-display font-semibold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-white hover:text-slom-ink transition-colors duration-300"
          >
            В магазин <span className="text-lg leading-none">→</span>
          </a>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <p className="font-mono text-[11px] tracking-[0.25em] uppercase leading-relaxed text-white/70">
            Вступи во внутренний круг.
            <br />
            Закрытые дропы.
            <br />
            Ранний доступ.
          </p>
          <a
            href="https://t.me/pline13"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-slom-red text-slom-red font-mono text-[11px] tracking-[0.25em] uppercase px-4 py-4 hover:bg-slom-red hover:text-white transition-colors"
          >
            Дропы объявляются в Telegram →
          </a>
          <Barcode className="text-white/40 pt-2" label="SLM-2026-MSK" />
        </div>
      </div>

      {/* Нижняя полоса */}
      <div className="border-t border-white/15">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[9px] tracking-[0.25em] uppercase text-white/50">
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <span>© СЛОМ 2026</span>
            <span>Концепт-проект. Вымышленный бренд.</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span>Денис Дьяков</span>
            <a
              href="https://t.me/pline13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slom-red transition-colors"
            >
              t.me/pline13
            </a>
            <a href="mailto:pealspline@gmail.com" className="hover:text-slom-red transition-colors">
              pealspline@gmail.com
            </a>
          </nav>
          <div className="flex gap-4 text-white/70">
            {/* TG */}
            <a
              href="https://t.me/pline13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-slom-red transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M21.5 3.5L2.5 11l6.5 2.5L18 7l-7 8 .5 5.5 3-3.5 4.5 3.5z" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
