
    import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    // Placeholder images - replace with actual image data structure later
    const galleryImages = {
      graduation: [
        { id: 'g1', alt: 'Graduate smiling with diploma', placeholder: 'Graduate holding diploma outdoors' },
        { id: 'g2', alt: 'Graduate tossing cap in the air', placeholder: 'Graduate cap mid-air against sky' },
        { id: 'g3', alt: 'Close-up of graduation tassel', placeholder: 'Detailed shot of graduation tassel on cap' },
        { id: 'g4', alt: 'Group of graduates celebrating', placeholder: 'Friends in gowns laughing together' },
      ],
      headshots: [
        { id: 'h1', alt: 'Professional man in suit headshot', placeholder: 'Man in business suit smiling slightly' },
        { id: 'h2', alt: 'Creative professional woman headshot', placeholder: 'Woman with glasses against textured wall' },
        { id: 'h3', alt: 'Friendly tech employee headshot', placeholder: 'Person smiling warmly in office setting' },
      ],
      lifestyle: [
        { id: 'l1', alt: 'Couple walking hand-in-hand', placeholder: 'Couple silhouetted against sunset' },
        { id: 'l2', alt: 'Person reading book in cozy cafe', placeholder: 'Candid shot of person enjoying coffee and book' },
        { id: 'l3', alt: 'Family playing in a field', placeholder: 'Family running and laughing outdoors' },
        { id: 'l4', alt: 'Artist painting in studio', placeholder: 'Creative person focused on their artwork' },
        { id: 'l5', alt: 'Close-up of hands holding coffee mug', placeholder: 'Warm hands wrapped around a steaming mug' },
      ],
    };

    const categories = [
      { key: 'all', name: 'All' },
      { key: 'graduation', name: 'Graduation' },
      { key: 'headshots', name: 'Headshots' },
      { key: 'lifestyle', name: 'Lifestyle' },
    ];

    const GalleryPage = () => {
      const [selectedCategory, setSelectedCategory] = useState('all');

      const filteredImages = selectedCategory === 'all'
        ? Object.values(galleryImages).flat()
        : galleryImages[selectedCategory] || [];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Gallery</h1>

          <div className="flex justify-center space-x-2 md:space-x-4 mb-8">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.key)}
                className={`
                  ${selectedCategory === category.key
                    ? 'avocado-gradient-bg text-white border-transparent'
                    : 'border-gray-300 text-gray-600 hover:border-avocado-end hover:text-avocado-end hover:bg-avocado-start/10'}
                  transition-colors duration-200
                `}
              >
                {category.name}
              </Button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square"
                >
                  <img 
                    class="w-full h-full object-cover cursor-pointer"
                    alt={image.alt}
                   src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
           {filteredImages.length === 0 && selectedCategory !== 'all' && (
             <p className="text-center text-gray-500 mt-8">No images found for this category yet. Check back soon!</p>
           )}
        </motion.div>
      );
    };

    export default GalleryPage;
  