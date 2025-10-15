import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Banner */}
      <section className="relative h-[50vh] flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl md:text-2xl">Let's Bring Your Vision to Life</p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
};

export default Contact;
