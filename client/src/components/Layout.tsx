import React from 'react';
import { motion } from 'framer-motion';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-white/10 selection:text-white">
      {/* Fixed Technical Lines */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-border hidden md:block" />
        <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-border hidden md:block" />
        <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-border hidden lg:block dashed" />
        <div className="absolute right-1/4 top-0 bottom-0 w-[1px] bg-border hidden lg:block dashed" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-white" />
            <span className="font-display font-bold tracking-tighter text-xl">PROTOTYPE.WEB</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#plans" className="hover:text-white transition-colors">PLANS</a>
            <a href="#process" className="hover:text-white transition-colors">PROCESS</a>
            <a href="#content" className="hover:text-white transition-colors">CONTENT</a>
            <a href="#contact" className="text-white border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition-all">
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      <main className="relative z-10 pt-16">
        {children}
      </main>

      <footer className="border-t border-white/10 bg-black py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl">PROTOTYPE.WEB</h3>
              <p className="text-sm text-muted-foreground">
                Crafting digital experiences that transcend the ordinary.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Plans</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Starter (Plum)</li>
                <li>Standard (Bamboo)</li>
                <li>Premium (Pine)</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">Connect</h4>
              <p className="text-sm text-muted-foreground">
                info@prototype.web<br />
                +81 03-1234-5678
              </p>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground font-mono">
            <p>© 2024 PROTOTYPE.WEB INC. ALL RIGHTS RESERVED.</p>
            <p>DESIGNED IN TOKYO</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
