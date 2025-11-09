import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Maximize2, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ConsultationForm } from '@/components/ConsultationForm';

// Sample service data - in a real app, this would come from an API
const services = [
  // Residential Services
  {
    id: 'living-room',
    title: 'Living Room Design',
    description: 'Transform your living space with our expert design solutions that combine comfort and style.',
    image: '/photos/res/living/1.jpg',
    fullDescription: 'Our living room designs are tailored to create a harmonious balance between aesthetics and functionality. We focus on creating spaces that reflect your personal style while ensuring maximum comfort. From modern minimalist to classic elegance, our designs transform your living area into a welcoming retreat for family and guests alike.',
    features: [
      'Custom furniture selection and arrangement',
      'Lighting design for ambiance and functionality',
      'Color scheme and material selection',
      'Space planning and layout optimization',
      'Accessorizing and finishing touches'
    ],
    images: (() => {
      const designs = [
        { style: 'Modern', desc: 'Sleek lines and minimalist design with a focus on functionality and clean aesthetics' },
        { style: 'Contemporary', desc: 'Current design trends with a mix of different styles and materials' },
        { style: 'Traditional', desc: 'Classic design elements with rich wood tones and elegant furnishings' },
        { style: 'Transitional', desc: 'A perfect blend of traditional and contemporary design elements' },
        { style: 'Rustic', desc: 'Natural materials and a warm, cozy atmosphere with a focus on comfort' },
        { style: 'Industrial', desc: 'Exposed materials, metal accents, and an urban loft feel' },
        { style: 'Scandinavian', desc: 'Light colors, natural light, and functional furniture in a minimalist approach' },
        { style: 'Bohemian', desc: 'Eclectic mix of patterns, textures, and colors for a free-spirited look' },
        { style: 'Coastal', desc: 'Light, airy spaces with a beachy, relaxed vibe and nautical elements' },
        { style: 'Mid-Century Modern', desc: 'Retro-inspired design with clean lines and organic shapes' },
        { style: 'Farmhouse', desc: 'Rustic charm with modern amenities and a cozy, welcoming feel' },
        { style: 'Art Deco', desc: 'Bold geometric patterns, rich colors, and lavish ornamentation' },
        { style: 'Minimalist', desc: 'Simple, uncluttered spaces with a monochromatic color palette' },
        { style: 'Eclectic', desc: 'A mix of different styles, periods, and textures for a unique look' },
        { style: 'French Country', desc: 'Elegant and refined with a rustic, countryside charm' },
        { style: 'Asian Zen', desc: 'Tranquil spaces with natural elements and a sense of balance' }
      ];
      
      const images = [];
      for (let i = 0; i < 64; i++) {
        const num = i + 1;
        const design = designs[i % designs.length];
        const variation = Math.floor(i / designs.length) + 1;
        const variationText = variation > 1 ? ` (Variation ${variation})` : '';
        
        images.push({
          url: `/photos/res/living/${num}.jpg`,
          title: `${design.style} Living Space${variationText}`,
          description: `${design.desc}. This ${design.style.toLowerCase()} living space showcases the perfect balance of form and function.`
        });
      }
      return images;
    })()
  },
  {
    id: 'kitchen',
    title: 'Kitchen Remodeling',
    description: 'Modern and functional kitchen designs that make cooking a pleasure.',
    image: '/photos/res/kitchen/1.jpg',
    fullDescription: 'Our kitchen remodeling services transform your cooking space into a functional and stylish area. We focus on optimizing workflow, maximizing storage, and creating a beautiful aesthetic that matches your home.',
    features: [
      'Custom cabinetry and storage solutions',
      'Countertop selection and installation',
      'Appliance integration',
      'Lighting and electrical planning',
      'Backsplash and flooring options'
    ],
    images: [
      {
        url: '/photos/res/kitchen/1.jpg',
        title: 'Modern White Kitchen',
        description: 'Sleek white cabinetry with gold accents and marble countertops, featuring an open concept design with an island and pendant lighting.'
      },
      {
        url: '/photos/res/kitchen/2.jpg',
        title: 'Contemporary Gray Kitchen',
        description: 'Elegant gray shaker cabinets with brass hardware, quartz countertops, and a spacious island with bar seating.'
      },
      {
        url: '/photos/res/kitchen/3.jpg',
        title: 'Rustic Farmhouse Kitchen',
        description: 'Warm wood finishes with white shaker cabinets, farmhouse sink, and open shelving for a cozy, inviting atmosphere.'
      },
      {
        url: '/photos/res/kitchen/4.jpg',
        title: 'Minimalist Kitchen Design',
        description: 'Clean lines, handleless cabinets, and integrated appliances create a seamless, clutter-free cooking space.'
      },
      {
        url: '/photos/res/kitchen/5.jpg',
        title: 'Luxury Marble Kitchen',
        description: 'Stunning marble countertops and backsplash paired with custom cabinetry and professional-grade appliances.'
      },
      {
        url: '/photos/res/kitchen/6.jpg',
        title: 'Modern Black Kitchen',
        description: 'Dramatic black cabinetry with matte black fixtures, accented with warm wood tones and under-cabinet lighting.'
      },
      {
        url: '/photos/res/kitchen/7.jpg',
        title: 'Coastal Blue Kitchen',
        description: 'Light blue cabinetry with white quartz countertops, brass hardware, and natural wood accents for a beachy vibe.'
      },
      {
        url: '/photos/res/kitchen/8.jpg',
        title: 'Industrial Loft Kitchen',
        description: 'Exposed brick, metal accents, and open shelving create an urban, industrial aesthetic with modern appliances.'
      },
      {
        url: '/photos/res/kitchen/9.jpg',
        title: 'Scandinavian Kitchen',
        description: 'Light wood tones, white walls, and minimalist design elements create a bright, airy Scandinavian-inspired space.'
      },
      {
        url: '/photos/res/kitchen/10.jpg',
        title: 'Modern Farmhouse Kitchen',
        description: 'White shaker cabinets, shiplap walls, and a large farmhouse sink combine modern and rustic elements.'
      },
      {
        url: '/photos/res/kitchen/11.jpg',
        title: 'Two-Tone Kitchen',
        description: 'Contrasting upper and lower cabinets with a mix of open and closed storage solutions.'
      },
      {
        url: '/photos/res/kitchen/12.jpg',
        title: 'Gourmet Chef\'s Kitchen',
        description: 'Professional-grade appliances, ample counter space, and a large central island for serious cooking enthusiasts.'
      },
      {
        url: '/photos/res/kitchen/13.jpg',
        title: 'Transitional Kitchen Design',
        description: 'Blending traditional and contemporary elements with classic cabinetry and modern fixtures.'
      },
      {
        url: '/photos/res/kitchen/14.jpg',
        title: 'Elegant White Kitchen',
        description: 'Timeless white cabinetry with intricate detailing, marble countertops, and crystal chandeliers.'
      },
      {
        url: '/photos/res/kitchen/15.jpg',
        title: 'Modern U-Shaped Kitchen',
        description: 'Efficient U-shaped layout with dark wood cabinets, white countertops, and stainless steel appliances.'
      },
      {
        url: '/photos/res/kitchen/16.jpg',
        title: 'Luxury Open Concept Kitchen',
        description: 'Spacious open layout with high-end finishes, large island, and seamless flow to living and dining areas.'
      }
    ]
  },
  {
    id: 'bedroom',
    title: 'Bedroom Design',
    description: 'Create your perfect sanctuary with our personalized bedroom design services.',
    image: '/photos/res/bedroom/1.jpg',
    fullDescription: 'Your bedroom should be a personal retreat where you can relax and recharge. Our bedroom designs focus on creating a peaceful and comfortable environment tailored to your needs and preferences. We pay special attention to lighting, storage, and layout to create a space that promotes rest and relaxation.',
    features: [
      'Custom bed and furniture selection',
      'Lighting design for relaxation',
      'Closet and storage solutions',
      'Color psychology and decor',
      'Window treatments and textiles'
    ],
    images: [
      {
        url: '/photos/res/bedroom/1.jpg',
        title: 'Luxury Master Suite',
        description: 'Elegant master bedroom with a plush king-size bed, modern chandelier, and floor-to-ceiling windows offering stunning views.'
      },
      {
        url: '/photos/res/bedroom/2.jpg',
        title: 'Modern Minimalist Bedroom',
        description: 'Clean lines and neutral tones create a calming atmosphere in this contemporary bedroom design.'
      },
      {
        url: '/photos/res/bedroom/3.jpg',
        title: 'Cozy Guest Room',
        description: 'Warm and inviting guest room with comfortable bedding and soft lighting for a homey feel.'
      },
      {
        url: '/photos/res/bedroom/4.jpg',
        title: 'Elegant Master Bedroom',
        description: 'Sophisticated master suite featuring a tufted headboard, luxury linens, and a sitting area.'
      },
      {
        url: '/photos/res/bedroom/5.jpg',
        title: 'Scandinavian Bedroom Design',
        description: 'Light-filled bedroom with natural wood accents, white walls, and minimalist decor for a peaceful retreat.'
      },
      {
        url: '/photos/res/bedroom/6.jpg',
        title: 'Modern Farmhouse Bedroom',
        description: 'Rustic charm meets modern comfort with shiplap walls and industrial lighting fixtures.'
      },
      {
        url: '/photos/res/bedroom/7.jpg',
        title: 'Luxury Hotel-Style Bedroom',
        description: 'Opulent bedroom design with a dramatic headboard, plush bedding, and elegant nightstands.'
      },
      {
        url: '/photos/res/bedroom/8.jpg',
        title: 'Serene Blue Bedroom',
        description: 'Calming blue color palette with soft textiles and natural light for ultimate relaxation.'
      },
      {
        url: '/photos/res/bedroom/9.jpg',
        title: 'Contemporary Loft Bedroom',
        description: 'Urban loft-style bedroom with exposed brick, metal accents, and modern furniture.'
      },
      {
        url: '/photos/res/bedroom/10.jpg',
        title: 'Elegant Four-Poster Bed',
        description: 'Classic four-poster bed with luxurious drapery and a sophisticated neutral color scheme.'
      },
      {
        url: '/photos/res/bedroom/11.jpg',
        title: 'Modern Black & White Bedroom',
        description: 'Striking monochromatic design with geometric patterns and contemporary furniture.'
      },
      {
        url: '/photos/res/bedroom/12.jpg',
        title: 'Coastal Retreat Bedroom',
        description: 'Beach-inspired bedroom with light, airy colors and natural textures for a relaxed vibe.'
      },
      {
        url: '/photos/res/bedroom/13.jpg',
        title: 'Rustic Elegance Bedroom',
        description: 'Combines rustic wood elements with elegant furnishings for a warm, inviting space.'
      },
      {
        url: '/photos/res/bedroom/14.jpg',
        title: 'Modern Canopy Bed Design',
        description: 'Sleek canopy bed with sheer curtains creates a dreamy, romantic atmosphere.'
      },
      {
        url: '/photos/res/bedroom/15.jpg',
        title: 'Minimalist Japanese-Inspired Bedroom',
        description: 'Clean lines, natural materials, and a peaceful aesthetic inspired by Japanese design principles.'
      },
      {
        url: '/photos/res/bedroom/16.jpg',
        title: 'Luxury Master Suite with Seating',
        description: 'Spacious master bedroom featuring a comfortable seating area and elegant decor.'
      },
      {
        url: '/photos/res/bedroom/17.jpg',
        title: 'Modern Platform Bed Design',
        description: 'Low-profile platform bed with clean lines and integrated lighting.'
      },
      {
        url: '/photos/res/bedroom/18.jpg',
        title: 'Elegant Gray Bedroom',
        description: 'Sophisticated gray color scheme with plush textiles and modern lighting.'
      },
      {
        url: '/photos/res/bedroom/19.jpg',
        title: 'Bohemian Chic Bedroom',
        description: 'Eclectic mix of patterns, textures, and colors for a relaxed, bohemian vibe.'
      },
      {
        url: '/photos/res/bedroom/20.jpg',
        title: 'Luxury Bedroom with Fireplace',
        description: 'Opulent master suite featuring a cozy fireplace and elegant seating area.'
      },
      {
        url: '/photos/res/bedroom/21.jpg',
        title: 'Modern Industrial Bedroom',
        description: 'Urban industrial aesthetic with exposed ductwork, metal accents, and statement lighting.'
      },
      {
        url: '/photos/res/bedroom/22.jpg',
        title: 'Tranquil Green Bedroom',
        description: 'Soothing green tones with natural wood elements create a peaceful, nature-inspired retreat.'
      },
      {
        url: '/photos/res/bedroom/23.jpg',
        title: 'Luxury Master Suite with Balcony',
        description: 'Elegant bedroom opening to a private balcony with stunning outdoor views.'
      },
      {
        url: '/photos/res/bedroom/24.jpg',
        title: 'Modern Art Deco Bedroom',
        description: 'Glamorous design featuring geometric patterns, mirrored surfaces, and rich jewel tones.'
      },
      {
        url: '/photos/res/bedroom/25.jpg',
        title: 'Rustic Cabin Bedroom',
        description: 'Cozy log cabin atmosphere with warm wood paneling and a stone fireplace.'
      },
      {
        url: '/photos/res/bedroom/26.jpg',
        title: 'Modern Floating Bed Design',
        description: 'Sleek, wall-mounted bed with hidden storage and integrated lighting.'
      },
      {
        url: '/photos/res/bedroom/27.jpg',
        title: 'Elegant Purple Accent Bedroom',
        description: 'Rich purple accents against neutral tones create a luxurious and sophisticated space.'
      },
      {
        url: '/photos/res/bedroom/28.jpg',
        title: 'Minimalist Concrete Bedroom',
        description: 'Industrial-chic design featuring concrete walls, clean lines, and minimalist decor.'
      },
      {
        url: '/photos/res/bedroom/29.jpg',
        title: 'Luxury Bedroom with Panoramic Windows',
        description: 'Breathtaking views through floor-to-ceiling windows in this modern sanctuary.'
      },
      {
        url: '/photos/res/bedroom/30.jpg',
        title: 'Vintage French Country Bedroom',
        description: 'Charming distressed furniture and soft pastel colors create a romantic, old-world feel.'
      },
      {
        url: '/photos/res/bedroom/31.jpg',
        title: 'Modern Bedroom with Reading Nook',
        description: 'Cozy corner with built-in bookshelves and a comfortable reading chair.'
      },
      {
        url: '/photos/res/bedroom/32.jpg',
        title: 'Luxury Bedroom with Dressing Room',
        description: 'Spacious suite featuring a walk-in closet and elegant dressing area.'
      },
      {
        url: '/photos/res/bedroom/33.jpg',
        title: 'Tropical Bedroom Oasis',
        description: 'Lush greenery and natural materials bring the outdoors inside this relaxing retreat.'
      },
      {
        url: '/photos/res/bedroom/34.jpg',
        title: 'Modern Bedroom with Workspace',
        description: 'Integrated home office area in a sleek, contemporary bedroom design.'
      },
      {
        url: '/photos/res/bedroom/35.jpg',
        title: 'Luxury Bedroom with Sitting Area',
        description: 'Expansive master suite with a comfortable seating area and elegant decor.'
      },
      {
        url: '/photos/res/bedroom/36.jpg',
        title: 'Modern Bedroom with Fireplace',
        description: 'Clean lines and a minimalist fireplace create a warm, inviting atmosphere.'
      },
      {
        url: '/photos/res/bedroom/37.jpg',
        title: 'Elegant Bedroom with Bay Window',
        description: 'Sunny bay window with built-in seating adds charm to this elegant bedroom.'
      },
      {
        url: '/photos/res/bedroom/38.jpg',
        title: 'Modern Bedroom with Accent Wall',
        description: 'Bold geometric wallpaper creates a striking focal point in this contemporary space.'
      },
      {
        url: '/photos/res/bedroom/39.jpg',
        title: 'Luxury Bedroom with Ensuite Bathroom',
        description: 'Spacious suite featuring a luxurious bathroom with a freestanding tub.'
      },
      {
        url: '/photos/res/bedroom/40.jpg',
        title: 'Modern Bedroom with Panoramic Views',
        description: 'Floor-to-ceiling windows showcase breathtaking views in this contemporary retreat.'
      }
    ]
  },
  {
    id: 'home-office',
    title: 'Home Office',
    description: 'Design a productive and inspiring workspace that fits your home and work style.',
    image: '/photos/res/office/1.jpg',
    fullDescription: 'With more people working from home, having a functional and inspiring home office is essential. We design workspaces that enhance productivity while maintaining comfort and style. Our home office solutions include ergonomic furniture, proper lighting, and smart storage to create an environment that helps you do your best work.',
    features: [
      'Ergonomic furniture selection',
      'Task and ambient lighting solutions',
      'Cable management systems',
      'Storage and organization',
      'Acoustic treatments'
    ],
    category: 'residential',
    images: [
      {
        url: '/photos/res/office/1.jpg',
        title: 'Modern Minimalist Home Office',
        description: 'Clean lines and a neutral color palette create a distraction-free workspace with built-in shelving and ample natural light.'
      },
      {
        url: '/photos/res/office/2.jpg',
        title: 'Contemporary Workspace',
        description: 'Sleek design with a floating desk, ergonomic chair, and strategic lighting for optimal productivity.'
      },
      {
        url: '/photos/res/office/3.jpg',
        title: 'Scandinavian Home Office',
        description: 'Light wood tones and white surfaces create an airy, inspiring workspace with plenty of storage solutions.'
      },
      {
        url: '/photos/res/office/4.jpg',
        title: 'Industrial Loft Office',
        description: 'Exposed brick and metal accents combine with modern furniture for a creative workspace with character.'
      },
      {
        url: '/photos/res/office/5.jpg',
        title: 'Executive Home Office',
        description: 'Luxurious dark wood desk with leather chair, perfect for video conferences and client meetings.'
      },
      {
        url: '/photos/res/office/6.jpg',
        title: 'Corner Workspace',
        description: 'Space-efficient corner desk setup with floating shelves and task lighting in a compact area.'
      },
      {
        url: '/photos/res/office/7.jpg',
        title: 'Creative Studio Space',
        description: 'Open concept office with a large work table, perfect for brainstorming and collaborative projects.'
      },
      {
        url: '/photos/res/office/8.jpg',
        title: 'Modern Farmhouse Office',
        description: 'Rustic wood desk with modern accents and comfortable seating in a bright, airy room.'
      },
      {
        url: '/photos/res/office/9.jpg',
        title: 'Compact Urban Office',
        description: 'Space-saving wall-mounted desk with floating shelves in a small apartment setting.'
      },
      {
        url: '/photos/res/office/10.jpg',
        title: 'Luxury Home Library Office',
        description: 'Elegant built-in bookshelves with a classic desk, creating a sophisticated workspace.'
      },
      {
        url: '/photos/res/office/11.jpg',
        title: 'Minimalist Standing Desk',
        description: 'Ergonomic stand-up desk with cable management and a view of the outdoors.'
      },
      {
        url: '/photos/res/office/12.jpg',
        title: 'Eclectic Home Office',
        description: 'Vibrant workspace with bold colors, unique furniture, and personal touches for inspiration.'
      },
      {
        url: '/photos/res/office/13.jpg',
        title: 'Modern Glass Office',
        description: 'Sleek glass desk with a transparent chair and minimal decor for a clean, professional look.'
      },
      {
        url: '/photos/res/office/14.jpg',
        title: 'Rustic Cabin Workspace',
        description: 'Warm wood paneling with a large work surface and comfortable leather chair in a cozy setting.'
      },
      {
        url: '/photos/res/office/15.jpg',
        title: 'Contemporary Loft Office',
        description: 'Open space with high ceilings, large windows, and a mix of modern and industrial elements.'
      },
      {
        url: '/photos/res/office/16.jpg',
        title: 'Minimalist White Office',
        description: 'All-white workspace with clean lines, built-in storage, and subtle texture variations.'
      }
    ]
  },
  {
    id: 'bathroom',
    title: 'Bathroom Renovation',
    description: 'Upgrade your bathroom with our luxurious and practical renovation solutions.',
    image: '/photos/res/bathroom/1.jpg',
    fullDescription: 'Transform your bathroom into a spa-like retreat with our expert renovation services. We combine functionality with elegant design to create a space that meets your needs and exceeds your expectations. From modern minimalist to luxurious spa-inspired designs, we handle every aspect of your bathroom renovation with meticulous attention to detail.',
    features: [
      'Custom cabinetry and storage solutions',
      'High-end fixtures and finishes',
      'Lighting design for functionality and ambiance',
      'Tile and material selection',
      'Plumbing and electrical updates',
      'Ventilation and moisture control',
      'Accessibility features'
    ],
    category: 'residential',
    images: [
      {
        url: '/photos/res/bathroom/1.jpg',
        title: 'Modern Spa Bathroom',
        description: 'Elegant freestanding tub with floor-to-ceiling tiles and a rain shower for the ultimate spa experience.'
      },
      {
        url: '/photos/res/bathroom/2.jpg',
        title: 'Luxury Master Bath',
        description: 'Spacious double vanity with marble countertops and his & hers sinks in a contemporary setting.'
      },
      {
        url: '/photos/res/bathroom/3.jpg',
        title: 'Minimalist Wet Room',
        description: 'Sleek, open-concept wet room with a frameless glass shower and floating vanity.'
      },
      {
        url: '/photos/res/bathroom/4.jpg',
        title: 'Rustic Wood Accent Bath',
        description: 'Natural wood elements paired with modern fixtures create a warm, inviting atmosphere.'
      },
      {
        url: '/photos/res/bathroom/5.jpg',
        title: 'Black & White Classic',
        description: 'Timeless black and white checkerboard flooring with subway tile walls and brass fixtures.'
      },
      {
        url: '/photos/res/bathroom/6.jpg',
        title: 'Modern Farmhouse Bath',
        description: 'Shiplap walls, a clawfoot tub, and black matte fixtures combine for a cozy yet stylish look.'
      },
      {
        url: '/photos/res/bathroom/7.jpg',
        title: 'Luxury Walk-in Shower',
        description: 'Spacious walk-in shower with multiple shower heads, bench seating, and elegant tile work.'
      },
      {
        url: '/photos/res/bathroom/8.jpg',
        title: 'Small Bathroom Makeover',
        description: 'Smart storage solutions and light colors make this small bathroom feel spacious and functional.'
      },
      {
        url: '/photos/res/bathroom/9.jpg',
        title: 'Marble Masterpiece',
        description: 'Carrara marble throughout with gold accents and a freestanding soaking tub.'
      },
      {
        url: '/photos/res/bathroom/10.jpg',
        title: 'Industrial Chic',
        description: 'Exposed plumbing, concrete finishes, and metal accents create an edgy, modern look.'
      },
      {
        url: '/photos/res/bathroom/11.jpg',
        title: 'Coastal Retreat',
        description: 'Light blue tones, white shiplap, and natural wood elements bring the beach indoors.'
      },
      {
        url: '/photos/res/bathroom/12.jpg',
        title: 'Japanese Soaking Tub',
        description: 'Deep soaking tub with a minimalist design and natural wood accents for a zen experience.'
      },
      {
        url: '/photos/res/bathroom/13.jpg',
        title: 'Vintage Glam',
        description: 'Crystal chandelier, clawfoot tub, and ornate mirror create a luxurious vintage aesthetic.'
      },
      {
        url: '/photos/res/bathroom/14.jpg',
        title: 'Modern Concrete',
        description: 'Polished concrete walls and floors with sleek, minimalist fixtures.'
      },
      {
        url: '/photos/res/bathroom/15.jpg',
        title: 'Spa Oasis',
        description: 'Steam shower, heated floors, and a towel warmer create a true home spa experience.'
      },
      {
        url: '/photos/res/bathroom/16.jpg',
        title: 'Black & Gold Luxury',
        description: 'Dramatic black walls with gold fixtures and marble accents for a bold statement.'
      },
      {
        url: '/photos/res/bathroom/17.jpg',
        title: 'Scandinavian Simplicity',
        description: 'Clean lines, white walls, and natural wood for a bright, airy feel.'
      },
      {
        url: '/photos/res/bathroom/18.jpg',
        title: 'Mediterranean Retreat',
        description: 'Warm earth tones, patterned tiles, and wrought iron details.'
      },
      {
        url: '/photos/res/bathroom/19.jpg',
        title: 'Modern Rustic',
        description: 'Reclaimed wood vanity with modern fixtures and stone vessel sink.'
      },
      {
        url: '/photos/res/bathroom/20.jpg',
        title: 'Glamorous Powder Room',
        description: 'Wallpapered accent wall, crystal sconces, and a statement mirror.'
      },
      {
        url: '/photos/res/bathroom/21.jpg',
        title: 'Sleek and Modern',
        description: 'Floating vanity, wall-mounted toilet, and large format tiles for a clean look.'
      },
      {
        url: '/photos/res/bathroom/22.jpg',
        title: 'Luxury Master Suite',
        description: 'His and hers vanities, a freestanding tub, and a spacious walk-in shower.'
      }
    ]
  },

  // Commercial Services
  {
    id: 'office-spaces',
    title: 'Office Spaces',
    description: 'Innovative office designs that enhance productivity and reflect your corporate identity.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
    fullDescription: 'Create a workspace that inspires creativity and productivity with our office design solutions. We understand the importance of a well-designed workspace in employee satisfaction and business success. Our designs incorporate the latest trends in workplace design while ensuring functionality and brand alignment.',
    features: [
      'Space planning and layout optimization',
      'Ergonomic workstations',
      'Collaborative and private work areas',
      'Brand integration and wayfinding',
      'Acoustic solutions',
      'Sustainable and biophilic design elements',
      'Technology integration'
    ],
    category: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
      'https://images.unsplash.com/photo-1522071820081-009c5fdcb6e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
    ]
  },
  {
    id: 'retail-design',
    title: 'Retail Design',
    description: 'Engaging retail environments that drive customer engagement and sales.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    fullDescription: 'Transform your retail space into a destination that captivates customers and enhances their shopping experience. Our retail design services focus on creating engaging environments that reflect your brand identity and maximize sales potential through strategic space planning and visual merchandising.',
    features: [
      'Store layout and space planning',
      'Visual merchandising solutions',
      'Lighting design for product display',
      'Checkout and queue management',
      'Brand integration and signage',
      'Flexible and modular fixtures',
      'Customer flow optimization'
    ],
    category: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      'https://images.unsplash.com/photo-1607082349565-7d3cf5a3c1fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV1ZDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'coworking-spaces',
    title: 'Co-working Spaces',
    description: 'Flexible and collaborative work environments for modern professionals.',
    image: 'https://images.unsplash.com/photo-1522071820081-009c2f7a3f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Create a dynamic and flexible workspace that meets the needs of today\'s professionals with our co-working space design services. We design collaborative environments that foster creativity, productivity, and community, with a variety of workspaces to suit different working styles and needs.',
    features: [
      'Flexible workspace configurations',
      'Private offices and open work areas',
      'Meeting and conference rooms',
      'Breakout and lounge spaces',
      'High-speed internet and tech infrastructure',
      'Community building areas',
      'Sustainable design elements'
    ],
    category: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1522071820081-009c2f7a3f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1522071820081-00a6b5e1f1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1522071820081-00a6b5e1f1c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'corporate-lobbies',
    title: 'Corporate Lobbies',
    description: 'Impressive entryways that make a lasting first impression.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
    fullDescription: 'Make a powerful first impression with a corporate lobby that reflects your company\'s values and brand identity. Our lobby designs create welcoming yet professional spaces that impress clients and employees alike.',
    features: [
      'Reception desk design',
      'Seating and waiting areas',
      'Brand integration',
      'Wayfinding and signage',
      'Lighting design',
      'Material and finish selection',
      'Security considerations'
    ],
    category: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80',
      'https://images.unsplash.com/photo-1573496358839-26d740fa43c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80'
    ]
  },
  {
    id: 'conference-rooms',
    title: 'Conference Rooms',
    description: 'Professional meeting spaces equipped with the latest technology.',
    image: '/photos/comm/conf/1.jpg',
    fullDescription: 'Design conference rooms that facilitate productive meetings and presentations with our expert design services. We create functional, technology-integrated spaces that support collaboration and communication.',
    features: [
      'Acoustic treatments',
      'Audio-visual integration',
      'Flexible seating arrangements',
      'Video conferencing setup',
      'Whiteboard and presentation areas',
      'Lighting control',
      'Branding elements'
    ],
    category: 'commercial',
    images: (() => {
      const confRooms = [
        { style: 'Modern', desc: 'Sleek and contemporary design with clean lines and advanced technology integration' },
        { style: 'Executive', desc: 'Luxurious boardroom with premium finishes and executive seating' },
        { style: 'Collaborative', desc: 'Flexible space designed for team collaboration and brainstorming sessions' },
        { style: 'Video Conference', desc: 'State-of-the-art video conferencing setup with professional lighting and acoustics' },
        { style: 'Training', desc: 'Spacious room designed for workshops and training sessions' },
        { style: 'Huddle', desc: 'Small meeting space for quick team meetings and discussions' }
      ];
      
      const images = [];
      for (let i = 0; i < 30; i++) {
        const num = i + 1;
        const room = confRooms[i % confRooms.length];
        const variation = Math.floor(i / confRooms.length) + 1;
        const variationText = variation > 1 ? ` (Variation ${variation})` : '';
        
        images.push({
          url: `/photos/comm/conf/${num}.jpg`,
          title: `${room.style} Conference Room${variationText}`,
          description: `${room.desc}. This ${room.style.toLowerCase()} conference room is designed to enhance productivity and collaboration.`
        });
      }
      return images;
    })()
  },
  {
    id: 'wellness-areas',
    title: 'Wellness Areas',
    description: 'Spaces that promote employee well-being and work-life balance.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Promote employee well-being with thoughtfully designed wellness areas that support physical and mental health. Our designs create calming, rejuvenating spaces that help employees recharge and maintain work-life balance.',
    features: [
      'Relaxation zones',
      'Meditation and quiet rooms',
      'Fitness and yoga spaces',
      'Ergonomic furniture',
      'Biophilic design elements',
      'Natural lighting solutions',
      'Air quality management'
    ],
    category: 'commercial',
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },

  // Hospitality Services
  {
    id: 'hotel-design',
    title: 'Hotel Design',
    description: 'Luxurious and functional hotel spaces that create memorable guest experiences.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Create unforgettable guest experiences with our hotel design services. We specialize in creating spaces that combine luxury, comfort, and functionality to exceed guest expectations. From boutique hotels to luxury resorts, our designs reflect the unique character of your property while ensuring operational efficiency and guest satisfaction.',
    features: [
      'Lobby and reception design',
      'Guest room and suite layouts',
      'Food and beverage outlets',
      'Spa and wellness facilities',
      'Public space planning',
      'Brand integration',
      'Lighting and ambiance design'
    ],
    category: 'hospitality',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1566669437683-9d0a9c675de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1566669437683-9d0a9c675de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'restaurant-bars',
    title: 'Restaurant & Bars',
    description: 'Atmospheric dining spaces that complement your culinary vision and brand.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Transform your restaurant or bar into a destination that delights all the senses. Our hospitality design services create immersive dining experiences that reflect your culinary concept and brand identity. From intimate cafes to high-end restaurants and vibrant bars, we design spaces that enhance the dining experience and keep guests coming back for more.',
    features: [
      'Dining room layout and flow',
      'Bar and service area design',
      'Lighting and ambiance',
      'Furniture and fixture selection',
      'Kitchen workflow planning',
      'Outdoor dining spaces',
      'Brand and concept development'
    ],
    category: 'hospitality',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1517248132819-9e1c4c0a0c5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'lobby-reception',
    title: 'Lobby & Reception',
    description: 'Grand entrances that make a powerful first impression on your guests.',
    image: 'https://images.unsplash.com/photo-1566669437683-9d0a9c675de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Make a lasting first impression with our lobby and reception design services. We create welcoming and functional entry spaces that reflect your brand identity while ensuring smooth guest flow and efficient operations. Our designs combine aesthetic appeal with practical considerations for a seamless guest experience from the moment they enter your property.',
    features: [
      'Grand entrance design',
      'Reception desk and check-in areas',
      'Seating and waiting areas',
      'Wayfinding and signage',
      'Lighting and ambiance',
      'Concierge and bell desk integration',
      'Branding and artwork placement'
    ],
    category: 'hospitality',
    images: [
      'https://images.unsplash.com/photo-1566669437683-9d0a9c675de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1566669437683-9d0a9c675de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1566669437683-9d0a9c675de5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'event-spaces',
    title: 'Event Spaces',
    description: 'Versatile venues perfect for hosting memorable events and gatherings.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
    fullDescription: 'Create unforgettable events in spaces designed to impress. Our event space design services transform ordinary venues into extraordinary settings for conferences, weddings, galas, and corporate functions. We focus on flexibility, functionality, and aesthetics to ensure your events run smoothly while leaving a lasting impression on your guests.',
    features: [
      'Ballroom and conference room design',
      'Flexible space planning',
      'Lighting and AV integration',
      'Stage and presentation areas',
      'Banquet and catering flow',
      'Branding and theming',
      'Pre-function and networking spaces'
    ],
    category: 'hospitality',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
    ]
  },
  {
    id: 'wellness-centers',
    title: 'Wellness Centers',
    description: 'Serene environments dedicated to health, wellness, and self-care.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Design wellness centers that promote health, relaxation, and rejuvenation. Our wellness center designs create harmonious environments that support physical and mental well-being. From fitness areas to spa facilities, we create spaces that inspire and facilitate a holistic approach to health and wellness.',
    features: [
      'Fitness and yoga studio design',
      'Spa and treatment room layout',
      'Relaxation and meditation spaces',
      'Locker and changing facilities',
      'Hydrotherapy and thermal areas',
      'Lighting and sensory design',
      'Sustainable and healthy material selection'
    ],
    category: 'hospitality',
    images: [
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'resort-spas',
    title: 'Resort & Spas',
    description: 'Tranquil retreats designed for relaxation and rejuvenation.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Create an oasis of tranquility and luxury with our resort and spa design services. We specialize in crafting serene environments that promote relaxation, rejuvenation, and well-being. From tropical beachfront resorts to urban day spas, our designs incorporate natural elements, soothing color palettes, and thoughtful layouts that enhance the guest experience.',
    features: [
      'Spa and treatment room design',
      'Wellness center layouts',
      'Relaxation and meditation spaces',
      'Pool and hydrotherapy areas',
      'Outdoor treatment cabanas',
      'Locker and changing facilities',
      'Aromatherapy and sensory design'
    ],
    category: 'hospitality',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
  },
  {
    id: 'outdoor',
    title: 'Outdoor Living',
    description: 'Extend your living space outdoors with our beautiful and functional exterior designs.',
    image: '/photos/res/outdoor/1.jpg',
    fullDescription: 'Make the most of your outdoor space with our custom exterior design solutions. Whether you want a cozy patio, an outdoor kitchen, or a complete backyard transformation, we create functional and beautiful outdoor living areas that extend your home\'s living space and enhance your connection with nature.',
    features: [
      'Outdoor kitchen and dining areas',
      'Patio and deck design',
      'Landscape integration',
      'Outdoor lighting solutions',
      'Weather-resistant furniture selection',
      'Fire pits and water features',
      'Outdoor entertainment systems'
    ],
    category: 'residential',
    images: [
      {
        url: '/photos/res/outdoor/1.jpg',
        title: 'Modern Poolside Oasis',
        description: 'Infinity pool with sleek lounge chairs and tropical landscaping for the ultimate outdoor retreat.'
      },
      {
        url: '/photos/res/outdoor/2.jpg',
        title: 'Cozy Fire Pit Area',
        description: 'Circular stone fire pit surrounded by comfortable seating for evening gatherings.'
      },
      {
        url: '/photos/res/outdoor/3.jpg',
        title: 'Luxury Outdoor Kitchen',
        description: 'Fully equipped kitchen with built-in grill, refrigerator, and bar seating for outdoor entertaining.'
      },
      {
        url: '/photos/res/outdoor/4.jpg',
        title: 'Garden Dining Patio',
        description: 'Elegant dining area surrounded by lush gardens and ambient string lighting.'
      },
      {
        url: '/photos/res/outdoor/5.jpg',
        title: 'Modern Rooftop Terrace',
        description: 'Urban rooftop with modular furniture, planters, and panoramic city views.'
      },
      {
        url: '/photos/res/outdoor/6.jpg',
        title: 'Rustic Backyard Retreat',
        description: 'Natural wood deck with Adirondack chairs overlooking a peaceful garden.'
      },
      {
        url: '/photos/res/outdoor/7.jpg',
        title: 'Tropical Pool Paradise',
        description: 'Freeform pool with rock waterfall, palm trees, and thatched cabanas.'
      },
      {
        url: '/photos/res/outdoor/8.jpg',
        title: 'Minimalist Courtyard',
        description: 'Clean lines with concrete planters, water feature, and built-in bench seating.'
      },
      {
        url: '/photos/res/outdoor/9.jpg',
        title: 'Mediterranean Patio',
        description: 'Terracotta tiles, wrought iron furniture, and climbing vines create old-world charm.'
      },
      {
        url: '/photos/res/outdoor/10.jpg',
        title: 'Modern Deck with Hot Tub',
        description: 'Multi-level deck featuring a built-in hot tub and glass railings for unobstructed views.'
      },
      {
        url: '/photos/res/outdoor/11.jpg',
        title: 'Tropical Cabana Lounge',
        description: 'Thatched-roof cabanas with daybeds and billowing white curtains by the pool.'
      },
      {
        url: '/photos/res/outdoor/12.jpg',
        title: 'Rustic Fireplace Seating',
        description: 'Stone fireplace with built-in seating and cozy outdoor sofas under a wooden pergola.'
      },
      {
        url: '/photos/res/outdoor/13.jpg',
        title: 'Modern Rooftop Garden',
        description: 'Green roof with native plants, modern furniture, and city skyline views.'
      },
      {
        url: '/photos/res/outdoor/14.jpg',
        title: 'Coastal Backyard',
        description: 'Whitewashed deck with navy blue accents and nautical-inspired decor near the beach.'
      },
      {
        url: '/photos/res/outdoor/15.jpg',
        title: 'Zen Garden Retreat',
        description: 'Japanese-inspired garden with koi pond, stone pathway, and bamboo fencing.'
      },
      {
        url: '/photos/res/outdoor/16.jpg',
        title: 'Luxury Resort-Style Pool',
        description: 'Zero-edge pool with sunken lounge area and tropical landscaping.'
      },
      {
        url: '/photos/res/outdoor/17.jpg',
        title: 'Rustic Farmhouse Porch',
        description: 'Wraparound porch with rocking chairs, hanging ferns, and a farmhouse sink.'
      },
      {
        url: '/photos/res/outdoor/18.jpg',
        title: 'Modern Outdoor Living Room',
        description: 'Sectional sofas around a fire table under a modern pergola with drapes.'
      },
      {
        url: '/photos/res/outdoor/19.jpg',
        title: 'Tropical Poolside Bar',
        description: 'Thatched-roof tiki bar with bamboo stools and tropical drink station.'
      },
      {
        url: '/photos/res/outdoor/20.jpg',
        title: 'Mountain View Deck',
        description: 'Multi-level deck with hot tub and panoramic mountain views.'
      },
      {
        url: '/photos/res/outdoor/21.jpg',
        title: 'Modern Courtyard Fountain',
        description: 'Minimalist water feature with floating steps and architectural planters.'
      },
      {
        url: '/photos/res/outdoor/22.jpg',
        title: 'Cozy Backyard Shed',
        description: 'Converted shed with French doors, deck, and string lights for a guest house feel.'
      },
      {
        url: '/photos/res/outdoor/23.jpg',
        title: 'Mediterranean Courtyard',
        description: 'Terracotta tiles, wrought iron furniture, and climbing bougainvillea.'
      },
      {
        url: '/photos/res/outdoor/24.jpg',
        title: 'Modern Rooftop Lounge',
        description: 'Minimalist furniture, fire pits, and city skyline views on a rooftop terrace.'
      },
      {
        url: '/photos/res/outdoor/25.jpg',
        title: 'Tropical Garden Path',
        description: 'Stone pathway through lush tropical plants and palm trees.'
      },
      {
        url: '/photos/res/outdoor/26.jpg',
        title: 'Rustic Wooden Deck',
        description: 'Reclaimed wood deck with built-in benches and a rustic dining area.'
      },
      {
        url: '/photos/res/outdoor/27.jpg',
        title: 'Modern Water Feature',
        description: 'Reflecting pool with floating steps and minimalist landscaping.'
      },
      {
        url: '/photos/res/outdoor/28.jpg',
        title: 'Coastal Fire Pit',
        description: 'Whitewashed stone fire pit with blue cushions and driftwood accents.'
      },
      {
        url: '/photos/res/outdoor/29.jpg',
        title: 'Asian-Inspired Garden',
        description: 'Zen garden with stone lanterns, bamboo, and a koi pond.'
      },
      {
        url: '/photos/res/outdoor/30.jpg',
        title: 'Modern Pool House',
        description: 'Sleek pool house with glass walls and a green roof.'
      },
      {
        url: '/photos/res/outdoor/31.jpg',
        title: 'Rustic Stone Patio',
        description: 'Flagstone patio with a wood-burning fireplace and rustic furniture.'
      },
      {
        url: '/photos/res/outdoor/32.jpg',
        title: 'Tropical Outdoor Shower',
        description: 'Private outdoor shower surrounded by tropical plants and bamboo fencing.'
      },
      {
        url: '/photos/res/outdoor/33.jpg',
        title: 'Modern Rooftop Dining',
        description: 'Long dining table with modern chairs and city views on a rooftop terrace.'
      },
      {
        url: '/photos/res/outdoor/34.jpg',
        title: 'Rustic Garden Shed',
        description: 'Charming shed with flower boxes and a small patio area.'
      },
      {
        url: '/photos/res/outdoor/35.jpg',
        title: 'Modern Courtyard Pool',
        description: 'Geometric pool with a wooden deck and minimalist landscaping.'
      },
      {
        url: '/photos/res/outdoor/36.jpg',
        title: 'Coastal Hammock Garden',
        description: 'Hammocks strung between palm trees with ocean views.'
      },
      {
        url: '/photos/res/outdoor/37.jpg',
        title: 'Modern Outdoor Kitchen',
        description: 'Sleek outdoor kitchen with concrete countertops and built-in appliances.'
      }
    ]
  }
];

// Map of image URLs to their descriptions
const imageDescriptions: Record<string, string> = {
  'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80': 'Modern living room with minimalist design and natural lighting. This space features clean lines, neutral colors, and an abundance of natural light that creates a serene and inviting atmosphere. The open floor plan allows for easy flow between living and dining areas, making it perfect for both relaxation and entertaining. The carefully selected furniture pieces combine both style and functionality, with plush seating arrangements that encourage conversation and comfort. Large windows provide stunning outdoor views and help to bring the beauty of nature indoors. The minimalist approach to decor ensures that every element serves a purpose while maintaining a sense of spaciousness and tranquility.',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80': 'Cozy living space with warm tones and comfortable seating. This inviting room features a harmonious blend of textures, from the plush area rug to the soft throw pillows and warm wood accents. The carefully curated color palette of soft neutrals and warm earth tones creates a welcoming atmosphere that feels both sophisticated and approachable. The sectional sofa provides ample seating for family and guests, while the strategic placement of side tables and floor lamps enhances both functionality and ambiance. A large statement artwork above the sofa adds visual interest and ties the room together. The space is designed for both relaxation and socializing, with comfortable seating arranged to encourage conversation and connection.',
  'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80': 'Elegant living room with a fireplace and stylish furniture. This sophisticated space combines classic design elements with modern comforts, creating a timeless yet contemporary feel. The focal point of the room is the stunning fireplace, which adds warmth and character to the space. The carefully selected furniture pieces feature clean lines and high-quality materials, with a mix of upholstered and wooden elements that add depth and texture. The neutral color scheme is accented with subtle pops of color through decorative pillows and artwork, creating visual interest without overwhelming the space. The room is designed for both formal entertaining and casual relaxation, with distinct seating areas that allow for various activities. Large windows provide plenty of natural light during the day, while carefully placed lighting fixtures create a warm and inviting atmosphere in the evening.',
  'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80': 'Contemporary living area with an open floor plan. This modern space features a seamless flow between the living, dining, and kitchen areas, creating a sense of spaciousness and connectivity. The design emphasizes clean lines, minimal ornamentation, and a neutral color palette that serves as the perfect backdrop for statement furniture pieces and artwork. Large windows and glass doors allow natural light to flood the space and provide a connection to the outdoors. The open layout is ideal for both everyday living and entertaining, with distinct zones that maintain a cohesive design language. The furniture selection focuses on comfort and functionality, with modular pieces that can be easily rearranged to suit different needs. The overall aesthetic is sophisticated yet understated, with attention to detail evident in the choice of materials and finishes throughout the space.',
};

// Helper function to get description for an image
const getImageDescription = (imageUrl: string, serviceId: string): string => {
  return imageDescriptions[imageUrl] || `A beautiful example of our ${serviceId.replace('-', ' ')} service.`;
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  type ImageType = {
    url: string;
    title: string;
    description: string;
  };

  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6; // Show 6 images per page

  // Prevent background scrolling when modal is open
  useEffect(() => {
      if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);
  
  // Find the current service
  const service = services.find(s => s.id === serviceId);
  
  if (!service) {
    return <div>Service not found</div>;
  }
  
  // Filter related services by category
  const relatedServices = services.filter(s => 
    s.id !== serviceId && s.category === service.category
  ).slice(0, 3);
  
  // Navigation handlers for the image gallery
  const handlePrevImage = () => {
    if (!selectedImage || !service.images) return;
    const currentIndex = service.images.findIndex(img => img.url === selectedImage.url);
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + service.images.length) % service.images.length;
    const prevImage = service.images[prevIndex];
    if (prevImage) {
      setSelectedImage(prevImage);
    }
  };
  
  const handleNextImage = () => {
    if (!selectedImage || !service.images) return;
    const currentIndex = service.images.findIndex(img => img.url === selectedImage.url);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % service.images.length;
    const nextImage = service.images[nextIndex];
    if (nextImage) {
      setSelectedImage(nextImage);
    }
  };

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
        <div className="container mx-auto px-6">
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
              
              <h3 className="text-2xl font-semibold mb-4">What's Included</h3>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Photo Gallery */}
              <div className="mt-16">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-semibold">
                    {service.category === 'residential' ? 'Our Residential ' : 
                     service.category === 'commercial' ? 'Our Commercial ' : 
                     service.category === 'hospitality' ? 'Our Hospitality ' : 'Our '}
                    {service.title} Projects
                  </h3>
                  <button 
                    onClick={() => service.images && service.images.length > 0 && setSelectedImage(service.images[0])}
                    className="text-primary hover:text-primary/80 flex items-center text-sm font-medium group"
                  >
                    View All Photos
                    <Maximize2 className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(service.images || [])
                    .slice((currentPage - 1) * imagesPerPage, currentPage * imagesPerPage)
                    .map((img, idx) => (
                    <div 
                      key={img.url} 
                      className="relative group overflow-hidden rounded-xl cursor-pointer hover:shadow-xl transition-all duration-300 bg-muted/50 hover:bg-muted/30"
                      onClick={() => setSelectedImage(img)}
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading={idx < 3 ? 'eager' : 'lazy'}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <p className="text-white font-medium">{img.title}</p>
                          <p className="text-white/80 text-sm line-clamp-2">
                            {img.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Pagination */}
                {service.images && service.images.length > imagesPerPage && (
                  <div className="mt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                      <div className="flex items-center space-x-1 sm:space-x-2">
                        <button
                          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                          disabled={currentPage === 1}
                          className="px-3 py-2 sm:py-1 text-sm sm:text-base rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Previous
                        </button>
                        
                        {/* Show limited page numbers on mobile, more on larger screens */}
                        <div className="hidden sm:flex items-center space-x-1">
                          {Array.from({ length: Math.ceil(service.images.length / imagesPerPage) }).map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentPage(index + 1)}
                              className={`w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base rounded-full flex items-center justify-center transition-colors ${
                                currentPage === index + 1 
                                  ? 'bg-primary text-white' 
                                  : 'bg-white text-gray-700 hover:bg-gray-100'
                              }`}
                            >
                              {index + 1}
                            </button>
                          ))}
                        </div>
                        
                        {/* Mobile pagination - show only current page and total */}
                        <div className="sm:hidden flex items-center space-x-1">
                          <span className="px-3 py-2 bg-primary text-white rounded-full text-sm">
                            {currentPage} / {Math.ceil(service.images.length / imagesPerPage)}
                          </span>
                        </div>
                        
                        <button
                          onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(service.images.length / imagesPerPage)))}
                          disabled={currentPage === Math.ceil(service.images.length / imagesPerPage)}
                          className="px-3 py-2 sm:py-1 text-sm sm:text-base rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                          Next
                        </button>
                      </div>
                      
                      {/* Page info for larger screens */}
                      <div className="hidden sm:block text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-3">
                        Page {currentPage} of {Math.ceil(service.images.length / imagesPerPage)}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="bg-muted/30 p-8 rounded-xl mt-16">
                <h3 className="text-2xl font-semibold mb-6">Ready to Transform Your Space?</h3>
                <p className="text-muted-foreground mb-6">
                  Contact us today to schedule a consultation and let's discuss how we can bring your vision to life.
                </p>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 hover:bg-primary/90 transition-colors"
                  onClick={() => setShowConsultationForm(true)}
                >
                  Book a Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Global styles for hiding scrollbar */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button - Fixed Position */}
          <div className="fixed right-4 top-4 z-10">
            <button 
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }} 
              className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors" 
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          {/* Main Content Container - Scrolls as one unit */}
          <div 
            className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col"
            onClick={e => e.stopPropagation()}
            style={{
              height: '90vh',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Scrollable Content - Hide scrollbar but keep functionality */}
            <div 
              className="flex-1 overflow-y-auto hide-scrollbar" 
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',  /* Firefox */
                msOverflowStyle: 'none',  /* IE and Edge */
              }}
            >
              {/* Image Section */}
              <div className="relative bg-white flex items-center justify-center p-4">
                {/* Navigation Buttons - Desktop */}
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} 
                  className="hidden sm:block absolute left-4 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg z-10" 
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                
                {/* Main Image */}
                <div className="relative w-full max-w-4xl">
                  <img 
                    src={selectedImage.url} 
                    alt={selectedImage.title}
                    className="w-full max-h-[70vh] object-contain"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                    <p className="text-gray-600">{selectedImage.description}</p>
                  </div>
                </div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }} 
                  className="hidden sm:block absolute right-4 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg z-10" 
                  aria-label="Next image"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
                
              </div>
              
              {/* Navigation Buttons - Mobile */}
              <div className="sm:hidden absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                <button 
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} 
                  className="bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg" 
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }} 
                  className="bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg" 
                  aria-label="Next image"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Description Section */}
            <div className="p-4 sm:p-6 bg-white">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {selectedImage?.description || getImageDescription(selectedImage?.url || '', service.id)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Consultation Form */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <ConsultationForm onClose={() => setShowConsultationForm(false)} />
        </div>
      )}
    </div>
  );
};

export default ServiceDetail;
