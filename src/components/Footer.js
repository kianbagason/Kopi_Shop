import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} KopiShop — Brewing Happiness in Every Cup</small>
      </div>
    </footer>
  );
}
