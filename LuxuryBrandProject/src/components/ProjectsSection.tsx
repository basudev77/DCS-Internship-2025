import { Button } from "@/components/ui/button";
import luxuryVilla from "@/assets/luxury-villa.jpg";
import corporateLuxury from "@/assets/corporate-luxury.jpg";
import penthouseInterior from "@/assets/penthouse-interior.jpg";
import boutiqueHotel from "@/assets/boutique-hotel.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Royal Villa Estate",
      category: "Luxury Residential",
      image: luxuryVilla,
      description: "A magnificent contemporary villa featuring sustainable design elements, marble finishes, and royal luxury details.",
      value: "$2.5M"
    },
    {
      title: "Premium Corporate Tower",
      category: "Commercial Excellence",
      image: corporateLuxury,
      description: "Innovative headquarters designed with golden accents and premium materials to inspire productivity and prestige.",
      value: "$15M"
    },
    {
      title: "Imperial Penthouse",
      category: "Ultra-Luxury Interior",
      image: penthouseInterior,
      description: "Sophisticated penthouse featuring crystal chandeliers, marble finishes, and bespoke royal furnishings.",
      value: "$3.8M"
    },
    {
      title: "Grand Boutique Hotel",
      category: "Luxury Hospitality",
      image: boutiqueHotel,
      description: "Elegant hotel design with ornate architecture and golden details creating unforgettable luxury experiences.",
      value: "$8.2M"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-luxury-dark-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-luxury-gold text-sm font-light tracking-widest uppercase mb-4 block">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-light text-luxury-text mb-6">
            Our Recent Work
          </h2>
          <p className="text-luxury-text-muted text-lg max-w-2xl mx-auto">
            Explore our portfolio of exceptional architectural and design projects 
            that showcase our commitment to luxury and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-luxury hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 via-luxury-dark/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-luxury-gold/90 text-luxury-dark px-3 py-1 rounded-full text-xs font-semibold">
                    {project.value}
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-luxury-gold text-sm font-light tracking-wider uppercase">
                    {project.category}
                  </span>
                  <div className="w-8 h-0.5 bg-luxury-gold"></div>
                </div>
                <h3 className="text-luxury-text text-xl font-semibold mb-3 group-hover:text-luxury-gold transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-luxury-text-muted text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <button className="text-luxury-gold text-sm font-medium hover:text-luxury-gold-light transition-colors duration-300 flex items-center">
                  View Details
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="luxury-outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;