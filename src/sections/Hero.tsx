import { CrackedCircle, Barcode } from './shared';

export default function Hero() {
  return (
    <section id="top" className="relative bg-slom-ink text-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[92vh]">
        {/* Левая часть — типографика */}
        <div className="lg:col-span-7 relative flex flex-col justify-center px-4 md:px-8 pt-28 pb-16 lg:py-40 z-10">
          <div className="relative">
            <h1 className="font-display font-bold uppercase leading-[0.96] text-[24vw] lg:text-[11.5vw]">
              <span className="block display-condensed">Ломай</span>
              <span className="block display-condensed">Норму</span>
            </h1>
            {/* Знак поверх заголовка */}
            <CrackedCircle className="absolute -top-[15vw] right-[6%] lg:-top-6 lg:right-[12%] w-[13vw] lg:w-[7vw] h-auto rotate-12" />

            {/* Стикеры — только на широких экранах: на планшете и узком ноутбуке
                они ложились прямо на слово «НОРМУ» */}
            <div className="absolute -bottom-8 right-0 hidden xl:flex items-end gap-4">
              <div className="bg-white text-slom-ink border-2 border-slom-ink w-32 rotate-[-4deg] shadow-[6px_6px_0_#FF0000]">
                <div className="bg-slom-ink text-white font-mono text-[9px] tracking-[0.25em] text-center py-1">
                  ВНИМАНИЕ
                </div>
                <div className="font-mono text-[9px] leading-tight tracking-widest text-center py-2 px-1">
                  СОДЕРЖИТ
                  <br />
                  ХАРАКТЕР
                </div>
              </div>
              <div className="bg-slom-red text-white w-28 h-28 rotate-[8deg] flex flex-col items-center justify-center gap-1">
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="white" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
                </svg>
                <span className="font-mono text-[8px] tracking-[0.2em] text-center leading-tight">
                  СЛОМ
                  <br />
                  СИСТЕМЫ
                </span>
              </div>
            </div>
          </div>

          <p className="mt-14 lg:mt-20 font-mono text-[11px] md:text-xs tracking-[0.25em] uppercase leading-relaxed text-white/80 max-w-sm">
            Новый дроп // 01.08
            <br />
            Создано для тех, кто не вписался.
            <br />
            Сделано, чтобы выделяться.
          </p>

          <a
            href="#shop"
            className="mt-8 inline-flex w-fit items-center gap-3 bg-slom-red text-white font-display font-semibold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-white hover:text-slom-ink transition-colors duration-300"
          >
            Смотреть дроп <span className="text-lg leading-none">→</span>
          </a>
        </div>

        {/* Фото героя */}
        <div className="lg:col-span-4 relative min-h-[70vh] lg:min-h-0">
          <img
            src="/img/hero.webp"
            alt="Худи «Система сломана» — вид со спины"
            width={1024}
            height={1452}
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-top grayscale-[35%] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slom-ink via-transparent to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-slom-ink via-transparent to-transparent lg:hidden" />
          <div className="absolute bottom-4 left-4 font-mono text-[9px] tracking-[0.3em] text-white/60">
            SLM_2026.ДРОП_02
          </div>
        </div>

        {/* Красная вертикальная рейка */}
        {/* Узкая колонка: на 1024–1440 шрифт и трекинг меньше, чтобы «КОНФОРМИЗМА» не рвалось посреди слова */}
        <div className="hidden lg:flex lg:col-span-1 bg-slom-red flex-col justify-between items-stretch py-8 px-2 min-[1440px]:px-3">
          <div className="space-y-3">
            <span className="font-mono text-[10px] tracking-[0.3em] text-white underline underline-offset-4 block text-center">
              +
            </span>
            <img
              src="/img/look3.webp"
              alt="Лукбук — деталь"
              className="w-full aspect-square object-cover grayscale contrast-125 border border-white/40"
              loading="lazy"
            />
            <p className="font-mono text-[8px] xl:text-[9px] tracking-normal xl:tracking-[0.06em] min-[1440px]:text-[10px] min-[1440px]:tracking-[0.2em] text-white leading-relaxed uppercase break-words">
              Отрекись от конформизма. Прими хаос.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-vertical font-mono text-[10px] tracking-[0.4em] text-white/80 mx-auto">
              EST. 2026 — МОСКВА
            </span>
            <Barcode className="text-white" label="SLM-02" />
          </div>
        </div>
      </div>

      {/* Статичная «сигнальная лента» */}
      <div className="bg-slom-red border-y-2 border-slom-ink overflow-hidden">
        <div className="flex whitespace-nowrap font-display font-semibold uppercase text-white text-lg md:text-xl tracking-wide py-2 px-2 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="flex items-center gap-6 shrink-0">
              Слом <span className="text-slom-ink">✕</span> Ломай норму <span className="text-slom-ink">✕</span> Дроп 02{' '}
              <span className="text-slom-ink">✕</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
