import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../assets/images';
import { X } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

const services: Service[] = [
  {
    id: 'traffic',
    title: 'Smart Traffic Management',
    description: 'AI-powered traffic control systems to reduce congestion and improve road safety.',
    image: images.smartTraffic,
    features: [
      'Real-time traffic monitoring',
      'Adaptive signal control',
      'Incident detection',
      'Emergency vehicle priority',
    ],
    benefits: [
      'Reduced travel time',
      'Lower emissions',
      'Improved emergency response',
      'Enhanced pedestrian safety',
    ],
  },
  {
    id: 'waste',
    title: 'Waste Management',
    description: 'Efficient waste collection and recycling systems for a cleaner environment.',
    image: images.wasteManagement,
    features: [
      'Smart bin monitoring',
      'Optimized collection routes',
      'Recycling analytics',
      'Waste sorting automation',
    ],
    benefits: [
      'Reduced operational costs',
      'Improved recycling rates',
      'Cleaner streets',
      'Lower environmental impact',
    ],
  },
  {
    id: 'energy',
    title: 'Smart Energy',
    description: 'Sustainable energy solutions with real-time monitoring and optimization.',
    image: images.smartEnergy,
    features: [
      'Smart grid integration',
      'Renewable energy management',
      'Demand response',
      'Energy consumption analytics',
    ],
    benefits: [
      'Reduced energy costs',
      'Lower carbon footprint',
      'Improved grid reliability',
      'Sustainable power supply',
    ],
  },
  {
    id: 'parking',
    title: 'Smart Parking',
    description: 'Find and reserve parking spots easily with our smart parking system.',
    image: images.smartParking,
    features: [
      'Real-time availability',
      'Mobile reservations',
      'Automated payment',
      'Navigation assistance',
    ],
    benefits: [
      'Reduced parking time',
      'Lower traffic congestion',
      'Improved user experience',
      'Optimized space utilization',
    ],
  },
];

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Smart City Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our comprehensive suite of smart city solutions can transform your urban experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                  {service.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(service);
                  }}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedService.title}
                </h3>
                <p className="text-gray-600 mb-6">{selectedService.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-blue-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h4>
                    <ul className="space-y-2">
                      {selectedService.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-600">
                          <svg
                            className="w-5 h-5 text-green-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;