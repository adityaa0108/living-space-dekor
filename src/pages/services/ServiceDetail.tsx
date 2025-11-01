import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Maximize2 } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Sample service data - in a real app, this would come from an API
const services = [
  {
    id: 'living-room',
    title: 'Living Room Design',
    description: 'Transform your living space with our expert design solutions that combine comfort and style.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Our living room designs are tailored to create a harmonious balance between aesthetics and functionality. We focus on creating spaces that reflect your personal style while ensuring maximum comfort. From modern minimalist to classic elegance, our designs transform your living area into a welcoming retreat for family and guests alike.',
    features: [
      'Custom furniture selection and arrangement',
      'Lighting design for ambiance and functionality',
      'Color scheme and material selection',
      'Space planning and layout optimization',
      'Accessorizing and finishing touches'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
    ]
  },
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description: 'Modern and functional kitchen designs that make cooking a pleasure.',
    image: 'https://images.unsplash.com/photo-1600210492493-094691a3a9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    fullDescription: 'Our kitchen remodeling services transform your cooking space into a functional and stylish area. We focus on optimizing workflow, maximizing storage, and creating a beautiful aesthetic that matches your home.',
    features: [
      'Custom cabinetry and storage solutions',
      'Countertop selection and installation',
      'Appliance integration',
      'Lighting and electrical planning',
      'Backsplash and flooring options'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600210492493-094691a3a9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1600125484165-8a5381869c1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600210492493-094691a3a9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1600125484165-8a5381869c1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600125484165-8a5381869c1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'bedroom',
    title: 'Bedroom Design',
    description: 'Create your perfect sanctuary with our personalized bedroom design services.',
    image: 'https://images.unsplash.com/photo-151369420323-9dcab9f5a5a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Your bedroom should be a personal retreat where you can relax and recharge. Our bedroom designs focus on creating a peaceful and comfortable environment tailored to your needs and preferences. We pay special attention to lighting, storage, and layout to create a space that promotes rest and relaxation.',
    features: [
      'Custom bed and furniture selection',
      'Lighting design for relaxation',
      'Closet and storage solutions',
      'Color psychology and decor',
      'Window treatments and textiles'
    ],
    gallery: [
      'https://images.unsplash.com/photo-151369420323-9dcab9f5a5a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1513694203239-1b0c5a38367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1513694203239-1b0c5a38367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1513694203239-1b0c5a38367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1513694203239-1b0c5a38367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1513694203239-1b0c5a38367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1513694203239-1b0c5a38367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1513694203239-1b0c5a38367a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'home-office',
    title: 'Home Office',
    description: 'Design a productive and inspiring workspace that fits your home and work style.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    fullDescription: 'With more people working from home, having a functional and inspiring home office is essential. We design workspaces that enhance productivity while maintaining comfort and style. Our home office solutions include ergonomic furniture, proper lighting, and smart storage to create an environment that helps you do your best work.',
    features: [
      'Ergonomic furniture selection',
      'Task and ambient lighting solutions',
      'Cable management systems',
      'Storage and organization',
      'Acoustic treatments'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
    ]
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovation',
    description: 'Upgrade your bathroom with our luxurious and practical renovation solutions.',
    image: 'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Transform your bathroom into a spa-like retreat with our expert renovation services. We combine functionality with luxury to create a space that meets your needs while providing a relaxing atmosphere. From small updates to complete remodels, we handle every detail to ensure your new bathroom exceeds your expectations.',
    features: [
      'Custom shower and bath designs',
      'Vanity and storage solutions',
      'Tile and material selection',
      'Plumbing and fixture upgrades',
      'Lighting and ventilation'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'outdoor',
    title: 'Outdoor Living',
    description: 'Extend your living space outdoors with our beautiful and functional exterior designs.',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Make the most of your outdoor space with our custom exterior design solutions. Whether you want a cozy patio, an outdoor kitchen, or a complete backyard transformation, we create functional and beautiful outdoor living areas that extend your home\'s living space and enhance your connection with nature.',
    features: [
      'Outdoor kitchen and dining areas',
      'Patio and deck design',
      'Landscape integration',
      'Outdoor lighting solutions',
      'Weather-resistant furniture selection'
    ],
    gallery: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Find the service by ID
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <button 
            onClick={() => navigate(-1)}
            className="text-primary hover:underline flex items-center justify-center mx-auto"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section with Service Image */}
      <div className="relative h-[50vh] w-full">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{service.description}</p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Services
            </button>
            
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-6">About Our {service.title} Service</h2>
              <p className="text-lg text-muted-foreground mb-8">
                {service.fullDescription}
              </p>

              {/* Photo Gallery */}
              <div className="mt-16">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-semibold">Our Work</h3>
                  <button 
                    onClick={() => setSelectedImage(service.gallery[0])}
                    className="text-primary hover:text-primary/80 flex items-center text-sm font-medium"
                  >
                    View All Photos
                    <Maximize2 className="ml-2 w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {service.gallery.slice(0, 8).map((img, idx) => (
                    <div 
                      key={idx} 
                      className="relative group overflow-hidden rounded-lg aspect-square cursor-pointer hover:shadow-lg transition-all duration-300"
                      onClick={() => setSelectedImage(img)}
                    >
                      <img
                        src={img}
                        alt={`${service.title} example ${idx + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Maximize2 className="text-white w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-muted/30 p-8 rounded-xl mt-16">
                <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your Space?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today to schedule a consultation and let's discuss how we can bring your vision to life.
                </p>
                <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Book a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 bg-transparent border-0">
          {selectedImage && (
            <div className="relative">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full max-h-[90vh] object-contain"
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <span className="bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                  {service.gallery.indexOf(selectedImage) + 1} / {service.gallery.length}
                </span>
                <button 
                  onClick={() => {
                    const currentIndex = service.gallery.indexOf(selectedImage);
                    const prevIndex = (currentIndex - 1 + service.gallery.length) % service.gallery.length;
                    setSelectedImage(service.gallery[prevIndex]);
                  }}
                  className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => {
                    const currentIndex = service.gallery.indexOf(selectedImage);
                    const nextIndex = (currentIndex + 1) % service.gallery.length;
                    setSelectedImage(service.gallery[nextIndex]);
                  }}
                  className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
                  aria-label="Next image"
                >
                  <ArrowLeft className="w-5 h-5 transform rotate-180" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceDetail;
