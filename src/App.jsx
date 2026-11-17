import { useEffect, useMemo, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Order from './pages/Order'
import Tracking from './pages/Tracking'
function loadSaved(key, fallback) {
  try {
    const saved = JSON.parse(localStorage.getItem(key))
    return saved ?? fallback
  } catch {
    return fallback
  }
}

export default function App() {
  const [cart, setCart] = useState(() => loadSaved('bitehub-cart', []))
  const [lastOrder, setLastOrder] = useState(() => loadSaved('bitehub-last-order', null))

  useEffect(() => localStorage.setItem('bitehub-cart', JSON.stringify(cart)), [cart])
  useEffect(() => {
    if (lastOrder) localStorage.setItem('bitehub-last-order', JSON.stringify(lastOrder))
    else localStorage.removeItem('bitehub-last-order')
  }, [lastOrder])

  const addToCart = (item) => setCart(current => {
    const found = current.find(row => row.id === item.id)
    return found
      ? current.map(row => row.id === item.id ? { ...row, quantity: row.quantity + 1 } : row)
      : [...current, { ...item, quantity: 1 }]
  })
  const updateQuantity = (id, change) => setCart(current => current
    .map(row => row.id === id ? { ...row, quantity: row.quantity + change } : row)
    .filter(row => row.quantity > 0))
  const clearCart = () => setCart([])
  const cartCount = useMemo(() => cart.reduce((sum, row) => sum + row.quantity, 0), [cart])

  const placeOrder = (customerName, subtotal, delivery) => {
    const order = {
      id: `BH-${Date.now().toString().slice(-6)}`,
      customerName,
      placedAt: new Date().toISOString(),
      items: cart.map(({ id, name, price, quantity }) => ({ id, name, price, quantity })),
      subtotal,
      delivery,
      total: subtotal + delivery,
      status: 0,
    }
    setLastOrder(order)
    clearCart()
  }
  const advanceOrder = () => setLastOrder(current => current
    ? { ...current, status: Math.min(current.status + 1, 3) } : null)

  return <>
    <Navbar cartCount={cartCount} hasOrder={Boolean(lastOrder)} />
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order" element={<Order cart={cart} updateQuantity={updateQuantity} placeOrder={placeOrder} hasPreviousOrder={Boolean(lastOrder)} />} />
        <Route path="/tracking" element={<Tracking order={lastOrder} advanceOrder={advanceOrder} clearOrder={() => setLastOrder(null)} />} />
        <Route path="*" element={<section className="container not-found"><h1>Page not found</h1><p>We couldn't find that page.</p><Link className="btn btn-primary" to="/">Back home</Link></section>} />
      </Routes>
    </main>
    <Footer />
  </>
}
