import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-[#1A1A1A] text-white pt-20 pb-10 px-6 md:px-12 z-10 relative mt-auto border-t-[8px] border-[#8B5A2B]">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-serif font-bold tracking-wider mb-6 text-white uppercase drop-shadow-sm">Kripa<br />Enterprises</h2>
                        <p className="text-gray-400 max-w-sm leading-relaxed mb-8">
                            The ultimate destination for premium, handcrafted teak wood doors and windows. Elevating the architecture of your home with timeless luxury.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8B5A2B] hover:bg-[#8B5A2B] transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8B5A2B] hover:bg-[#8B5A2B] transition-all">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-[#8B5A2B] transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-[#8B5A2B] transition-colors">Our Collections</a></li>
                            <li><a href="#" className="hover:text-[#8B5A2B] transition-colors">Custom Designs</a></li>
                            <li><a href="#" className="hover:text-[#8B5A2B] transition-colors">Teak Wood Guide</a></li>
                            <li><a href="#" className="hover:text-[#8B5A2B] transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white tracking-wide">Get in Touch</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 mr-3 mt-1 text-[#8B5A2B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                123 Timbercraft Avenue,<br />Woodland Hills, CA 90210
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#8B5A2B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                +1 (555) 123-4567
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-[#8B5A2B]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                hello@kripaenterprises.com
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; 2026 Kripa Enterprises. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
