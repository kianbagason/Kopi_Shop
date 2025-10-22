import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

function reducer(state, action){
  switch(action.type){
    case 'ADD':{
      const item = action.item;
      const existing = state.find(i => i.id === item.id);
      if(existing){
        return state.map(i => i.id === item.id ? {...i, qty: i.qty + 1} : i);
      }
      return [...state, {...item, qty:1}];
    }
    case 'REMOVE':{
      return state.filter(i => i.id !== action.id);
    }
    case 'UPDATE_QTY':{
      const {id, qty} = action;
      if(qty <= 0) return state.filter(i => i.id !== id);
      return state.map(i => i.id === id ? {...i, qty} : i);
    }
    case 'CLEAR': return [];
    default: return state;
  }
}

function init(){
  try{
    const raw = localStorage.getItem('kopi_cart');
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    return [];
  }
}

export function CartProvider({children}){
  const [cart, dispatch] = useReducer(reducer, [], init);
  const add = (item) => dispatch({type:'ADD', item});
  const remove = (id) => dispatch({type:'REMOVE', id});
  const updateQty = (id, qty) => dispatch({type:'UPDATE_QTY', id, qty});
  const clear = () => dispatch({type:'CLEAR'});
  // persist cart to localStorage when it changes
  useEffect(()=>{
    try{ localStorage.setItem('kopi_cart', JSON.stringify(cart)); }catch(e){}
  }, [cart]);

  return (
    <CartContext.Provider value={{cart, add, remove, updateQty, clear}}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(){
  return useContext(CartContext);
}
