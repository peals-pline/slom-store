import { ArrowLink } from './shared';

const SHOTS = [
  { src: '/img/collection1.webp', alt: 'Футболка с принтом на спине', num: '02.1' },
  { src: '/img/collection2.webp', alt: 'Белая футболка «Взгляд»', num: '02.2' },
  { src: '/img/collection3.webp', alt: 'Куртка с нашивкой СЛОМ', num: '02.3' },
];

export default function Collection() {
  return (
    <section id="drop" className="bg-white border-b border-slom-ink">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12">
        {/* Заголовок секции */}
        <div className="lg:col-span-3 px-4 md:px-8 py-12 lg:py-16 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-slom-ink/15">
          <div className="relative">
            <h2 className="font-display font-bold uppercase leading-[0.85] text-7xl lg:text-[4.6vw]">
              <span className="block display-condensed">Новый</span>
              <span className="block display-condensed">Дроп</span>
            </h2>
            <span className="absolute -top-4 -right-2 lg:right-0 bg-slom-red text-white font-display font-bold text-3xl px-3 py-2 rotate-[6deg]">
              01
            </span>
          </div>
          <div className="space-y-5">
            <p className="font-mono text-[11px] tracking-[0.2em] uppercase leading-relaxed text-slom-ink/70">
              Капсула «Лето ’26»
              <br />
              Лёгкие слои. Тяжёлые заявления.
              <br />
              Спроектировано для улиц.
            </p>
            <ArrowLink href="#shop">Смотреть коллекцию</ArrowLink>
          </div>
        </div>

        {/* Фотополоса — нулевые отступы между кадрами */}
        <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3">
          {SHOTS.map((s, i) => (
            <figure
              key={s.src}
              className={`relative group overflow-hidden ${i > 0 ? 'border-t sm:border-t-0 sm:border-l border-slom-ink/15' : ''}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                className="w-full h-[420px] lg:h-[520px] object-cover object-top grayscale-[25%] contrast-125"
                loading="lazy"
              />
              <figcaption className="absolute top-3 left-3 bg-slom-ink text-white font-mono text-[9px] tracking-[0.3em] px-2 py-1">
                {s.num}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
