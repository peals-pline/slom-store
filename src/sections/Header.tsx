import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../data';

/* Какая секция сейчас посередине экрана — её пункт в меню подсвечивается */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    // #top (первый экран) тоже наблюдаем: когда вернулись к нему, подсветка снимается
    const ids = ['top', ...NAV_LINKS.map((l) => l.href.slice(1))];
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id === 'top' ? null : e.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return active;
}

interface HeaderProps {
  cartCount: number;
  onCartOpen: () => void;
  onMenuOpen: () => void;
}

export default function Header({ cartCount, onCartOpen, onMenuOpen }: HeaderProps) {
  const active = useActiveSection();
  return (
    <>
      {/* Анонс-полоса — уезжает при прокрутке, шапка не закрывает эту высоту */}
      <div className="bg-slom-bone border-b border-slom-ink/15 relative z-[60]">
        <div className="w-full px-4 md:px-8 h-8 flex items-center justify-between font-mono text-[0.625rem] tracking-[0.2em] uppercase text-slom-ink">
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
        <div className="w-full px-4 md:px-8 h-16 flex items-center justify-between border-b border-white/20">
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

          <nav className="hidden lg:flex items-center gap-8 font-mono text-[0.6875rem] tracking-[0.3em]">
            {NAV_LINKS.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative py-2 hover:text-slom-red transition-colors duration-200 after:absolute after:left-0 after:right-[0.3em] after:-bottom-0.5 after:h-[2px] after:bg-slom-red after:origin-left after:transition-transform after:duration-300 ${
                    isActive ? 'after:scale-x-100' : 'after:scale-x-0'
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-6 font-mono text-[0.6875rem] tracking-[0.3em] pr-3 md:pr-4">
            <button
              onClick={onCartOpen}
              aria-label={`Открыть корзину, товаров: ${cartCount}`}
              className="hover:opacity-70 transition-opacity"
            >
              КОРЗИНА <span className={cartCount > 0 ? 'text-slom-red' : undefined}>({cartCount})</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
