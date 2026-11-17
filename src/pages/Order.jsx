import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'

export default function Order({ cart, updateQuantity, placeOrder, hasPreviousOrder }) {
  const navigate = useNavigate()
  const [details, setDetails] = useState({ name: '', phone: '', address: '' })
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const delivery = cart.length ? 2 : 0
  const total = subtotal + delivery
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const submit = (event) => {
    event.preventDefault()
    if (!cart.length) return
    placeOrder(details.name.trim(), subtotal, delivery)
    navigate('/tracking')
  }

  return <section className="page-section container">
    <div className="page-intro"><span className="eyebrow">ALMOST THERE</span><h1>Your order<span>.</span></h1><p>Check your basket, then complete the sample checkout.</p></div>
    {!cart.length
      ? <div className="empty-state"><span className="empty-icon"><ShoppingBag size={32} /></span><h3>Your basket is looking a little empty.</h3><p>Find something delicious on our menu.</p><Link to="/menu" className="btn btn-primary">Explore menu</Link>{hasPreviousOrder && <Link className="empty-secondary" to="/tracking">View previous demo order</Link>}</div>
      : <div className="order-layout">
        <div className="cart-panel">
          <h2>Basket <span>({itemCount} items)</span></h2>
          {cart.map(item => <div className="cart-row" key={item.id}>
            <img src={item.image} alt="" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/food-fallback.svg' }} />
            <div className="cart-description"><b>{item.name}</b><small>${item.price.toFixed(2)} each</small>
              <div className="quantity-control">
                <button type="button" onClick={() => updateQuantity(item.id, -1)} aria-label={`Remove one ${item.name}`}><Minus size={14} /></button>
                <span aria-label={`Quantity ${item.quantity}`}>{item.quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, 1)} aria-label={`Add one ${item.name}`}><Plus size={14} /></button>
              </div>
            </div><strong>${(item.price * item.quantity).toFixed(2)}</strong>
            <button type="button" className="remove-button" onClick={() => updateQuantity(item.id, -item.quantity)} aria-label={`Remove ${item.name}`}><Trash2 size={17} /></button>
          </div>)}
          <Link className="text-link continue-shopping" to="/menu">Add more dishes <ArrowRight size={16} /></Link>
        </div>
        <div className="checkout-panel"><h2>Delivery details</h2>
          <form onSubmit={submit}>
            <label htmlFor="order-name">Full name<input id="order-name" required minLength={2} autoComplete="name" value={details.name} onChange={e => setDetails(current => ({ ...current, name: e.target.value }))} placeholder="Your name" /></label>
            <label htmlFor="order-phone">Phone number<input id="order-phone" required type="tel" minLength={6} autoComplete="tel" value={details.phone} onChange={e => setDetails(current => ({ ...current, phone: e.target.value }))} placeholder="+961..." /></label>
            <label htmlFor="order-address">Delivery address<textarea id="order-address" required minLength={5} rows="3" autoComplete="street-address" value={details.address} onChange={e => setDetails(current => ({ ...current, address: e.target.value }))} placeholder="Street, area, building..." /></label>
            <div className="price-summary"><div><span>Subtotal</span><b>${subtotal.toFixed(2)}</b></div><div><span>Demo delivery fee</span><b>${delivery.toFixed(2)}</b></div><div className="total-line"><span>Total</span><strong>${total.toFixed(2)}</strong></div></div>
            <button className="btn btn-primary full-btn" type="submit">Place demo order <ArrowRight size={17} /></button>
            <small className="form-note">University demo only. No real payment, delivery, or server submission. Your name and order summary are stored only in this browser for the demo tracker.</small>
          </form>
        </div>
      </div>}
  </section>
}
