import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';

interface ConsultationFormProps {
  onClose: () => void;
}

export const ConsultationForm = ({ onClose }: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you for your inquiry! We will contact you shortly.');
      onClose();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.15 }
    }
  };

  const modalVariants = {
    hidden: { 
      scale: 0.95, 
      opacity: 0, 
      y: 20 
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 300
      }
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring' as const,
        damping: 30,
        stiffness: 300
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-1.5 sm:p-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={backdropVariants}
        onClick={onClose}
      >
        <motion.div 
          className="bg-white rounded-lg w-full max-w-xs sm:max-w-md max-h-[90vh] overflow-y-auto"
          variants={modalVariants}
          onClick={e => e.stopPropagation()}
        >
          <div className="relative p-3 sm:p-5">
            <button
              onClick={onClose}
              className="absolute right-2 top-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pt-1">
            <div className="text-center mb-3 sm:mb-5">
              <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">Book a Consultation</h3>
              <p className="text-gray-600 text-[11px] sm:text-sm mt-0.5">Fill out the form and we'll get back to you soon</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-4">
              <div className="space-y-2 sm:space-y-4">
                <div>
                  <Label htmlFor="name" className="text-xs sm:text-sm font-medium text-gray-700">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-xs sm:text-sm font-medium text-gray-700">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-xs sm:text-sm font-medium text-gray-700">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-[11px] sm:text-sm font-medium text-gray-700">Service Interested In</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="living-room">Living Room Design</option>
                    <option value="bedroom">Bedroom Design</option>
                    <option value="kitchen">Kitchen Design</option>
                    <option value="bathroom">Bathroom Design</option>
                    <option value="office">Home Office Design</option>
                    <option value="commercial">Commercial Space</option>
                  </select>
                </div>
              </div>
              
              <div className="pt-0.5">
                <Button
                  type="submit"
                  className="w-full py-2 sm:py-2.5 text-xs sm:text-base font-medium bg-primary hover:bg-primary/90 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              
              <p className="text-[10px] xs:text-xs text-gray-500 text-center mt-2 sm:mt-3 px-2">
                We'll get back to you within 24 hours. Your information is secure and will never be shared.
              </p>
            </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
