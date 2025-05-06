
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Heart, Lightbulb, Sparkles } from 'lucide-react';

const photographers = [
  {
    name: 'Ricardo',
    image: '/avatar/Ricardo.jpg',
    description:
      "Hi, I'm Ricardo—a visual storyteller who brings both technical precision and creative intuition to every frame. With a deep passion for photography across digital, film, and aerial formats, I specialize in capturing the decisive moments that matter most.",
    aboutSection: [
      {
        icon: Camera,
        title: 'Gear Versatile, Vision Consistent',
        text: `From professional DSLRs and cinematic drones to vintage film cameras and studio lighting, I'm well-versed in a range of photography equipment. This allows me to adapt to any setting—from intimate portraits to fast-paced events—while delivering high-quality, impactful visuals every time.`
      },
      {
        icon: Lightbulb,
        title: 'Framing the Moment',
        text: `Before specializing in portraits and events, I honed my eye through years of street and landscape photography. This background shaped my instinct for dynamic composition and the perfect “decisive moment.” Whether it's a fleeting smile or an emotional exchange, I strive to freeze what truly resonates.`
      },
      {
        icon: Sparkles,
        title: 'Post-Production that Elevates',
        text: `Beyond the shoot, I bring your images to life through customized color grading and professional video editing. From timeless and moody to bright and modern, I tailor the final look to your style, ensuring every piece feels personal and polished.`
      }
    ]
  },

  {
    name: 'Dina',
    image: '/avatar/Dina.jpg',
    description:
      "Hi, I'm the other eye behind Avokado foto. I've always been drawn to the little sparks that make each person unique, and photography allows me to capture those fleeting moments of real beauty and emotion. My style is all about authenticity, atmosphere, and making you feel amazing in your own skin.",
    aboutSection: [
      {
        icon: Heart,
        title: 'Relax for Yourself',
        text: `I believe that the best photos happen when you feel relaxed, confident, and at ease. I take time to understand what makes you feel comfortable and guide you naturally throughout the shoot, so it never feels forced or awkward. I want you to enjoy the process as much as the results—because when you feel good, it shows.`
      },
      {
        icon: Lightbulb,
        title: 'Framing the Feeling',
        text: `To me, photography is not just about documenting a scene but about weaving atmosphere, light, and setting into every frame. I love working with natural environments—whether it's golden-hour sunlight, a quiet forest path, or a lively urban backdrop—to create images that feel full of movement and meaning. My goal is to craft photos that tell a story and leave you with memories that feel as vivid as the day they were taken.`
      },
      {
        icon: Camera,
        title: 'Seeing Your True Beauty',
        text: `I have a keen eye for discovering the unique beauty in everyone. Instead of relying on stiff poses or forced candids, I focus on capturing those genuine, unguarded moments where your true self shines through—vivid, lovely, and full of life. Whether it's a subtle smile, a playful glance, or a quiet pause, my goal is to reveal the most authentic and beautiful version of you. Trust me—you look amazing today.`

      }
    ]
  },
];
const AboutPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto space-y-8"
    >
      <div className="bg-gray-50 rounded-2xl shadow-sm px-6 py-10 md:px-12 md:py-12 mb-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">About Avokado foto</h1>
        {/* Avatars */}
        <div className="flex justify-center items-end gap-16 mb-8">
          {photographers.map((p, idx) => (
            <motion.img
              key={p.name}
              src={p.image}
              alt={`${p.name} portrait`}
              onClick={() => setActiveIndex(idx)}
              animate={{
                scale: activeIndex === idx ? 1 : 0.88,
                opacity: activeIndex === idx ? 1 : 0.5,
                y: activeIndex === idx ? 0 : 10,
                filter: activeIndex === idx ? 'none' : 'grayscale(60%)',
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className={`rounded-full object-cover cursor-pointer shadow-md border-4 ${activeIndex === idx ? 'w-36 h-36 md:w-40 md:h-40 border-avocado-end ring-4 ring-avocado-end' : 'w-28 h-28 md:w-32 md:h-32 border-gray-300'} `}
              style={{ zIndex: activeIndex === idx ? 2 : 1 }}
              whileHover={{ scale: activeIndex === idx ? 1.06 : 0.92 }}
            />
          ))}
        </div>
        {/* Photographer Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={photographers[activeIndex].name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4 min-h-[120px]"
          >
            <h2 className="text-2xl font-semibold text-gray-700">{photographers[activeIndex].name}</h2>
            <p className="text-gray-600 leading-relaxed">
              {photographers[activeIndex].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* About Section 切换动画 */}
      <AnimatePresence mode="wait">
        <motion.div
          key={photographers[activeIndex].name + '-about'}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-gray-700 leading-relaxed"
        >
          {photographers[activeIndex].aboutSection.map((item, i) => {
            const Icon = item.icon;
            return (
              <div className="flex items-start space-x-4" key={item.title}>
                <Icon className="h-6 w-6 text-avocado-end mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-xl text-gray-600 italic">"Let's create something beautiful together."</p>
      </motion.div>
    </motion.div>
  );
};

export default AboutPage;
