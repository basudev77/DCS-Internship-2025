import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-architecture.jpg";
import "@fontsource/italianno"; // defaults to weight 400

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern luxury architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark/80 via-luxury-dark/60 to-luxury-dark/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Subtitle */}
        <div className="mb-4">
          <span className="inline-flex items-center text-luxury-gold text-sm font-light tracking-widest uppercase">
            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2">
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
            Hulk Oficovic, the Design Journey
          </span>
        </div>

        {/* Main Heading */}
        <div className="mb-6">
          <h1
            className="text-6xl md:text-8xl font-light text-luxury-gold mb-2"
            style={{ fontFamily: "'Italianno', cursive" }}
          >
            Luxury & Comfort
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold text-luxury-text tracking-tight">
            Passionate Living Spaces
          </h2>
        </div>

        {/* Description */}
        <p className="text-luxury-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          We are committed to incorporating sustainable design strategies into
          all of our projects. It is woven into our design practices.
        </p>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-12 mb-12">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
              28
            </div>
            <div className="text-luxury-text-muted text-sm tracking-wide">
              Residential Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
              20
            </div>
            <div className="text-luxury-text-muted text-sm tracking-wide">
              Commercial Projects
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-luxury-gold mb-2">
              8+
            </div>
            <div className="text-luxury-text-muted text-sm tracking-wide">
              Years Experience
            </div>
          </div>
        </div>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="luxury-outline"
            size="lg"
            className="text-base px-8 py-3"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" className="mr-2">
              <path
                d="M8 1l2.5 5 5.5.5-4 4 1 5.5L8 13l-5 2.5 1-5.5-4-4 5.5-.5L8 1z"
                fill="currentColor"
              />
            </svg>
            View Projects
          </Button>
          <Button variant="luxury" size="lg" className="text-base px-8 py-3">
            Book Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
