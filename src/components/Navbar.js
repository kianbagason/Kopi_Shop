import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import logo from '../assets/logo.svg';

export default function Navbar(){
  const { cart } = useCart();
  const totalQty = cart.reduce((s,i)=> s + (i.qty||0), 0);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="KopiShop" width="36" height="36" className="me-2" />
          KopiShop
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/menu">Menu</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
            <li className="nav-item position-relative">
              <NavLink className="nav-link" to="/cart">Cart</NavLink>
              {totalQty > 0 && (
                <span className="badge bg-danger rounded-pill position-absolute" style={{top:0,right:-10}}>{totalQty}</span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
