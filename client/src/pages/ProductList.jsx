import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useCart } from '../hooks/useCart';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await api.get('/products');
        setProducts(res.data.products || []);
      } catch (err) {
        // handle error
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="flex justify-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <div key={product._id} className="card flex flex-col items-center relative group" style={{ minHeight: '420px' }}>
            <img
              src={product.images && product.images.length > 0 ? product.images[0].url : 'https://via.placeholder.com/200x200?text=No+Image'}
              alt={product.name}
              className="w-full h-48 object-contain mb-4 rounded"
              style={{ background: 'var(--zen-white)' }}
            />
            <h2 className="text-lg font-bold mb-2 text-center" style={{ color: 'var(--zen-black)', letterSpacing: '0.02em' }}>{product.name}</h2>
            <p className="mb-4 text-xl font-bold" style={{ color: 'var(--zen-black)' }}>${product.price.toFixed(2)}</p>
            <button
              className="cta-primary w-full mt-auto"
              onClick={() => addToCart(product._id, 1)}
              style={{ border: '1px solid var(--zen-orange)', background: 'transparent', color: 'var(--zen-orange)', fontWeight: 700, borderRadius: 4, transition: 'all 0.3s' }}
              onMouseOver={e => { e.currentTarget.style.background = 'var(--zen-orange)'; e.currentTarget.style.color = 'white'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--zen-orange)'; }}
            >
              Add to Cart
            </button>
            <button
              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 cta-primary"
              style={{ background: 'var(--zen-orange)', color: 'white', borderRadius: 4, padding: '0.4rem 1.2rem', fontWeight: 700, fontSize: '0.95rem', boxShadow: '0 2px 8px rgba(255,107,53,0.10)', transition: 'opacity 0.3s' }}
            >
              Quick View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 