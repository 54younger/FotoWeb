
    import React from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
    import { GraduationCap, Briefcase, User, ArrowRight } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const servicesData = [
      {
        id: 'graduation',
        title: 'Graduation Portraits',
        icon: <GraduationCap className="h-12 w-12 mb-4 text-avocado-end" />,
        description: 'Commemorate your academic milestone with personalized graduation photos. We capture your pride and excitement in a style that reflects you. Sessions available on campus or at a location of your choice.',
        pricing: 'Packages starting from $250',
        cta: 'Inquire for Graduation',
        imageAlt: 'Happy graduate posing outdoors',
        imagePlaceholder: 'Graduate in cap and gown smiling at the camera'
      },
      {
        id: 'headshots',
        title: 'Professional Headshots',
        icon: <Briefcase className="h-12 w-12 mb-4 text-avocado-end" />,
        description: 'Make a powerful first impression with polished, professional headshots. Ideal for LinkedIn, company websites, and personal branding. We offer studio-style or environmental portraits.',
        pricing: 'Sessions starting from $180',
        cta: 'Book Headshot Session',
        imageAlt: 'Professional woman smiling for a headshot',
        imagePlaceholder: 'Business professional looking confident'
      },
      {
        id: 'lifestyle',
        title: 'Lifestyle & Creative Portraits',
        icon: <User className="h-12 w-12 mb-4 text-avocado-end" />,
        description: 'Tell your unique story through authentic lifestyle photography. Perfect for individuals, couples, and families looking for natural, candid moments or creative, artistic portraits.',
        pricing: 'Inquire for custom quote',
        cta: 'Discuss Your Vision',
        imageAlt: 'Couple laughing together in a park',
        imagePlaceholder: 'Candid shot of a person enjoying a hobby'
      },
    ];

    const ServicesPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Photography Services</h1>

          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <motion.section
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="scroll-mt-20" // Offset for header height
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                       <img  class="w-full h-64 md:h-full object-cover" alt={service.imageAlt} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        <CardHeader className="p-0 mb-4">
                          <div className="flex items-center space-x-4 mb-3">
                            {service.icon}
                            <CardTitle className="text-2xl font-semibold text-gray-800">{service.title}</CardTitle>
                          </div>
                          <CardDescription className="text-gray-600 text-base">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-lg font-semibold text-avocado-end">{service.pricing}</p>
                        </CardContent>
                      </div>
                      <CardFooter className="p-0 mt-6">
                        <Button asChild className="avocado-gradient-bg text-white hover:opacity-90 transition-opacity">
                          <Link to="/contact" state={{ service: service.title }}>
                            {service.cta} <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </motion.section>
            ))}
          </div>
        </motion.div>
      );
    };

    export default ServicesPage;
  