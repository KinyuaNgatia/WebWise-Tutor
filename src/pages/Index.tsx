import { useEffect } from "react";
import { motion } from 'framer-motion';
import Navbar from '../components/Layout/Navbar';
import TestimonialsSection from '../components/Testimonials/TestimonialsSection';
import { ArrowRight, Calculator, Atom, Code, BarChart3, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const featuredServices = [
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'From algebra to calculus, master mathematical concepts with expert guidance.',
      color: 'bg-blue-500'
    },
    {
      icon: Atom,
      title: 'Physics',
      description: 'Understand fundamental laws through interactive problem-solving.',
      color: 'bg-purple-500'
    },
    {
      icon: Code,
      title: 'Programming',
      description: 'Learn coding, data structures, and software development.',
      color: 'bg-green-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Master Excel, Tableau, and statistical analysis techniques.',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-24 pb-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side (headline, CTAs, stats) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center space-x-2 card-glass px-4 py-2 text-sm"
              >
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-foreground">Top-Rated Online Tutoring</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-6xl font-bold text-foreground"
              >
                Master STEM with
                <span className="block text-gradient">Webwise Tutor</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-xl text-muted-foreground max-w-3xl"
              >
                Personalized online tutoring in Mathematics, Physics, Technology, and Data Analysis 
                with expert instructors and proven results.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <Link to="/contact" className="btn-hero inline-flex items-center space-x-2">
                  <span>Start Learning Today</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/services" className="btn-secondary inline-flex items-center space-x-2">
                  <span>Explore Services</span>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="grid grid-cols-3 gap-8 mt-12 max-w-md"
              >
                {[
                  { number: '500+', label: 'Students' },
                  { number: '95%', label: 'Success Rate' },
                  { number: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side (Calendly widget + WhatsApp button) */}
            <div className="hidden lg:block space-y-6">
              <div
                className="calendly-inline-widget rounded-xl shadow-lg"
                data-url="https://calendly.com/briankinyua001/30min"
                style={{ minWidth: "320px", height: "350px" }}
              ></div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/254725739910"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-6 bg-green-500 hover:bg-green-600 text-white rounded-xl shadow-lg font-semibold transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5 mr-2 fill-current"
                >
                  <path d="M380.9 97.1C339-3.9 212.1-33.7 121.7 36.3 50.8 92.1 24.2 187.6 60.6 272.4L32 480l214.6-56.9c84.3 36.7 182.2 8.1 238-62.7 70-90.4 40.1-217.3-62.7-263.3zm-87.3 238c-10.1 4.5-23.2 9.4-33.7 5.9-8.8-2.9-28.4-10.5-65.3-41.6-24.1-20.5-40.4-45.8-45.1-53.6-4.7-7.8-24.1-36.3-24.1-69.3s15.2-49 21.4-55.9c6.2-6.9 13.6-8.7 18.1-8.7s9.1.1 13.1.2c4.2.2 9.9-.8 15.5 11.9 6.2 14.9 19.7 47.7 21.4 51.2 1.7 3.5 2.9 7.6.6 12.2-2.3 4.7-3.5 7.6-7.1 11.7-3.5 4.1-7.5 9-10.8 12.1-3.5 3.2-7.2 6.7-3.1 13.5s18.2 30 39.1 48.6c26.8 23.5 49.6 30.8 57.5 34.1 7.9 3.5 12.6 2.9 17.2-1.7s19.9-23.2 25.2-31.1c5.3-7.9 10.5-6.7 17.2-4.1 7.1 2.9 44.7 21.2 52.3 25.1 7.5 3.9 12.5 5.9 14.5 9.2 2.1 3.5 2.1 20.2-7.9 24.7z" />
                </svg>
                Chat with us instantly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular <span className="text-gradient">Subjects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tutoring in the most in-demand STEM fields
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300 
                }}
                viewport={{ once: true }}
                className="card-hover group text-center"
              >
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-glass p-12 space-y-6"
          >
            <Users className="h-16 w-16 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Excel?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of successful students who have transformed their academic journey with us.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="btn-hero inline-flex items-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/services"
                  className="btn-secondary inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
