import { SlideContainer } from './SlideLayout';

export function ContactSlide() {
  return (
    <SlideContainer className="bg-primary text-black">
      <div className="w-full h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
        
        {/* Giant Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none opacity-10">
           <h1 className="text-[20vw] font-display font-bold leading-none tracking-tighter text-black">START</h1>
        </div>

        <div className="relative z-10">
           <p className="font-mono font-bold tracking-widest mb-6">PROTOTYPE.WEB</p>
           <h2 className="text-6xl md:text-8xl font-display font-bold mb-12 tracking-tight leading-none text-black">
             LET'S BUILD<br/>THE FUTURE
           </h2>
           
           <div className="bg-black text-white p-12 inline-block min-w-[400px]">
             <p className="text-xs text-white/50 mb-4 uppercase tracking-widest font-bold">Free Consultation</p>
             <p className="text-4xl font-display font-bold tracking-wider mb-2">03-1234-5678</p>
             <p className="text-sm text-white/70">info@prototype.web</p>
           </div>
        </div>

      </div>
    </SlideContainer>
  );
}
