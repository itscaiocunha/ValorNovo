const clients = [
  { name: "Cliente 1", image: "/empresa1.png", url: "https://agrivalle.com.br/" },
  { name: "Cliente 2", image: "/empresa2.png", url: "https://www.unimed.coop.br/site/web/ribeiraopreto"  },
  { name: "Cliente 3", image: "/empres3.png", url: "https://agrogoods.com.br/"  },
  { name: "Cliente 4", image: "/empresa4.png", url: "https://holliday-scott.com/br"  },
  { name: "Cliente 5", image: "/empres5.png", url: "https://www.embrapa.br/"  }
];

const Clients = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          CASES DE SUCESSO
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => (
            <a href={client.url} target="_blank">
              <img 
                src={client.image} 
                alt={client.name} 
                className="w-full h-full object-contain" 
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
