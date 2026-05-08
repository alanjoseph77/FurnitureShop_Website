import React from 'react';

const Features = () => {
    return (
        <section className="max-w-[1600px] w-full mx-auto px-6 md:px-12 py-16 md:py-24 z-10 relative bg-white rounded-[40px] md:rounded-[80px] shadow-sm mb-12">
            <div className="text-center mb-16">
                <h2 className="text-xs font-bold tracking-widest text-[#8B5A2B] uppercase mb-4">Why Kripa Enterprises</h2>
                <h3 className="text-3xl md:text-5xl font-serif text-[#1F1F1F]">The Gold Standard of Craftsmanship</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#FBFDF9] border border-[#8B5A2B]/20 rounded-full flex items-center justify-center text-[#8B5A2B] mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Unmatched Durability</h4>
                    <p className="text-gray-600 leading-relaxed">Genuine teak wood offers incredible natural resistance to weather, moisture, and time. Hand-selected for every build.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#FBFDF9] border border-[#8B5A2B]/20 rounded-full flex items-center justify-center text-[#8B5A2B] mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Bespoke Customization</h4>
                    <p className="text-gray-600 leading-relaxed">Whether it’s a specific dimension, carving, or paneling style, our artisans bring your exact custom vision to life.</p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#FBFDF9] border border-[#8B5A2B]/20 rounded-full flex items-center justify-center text-[#8B5A2B] mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">Timeless Elegance</h4>
                    <p className="text-gray-600 leading-relaxed">The rich, natural grain of our teak wood enhances the architectural beauty and structural value of your property.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;
