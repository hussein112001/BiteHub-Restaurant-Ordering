import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import FoodCard from '../components/FoodCard'
import { menuItems, categories } from '../data'

export default function Menu({ addToCart }) {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const filtered = useMemo(() => menuItems.filter(item => (category === 'All' || item.category === category) && `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase())), [category, search])
  return <section className="page-section container"><div className="page-intro"><span className="eyebrow">MADE FRESH, SERVED HAPPY</span><h1>Our menu<span>.</span></h1><p>From comfort-food classics to fresh new favorites, find your next bite.</p></div><div className="menu-toolbar"><div className="category-list">{categories.map(cat => <button key={cat} className={category === cat ? 'category-chip active' : 'category-chip'} onClick={() => setCategory(cat)}>{cat}</button>)}</div><label className="search-box"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search dishes..."/></label></div>{filtered.length ? <div className="food-grid">{filtered.map(item => <FoodCard key={item.id} item={item} onAdd={addToCart}/>)}</div> : <div className="empty-state"><h3>No dishes found</h3><p>Try another search or category.</p><button className="btn btn-primary" onClick={() => {setSearch('');setCategory('All')}}>Clear filters</button></div>}</section>
}