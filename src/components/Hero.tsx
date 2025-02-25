
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[url('/img-bg.png')] bg-cover bg-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl text-left">
          <h1 className="text-4xl text-white md:text-6xl font-bold heading-gradient mb-6 leading-tight">
            VALORNOVO® possui um processo simplificado para fazer a Inovação acontecer.
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
            O processo de inovação VALORNOVO® traz mais assertividade, estratégia e cultura à sua empresa, com
            treinamentos, comitês e metas claras para desenvolver novos faturamentos.
          </p>
          
          <Button
            onClick={() => document.getElementById("servicos").scrollIntoView({ behavior: "smooth" })}
            className="bg-[#134677] hover:bg-[#134677] text-white px-8 py-6 text-lg rounded-30"
          >
            CONHEÇA MAIS
          </Button>

        </div>
      </div>
</section>

  );
};

export default Hero;
