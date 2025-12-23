import { SlideContainer } from './SlideLayout';

export function ContactSlide() {
  return (
    <SlideContainer className="justify-center items-center text-center">
      <div className="max-w-3xl">
        <h2 className="text-6xl md:text-8xl font-display font-bold mb-12 tracking-tighter">
          START YOUR<br/>PROJECT
        </h2>
        
        <p className="text-xl text-muted-foreground mb-16 leading-relaxed">
          まずは無料相談から。<br/>
          貴社の課題に合わせた最適なプランをご提案します。
        </p>
        
        <div className="inline-block p-[1px] rounded-lg bg-gradient-to-r from-blue-500 via-emerald-500 to-purple-500">
           <div className="bg-background rounded-lg px-12 py-6">
             <p className="text-sm font-mono text-muted-foreground mb-2">CONTACT US</p>
             <p className="text-3xl font-bold tracking-widest">03-1234-5678</p>
             <p className="text-sm text-muted-foreground mt-2">info@prototype.web</p>
           </div>
        </div>
      </div>
    </SlideContainer>
  );
}
