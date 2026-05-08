import React from 'react';

const HeroPanels = () => {
    return (
        <div className="grid grid-cols-4 gap-3 md:gap-4 lg:gap-5 w-full">
            <div className="panel panel-1 w-full h-[55vh] md:h-[65vh] rounded-b-[40px] md:rounded-b-[80px] shadow-sm relative">
                <div className="absolute inset-0 rounded-b-[40px] md:rounded-b-[80px] bg-[#8B5A2B]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            
            <div className="panel panel-2 w-full h-[70vh] md:h-[85vh] rounded-b-[40px] md:rounded-b-[80px] shadow-sm relative">
                <div className="absolute inset-0 rounded-b-[40px] md:rounded-b-[80px] bg-[#8B5A2B]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            
            <div className="panel panel-3 w-full h-[65vh] md:h-[75vh] rounded-b-[40px] md:rounded-b-[80px] shadow-sm relative">
                <div className="absolute inset-0 rounded-b-[40px] md:rounded-b-[80px] bg-[#8B5A2B]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
            
            <div className="panel panel-4 w-full h-[45vh] md:h-[60vh] rounded-b-[40px] md:rounded-b-[80px] shadow-sm relative">
                <div className="absolute inset-0 rounded-b-[40px] md:rounded-b-[80px] bg-[#8B5A2B]/10 mix-blend-multiply pointer-events-none"></div>
            </div>
        </div>
    );
};

export default HeroPanels;
