import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section style={{ 
        height: '90vh', 
        position: 'relative', 
        display: 'flex', 
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 
        }}>
          <img 
            src="/luxury_table.png" 
            alt="Luxury Interior" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ 
            position: 'absolute', 
            top: 0, left: 0, width: '100%', height: '100%', 
            background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 100%)' 
          }}></div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ maxWidth: '600px' }}
          >
            <p className="text-label" style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>
              The New Standard
            </p>
            <h1 className="title-lg" style={{ marginBottom: '1.5rem', color: '#fff' }}>
              Crafted for Eternity
            </h1>
            <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: '#e0e0e0', fontWeight: '300' }}>
              Discover our exclusive collection of timeless furniture, ethically sourced and intricately designed for the discerning minimalist.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/products" className="btn btn-primary" style={{ background: 'var(--accent-gold)' }}>
                Explore Collection
              </Link>
              <Link to="/products" className="btn btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>
                View Lookbook
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Banner */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="image-zoom-container"
            style={{ height: '500px' }}
          >
            <img src="/teak_door.png" alt="Teak Heritage" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-label" style={{ marginBottom: '1rem' }}>Heritage Teak</p>
            <h2 className="title-md" style={{ marginBottom: '1.5rem' }}>Elegance at the Threshold</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '450px' }}>
              Our signature doors are crafted from matured, premium grade teak. Designed to endure generations, they provide an unmatched sense of warmth, security, and prestige to your entryways.
            </p>
            <Link to="/products" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid var(--text-primary)', paddingBottom: '0.2rem', fontWeight: 500 }}>
              Learn About Our Materials <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Product Highlight */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <div>
              <p className="text-label" style={{ marginBottom: '0.5rem' }}>Curated Selection</p>
              <h2 className="title-md">Iconic Pieces</h2>
            </div>
            <Link to="/products" className="btn btn-outline">View All</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { name: 'Oken Coffee Table', price: '$1,250', img: '/doubledoor.png' },
              { name: 'Lumina Study Chair', price: '$890', img: '/luxury_table.png' },
              { name: 'Teak Grand Entrance', price: '$4,500', img: '/teak_door.png' }
            ].map((product, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ cursor: 'pointer', group: 'product' }}
              >
                <div className="image-zoom-container" style={{ height: '380px', marginBottom: '1.5rem' }}>
                  <img src={product.img} alt={product.name} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 500 }}>{product.name}</h3>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>Natural Oak</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{product.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
