import { useState } from "react";
import luxuryTowerAbout from "@/assets/luxury-tower-about.jpg";


const AboutSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      title: "Royal Craftsmanship",
      description: "Exquisite attention to detail with premium materials and artisanal finishes that define luxury.",
      icon: "👑"
    },
    {
      title: "Sustainable Luxury",
      description: "Environmental responsibility meets opulent design in every architectural decision we make.",
      icon: "🌿"
    },
    {
      title: "Bespoke Solutions",
      description: "Personalized architectural solutions tailored to your unique vision and royal lifestyle.",
      icon: "✨"
    }
  ];

  return (
    <section id="about" className="py-32 bg-luxury-dark-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-royal opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-luxury-gold/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <span className="text-luxury-gold text-sm font-light tracking-[0.3em] uppercase mb-6 flex items-center">
                <div className="w-12 h-0.5 bg-luxury-gold mr-4"></div>
                About Excellence
              </span>
              <h2 className="text-5xl md:text-6xl font-light text-luxury-text mb-8 leading-tight">
                Crafting <span className="text-luxury-gold font-serif italic">Royal</span> Spaces
              </h2>
              <p className="text-luxury-text-muted text-xl leading-relaxed font-light">
                For over 8 years, we've been the architects of luxury, creating spaces that transcend 
                ordinary living into realms of royal elegance and sophisticated comfort.
              </p>
            </div>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`flex items-start space-x-6 p-6 rounded-xl transition-all duration-500 ${
                    hoveredFeature === index ? 'bg-luxury-gold/5 shadow-royal transform translate-x-2' : ''
                  }`}>
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-luxury-text text-xl font-semibold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-luxury-text-muted leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-luxury-gold/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">50+</div>
                <div className="text-luxury-text-muted text-sm tracking-wide">Luxury Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">98%</div>
                <div className="text-luxury-text-muted text-sm tracking-wide">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-gold mb-2">15+</div>
                <div className="text-luxury-text-muted text-sm tracking-wide">Awards Won</div>
              </div>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-luxury group">
              <img 
                src={luxuryTowerAbout} 
                alt="Luxury architecture showcase"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/50 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-royal opacity-20 rounded-2xl -z-10 blur-sm"></div>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-luxury-gold/10 rounded-2xl -z-10"></div>
            
            {/* Floating card */}
            <div className="absolute bottom-8 left-8 bg-luxury-dark/90 backdrop-blur-sm rounded-xl p-6 border border-luxury-gold/20">
              <div className="text-luxury-gold text-2xl font-bold">8+</div>
              <div className="text-luxury-text-muted text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;