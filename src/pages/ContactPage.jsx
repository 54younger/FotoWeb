
    import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Textarea } from '@/components/ui/textarea';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Phone, MapPin } from 'lucide-react';
    import { useLocation } from 'react-router-dom';

    const ContactPage = () => {
      const { toast } = useToast();
      const location = useLocation();
      const preselectedService = location.state?.service || '';

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        service: preselectedService,
        message: '',
      });
      const [isSubmitting, setIsSubmitting] = useState(false);

      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Basic validation
        if (!formData.name || !formData.email || !formData.service) {
           toast({
             variant: "destructive",
             title: "Missing Information",
             description: "Please fill in your name, email, and select a service.",
           });
           setIsSubmitting(false);
           return;
        }

        // Simulate form submission (replace with actual API call later)
        console.log('Form Data Submitted:', formData);
        // In a real app, you'd send this data to a backend or email service.
        // For now, we'll just use localStorage to simulate success.
        try {
           localStorage.setItem('lastBookingInquiry', JSON.stringify(formData));
           await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

           toast({
             title: "Inquiry Sent!",
             description: "Thank you for reaching out. We'll get back to you soon!",
           });
           setFormData({ name: '', email: '', date: '', service: '', message: '' }); // Clear form
        } catch (error) {
           console.error("Submission error:", error);
           toast({
             variant: "destructive",
             title: "Submission Failed",
             description: "Something went wrong. Please try again later.",
           });
        } finally {
           setIsSubmitting(false);
        }
      };


      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact & Booking</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" value={formData.email} onChange={handleChange} required />
                </div>
                 <div>
                  <Label htmlFor="service">Service Interested In</Label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="Graduation Portraits">Graduation Portraits</option>
                    <option value="Professional Headshots">Professional Headshots</option>
                    <option value="Lifestyle & Creative Portraits">Lifestyle & Creative Portraits</option>
                    <option value="Other Inquiry">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="date">Preferred Date (Optional)</Label>
                  <Input id="date" type="date" value={formData.date} onChange={handleChange} />
                </div>
                <div>
                  <Label htmlFor="message">Message / Details</Label>
                  <Textarea id="message" placeholder="Tell us more about your needs..." value={formData.message} onChange={handleChange} rows={4} />
                </div>
                <Button type="submit" className="w-full avocado-gradient-bg text-white hover:opacity-90 transition-opacity" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-6">Get In Touch</h2>
              <p className="text-gray-600">
                Have questions or ready to book? Reach out directly! We're excited to hear from you and discuss how we can capture your moments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-avocado-end" />
                  <a href="mailto:hello@avocadofoto.com" className="text-gray-700 hover:text-avocado-end transition-colors">hello@avocadofoto.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-avocado-end" />
                  <span className="text-gray-700">(555) 123-4567</span> {/* Replace with actual phone */}
                </div>
                 <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-avocado-end" />
                  <span className="text-gray-700">Based in [Your City/Region]</span> {/* Replace with location */}
                </div>
              </div>
               <div className="mt-8 pt-6 border-t border-gray-200">
                 <h3 className="text-lg font-semibold text-gray-700 mb-3">Office Hours</h3>
                 <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                 <p className="text-gray-600">Weekends: By Appointment Only</p>
               </div>
            </motion.div>
          </div>
        </motion.div>
      );
    };

    export default ContactPage;
  