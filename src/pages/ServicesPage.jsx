'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const servicesData = [
  {
    id: 'celebration',
    title: 'Celebration Photography',
    icon: <GraduationCap className="h-12 w-12 mb-4 text-avocado-end" />,
    description: 'Capturing your biggest moments with timeless, joy-filled images.',
    pricing: 'Packages starting from $250',
    cta: 'Inquire for Graduation',
    imageAlt: 'Happy graduate posing outdoors',
    imageSrc: '/images/celebrations/thumbs/celebrations4.jpg',
  },
  {
    id: 'headshots',
    title: 'Professional Headshots',
    icon: <Briefcase className="h-12 w-12 mb-4 text-avocado-end" />,
    description: 'Polished, confident portraits to elevate your LinkedIn and résumé.',
    pricing: 'Sessions starting from $180',
    cta: 'Book Headshot Session',
    imageAlt: 'Professional woman smiling for a headshot',
    imageSrc: '/images/headshots/thumbs/headshots3.jpg',
  },
  {
    id: 'lifestyle',
    title: 'Creative Lifestyle Shoots',
    icon: <User className="h-12 w-12 mb-4 text-avocado-end" />,
    description: 'Unique, story-driven photoshoots—turn everyday scenes into art.',
    pricing: 'Inquire for custom quote',
    cta: 'Discuss Your Vision',
    imageAlt: 'Couple laughing together in a park',
    imageSrc: '/images/lifestyle/thumbs/lifestyle5.jpg',
  },
];

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Services</h1>

      {servicesData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? 'md:flex-row-reverse' : ''
          } items-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="w-full md:w-1/2 h-64 md:h-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt={service.imageAlt}
              src={service.imageSrc}
            />
          </div>

          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              {service.icon}
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-700 font-medium mb-4">{service.pricing}</p>
            </div>
            <Button className="mt-auto w-full avocado-gradient-bg text-white">
              {service.cta}
            </Button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
