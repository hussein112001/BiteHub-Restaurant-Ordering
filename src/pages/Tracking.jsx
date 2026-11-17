import { Link } from 'react-router-dom'
import { Check, CheckCircle2, ChefHat, PackageCheck, ShoppingBag, Truck, ArrowRight } from 'lucide-react'

const steps = [
  { label: 'Order placed', detail: 'Your sample order is confirmed.', icon: CheckCircle2 },
  { label: 'Preparing', detail: 'Our demo kitchen is making your meal.', icon: ChefHat },
  { label: 'Out for delivery', detail: 'Your sample delivery is on its way.', icon: Truck },
  { label: 'Delivered', detail: 'Enjoy your meal!', icon: PackageCheck },
]

export default function Tracking({ order, advanceOrder, clearOrder }) {
  if (!order) return <section className="page-section container">
    <div className="page-intro"><span className="eyebrow">ORDER TRACKING</span><h1>Track your meal<span>.</span></h1><p>Place a demo order to try this interactive tracker.</p></div>
    <div className="empty-state"><ShoppingBag className="empty-icon" size={34} /><h3>No demo order yet.</h3><p>Your next delicious idea starts with the menu.</p><Link to="/menu" className="btn btn-primary">Browse the menu</Link></div>
  </section>

  const progress = Math.max(0, Math.min(3, order.status || 0))
  return <section className="page-section container tracking-page">
    <div className="page-intro"><span className="eyebrow">DEMO ORDER TRACKING</span><h1>On its way<span>.</span></h1><p>This interactive tracker simulates delivery stages. It is not connected to a real kitchen or driver.</p></div>
    <div className="tracking-layout">
      <div className="tracking-panel">
        <div className="tracking-heading"><div><span className="eyebrow">ORDER {order.id}</span><h2>{steps[progress].label}</h2><p>Thanks, {order.customerName}! Follow your demo order below.</p></div><span className="tracking-badge">SIMULATION</span></div>
        <ol className="tracking-steps">{steps.map(({ label, detail, icon: Icon }, index) => {
          const done = index < progress
          const active = index === progress
          return <li key={label} className={`tracking-step ${done ? 'is-done' : ''} ${active ? 'is-current' : ''}`} aria-current={active ? 'step' : undefined}>
            <span className="tracking-marker">{done ? <Check size={20} /> : <Icon size={20} />}</span>
            <div><h3>{label}</h3><p>{detail}</p></div>
            <span className="step-status">{done ? 'Done' : active ? 'Current' : 'Next'}</span>
          </li>
        })}</ol>
        <button className="btn btn-primary" type="button" onClick={advanceOrder} disabled={progress === 3}>
          {progress === 3 ? 'Demo complete!' : 'Simulate next step'} {progress < 3 && <ArrowRight size={17} />}
        </button>
        <p className="form-note">Click the button to manually advance the demo. Status changes are not real-time.</p>
      </div>
      <aside className="tracking-summary"><h2>Order summary</h2><p className="tracking-id">#{order.id}</p>
        {order.items.map(item => <div className="tracking-item" key={item.id}><span>{item.quantity} × {item.name}</span><b>${(item.price * item.quantity).toFixed(2)}</b></div>)}
        <div className="price-summary"><div><span>Subtotal</span><b>${order.subtotal.toFixed(2)}</b></div><div><span>Demo delivery</span><b>${order.delivery.toFixed(2)}</b></div><div className="total-line"><span>Total</span><strong>${order.total.toFixed(2)}</strong></div></div>
        <Link to="/menu" className="btn btn-outline full-btn">Shop the menu</Link>
        <button className="link-button" type="button" onClick={clearOrder}>Clear demo order history</button>
      </aside>
    </div>
  </section>
}
