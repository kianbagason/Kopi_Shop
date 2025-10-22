import React, { useState } from 'react';

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''});
  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name || 'friend'} — your message has been sent.`);
    setForm({name:'', email:'', message:''});
  };
  return (
    <div className="container my-5 fade-in">
      <h2>Contact Us</h2>
      <form onSubmit={onSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required></textarea>
        </div>
        <button className="btn btn-primary" type="submit">Send Message</button>
      </form>
    </div>
  );
}
