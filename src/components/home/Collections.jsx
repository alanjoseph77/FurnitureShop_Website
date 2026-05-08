import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const cards = [
    {
        label: 'Single Doors',
        img: '/singledoor.png',
        alt: 'Single Door',
        extra: '',
        category: 'Doors',
    },
    {
        label: 'Double Doors',
        img: '/doubledoor2.png',
        alt: 'Double Doors',
        extra: '',
        category: 'Doors',
    },
    {
        label: 'Teak Windows',
        img: '/wood_hero_bg.png',
        alt: 'Teak Windows',
        extra: 'md:col-span-2 lg:col-span-1',
        category: 'All',
    },
];

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const Collections = () => {
    const navigate = useNavigate();

    const handleCardClick = (category) => {
        navigate(category === 'All' ? '/products' : `/products?category=${category}`);
    };

    return (
        <section className="max-w-[1600px] w-full mx-auto px-4 md:px-6 mb-24 z-10 relative">
            <motion.div
                className="flex justify-between items-end mb-10 px-2 md:px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div>
                    <h2 className="text-3xl md:text-5xl font-serif text-[#1F1F1F]">Our Collections</h2>
                </div>
                <a href="#" className="hidden md:flex items-center text-[#8B5A2B] font-semibold hover:text-[#6b4421] transition group">
                    View All <svg className="ml-2 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={card.label}
                        className={`group relative h-[400px] md:h-[500px] rounded-[30px] overflow-hidden cursor-pointer shadow-sm ${card.extra}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.6, delay: idx * 0.15, ease: 'easeOut' }}
                        whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.18)' }}
                        onClick={() => handleCardClick(card.category)}
                    >
                        <img
                            src={card.img}
                            alt={card.alt}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.15 + 0.3 }}
                            >
                                <p className="text-white/80 text-sm font-semibold uppercase tracking-wider mb-2">Collection</p>
                                <h3 className="text-white text-3xl font-serif">{card.label}</h3>
                            </motion.div>
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#8B5A2B] group-hover:border-transparent transition-all border border-white/40">
                                <ArrowIcon />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            {/* Mobile View All Button */}
            <div className="mt-8 flex justify-center md:hidden">
                    <button className="bg-[#8B5A2B]/10 text-[#8B5A2B] px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#8B5A2B] hover:text-white transition-colors">
                    View All Designs
                    </button>
            </div>
        </section>
    );
};

export default Collections;
