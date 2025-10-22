import React from 'react';
import items from '../data/menuItems';
import CoffeeCard from '../components/CoffeeCard';
import { useCart } from '../contexts/CartContext';

export default function Menu(){
  const { add } = useCart();
  return (
    <div className="container py-5">
      <div className="text-center mb-5 fade-in">
        <h2 className="display-4 fw-bold mb-3">Our Menu</h2>
        <p className="lead text-muted">Discover our handcrafted coffee selections</p>
      </div>
      <div className="row g-4">
        {items.map((it, index) => (
          <div 
            className="col-12 col-sm-6 col-lg-4 fade-in" 
            key={it.id}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CoffeeCard item={it} onAdd={add} />
          </div>
        ))}
      </div>
    </div>
  );
}
