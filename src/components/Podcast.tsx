const episodes = [
  {
    image: "/podcast1.svg",
    link: "#"
  },
  {
    image: "/podcast2.svg",
    link: "#"
  },
  {
    image: "/podcast3.svg",
    link: "#"
  }
];

const Podcast = () => {
  return (
    <section id="podcast" className="section-padding py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 overflow-hidden">
          {episodes.map((episode, index) => (
            <div key={index} className="text-center w-64">
              <div className="relative">
                <img src={episode.image} alt={`Episódio ${index + 1}`} className="w-full h-auto" />
                <button className="absolute bottom-0 left-0 w-full bg-[#134677] text-white font-bold py-2 rounded-b-lg hover:bg-[#134677] transition">
                  ASSISTIR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Podcast;
