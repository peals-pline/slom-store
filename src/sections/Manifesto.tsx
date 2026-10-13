import { REVIEWS } from '../data';

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative">
      <div className="bg-slom-red torn-top text-slom-ink -mt-1 relative z-10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 px-4 md:px-8 pt-20 pb-14 gap-10">
          {/* Левая колонка — крик */}
          <div className="lg:col-span-3">
            <h2 className="font-display font-bold uppercase leading-[0.96] text-6xl lg:text-[4.2vw]">
              <span className="block display-condensed">Мы не</span>
              <span className="block display-condensed">следуем.</span>
              <span className="block display-condensed text-white">Мы</span>
              <span className="block display-condensed text-white">ломаем.</span>
            </h2>
          </div>

          {/* Средняя колонка — текст манифеста + плакат */}
          <div className="lg:col-span-5 space-y-6">
            <div className="font-mono text-xs lg:text-[13px] tracking-[0.12em] uppercase leading-loose space-y-4 text-slom-ink">
              <p>СЛОМ не был создан, чтобы вписываться.</p>
              <p>Он был создан, чтобы ставить под вопрос всё.</p>
              <p>
                Мы делаем вещи для тех, кто не вписался, для аутсайдеров,
                для тех, кто отказывается молчать.
              </p>
              <p className="font-medium">Это не просто одежда. Это заявление.</p>
            </div>
            <img
              src="/img/manifesto.webp"
              alt="Плакат «Сомневайся во всём» на сетке"
              width={1536}
              height={968}
              className="w-full max-w-md border-4 border-slom-ink object-cover grayscale-[20%] contrast-125 rotate-[-1deg]"
              loading="lazy"
            />
          </div>

          {/* Правая колонка — отзывы */}
          <div className="lg:col-span-4 lg:pl-8 lg:border-l border-slom-ink/30">
            <h3 className="font-display font-bold uppercase text-2xl tracking-tight mb-8">Что говорят</h3>
            <div className="space-y-7">
              {REVIEWS.map((r) => (
                <blockquote key={r.author}>
                  <div className="text-slom-ink text-sm tracking-[0.3em]">{'★'.repeat(r.stars)}</div>
                  <p className="mt-2 text-sm leading-snug max-w-xs">{r.text}</p>
                  <footer className="mt-1 font-mono text-[10px] tracking-[0.2em] text-slom-ink/80">
                    — {r.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
