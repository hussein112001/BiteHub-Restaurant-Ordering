import { Link } from 'react-router-dom'
import { ArrowRight, ChefHat, ClipboardList, Clock3, HeartHandshake, MonitorSmartphone, Search, ShoppingBag, Truck } from 'lucide-react'

const services = [
  { icon: Search, title: 'Discover your next favorite', description: 'Explore dishes with category filters and a fast, easy menu search.' },
  { icon: ShoppingBag, title: 'Build your basket', description: 'Add favorites, change quantities, and see clear totals instantly.' },
  { icon: Truck, title: 'Demo delivery checkout', description: 'Enter delivery details and try an end-to-end sample checkout.' },
  { icon: ClipboardList, title: 'Track a sample order', description: 'Follow four simulated stages from order placed to delivered.' },
  { icon: MonitorSmartphone, title: 'Made for every screen', description: 'Browse comfortably from your phone, tablet, or desktop.' },
  { icon: HeartHandshake, title: 'Simple and welcoming', description: 'A clear ordering experience built with accessibility in mind.' },
]

const steps = [
  { icon: Search, title: 'Browse', description: 'Find what you like on our menu.' },
  { icon: ShoppingBag, title: 'Customize', description: 'Choose dishes and quantities.' },
  { icon: Clock3, title: 'Checkout', description: 'Place a sample order in seconds.' },
  { icon: ChefHat, title: 'Follow', description: 'Explore the interactive demo tracker.' },
]

export default function Services() {
  return <>
    <section className="page-section container services-page">
      <div className="page-intro">
        <span className="eyebrow">GOOD FOOD. LESS FUSS.</span>
        <h1>What we offer<span>.</span></h1>
        <p>Everything you need to find the right meal and enjoy a smooth ordering experience.</p>
      </div>
      <div className="services-grid">
        {services.map(({ icon: Icon, title, description }) => <article className="service-card" key={title}>
          <span className="service-icon"><Icon size={26} aria-hidden="true" /></span>
          <h2>{title}</h2><p>{description}</p>
        </article>)}
      </div>
    </section>
    <section className="steps-section">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">FOUR EASY STEPS</span><h2>How it works<span>.</span></h2></div></div>
        <div className="steps-grid">{steps.map(({ icon: Icon, title, description }, index) =>
          <div className="step-card" key={title}><span className="step-number">0{index + 1}</span><Icon size={24} aria-hidden="true" /><h3>{title}</h3><p>{description}</p></div>)}</div>
        <div className="services-cta"><p>BiteHub is a frontend university demo. Orders and tracking are simulated; no payment or delivery takes place.</p><Link to="/menu" className="btn btn-primary">Explore the menu <ArrowRight size={17} /></Link></div>
      </div>
    </section>
  </>
}
