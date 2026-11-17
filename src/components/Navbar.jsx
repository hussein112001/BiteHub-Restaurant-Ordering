import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ShoppingBag, Utensils, Menu, X } from 'lucide-react'

const pages = [
  { to: '/', title: 'Home', end: true },
  { to: '/menu', title: 'Menu' },
  { to: '/services', title: 'Services' },
  { to: '/about', title: 'About' },
  { to: '/contact', title: 'Contact' },
]

export default function Navbar({ cartCount, hasOrder }) {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="navbar">
      <div className="nav-inner container">
        <Link to="/" className="brand" onClick={() => setOpen(false)} aria-label="BiteHub home">
          <span className="brand-icon"><Utensils size={19} aria-hidden="true" /></span>
          bite<span>hub.</span>
        </Link>
        <button className="mobile-toggle" type="button" aria-controls="primary-navigation"
          aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}
          onClick={() => setOpen(value => !value)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav id="primary-navigation" aria-label="Main navigation" className={`nav-links ${open ? 'is-open' : ''}`}>
          {pages.map(page => <NavLink key={page.to} to={page.to} end={page.end}>
            {page.title}
          </NavLink>)}
          {hasOrder && <NavLink className="track-link" to="/tracking">Track demo</NavLink>}
          <Link to="/order" className="cart-link">
            <ShoppingBag size={17} aria-hidden="true" /> My order
            <span className="cart-count" aria-label={`${cartCount} items in basket`}>{cartCount}</span>
          </Link>
        </nav>
      </div>
    </header>
  </>
}
