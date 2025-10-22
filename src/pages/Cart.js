import React from 'react';
import { useCart } from '../contexts/CartContext';
import { formatPeso } from '../utils/currency';

export default function Cart(){
  const { cart, updateQty, remove, clear } = useCart();
  const total = cart.reduce((s,i)=> s + i.qty * i.price, 0);
  return (
    <div className="container my-5 fade-in">
      <h2>Your Cart</h2>
      {cart.length===0 ? (
        <p className="mt-3">Your cart is empty. Visit the <a href="/menu">menu</a> to add items.</p>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={item.id}>
                <div>
                  <strong>{item.name}</strong>
                  <div className="text-muted">{formatPeso(item.price)} each</div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <input type="number" min="0" value={item.qty} onChange={e=>updateQty(item.id, Number(e.target.value))} style={{width:70}} className="form-control form-control-sm" />
                  <button className="btn btn-sm btn-outline-danger" onClick={()=>remove(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <strong>Total: {formatPeso(total)}</strong>
            <div>
              <button className="btn btn-secondary me-2" onClick={clear}>Clear</button>
              <button className="btn btn-primary" onClick={()=>alert('Checkout is not implemented yet.')}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
