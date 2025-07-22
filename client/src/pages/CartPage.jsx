import React from 'react';
import { useCart } from '../hooks/useCart';

const CartPage = () => {
  const { cart, loading, totalAmount, updateCart, removeFromCart } = useCart();

  if (loading) return <div className="flex justify-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center text-gray-400 flex flex-col items-center justify-center zen-padding" style={{ minHeight: '300px' }}>
          <span style={{ fontSize: '3rem', color: 'var(--zen-orange)' }}>&#11044;</span>
          <div className="mt-4" style={{ color: 'var(--zen-black)', fontWeight: 500 }}>Your cart is empty.</div>
        </div>
      ) : (
        <div className="overflow-x-auto card" style={{ padding: '2.5rem' }}>
          <table className="min-w-full bg-white" style={{ border: 'none' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #EEE' }}>
                <th className="py-2 px-4 text-left" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>Image</th>
                <th className="py-2 px-4 text-left" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>Product</th>
                <th className="py-2 px-4 text-left" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>Price</th>
                <th className="py-2 px-4 text-left" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>Quantity</th>
                <th className="py-2 px-4 text-left" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>Subtotal</th>
                <th className="py-2 px-4 text-left" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.product._id} style={{ borderBottom: '1px solid #F8F8F8' }}>
                  <td className="py-2 px-4">
                    <img
                      src={item.product.image || 'https://via.placeholder.com/80x80?text=No+Image'}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain rounded"
                      style={{ background: 'var(--zen-white)' }}
                    />
                  </td>
                  <td className="py-2 px-4" style={{ color: 'var(--zen-black)', fontWeight: 500 }}>{item.product.name}</td>
                  <td className="py-2 px-4" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>${item.product.price.toFixed(2)}</td>
                  <td className="py-2 px-4">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e => updateCart(item.product._id, Number(e.target.value))}
                      className="w-16 border rounded px-2 py-1"
                      style={{ border: '1px solid #EEE', color: 'var(--zen-black)', fontWeight: 500, borderRadius: 4 }}
                    />
                  </td>
                  <td className="py-2 px-4" style={{ color: 'var(--zen-black)', fontWeight: 700 }}>${(item.product.price * item.quantity).toFixed(2)}</td>
                  <td className="py-2 px-4">
                    <button
                      onClick={() => removeFromCart(item.product._id)}
                      className="cta-primary"
                      style={{ background: 'transparent', color: 'var(--zen-orange)', border: '1px solid var(--zen-orange)', borderRadius: 4, fontWeight: 700, padding: '0.5rem 1.2rem', transition: 'all 0.3s' }}
                      onMouseOver={e => { e.currentTarget.style.background = 'var(--zen-orange)'; e.currentTarget.style.color = 'white'; }}
                      onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--zen-orange)'; }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-8">
            <span className="text-2xl font-bold" style={{ color: 'var(--zen-black)' }}>Total: ${totalAmount.toFixed(2)}</span>
            <button
              className="cta-primary ml-8"
              style={{ minWidth: '160px', fontSize: '1.1rem', borderRadius: 4 }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage; 