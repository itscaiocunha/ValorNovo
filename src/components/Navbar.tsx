
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[rgba(95,101,110,0.9)] backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <img src="/logo_valornovo.png" alt="ValorNovo Logo" className="h-8" />
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="/" className="nav-link text-white">Home</a>
          <a href="#servicos" className="nav-link text-white">Nossos Serviços</a>
          <a href="/sobre" className="nav-link text-white">Sobre nós</a>
          <a href="#contato" className="nav-link text-white">Contato</a>
          <a href="#podcast" className="nav-link text-white">Podcast ValoNovo®</a>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
