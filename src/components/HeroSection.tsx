
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/lovable-uploads/0465dfb8-235b-4aca-bf62-75125ccbd5fe.png)'
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
          Next-Generation{" "}
          <span className="text-white">Web3 Protocol</span>{" "}
          for Autonomous Agents
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed">
          OG Liminous leverages autonomous computer-using agents—intelligent, self-operating 
          software entities that can independently execute complex tasks across desktop 
          environments, third-party applications, and blockchain-based systems.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-hero-button-bg text-hero-button-text border border-hero-button-border hover:bg-hero-button-hover px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Start Building
          </Button>
        </div>
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent/10 rounded-full animate-float delay-1000 hidden lg:block"></div>
      </div>
    </section>
  );
};

export default HeroSection;
