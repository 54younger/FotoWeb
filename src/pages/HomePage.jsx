
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { GraduationCap, Briefcase, User } from 'lucide-react';
    import { Link } from 'react-router-dom';
    import { useKeenSlider } from "keen-slider/react"
    import "keen-slider/keen-slider.min.css"
    import { galleryImages } from "@/data/galleryData";

    const KeenSliderSection = () => {
    const [sliderRef] = useKeenSlider({
      loop: true,
      slides: {
        perView: 4,
        spacing: 15,
      },
    });

    const images = getRandomGalleryImages(4);

    return (
      <div ref={sliderRef} className="keen-slider rounded-xl overflow-hidden">
        {images.map((img) => (
          <motion.div
            key={img.id}
            className="keen-slider__slide"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-contain bg-white rounded-xl shadow-md"
            />
          </motion.div>
        ))}
      </div>
    );
  };

    const getRandomGalleryImages = (n = 4) => {
      const allImages = Object.values(galleryImages).flat();
      const shuffled = allImages.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    };

    const HomePage = () => {
      const services = [
        {
          title: 'Celebration Photography',
          description: 'Celebrate your achievement with stunning portraits.',
          icon: <GraduationCap className="h-10 w-10 mb-4 text-avocado-end" />,
          link: '/services#graduation'
        },
        {
          title: 'Professional Headshots',
          description: 'Polished, confident portraits to elevate your LinkedIn and résumé.',
          icon: <Briefcase className="h-10 w-10 mb-4 text-avocado-end" />,
          link: '/services#headshots'
        },
        {
          title: 'Creative Lifestyle Shoots',
          description: 'Unique, story-driven photoshoots—turn everyday scenes into art.',
          icon: <User className="h-10 w-10 mb-4 text-avocado-end" />,
          link: '/services#lifestyle'
        },
      ];

      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* Hero Section */}
          <section className="relative text-center py-20 md:py-32 rounded-lg overflow-hidden bg-gray-100">
             <div className="absolute inset-0 avocado-gradient-bg opacity-20 z-0"></div>
             <div className="relative z-10 container mx-auto px-4">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 font-heading"
                >
                  Avokado foto
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl text-gray-600 mb-8 font-body"
                >
                  Capturing Your Best Moments with a Fresh Perspective
                </motion.p>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <Button asChild size="lg" className="avocado-gradient-bg text-white hover:opacity-90 transition-opacity">
                    <Link to="/contact">Book Now</Link>
                  </Button>
                </motion.div>
             </div>
          </section>

          {/* Services Highlight Section */}
          <section className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                >
                  <Card className="text-center h-full flex flex-col items-center justify-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      {service.icon}
                      <CardTitle className="text-xl font-semibold text-gray-700">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{service.description}</p>
                       <Button variant="link" asChild className="mt-4 text-avocado-end hover:text-avocado-start">
                         <Link to={service.link}>Learn More</Link>
                       </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Example Gallery Snippet (Optional) */}
          <section className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Work</h2>

            <KeenSliderSection />

            <Button asChild variant="outline" className="mt-8 border-avocado-end text-avocado-end hover:bg-avocado-start/10 hover:text-avocado-start">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </section>

        </motion.div>
      );
    };

    export default HomePage;
  