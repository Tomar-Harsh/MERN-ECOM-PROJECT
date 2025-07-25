import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../hooks/useCart';

const Header = () => {
  const { token, logout } = useAuth();
  const { cart, totalAmount } = useCart();
  const navigate = useNavigate();

  return (
    <header
      className="bg-white border-b border-black/10 mb-6"
      style={{ borderBottom: '1px solid #000', boxShadow: 'none' }}
    >
      <div className="container mx-auto flex items-center justify-between zen-padding" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
        <Link to="/" className="text-2xl font-bold" style={{ color: 'var(--zen-black)', letterSpacing: '0.04em' }}>
          E-Shop
        </Link>
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="font-semibold text-base relative group"
            style={{ color: 'var(--zen-black)', padding: '0.25rem 0.5rem', transition: 'color 0.3s' }}
          >
            Products
            <span className="block h-0.5 bg-transparent group-hover:bg-[var(--zen-orange)] transition-all duration-300" style={{ width: '100%' }}></span>
          </Link>
          {token && (
            <Link
              to="/cart"
              className="relative flex items-center group"
              style={{ color: 'var(--zen-black)', padding: '0.25rem 0.5rem', transition: 'color 0.3s', minWidth: 40 }}
              aria-label="View cart"
            >
              <span className="material-icons-outlined" style={{ fontSize: '1.7rem', verticalAlign: 'middle', lineHeight: 1 }}>
                shopping_cart
              </span>
              {cart.length > 0 && (
                <span className="cart-badge" style={{ position: 'absolute', top: '-8px', right: '-10px', fontSize: '0.82rem', padding: '0.15em 0.6em' }}>{cart.length}</span>
              )}
              {cart.length > 0 && (
                <span className="ml-1 text-xs text-gray-500" style={{ fontSize: '0.93rem', fontWeight: 500, color: '#888' }}>${totalAmount.toFixed(2)}</span>
              )}
              <span className="block h-0.5 bg-transparent group-hover:bg-[var(--zen-orange)] transition-all duration-300 absolute left-0 right-0 -bottom-1"></span>
            </Link>
          )}
          {token ? (
            <button
              onClick={logout}
              className="cta-secondary ml-4"
              style={{ minWidth: '90px' }}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="cta-primary ml-4"
                style={{ minWidth: '90px' }}
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="cta-secondary ml-2"
                style={{ minWidth: '90px' }}
              >
                Register
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header; 