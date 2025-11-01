import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, CheckCircle, Maximize2, X } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ConsultationForm } from '@/components/ConsultationForm';

// Sample service data - in a real app, this would come from an API
const services = [
  // Residential Services
  {
    id: 'living-room',
    title: 'Living Room Design',
    description: 'Transform your living space with our expert design solutions that combine comfort and style.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80',
    fullDescription: 'Our living room designs are tailored to create a harmonious balance between aesthetics and functionality. We focus on creating spaces that reflect your personal style while ensuring maximum comfort. From modern minimalist to classic elegance, our designs transform your living area into a welcoming retreat for family and guests alike.',
    features: [
      'Custom furniture selection and arrangement',
      'Lighting design for ambiance and functionality',
      'Color scheme and material selection',
      'Space planning and layout optimization',
      'Accessorizing and finishing touches'
    ],
    images: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1700&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
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
      'https://images.unsplash.com/photo-1600566751981-7c9e7d5e4e2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1584622650111-993f4268e2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
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
    images: [
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1579829366248-204fe8413f31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    ]
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
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    fullDescription: 'Make the most of your outdoor space with our custom exterior design solutions. Whether you want a cozy patio, an outdoor kitchen, or a complete backyard transformation, we create functional and beautiful outdoor living areas that extend your home\'s living space and enhance your connection with nature.',
    features: [
      'Outdoor kitchen and dining areas',
      'Patio and deck design',
      'Landscape integration',
      'Outdoor lighting solutions',
      'Weather-resistant furniture selection'
    ],
    category: 'residential',
    images: [
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      setIsModalOpen(true);
    } else {
      document.body.style.overflow = 'auto';
      setIsModalOpen(false);
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);
  
  // Navigation functions for the image gallery
  const handlePrevImage = () => {
    if (!selectedImage || !service) return;
    const currentIndex = service.gallery.indexOf(selectedImage);
    const prevIndex = (currentIndex - 1 + service.gallery.length) % service.gallery.length;
    setSelectedImage(service.gallery[prevIndex]);
  };

  const handleNextImage = () => {
    if (!selectedImage || !service) return;
    const currentIndex = service.gallery.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % service.gallery.length;
    setSelectedImage(service.gallery[nextIndex]);
  };
  
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
                  <h3 className="text-2xl font-semibold">Our Work</h3>
                  <button 
                    onClick={() => setSelectedImage(service.images[0])}
                    className="text-primary hover:text-primary/80 flex items-center text-sm font-medium"
                  >
                    View All Photos
                    <Maximize2 className="ml-2 w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {(service.images || []).slice(0, 8).map((img, idx) => (
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
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center p-4 overflow-hidden" 
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
              <div className="relative bg-white flex items-center justify-center p-4" style={{
                minHeight: '50vh',
                maxHeight: '70vh',
                backgroundColor: '#ffffff',
              }}>
                <img 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  className="max-w-full max-h-full object-contain"
                  style={{
                    maxHeight: '100%',
                    width: 'auto',
                  }}
                />
                
                {/* Navigation Buttons - Desktop */}
                <div className="hidden sm:flex absolute inset-0 justify-between items-center pointer-events-none px-4">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} 
                    className="bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg pointer-events-auto" 
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }} 
                    className="bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-colors shadow-lg pointer-events-auto" 
                    aria-label="Next image"
                  >
                    <ArrowLeft className="w-6 h-6 transform rotate-180" />
                  </button>
                </div>
                
                {/* Navigation Buttons - Mobile */}
                <div className="sm:hidden absolute bottom-4 left-0 right-0 flex justify-center space-x-4 pointer-events-none">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} 
                    className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors shadow-lg pointer-events-auto" 
                    aria-label="Previous image"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }} 
                    className="bg-black/60 text-white p-2 rounded-full hover:bg-black/80 transition-colors shadow-lg pointer-events-auto" 
                    aria-label="Next image"
                  >
                    <ArrowLeft className="w-5 h-5 transform rotate-180" />
                  </button>
                </div>
              </div>
              
              {/* Description Section */}
              <div className="p-4 sm:p-6 bg-white">
                <div className="space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {getImageDescription(selectedImage, service.id)}
                  </p>
                </div>
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
