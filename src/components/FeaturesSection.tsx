
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const featureIndex = parseInt(entry.target.getAttribute('data-feature-index') || '0');
            setVisibleFeatures(prev => [...new Set([...prev, featureIndex])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const featureElements = sectionRef.current?.querySelectorAll('[data-feature-index]');
    featureElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Autonomous Computer-Using Agents",
      description: "Agents that operate desktop environments and third-party tools on behalf of users. Can execute workflows like debugging, smart contract testing, or dApp interaction autonomously."
    },
    {
      title: "Agent Communication Protocol (ACP)",
      description: "A communication layer for multiple agents to collaborate, share context, and execute joint tasks. Enables \"agent teamwork\" similar to human teams."
    },
    {
      title: "Third-Party Tool & Platform Integration",
      description: "Connects and automates interaction with apps, APIs, and decentralized protocols (wallets, exchanges, analytics tools). Eliminates friction between fragmented Web3 ecosystems."
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            We Built with Purpose
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We power the next generation of web3 application with OG AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-feature-index={index}
                className={`transform transition-all duration-1000 ${
                  visibleFeatures.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                      {feature.description.split('. ').map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-sm leading-relaxed">
                          {bullet.endsWith('.') ? bullet : bullet + '.'}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/lovable-uploads/2ff0c360-7764-4186-86a0-541527cff625.png"
                alt="OG Liminous Vision"
                className="w-full h-auto max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
