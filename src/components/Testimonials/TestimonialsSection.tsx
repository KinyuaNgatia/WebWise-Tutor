import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Boston, MA",
      subject: "Mathematics & Physics",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      testimonial: `Working with Webwise Tutor completely transformed my understanding of calculus and physics. I went from struggling to excelling in just two months, and their personalized teaching style gave me real confidence. Today, I’m pursuing engineering with a strong foundation thanks to their support.`,
    },
    {
      name: "Marcus Thompson",
      location: "Toronto, Canada",
      subject: "Data Analysis & Programming",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: `Webwise Tutor gave me the practical data science training I needed to switch careers. From mastering Python and R to building real-world projects, their guidance landed me a data analyst role in six months.`,
    },
    {
      name: "Emma Watson",
      location: "London, UK",
      subject: "Accounting & Bookkeeping",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: `I had zero background in finance, but Webwise Tutor made accounting simple and practical. Their QuickBooks training and tax guidance saved me thousands and helped grow my business by 300%.`,
    },
    {
      name: "James Mitchell",
      location: "Sydney, Australia",
      subject: "Computer Science & Engineering",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: `Webwise Tutor saved my computer science degree by breaking down tough concepts into manageable lessons. With their support, I boosted my GPA and secured a role at a leading tech company.`,
    },
  ];

  const TestimonialCard = ({ testimonial }) => {
    const [expanded, setExpanded] = useState(false);
    const firstSentence = testimonial.testimonial.split(". ")[0] + ".";

    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 300,
        }}
        viewport={{ once: true }}
        className="card-hover relative"
      >
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 text-primary/20">
          <Quote className="h-8 w-8" />
        </div>

        {/* Header */}
        <div className="flex items-start space-x-4 mb-6">
          <motion.img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <div className="flex-1">
            <h3 className="font-bold text-foreground">{testimonial.name}</h3>
            <p className="text-sm text-muted-foreground">
              {testimonial.location}
            </p>
            <p className="text-sm text-primary font-medium mt-1">
              {testimonial.subject}
            </p>

            {/* Rating */}
            <div className="flex items-center mt-2">
              {[...Array(testimonial.rating)].map((_, starIndex) => (
                <Star
                  key={starIndex}
                  className="h-4 w-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Text */}
        <p className="text-muted-foreground leading-relaxed text-sm">
          {expanded ? testimonial.testimonial : firstSentence}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary text-sm font-medium mt-2 hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </motion.div>
    );
  };

  return (
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
            What Our Students Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from students who have transformed their academic and
            professional lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <TestimonialCard key={index} testimonial={t} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
