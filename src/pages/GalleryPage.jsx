import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Button } from '@/components/ui/button';

import { galleryImages } from '@/data/galleryData';  // <-- 自动生成的图片数据

const categories = [
  { key: 'all', name: 'All' },
  { key: 'celebrations', name: 'Celebration' },
  { key: 'headshots', name: 'Headshots' },
  { key: 'lifestyle', name: 'Lifestyle' },
  { key: 'other', name: 'Other' },
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredImages =
    selectedCategory === 'all'
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

      <PhotoProvider>
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 aspect-square bg-white flex items-center justify-center"
              >
                <PhotoView src={image.full}>
                  <img
                    className="max-w-full max-h-full object-contain cursor-pointer"
                    src={image.src}
                    alt={image.alt}
                  />
                </PhotoView>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </PhotoProvider>

      {filteredImages.length === 0 && selectedCategory !== 'all' && (
        <p className="text-center text-gray-500 mt-8">
          No images found for this category yet. Check back soon!
        </p>
      )}
    </motion.div>
  );
};

export default GalleryPage;
