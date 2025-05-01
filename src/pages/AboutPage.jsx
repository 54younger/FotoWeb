
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Camera, Heart, Lightbulb } from 'lucide-react';

    const AboutPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Avocadofoto</h1>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <div className="flex-shrink-0">
               <img  class="w-40 h-40 rounded-full object-cover shadow-md mx-auto md:mx-0" alt="Photographer portrait" src="https://images.unsplash.com/photo-1596108870714-bddbac33d0bc" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold text-gray-700 mb-3">Meet the Photographer</h2>
              <p className="text-gray-600 leading-relaxed">
                Hi, I'm the eye behind Avocadofoto! My journey into photography started not just with a camera, but with a fascination for stories. Every person, every event, every fleeting moment has a unique narrative waiting to be told visually.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6 text-gray-700 leading-relaxed"
          >
            <div className="flex items-start space-x-4">
              <Heart className="h-6 w-6 text-avocado-end mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Passion for Storytelling</h3>
                <p>I believe photography is more than just taking pictures; it's about capturing the essence of a moment, the emotion in an expression, and the connection between people. Whether it's the pride of a graduate, the confidence of a professional, or the joy of a candid interaction, my goal is to freeze those feelings in time.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Lightbulb className="h-6 w-6 text-avocado-end mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">A Fresh Perspective</h3>
                <p>The name "Avocadofoto" reflects a commitment to bringing a fresh, vibrant, and natural approach to photography. I strive for clean compositions, beautiful light, and authentic moments, ensuring your photos feel both timeless and modern.</p>
              </div>
            </div>

             <div className="flex items-start space-x-4">
               <Camera className="h-6 w-6 text-avocado-end mt-1 flex-shrink-0" />
               <div>
                 <h3 className="font-semibold text-lg mb-1">My Approach</h3>
                 <p>I aim to create a relaxed and enjoyable experience for every client. Building rapport and understanding your vision is key. I blend technical skill with creative intuition to deliver images that you'll cherish for years to come.</p>
               </div>
             </div>
          </motion.div>

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
  