import React from 'react';

const MobileMenu = ({ toggleMenu, isMenuOpen, isBackdropVisible }) => {
    const links = [
        'Home', 'Single Doors', 'Double Doors', 
        'Teak Windows', 'Custom Designs', 'Contact Us'
    ];

    return (
        <>
            {/* Mobile Menu Backdrop */}
            {isBackdropVisible && (
                <div 
                    onClick={toggleMenu}
                    className={`fixed inset-0 bg-black/50 z-[40] backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                ></div>
            )}

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-[85%] max-w-[320px] bg-[#FDFCF8] z-[50] transform transition-transform duration-300 shadow-2xl flex flex-col overflow-y-auto ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex-1 px-8 pt-32 pb-8 flex flex-col">
                    <h2 className="font-serif text-3xl font-bold mb-10 text-[#1A1A1A] uppercase tracking-wide">Kripa<br />Enterprises</h2>
                    
                    <nav className="flex flex-col space-y-6 text-xl font-medium">
                        {links.map((link, idx) => (
                            <a key={idx} href="#" onClick={toggleMenu} className={`mobile-link text-gray-800 hover:text-[#8B5A2B] ${idx !== links.length - 1 ? 'border-b border-gray-100 pb-3' : 'pb-3'} flex justify-between items-center group`}>
                                {link}
                                <svg className="text-gray-300 group-hover:text-[#8B5A2B] transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </a>
                        ))}
                    </nav>
                    
                    <div className="mt-auto pt-10">
                        <p className="text-sm font-semibold text-[#8B5A2B] uppercase tracking-wider mb-2">Enquire Now</p>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            Kripa Enterprises<br />
                            Authentic Teak Wood Specialists
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;
