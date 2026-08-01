import { useState } from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Collection from '../sections/Collection';
import Lookbook from '../sections/Lookbook';
import Products from '../sections/Products';
import Manifesto from '../sections/Manifesto';
import Footer from '../sections/Footer';
import { CartDrawer, MenuDrawer } from '../sections/Drawers';
import type { CartItem } from '../data';

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const addToCart = (id: string) => {
    setCart((prev) => {
      const found = prev.find((it) => it.id === id);
      if (found) return prev.map((it) => (it.id === id ? { ...it, qty: it.qty + 1 } : it));
      return [...prev, { id, qty: 1 }];
    });
    setCartOpen(true);
  };

  const changeQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
        .filter((it) => it.qty > 0)
    );
  };

  const removeItem = (id: string) => setCart((prev) => prev.filter((it) => it.id !== id));

  const count = cart.reduce((s, it) => s + it.qty, 0);

  return (
    <div className="grain bg-white text-slom-ink">
      <Header cartCount={count} onCartOpen={() => setCartOpen(true)} onMenuOpen={() => setMenuOpen(true)} />
      <main>
        <Hero />
        <Collection />
        <Lookbook />
        <Products onAdd={addToCart} />
        <Manifesto />
      </main>
      <Footer />
      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeItem}
        onClear={() => setCart([])}
      />
      <MenuDrawer open={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
