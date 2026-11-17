import { Link } from 'react-router-dom'
import { MapPin, Mail } from 'lucide-react'

export default function Footer() {
  return <footer className="footer"><div className="container footer-grid">
    <div><Link to="/" className="brand footer-brand">bite<span>hub.</span></Link><p>Good food. Good mood. A smoother way to explore your next meal.</p><p className="footer-demo">Frontend-only university project · demo content</p></div>
    <div><h4>Explore</h4><Link to="/menu">Our menu</Link><Link to="/services">Our services</Link><Link to="/about">Our story</Link><Link to="/tracking">Demo tracking</Link></div>
    <div><h4>Get in touch</h4><p><MapPin size={15}/> Beirut, Lebanon (demo)</p><p><Mail size={15}/> hello@bitehub.example</p><Link to="/contact">Contact form</Link></div>
  </div><div className="container copyright">© 2026 BiteHub. CSCI426 academic project · Hussein Khalaf &amp; Salah Hazimeh (صلاح هزيمة) · Demo website.</div></footer>
}
