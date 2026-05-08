import React from 'react';

const HeroContent = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 py-10 md:py-[5vh] z-10 relative">
            <div className="w-full md:w-[60%] lg:w-2/3 flex flex-col">
                <h1 className="text-4xl md:text-5xl lg:text-[5.5rem] font-serif text-[#1F1F1F] leading-[1.1] tracking-tight mb-4 md:mb-6">
                    Teak Wood <br className="hidden md:block" />
                    Doors & Windows
                </h1>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl font-medium leading-relaxed">
                    By <span className="text-[#8B5A2B] font-bold">Kripa Enterprises.</span> Selling premium single doors, grand double doors, and exquisite Teak wood windows. Custom design and sizing are fully available.
                </p>
            </div>

            <div className="w-full md:w-[40%] lg:w-1/3 flex flex-col items-start md:items-end space-y-6 md:space-y-8 pb-2">
                <div className="flex items-center space-x-3 md:space-x-4">
                    <a href="#" className="w-10 h-10 md:w-12 md:h-12 border border-[#8B5A2B]/30 rounded-full flex items-center justify-center text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-all hover:-translate-y-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 md:w-12 md:h-12 border border-[#8B5A2B]/30 rounded-full flex items-center justify-center text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-all hover:-translate-y-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="w-10 h-10 md:w-12 md:h-12 border border-[#8B5A2B]/30 rounded-full flex items-center justify-center text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-all hover:-translate-y-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 md:w-12 md:h-12 border border-[#8B5A2B]/30 rounded-full flex items-center justify-center text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition-all hover:-translate-y-0.5 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="md:w-5 md:h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                </div>
                
                <a href="#collections" className="bg-[#8B5A2B] text-white px-10 py-4 md:px-12 md:py-5 rounded-full text-lg font-medium hover:bg-[#6b4421] transition-all shadow-[0_8px_25px_rgb(139,90,43,0.3)] hover:shadow-[0_8px_30px_rgb(139,90,43,0.5)] hover:-translate-y-1 w-full md:w-auto text-center flex justify-center items-center">
                    Explore Teak Collection
                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </a>
            </div>
        </div>
    );
};

export default HeroContent;
