import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: 'Residential Design',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-32 bg-luxury-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-luxury-dark via-luxury-dark to-luxury-dark-secondary"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-royal opacity-5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-luxury-gold text-sm font-light tracking-[0.3em] uppercase mb-6 flex items-center justify-center">
            <div className="w-12 h-0.5 bg-luxury-gold mr-4"></div>
            Royal Consultation
            <div className="w-12 h-0.5 bg-luxury-gold ml-4"></div>
          </span>
          <h2 className="text-5xl md:text-6xl font-light text-luxury-text mb-8">
            Begin Your <span className="text-luxury-gold font-serif italic">Luxury</span> Journey
          </h2>
          <p className="text-luxury-text-muted text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your vision into architectural masterpiece. Let's create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-light text-luxury-text mb-8">Why Choose Royal Excellence?</h3>
              <div className="space-y-6">
                {[
                  { icon: "👑", title: "Royal Treatment", desc: "White-glove service from consultation to completion" },
                  { icon: "💎", title: "Premium Materials", desc: "Only the finest materials and craftsmanship" },
                  { icon: "🏆", title: "Award-Winning", desc: "15+ international design awards and recognition" },
                  { icon: "⚡", title: "Fast Delivery", desc: "Efficient project management with luxury results" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="text-luxury-text font-semibold mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-luxury-text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-luxury-dark-secondary p-8 rounded-2xl border border-luxury-gold/20">
              <h4 className="text-luxury-text text-xl font-semibold mb-6">Contact Information</h4>
              <div className="space-y-6">
                {[
                  { icon: "📍", title: "Royal Office", desc: "123 Luxury Avenue, Design District, NY 10001" },
                  { icon: "📞", title: "Direct Line", desc: "+1 (555) 123-4567" },
                  { icon: "✉️", title: "Royal Email", desc: "contact@hfsarchitecture.com" },
                  { icon: "🕒", title: "Consultation Hours", desc: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM" }
                ].map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-xl">{contact.icon}</div>
                    <div>
                      <h5 className="text-luxury-text font-medium mb-1">{contact.title}</h5>
                      <p className="text-luxury-text-muted text-sm">{contact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Form */}
          <div className="bg-luxury-dark-secondary p-10 rounded-2xl shadow-luxury border border-luxury-gold/10">
            <h3 className="text-2xl font-light text-luxury-text mb-8">Request Royal Consultation</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-luxury-text text-sm font-medium mb-3 block">First Name *</label>
                  <Input 
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    placeholder="Your first name"
                    className="bg-luxury-dark/50 border-luxury-gold/30 text-luxury-text placeholder:text-luxury-text-muted focus:border-luxury-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="text-luxury-text text-sm font-medium mb-3 block">Last Name *</label>
                  <Input 
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    placeholder="Your last name"
                    className="bg-luxury-dark/50 border-luxury-gold/30 text-luxury-text placeholder:text-luxury-text-muted focus:border-luxury-gold transition-colors duration-300"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-luxury-text text-sm font-medium mb-3 block">Email Address *</label>
                <Input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="bg-luxury-dark/50 border-luxury-gold/30 text-luxury-text placeholder:text-luxury-text-muted focus:border-luxury-gold transition-colors duration-300"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-luxury-text text-sm font-medium mb-3 block">Project Type *</label>
                  <select 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full px-4 py-3 bg-luxury-dark/50 border border-luxury-gold/30 rounded-lg text-luxury-text focus:border-luxury-gold transition-colors duration-300"
                  >
                    <option>Luxury Residential</option>
                    <option>Commercial Excellence</option>
                    <option>Ultra-Luxury Interior</option>
                    <option>Hospitality Design</option>
                    <option>Complete Project Management</option>
                  </select>
                </div>
                <div>
                  <label className="text-luxury-text text-sm font-medium mb-3 block">Project Budget</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-4 py-3 bg-luxury-dark/50 border border-luxury-gold/30 rounded-lg text-luxury-text focus:border-luxury-gold transition-colors duration-300"
                  >
                    <option value="">Select budget range</option>
                    <option>$100K - $500K</option>
                    <option>$500K - $1M</option>
                    <option>$1M - $5M</option>
                    <option>$5M+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="text-luxury-text text-sm font-medium mb-3 block">Project Details *</label>
                <Textarea 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Describe your royal vision, project requirements, timeline, and any specific luxury features you envision..."
                  rows={5}
                  className="bg-luxury-dark/50 border-luxury-gold/30 text-luxury-text placeholder:text-luxury-text-muted focus:border-luxury-gold transition-colors duration-300 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                variant="luxury" 
                size="lg" 
                className="w-full text-lg py-4 transform hover:scale-[1.02] transition-all duration-300"
              >
                <span className="mr-2">👑</span>
                Request Royal Consultation
              </Button>
              
              <p className="text-luxury-text-muted text-xs text-center">
                * Required fields. We'll respond within 24 hours with your personalized consultation proposal.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;