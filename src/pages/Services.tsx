import { motion } from 'framer-motion';
import { Calculator, Atom, Code, BarChart3, DollarSign, FileSpreadsheet, Zap, Users } from 'lucide-react';
import Navbar from '../components/Layout/Navbar';

const Services = () => {
  const stemServices = [
    {
      icon: Calculator,
      title: 'Mathematics',
      description: 'From algebra to calculus, statistics to discrete math. Master mathematical concepts with step-by-step guidance.',
      features: ['Algebra & Geometry', 'Calculus & Analysis', 'Statistics & Probability', 'Discrete Mathematics'],
      color: 'bg-blue-500'
    },
    {
      icon: Atom,
      title: 'Physics',
      description: 'Understand the fundamental laws of nature through interactive problem-solving and real-world applications.',
      features: ['Classical Mechanics', 'Electromagnetism', 'Thermodynamics', 'Quantum Physics'],
      color: 'bg-purple-500'
    },
    {
      icon: Code,
      title: 'Information Technology',
      description: 'Learn programming, data structures, algorithms, and modern software development practices.',
      features: ['Programming Languages', 'Data Structures', 'Web Development', 'Software Engineering'],
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: 'Engineering',
      description: 'Explore engineering principles across multiple disciplines with hands-on problem solving.',
      features: ['Circuit Analysis', 'Signal Processing', 'System Design', 'Control Systems'],
      color: 'bg-orange-500'
    }
  ];

  const extraServices = [
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights using industry-standard tools and techniques.',
      features: ['Excel Advanced Functions', 'Power BI Dashboards', 'Tableau Visualizations', 'Statistical Analysis'],
      color: 'bg-cyan-500'
    },
    {
      icon: DollarSign,
      title: 'Accounting',
      description: 'Master financial accounting principles, from basic bookkeeping to advanced financial reporting.',
      features: ['Financial Statements', 'Cost Accounting', 'Tax Preparation', 'Audit Procedures'],
      color: 'bg-emerald-500'
    },
    {
      icon: FileSpreadsheet,
      title: 'Bookkeeping',
      description: 'Learn systematic recording and organization of financial transactions for businesses.',
      features: ['Journal Entries', 'Ledger Management', 'Trial Balance', 'QuickBooks Training'],
      color: 'bg-violet-500'
    }
  ];

  const ServiceCard = ({ service, index }: { service: any, index: number }) => (
    <motion.div
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
      className="card-hover group relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />
      
      <div className="relative z-10">
        <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
        
        <ul className="space-y-2">
          {service.features.map((feature: string, featureIndex: number) => (
            <motion.li
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
              className="flex items-center text-sm text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
              {feature}
            </motion.li>
          ))}
        </ul>
        
        <motion.div
          whileHover={{ x: 5 }}
          className="mt-6 inline-flex items-center text-primary font-medium text-sm cursor-pointer"
        >
          Learn More →
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tutoring services designed to help you excel in STEM fields and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* STEM Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              STEM Tutoring
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master the fundamentals of Science, Technology, Engineering, and Mathematics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stemServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Professional Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Specialized training in business analysis, accounting, and data management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {extraServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of successful students who have transformed their academic journey with us
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="btn-hero text-lg px-8 py-4">
                Schedule Your First Session
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;