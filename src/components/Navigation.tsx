
import { Button } from "@/components/ui/button";

const Navigation = () => {
  console.log("Navigation component rendering");
  
  return (
    <nav className="w-full border-b border-border bg-background/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-foreground">
              OG <span className="gradient-text">LIMINOUS</span>
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#build" 
              className="text-sm font-medium text-black hover:text-foreground transition-colors"
            >
              Build
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <span className="text-sm">Menu</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
