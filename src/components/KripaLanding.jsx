import React, { useState, useEffect } from 'react';
import Header from './home/Header';
import MobileMenu from './home/MobileMenu';
import HeroPanels from './home/HeroPanels';
import HeroContent from './home/HeroContent';
import Features from './home/Features';
import Collections from './home/Collections';
import Footer from './Footer';

const KripaLanding = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBackdropVisible, setIsBackdropVisible] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const toggleMenu = () => {
        if (!isMenuOpen) {
            setIsBackdropVisible(true);
            setTimeout(() => {
                setIsMenuOpen(true);
            }, 10);
        } else {
            setIsMenuOpen(false);
            setTimeout(() => {
                setIsBackdropVisible(false);
            }, 300);
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
            <style>{`
                html {
                    scroll-behavior: smooth;
                }
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #FBFDF9;
                    color: #1A1A1A;
                    margin: 0;
                    padding: 0;
                    overflow-x: hidden;
                }
                .font-serif {
                    font-family: 'Playfair Display', serif;
                }
                
                .panel {
                    background-image: url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2500');
                    background-size: cover;
                    // background-image: url('./public/company.png');
                    background-position: center top;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                }
                
                @supports (-webkit-touch-callout: none) {
                    .panel {
                        background-attachment: scroll;
                    }
                    .panel-1 { background-position: 0% 0; }
                    .panel-2 { background-position: 33.3% 0; }
                    .panel-3 { background-position: 66.6% 0; }
                    .panel-4 { background-position: 100% 0; }
                }
            `}</style>

            <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-6">
                <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                <HeroPanels />
            </div>

            <HeroContent />
            <Features />
            <Collections />
            <Footer />
            
            <MobileMenu 
                toggleMenu={toggleMenu} 
                isMenuOpen={isMenuOpen} 
                isBackdropVisible={isBackdropVisible} 
            />
        </div>
    );
};

export default KripaLanding;