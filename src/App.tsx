import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Sobre from "./pages/Sobre";
import Podcast from "./pages/Podcast";
import Finep from "./pages/Finep";
import Projetos from "./pages/Projetos";
import Inovacao from "./pages/Inovacao";
import Clinica from "./pages/Clinica";
import Estrategia from "./pages/Estrategia";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/finep" element={<Finep />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/estrategia" element={<Estrategia />} />
          <Route path="/inovacao" element={<Inovacao />} />
          <Route path="/clinica" element={<Clinica />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
