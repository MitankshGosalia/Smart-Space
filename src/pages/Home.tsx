import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Train, Battery, Calendar, Cpu, Cloud, Shield, Users, Building2, Leaf } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Smart Waste Management',
    description: 'Efficient waste collection with IoT-enabled bins and real-time tracking.',
  },
  {
    icon: Train,
    title: 'Public Transport',
    description: 'Real-time schedules and smart routing for better commuting experience.',
  },
  {
    icon: Battery,
    title: 'Energy Efficiency',
    description: 'Smart grid technology for optimal energy distribution and consumption.',
  },
  {
    icon: Calendar,
    title: 'City Events',
    description: 'Stay updated with local events and community gatherings.',
  },
  {
    icon: Cpu,
    title: 'IoT Infrastructure',
    description: 'Connected devices and sensors for real-time city monitoring.',
  },
  {
    icon: Cloud,
    title: 'Data Analytics',
    description: 'Advanced analytics for better urban planning and decision making.',
  },
  {
    icon: Shield,
    title: 'Smart Security',
    description: 'AI-powered surveillance and emergency response systems.',
  },
  {
    icon: Users,
    title: 'Community Engagement',
    description: 'Digital platforms for citizen participation and feedback.',
  },
];

const achievements = [
  { number: '50+', label: 'Smart Cities' },
  { number: '1M+', label: 'Citizens Served' },
  { number: '30%', label: 'Energy Savings' },
  { number: '24/7', label: 'Monitoring' },
];

const news = [
  {
    title: 'Smart Traffic Management System Launch',
    date: 'March 15, 2024',
    image: 'https://source.unsplash.com/800x600/?traffic,city',
    description: 'Revolutionary AI-powered traffic management system reduces congestion by 40%.',
  },
  {
    title: 'Green Energy Initiative',
    date: 'March 12, 2024',
    image: 'https://source.unsplash.com/800x600/?solar,energy',
    description: 'New solar panel installation project covers 30% of the city\'s energy needs.',
  },
  {
    title: 'Community Safety Enhancement',
    date: 'March 10, 2024',
    image: 'https://source.unsplash.com/800x600/?security,technology',
    description: 'Smart surveillance system implementation reduces crime rates by 25%.',
  },
];

const Home: React.FC = () => {
  return (
    <div className="py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-24"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
          Transform Your City
          <br />
          <span className="text-blue-600">Into a Smart Space</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
          Experience the future of urban living with our innovative smart city solutions.
          Making cities more efficient, sustainable, and livable through cutting-edge technology.
        </p>
        <div className="flex justify-center gap-8 mb-16">
          <button className="btn btn-primary text-lg px-8 py-4">Get Started</button>
          <button className="btn btn-secondary text-lg px-8 py-4">Learn More</button>
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
      >
        {achievements.map((achievement, index) => (
          <div key={index} className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</h3>
            <p className="text-gray-600">{achievement.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Features Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-24"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Our Smart Solutions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Sustainability Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mb-24 bg-gradient-to-r from-blue-50 to-green-50 rounded-3xl p-12"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <Leaf className="w-16 h-16 text-green-600 mb-6" />
            <h2 className="text-4xl font-bold mb-6">Committed to Sustainability</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our smart city solutions are designed with sustainability at their core. 
              We help cities reduce their carbon footprint while improving quality of life.
            </p>
            <ul className="space-y-4">
              {['30% reduction in energy consumption', 'Smart waste management', 'Reduced carbon emissions', 'Green spaces monitoring'].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <img
              src="https://source.unsplash.com/800x600/?sustainable,city"
              alt="Sustainable City"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* Latest News */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-4xl font-bold text-center mb-16">Latest Updates</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center bg-blue-600 text-white rounded-3xl p-12"
      >
        <Building2 className="w-16 h-16 mx-auto mb-6" />
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your City?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join the smart city revolution and create a better future for your community.
        </p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
          Contact Us Today
        </button>
      </motion.div>
    </div>
  );
};

export default Home;