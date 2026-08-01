import { useRef } from 'react';
import { CircleStamp } from './shared';

const LOOKS = [
  { src: '/img/look1.webp', alt: 'Худи в переулке' },
  { src: '/img/look2.webp', alt: 'Красная футболка у колонны' },
  { src: '/img/look3.webp', alt: 'Балаклава, ночной город' },
  { src: '/img/hero.webp', alt: 'Худи «Система сломана»' },
];

export default function Lookbook() {
  const track = useRef<HTMLDivElement>(null);

  const scrollByCard = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector('figure');
    const w = card ? card.getBoundingClientRect().width : el.clientWidth / 3;
    el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  return (
    <section id="lookbook" className="bg-slom-ink text-white border-b border-slom-ink relative">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Заголовок */}
        <div className="lg:col-span-3 px-4 md:px-8 py-12 lg:py-16 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-white/15 relative">
          <div className="flex items-start gap-4">
            <h2 className="font-display font-bold uppercase leading-[0.85] text-7xl lg:text-[4.6vw]">
              <span className="block display-condensed">Лук-</span>
              <span className="block display-condensed">бук</span>
            </h2>
            <span className="bg-slom-red text-white font-display font-semibold text-lg px-2 py-1 mt-2">SS26</span>
          </div>
          <div className="space-y-5">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase leading-relaxed text-white/60">
              Настоящие люди. Настоящие улицы.
              <br />
              Это — СЛОМ.
            </p>
          </div>

          {/* Вращающийся штамп */}
          <CircleStamp className="hidden lg:block absolute -right-16 top-1/2 -translate-y-1/2 w-32 h-32 z-20" />
        </div>

        {/* Карусель кадров */}
        <div className="lg:col-span-9 relative">
          <div ref={track} className="flex overflow-x-auto no-scrollbar scroll-smooth">
            {LOOKS.map((l, i) => (
              <figure key={i} className={`relative shrink-0 w-[78%] sm:w-1/2 lg:w-1/3 ${i > 0 ? 'border-l border-white/15' : ''}`}>
                <img
                  src={l.src}
                  alt={l.alt}
                  className="w-full h-[420px] lg:h-[520px] object-cover object-top grayscale-[30%] contrast-125"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-3 left-3 font-mono text-[9px] tracking-[0.3em] text-white/60">
                  КАДР {String(i + 1).padStart(2, '0')} / {String(LOOKS.length).padStart(2, '0')}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Стрелки */}
          <div className="absolute bottom-0 right-0 flex">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Назад"
              className="w-14 h-14 bg-white text-slom-ink border border-slom-ink text-xl hover:bg-slom-red hover:text-white transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Вперёд"
              className="w-14 h-14 bg-white text-slom-ink border border-slom-ink border-l-0 text-xl hover:bg-slom-red hover:text-white transition-colors"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
