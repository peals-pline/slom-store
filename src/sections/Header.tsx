import { NAV_LINKS } from '../data';

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  onMenuOpen: () => void;
}

export default function Header({ cartCount, onCartOpen, onMenuOpen }: HeaderProps) {
  return (
    <>
      {/* Анонс-полоса — уезжает при прокрутке, шапка не закрывает эту высоту */}
      <div className="bg-slom-bone border-b border-slom-ink/15 relative z-[60]">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-8 flex items-center justify-between font-mono text-[10px] tracking-[0.2em] uppercase text-slom-ink">
          <span className="hidden sm:block">Доставка по всему миру</span>
          <span className="text-slom-red">Дроп 02 // 01.08.2026</span>
          <span className="hidden sm:block">Бесплатно от 15 000 ₽</span>
        </div>
      </div>

      {/* Закреплённая шапка: sticky, встаёт вплотную к верху окна при прокрутке */}
      {/* Фон сплошной, а не полупрозрачный: на первом экране шапка стоит
          вплотную к чёрному герою, и любая просветка выдаёт себя серой
          полосой поперёк макета. */}
      <header className="sticky top-0 z-40 text-white bg-slom-ink">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 h-16 flex items-center justify-between border-b border-white/20">
          <div className="flex items-center gap-8">
            <button
              onClick={onMenuOpen}
              className="lg:hidden flex flex-col gap-1.5 p-1"
              aria-label="Меню"
            >
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-6 h-[2px] bg-white" />
              <span className="block w-4 h-[2px] bg-slom-red" />
            </button>
            <a href="#top" className="font-display font-bold text-2xl md:text-3xl tracking-tight leading-none">
              СЛОМ<span className="text-slom-red align-super text-sm">®</span>
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-mono text-[11px] tracking-[0.3em]">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slom-red transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6 font-mono text-[11px] tracking-[0.3em] pr-3 md:pr-4">
            <button onClick={onCartOpen} className="hover:opacity-70 transition-opacity">
              КОРЗИНА ({cartCount})
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
