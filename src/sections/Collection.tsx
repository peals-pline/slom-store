import { ArrowLink } from './shared';

const SHOTS = [
  { src: '/img/collection1.webp', alt: 'Футболка с принтом на спине', num: '02.1' },
  { src: '/img/collection2.webp', alt: 'Белая футболка «Взгляд»', num: '02.2' },
  { src: '/img/collection3.webp', alt: 'Куртка с нашивкой СЛОМ', num: '02.3' },
];

export default function Collection() {
  return (
    <section id="drop" className="bg-white border-b border-slom-ink">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">
        {/* Заголовок секции */}
        <div className="lg:col-span-3 px-4 md:px-8 py-12 lg:py-16 flex flex-col justify-between gap-10 border-b lg:border-b-0 lg:border-r border-slom-ink/15">
          {/* Номер дропа стоит рядом с заголовком, а не поверх него:
              на ноутбуках 1024–1280 абсолютная плашка закрывала «Й» */}
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display font-bold uppercase leading-[0.96] text-7xl lg:text-[4.2vw] xl:text-[4.6vw]">
              <span className="block display-condensed">Новый</span>
              <span className="block display-condensed">Дроп</span>
            </h2>
            <span className="shrink-0 -mt-2 bg-slom-red text-white font-display font-bold text-3xl lg:text-2xl xl:text-3xl px-3 py-2 rotate-[6deg]">
              02
            </span>
          </div>
          <div className="space-y-5">
            <p className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase leading-relaxed text-slom-ink/70">
              Капсула «Лето ’26»
              <br />
              Лёгкие слои. Тяжёлые заявления.
              <br />
              Спроектировано для улиц.
            </p>
            <ArrowLink href="#shop">Смотреть коллекцию</ArrowLink>
          </div>
        </div>

        {/* Фотополоса — нулевые отступы между кадрами.
            На телефоне — лента со свайпом, а не три экрана фото подряд */}
        <div className="lg:col-span-9 flex overflow-x-auto no-scrollbar snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible">
          {SHOTS.map((s, i) => (
            <figure
              key={s.src}
              className={`relative group overflow-hidden shrink-0 w-[78%] sm:w-auto snap-start ${i > 0 ? 'border-l border-slom-ink/15' : ''}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                width={1024}
                height={1452}
                className="w-full h-[26.25rem] lg:h-[32.5rem] object-cover object-top grayscale-[25%] contrast-125"
                loading="lazy"
              />
              <figcaption className="absolute top-3 left-3 bg-slom-ink text-white font-mono text-[0.5625rem] tracking-[0.3em] px-2 py-1">
                {s.num}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
