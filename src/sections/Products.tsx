import { PRODUCTS, formatPrice } from '../data';

interface ProductsProps {
  onAdd: (id: string) => void;
}

export default function Products({ onAdd }: ProductsProps) {
  return (
    <section id="shop" className="bg-slom-bone border-b border-slom-ink relative">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12">
        {/* Заголовок */}
        <div className="lg:col-span-3 px-4 md:px-8 py-12 lg:py-16 flex flex-col justify-between gap-10">
          <h2 className="font-display font-bold uppercase leading-[0.96] text-7xl lg:text-[4.2vw]">
            <span className="block display-condensed">Выбран-</span>
            <span className="block display-condensed">ные</span>
            <span className="block display-condensed">вещи</span>
          </h2>
          <div className="space-y-5">
            <p className="font-mono text-[0.6875rem] tracking-[0.2em] uppercase leading-relaxed text-slom-ink/70">
              Отобранные вещи.
              <br />
              Ограниченный тираж.
              <br />
              Максимальный эффект.
            </p>
          </div>
        </div>

        {/* Сетка товаров: разделители — это 1px зазор на тёмном фоне,
            поэтому линии ровные при любом числе колонок (2 на телефоне, 4 на широком) */}
        <div className="lg:col-span-8 grid grid-cols-2 xl:grid-cols-4 gap-px bg-slom-ink/15 border-t lg:border-t-0 lg:border-l border-slom-ink/15">
          {PRODUCTS.map((p) => (
            <article key={p.id} className="group bg-white flex flex-col">
              <div className="relative overflow-hidden aspect-square">
                {/* Основное фото и фото при наведении — кроссфейд */}
                <img
                  src={p.img}
                  alt={p.name}
                  width={1024}
                  height={968}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <img
                  src={p.imgAlt}
                  alt=""
                  aria-hidden
                  className="img-swap absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
                  loading="lazy"
                />
                {p.tag && (
                  <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-slom-red text-white font-mono text-[0.5625rem] tracking-[0.2em] sm:tracking-[0.25em] px-2 py-1 z-10">
                    {p.tag}
                  </span>
                )}
                {/* Быстрое добавление */}
                <button
                  onClick={() => onAdd(p.id)}
                  aria-label={`Добавить ${p.name} в корзину`}
                  className="absolute bottom-0 right-0 w-10 h-10 sm:w-12 sm:h-12 bg-slom-ink text-white text-2xl leading-none hover:bg-slom-red transition-colors z-10"
                >
                  +
                </button>
              </div>
              {/* Текст карточки растягивается, кнопка всегда прижата к низу —
                  у всех карточек ряда она на одной линии, даже если название в две строки */}
              <div className="flex-1 flex flex-col gap-1 px-3 sm:px-4 py-3 sm:py-4 border-t border-slom-ink/15">
                <div>
                  <h3 className="font-display font-semibold uppercase text-sm sm:text-base leading-tight">{p.name}</h3>
                  <p className="font-mono text-[0.5625rem] tracking-[0.25em] text-slom-smoke mt-1">{p.nameEn}</p>
                </div>
                <p className="font-mono text-sm whitespace-nowrap mt-auto pt-2">{formatPrice(p.price)}</p>
              </div>
              <button
                onClick={() => onAdd(p.id)}
                className="w-full py-3 font-mono text-[0.625rem] tracking-[0.3em] uppercase border-t border-slom-ink/15 hover:bg-slom-red hover:text-white transition-colors"
              >
                В корзину →
              </button>
            </article>
          ))}
        </div>

        {/* Вертикальная красная рейка */}
        <div className="hidden lg:flex lg:col-span-1 bg-slom-red items-center justify-center border-l border-slom-ink">
          <span className="text-vertical font-mono text-[0.6875rem] tracking-[0.5em] uppercase text-white">
            Лимитированная серия // Дроп 02
          </span>
        </div>
      </div>
    </section>
  );
}
