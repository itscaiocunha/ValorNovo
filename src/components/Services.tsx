import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const services = [
  {
    image: "/card1.svg",
    url: "/Finep"
  },
  {
    image: "/card2.svg",
    url: "/Projetos"
  },
  {
    image: "/card3.svg",
    url: "/Inovacao"
  },
  {
    image: "/card4.svg",
    url: "/Estrategia"
  },
  {
    image: "/card5.svg",
    url: "/Clinica"
  }
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            NOSSOS <span className="text-primary">SERVIÇOS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Com uma abordagem <span className="font-semibold text-primary">INOVADORA</span> e{" "}
            <span className="font-semibold text-primary">ESTRATÉGICA</span>, nossos serviços
            são projetados para atender às necessidades únicas de sua empresa.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Card className="border-none hover:shadow-xl transition-all duration-300 group overflow-hidden p-0">
                <a href={service.url}>
                  <img 
                  src={service.image} 
                  alt={`Card ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                </a>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
