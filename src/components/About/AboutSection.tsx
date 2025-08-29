import { motion } from 'framer-motion';
import { Award, Users, Clock, Target, BookOpen, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Expert Instructors',
      description: 'Learn from qualified professionals with years of industry experience',
      color: 'bg-blue-500'
    },
    {
      icon: Users,
      title: 'Personalized Learning',
      description: 'One-on-one sessions tailored to your unique learning style and pace',
      color: 'bg-green-500'
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: '24/7 availability to fit your busy schedule and time zone',
      color: 'bg-purple-500'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Structured learning paths designed to achieve your specific objectives',
      color: 'bg-orange-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Students Taught' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Webwise Tutor</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate educators dedicated to making quality STEM education accessible to everyone, 
            anywhere in the world. Our mission is to bridge the gap between complex academic concepts 
            and real-world applications.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card-glass max-w-4xl mx-auto text-center p-8 mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To empower students worldwide with the knowledge, skills, and confidence they need to excel 
            in STEM fields and achieve their academic and professional goals through innovative, 
            personalized online education.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 300 
              }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8 mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-muted-foreground">
              These numbers represent real students achieving real success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-primary/10 p-4 rounded-full">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Students Choose Us
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We combine academic excellence with practical industry knowledge to deliver 
              an unparalleled learning experience. Our proven methodology has helped hundreds 
              of students overcome their challenges and achieve remarkable success in their studies and careers.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hero"
            >
              Experience the Difference
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;