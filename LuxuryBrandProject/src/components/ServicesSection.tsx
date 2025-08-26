const ServicesSection = () => {
  const services = [
    {
      title: "Residential Design",
      description: "Luxury homes and apartments designed with modern aesthetics and sustainable practices.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M4 12L16 2L28 12V28H20V18H12V28H4V12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Commercial Spaces",
      description: "Office buildings, retail spaces, and commercial complexes that inspire productivity.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 4V28M20 4V28M4 12H28M4 20H28" stroke="currentColor" strokeWidth="2"/>
        </svg>
      )
    },
    {
      title: "Interior Design",
      description: "Complete interior solutions that blend functionality with luxury aesthetics.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M2 16C2 8.268 8.268 2 16 2S30 8.268 30 16 23.732 30 16 30 2 23.732 2 16Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M16 8V16L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and quality execution.",
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M26 6H6C4.895 6 4 6.895 4 8V24C4 25.105 4.895 26 6 26H26C27.105 26 28 25.105 28 24V8C28 6.895 27.105 6 26 6Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M10 14L14 18L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-luxury-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-luxury-gold text-sm font-light tracking-widest uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-luxury-text mb-6">
            What We Offer
          </h2>
          <p className="text-luxury-text-muted text-lg max-w-2xl mx-auto">
            From concept to completion, we provide comprehensive architectural and design services 
            tailored to your unique vision and requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-luxury-dark-secondary p-8 rounded-lg shadow-luxury hover:shadow-glow transition-all duration-300 group"
            >
              <div className="text-luxury-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-luxury-text text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-luxury-text-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;