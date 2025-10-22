import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home(){
  const navigate = useNavigate();
  return (
    <main>
      <section className="hero">
        <div className="container text-center py-5">
          <div className="hero-content p-5 rounded">
            <div className="fade-in" style={{animationDelay: '0.2s'}}>
              <h1 className="display-3 mb-4 fw-bold text-shadow">Brewing Happiness in Every Cup</h1>
              <p className="lead mb-4 fs-3">Welcome to KopiShop — where passion meets perfect coffee.</p>
              <button 
                className="btn btn-warning btn-lg px-5 fw-bold hover-lift"
                onClick={() => navigate('/menu')}
                style={{fontSize: '1.25rem'}}
              >
                Explore Our Menu
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="features py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-4 text-warning mb-3">☕</div>
                  <h3>Premium Beans</h3>
                  <p>Sourced from the finest coffee regions around the world.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-4 text-warning mb-3">❤️</div>
                  <h3>Crafted with Love</h3>
                  <p>Every cup prepared by our expert baristas with care.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="display-4 text-warning mb-3">🏠</div>
                  <h3>Cozy Atmosphere</h3>
                  <p>A perfect space to enjoy your favorite coffee.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
