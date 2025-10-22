import React from 'react';
import { formatPeso } from '../utils/currency';

export default function CoffeeCard({item, onAdd}){
  return (
    <div className="card coffee-card h-100 shadow-sm border-0">
      <div className="card-img-wrapper position-relative overflow-hidden rounded-top" style={{height: '200px'}}>
        <img 
          src={item.image} 
          className="card-img-top position-absolute w-100 h-100" 
          alt={item.name}
          style={{objectFit: 'cover', top: 0, left: 0}}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold mb-2">{item.name}</h5>
        <p className="card-text text-muted small">{item.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong className="fs-5 text-primary">{formatPeso(item.price)}</strong>
          <button 
            className="btn btn-primary hover-lift" 
            onClick={() => onAdd(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
