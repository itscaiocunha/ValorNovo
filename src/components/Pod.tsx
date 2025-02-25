import { Mic, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";
import Podcast from "../components/Podcast"

const episodes = [
  {
    id: 1,
    title: "EPISÓDIO 1",
    guest: "Sophia Martinez",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "EPISÓDIO 2",
    guest: "Isabella Romano",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "EPISÓDIO 3",
    guest: "Eduardo Rezende",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "EPISÓDIO 4",
    guest: "Reinaldo Sales",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
];

const Pod = () => {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center gap-4">
            <img src="/logo-podcast.svg" alt="" />
          </div>

          <img src="/grad-img.svg" alt="" />
        </div>
      </div>

      {/* Episodes Grid */}
      <div className="bg-white py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            ASSISTAS NOSSAS EPISÓDIOS
          </h2>
          <Podcast />
        </div>

        <div className="flex justify-center">
            <a href="#youtube" className="mr-12">
              <img src="/bt-youtube.svg" alt="" />
            </a>
            <a href="#youtube">
              <img src="/bt-spotify.svg" alt="" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default Pod;