import { Star, Clock, Plus } from 'lucide-react'

export default function FoodCard({ item, onAdd }) {
  return <article className="food-card">
    <div className="food-image-wrap">
      <img src={item.image} alt={item.name} loading="lazy" onError={e => { e.currentTarget.onerror = null; e.currentTarget.src = '/images/food-fallback.svg' }} />
      <span className="food-tag">{item.tag}</span>
      <button type="button" className="add-button" onClick={() => onAdd(item)} aria-label={`Add ${item.name} to basket`} title="Add to basket"><Plus size={20}/></button>
    </div>
    <div className="food-card-body"><div className="food-meta"><span>{item.category}</span><span><Star size={14} fill="currentColor" aria-hidden="true" /> {item.rating}</span></div>
      <h3>{item.name}</h3><p>{item.description}</p>
      <div className="food-bottom"><strong>${item.price.toFixed(2)}</strong><span><Clock size={14} aria-hidden="true" /> {item.time}</span></div>
    </div>
  </article>
}
