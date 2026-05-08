import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal } from 'lucide-react';
import Navbar from '../components/Navbar';

const products = [
  { id: 1, name: 'Tova Dining Chair', category: 'Chairs', price: '$450', img: '/luxury_table.png', tag: 'New' },
  { id: 2, name: 'Elora Teak Door', category: 'Doors', price: '$3,800', img: '/teak_door.png', tag: '' },
  { id: 3, name: 'Kripa Accent Table', category: 'Tables', price: '$950', img: '/wood_hero_bg.png', tag: 'Best Seller' },
  { id: 4, name: 'Silva Lounge', category: 'Chairs', price: '$1,200', img: '/luxury_table.png', tag: '' },
  { id: 5, name: 'Minimalist Entry', category: 'Doors', price: '$2,900', img: '/teak_door.png', tag: '' },
  { id: 6, name: 'Oken Coffee Table', category: 'Tables', price: '$1,250', img: '/wood_hero_bg.png', tag: '' },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  
  const filters = ['All', 'Chairs', 'Tables', 'Doors', 'Decor'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FBFDF9' }}>
      <Navbar />
      {/* Header Banner */}
      <section style={{ padding: '4rem 0 2rem', backgroundColor: '#f3ede4', borderBottom: '1px solid #e5ddd4' }}>
        <div className="container">
          <h1 className="title-md" style={{ marginBottom: '1rem' }}>The Collection</h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '500px', fontSize: '1.1rem' }}>
            Browse our catalog of handcrafted, premium teak and oak furniture designed to transform your spaces.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0 6rem' }}>
        <div className="container">
          {/* Filters */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '3rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    borderRadius: '30px',
                    border: '1px solid',
                    borderColor: activeFilter === filter ? '#1A1A1A' : '#d1c9be',
                    backgroundColor: activeFilter === filter ? '#1A1A1A' : 'transparent',
                    color: activeFilter === filter ? '#fff' : '#1A1A1A',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    transition: 'var(--transit-smooth)',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <button style={{ 
              display: 'flex', alignItems: 'center', gap: '0.5rem', 
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font-sans)', fontWeight: 500 
            }}>
              <SlidersHorizontal size={18} /> Sort
            </button>
          </div>

          {/* Product Grid */}
          <motion.div 
            layout
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
              gap: '3rem 2rem' 
            }}
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  {product.tag && (
                    <span style={{ 
                      position: 'absolute', top: '1rem', left: '1rem', zIndex: 10,
                      backgroundColor: '#FBFDF9', padding: '0.3rem 0.8rem',
                      fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em',
                      fontWeight: 600, borderRadius: '4px'
                    }}>
                      {product.tag}
                    </span>
                  )}
                  <div className="image-zoom-container" style={{ height: '420px', marginBottom: '1.25rem' }}>
                    <img src={product.img} alt={product.name} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.15rem', fontWeight: 500 }}>{product.name}</h3>
                      <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem', fontSize: '0.9rem' }}>{product.category}</p>
                    </div>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{product.price}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
