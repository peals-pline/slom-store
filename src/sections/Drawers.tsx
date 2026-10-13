import { useEffect, useRef, useState } from 'react';
import { PRODUCTS, formatPrice, NAV_LINKS } from '../data';
import type { CartItem } from '../data';

/* Общее поведение выезжающих панелей: Esc закрывает,
   страница под открытой панелью не прокручивается. */
function useDrawer(open: boolean, onClose: () => void) {
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  });
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeRef.current();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);
}

/* ===== Корзина — выезжает справа ===== */
interface CartDrawerProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onChangeQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export function CartDrawer({ open, items, onClose, onChangeQty, onRemove, onClear }: CartDrawerProps) {
  const [ordered, setOrdered] = useState(false);
  // Экран «Это концепт» — одноразовый: если корзину закрыли крестиком,
  // при следующем открытии снова видны товары и кнопка оформления.
  const close = () => {
    setOrdered(false);
    onClose();
  };
  useDrawer(open, close);
  const detailed = items
    .map((it) => ({ ...it, product: PRODUCTS.find((p) => p.id === it.id)! }))
    .filter((it) => it.product);
  const total = detailed.reduce((s, it) => s + it.product.price * it.qty, 0);

  return (
    <>
      <div
        onClick={close}
        className={`fixed inset-0 bg-slom-ink/60 z-[70] transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[26.25rem] bg-white text-slom-ink z-[80] flex flex-col border-l-2 border-slom-ink transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Корзина"
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-slom-ink">
          <h2 className="font-display font-bold uppercase text-xl">Корзина</h2>
          <button onClick={close} className="text-2xl leading-none hover:text-slom-red transition-colors" aria-label="Закрыть">
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {detailed.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-4 px-8 text-center">
              <p className="font-display font-bold uppercase text-2xl leading-tight">
                Корзина пуста.
                <br />
                Это тоже заявление.
              </p>
              <p className="font-mono text-[0.625rem] tracking-[0.25em] uppercase text-slom-smoke">
                Но лучшее заявление — дроп 02
              </p>
              <a
                href="#shop"
                onClick={close}
                className="mt-2 bg-slom-red text-white font-display font-semibold uppercase tracking-[0.15em] text-sm px-8 py-4 hover:bg-slom-ink transition-colors"
              >
                К товарам →
              </a>
            </div>
          ) : (
            detailed.map((it) => (
              <div key={it.id} className="flex gap-4 px-6 py-5 border-b border-slom-ink/15">
                <img
                  src={it.product.img}
                  alt={it.product.name}
                  className="w-20 h-20 object-cover border border-slom-ink/15"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="flex justify-between gap-2">
                    <h3 className="font-display font-semibold uppercase text-sm leading-tight">{it.product.name}</h3>
                    <button onClick={() => onRemove(it.id)} className="text-slom-smoke hover:text-slom-red transition-colors" aria-label={`Убрать ${it.product.name}`}>
                      ✕
                    </button>
                  </div>
                  <p className="font-mono text-[0.5625rem] tracking-[0.25em] text-slom-smoke mt-0.5">{it.product.nameEn}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center border border-slom-ink">
                      <button onClick={() => onChangeQty(it.id, -1)} aria-label="Меньше" className="w-8 h-8 hover:bg-slom-ink hover:text-white transition-colors">−</button>
                      <span className="w-8 text-center font-mono text-sm" aria-live="polite">{it.qty}</span>
                      <button onClick={() => onChangeQty(it.id, 1)} aria-label="Больше" className="w-8 h-8 hover:bg-slom-ink hover:text-white transition-colors">+</button>
                    </div>
                    <span className="font-mono text-sm">{formatPrice(it.product.price * it.qty)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {detailed.length > 0 && !ordered && (
          <div className="border-t-2 border-slom-ink px-6 py-5 space-y-4">
            <div className="flex justify-between font-mono text-xs tracking-[0.2em] uppercase">
              <span>Итого</span>
              <span className="text-base font-medium">{formatPrice(total)}</span>
            </div>
            <p className="font-mono text-[0.5625rem] tracking-[0.2em] uppercase text-slom-smoke">
              Доставка рассчитывается при оформлении
            </p>
            <button
              onClick={() => setOrdered(true)}
              className="w-full bg-slom-red text-white font-display font-semibold uppercase tracking-[0.15em] text-sm py-4 hover:bg-slom-ink transition-colors"
            >
              Оформить заказ →
            </button>
          </div>
        )}

        {ordered && (
          <div className="border-t-2 border-slom-ink px-6 py-8 space-y-4 text-center">
            <p className="font-display font-bold uppercase text-2xl leading-tight">
              Это концепт.
              <br />
              Заказа не будет.
            </p>
            <p className="font-mono text-[0.625rem] tracking-[0.25em] uppercase text-slom-smoke">
              СЛОМ — вымышленный бренд. Витрина, а не магазин: ничего не продаётся и не оформляется
            </p>
            <button
              onClick={() => {
                onClear();
                close();
              }}
              className="w-full bg-slom-ink text-white font-display font-semibold uppercase tracking-[0.15em] text-sm py-4 hover:bg-slom-red transition-colors"
            >
              Продолжить ✕
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

/* ===== Мобильное меню — красный экран слева ===== */
interface MenuDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MenuDrawer({ open, onClose }: MenuDrawerProps) {
  useDrawer(open, onClose);
  return (
    <aside
      className={`fixed inset-0 bg-slom-red text-white z-[85] flex flex-col transition-transform duration-300 ease-out ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Меню"
      aria-hidden={!open}
      inert={!open}
    >
      <div className="flex items-center justify-between px-6 h-16 border-b border-white/30">
        <span className="font-display font-bold text-2xl">
          СЛОМ<span className="align-super text-sm">®</span>
        </span>
        <button onClick={onClose} className="text-3xl leading-none" aria-label="Закрыть меню">
          ✕
        </button>
      </div>
      <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
        {NAV_LINKS.map((l, i) => (
          <a
            key={l.href}
            href={l.href}
            onClick={onClose}
            className="group flex items-baseline gap-4 font-display font-bold uppercase text-5xl leading-tight hover:text-slom-ink transition-colors"
          >
            <span className="font-mono text-xs tracking-[0.3em] text-white/60 group-hover:text-slom-ink/60">
              0{i + 1}
            </span>
            {l.label}
          </a>
        ))}
      </nav>
      <div className="px-8 pb-10 flex items-end justify-between gap-6 font-mono text-[0.625rem] tracking-[0.3em] uppercase text-white/80">
        <span>
          EST. 2026 — Москва
          <br />
          Ломай норму ✕
        </span>
        <a
          href="https://t.me/pline13"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/60 px-3 py-2 hover:bg-white hover:text-slom-red transition-colors"
        >
          Telegram →
        </a>
      </div>
    </aside>
  );
}
