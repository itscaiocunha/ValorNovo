import { Button } from "@/components/ui/button";

const Text = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 bg-[#134677] bg-cover bg-center">
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="max-w-4xl text-left md:w-1/2">
          <h1 className="text-4xl text-white md:text-6xl font-bold heading-gradient mb-6 leading-tight">
            QUEM SOMOS?
          </h1>
          
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl text-justify">
            Há 18 anos, a VALORNOVO® desenvolve e valida um processo de inovação que é tanto
            simplificado quanto eficiente. Esse processo foi projetado para ajudar empresas a
            alcançarem maior assertividade na escolha e priorização de projetos de desenvolvimento.
          </p>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl text-justify">
            O maior objetivo da Valor Novo é promover a inovação de forma simplificada e eficiente,
            permitindo que as empresas identifiquem, priorizem e implementem projetos de desenvolvimento
            com maior assertividade. 
          </p>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl text-justify">
            Ao fomentar uma cultura de inovação e estabelecer estratégias claras, a Valor Novo busca
            ajudar as organizações a alcançarem crescimento sustentável, maximizando suas oportunidades
            de faturamento e garantindo um fluxo contínuo de desenvolvimento. 
          </p>

          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl text-justify">
            Em essência, o objetivo é transformar desafios em oportunidades, proporcionando soluções que
            realmente façam a diferença no mercado.
          </p>
        </div>
        
        {/* Imagem */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/img-sobre.png" 
            alt="Ilustração representativa"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Vídeo abaixo do conteúdo */}
      <div className="container mx-auto px-4 mt-10 mb-12 flex justify-center">
        <video 
          src="/video.mp4" 
          className="w-full max-w-3xl rounded-lg shadow-lg" 
          controls 
        />
      </div>
    </section>
  );
};

export default Text;
