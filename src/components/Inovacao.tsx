import { useEffect } from "react";

const Servico = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.onload = () => {
      // Corrigindo o erro do TypeScript com uma asserção de tipo
      const hbspt = (window as any).hbspt;
      if (hbspt) {
        hbspt.forms.create({
          portalId: "48062868",
          formId: "4e774f42-9c44-4cab-8381-3d338185357c",
          target: "#hubspot-form"
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center w-full">
      {/* Hero Section */}
      <div className="bg-primary py-40 w-full flex flex-col items-center px-4">
        <h2 className="text-8xl font-bold text-white mb-12">Gestão de Inovação</h2>
        <div className="w-full flex justify-center px-4 mt-10 mb-12">
          <video 
            src="/video.mp4" 
            className="w-full max-w-3xl rounded-lg shadow-lg" 
            controls 
          />
        </div>
        <div className="max-w-4xl w-full px-6">
          <p className="text-lg md:text-xl text-white mb-8">
            Uma vez que a empresa tenha projetos de inovação a desenvolver, faz todo sentido buscar recurso reembolsáveis com juros subsidiados e recurso não reembolsáveis para financiar o desenvolvimento das inovações.
          </p>
          <p className="text-lg md:text-xl text-white mb-8">
            Além de desafogar o caixa da empresa, pois os recursos próprios antes investidos em inovação podem ser dedicados a outras áreas, a captação de recursos para inovação ainda aumenta o valor (valuation) da empresa. Em se tratando de Brasil, a FINEP é a agência de fomento especializada em financiar projetos de inovação, e normalmente oferece as melhores condições de financiamento para Planos Estratégicos de Inovação. Mas o BNDES também é uma opção.
          </p>
          <p className="text-lg md:text-xl text-white mb-8">
            Desde 2006 a VALORNOVO® auxilia na construção do PLANO ESTRATÉGICO DE INOVAÇÃO (PEI) e a captar os recursos mais adequados para seus clientes. Nestes 18 anos de experiência, aprovamos 9 em cada 10 planos de captação junto a FINEP/BNDES e outras agências e instituições de fomento a inovação.
          </p>
        </div>
        <div id="hubspot-form" className="w-full max-w-2xl mt-12 bg-white p-6 rounded-lg shadow-lg"></div>
      </div>
    </div>
  );
};

export default Servico;