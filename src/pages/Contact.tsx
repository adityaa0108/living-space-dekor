import { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { getRandomImage } from "@/lib/imageUtils";

const Contact = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    // Set a random background image on component mount
    setBgImage(getRandomImage());
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ 
            backgroundImage: bgImage ? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${bgImage}')` : 'none',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">Let's Bring Your Vision to Life</p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
