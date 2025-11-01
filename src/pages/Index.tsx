import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioPreview from "@/components/PortfolioPreview";
import Process from "@/components/Process";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PortfolioPreview />
      <Services />
      <Process />
      <Team />
      <Testimonials />
      <Blog />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
