import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8 pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 hero-bg"></div>
      
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
          Next-Generation{" "}
          <span className="gradient-text">Web3 Protocol</span>{" "}
          for Autonomous Agents
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          OG Liminous leverages autonomous computer-using agents—intelligent, self-operating 
          software entities that can independently execute complex tasks across desktop 
          environments, third-party applications, and blockchain-based systems.
        </p>
        
        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-hero-button-bg text-hero-button-text border border-hero-button-border hover:bg-hero-button-hover px-8 py-3 text-base font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Start Building
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg"
            className="text-muted-foreground hover:text-foreground px-8 py-3 text-base font-medium"
          >
            Learn More →
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