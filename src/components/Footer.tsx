
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <img src="/logo_valornovo.png" alt="ValorNovo Logo" className="h-20 mb-4" />
            <p className="text-gray-300 max-w-md">
              Transformando empresas através da inovação estratégica e resultados mensuráveis.
            </p>
          </div>
          
          <div>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#servicos" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#podcast" className="text-gray-300 hover:text-white transition-colors">Podcast</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <Button variant="outline" className="border-white text-black hover:bg-white hover:text-primary">
              Fale Conosco
            </Button>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} ValorNovo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
