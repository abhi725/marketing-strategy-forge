
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ContentMarketing from "./pages/services/ContentMarketing";
import DigitalAdvertising from "./pages/services/DigitalAdvertising";
import SEO from "./pages/services/SEO";
import SocialMedia from "./pages/services/SocialMedia";
import CommunityManagement from "./pages/services/CommunityManagement";
import SiteAudit from "./pages/SiteAudit";
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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/digital-advertising" element={<DigitalAdvertising />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/social-media" element={<SocialMedia />} />
          <Route path="/services/community-management" element={<CommunityManagement />} />
          <Route path="/site-audit" element={<SiteAudit />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
