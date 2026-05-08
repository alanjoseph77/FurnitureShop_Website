import React from 'react';

const Header = ({ toggleMenu, isMenuOpen }) => {
    return (
        <header className="absolute top-6 md:top-10 left-0 right-0 w-full px-8 md:px-12 flex justify-between items-start z-[60] pointer-events-none">
            <div className="text-xl md:text-2xl font-serif font-bold text-gray-900 tracking-wider pointer-events-auto mt-2 drop-shadow-sm uppercase">
                Kripa <br /> Enterprises
            </div>
            
            <div className="pointer-events-auto flex justify-end mt-1">
                <button onClick={toggleMenu} className="w-12 h-12 bg-[#8B5A2B] rounded-full flex items-center justify-center text-white shadow-[0_4px_20px_rgb(139,90,43,0.4)] hover:bg-[#6b4421] transition-colors hover:scale-105 active:scale-95 duration-200">
                    <svg className={isMenuOpen ? "hidden" : ""} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                    <svg className={isMenuOpen ? "" : "hidden"} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Header;
