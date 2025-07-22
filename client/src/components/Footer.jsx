import React from 'react';

const bambooDivider = (
  <svg height="8" width="100%" viewBox="0 0 100 8" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%', margin: '1.5rem 0' }}>
    <rect x="0" y="3" width="100" height="2" rx="1" fill="#FF6B35" fillOpacity="0.18" />
    <rect x="20" y="0" width="2" height="8" rx="1" fill="#FF6B35" />
    <rect x="50" y="0" width="2" height="8" rx="1" fill="#FF6B35" />
    <rect x="80" y="0" width="2" height="8" rx="1" fill="#FF6B35" />
  </svg>
);

const Footer = () => (
  <footer style={{ background: 'var(--zen-white)', borderTop: '1px solid #EEE', marginTop: '4rem' }}>
    <div className="container mx-auto px-4 py-10">
      {bambooDivider}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 style={{ color: 'var(--zen-black)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>E-Shop</h3>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0.5rem' }}>Premium Zen Ecommerce Experience</p>
        </div>
        <div>
          <h3 style={{ color: 'var(--zen-black)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><a href="/" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--zen-orange)'} onMouseOut={e => e.currentTarget.style.color = '#666'}>Home</a></li>
            <li><a href="/cart" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--zen-orange)'} onMouseOut={e => e.currentTarget.style.color = '#666'}>Cart</a></li>
            <li><a href="/login" style={{ color: '#666', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--zen-orange)'} onMouseOut={e => e.currentTarget.style.color = '#666'}>Login</a></li>
          </ul>
        </div>
        <div>
          <h3 style={{ color: 'var(--zen-black)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>Contact</h3>
          <p style={{ color: '#666', fontSize: '1rem', marginBottom: '0.5rem' }}>Email: support@eshop.com</p>
          <p style={{ color: '#666', fontSize: '1rem' }}>Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 