
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const FeaturesSection = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

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

  // Three.js animations for cards
  useEffect(() => {
    // Card 1 Animation - Rotating geometry
    if (card1Ref.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      const cardRect = card1Ref.current.getBoundingClientRect();
      renderer.setSize(cardRect.width * 0.8, cardRect.height * 0.4);
      card1Ref.current.appendChild(renderer.domElement);

      const geometry = new THREE.ConeGeometry(1, 2, 8);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x333333,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      const cone = new THREE.Mesh(geometry, material);
      scene.add(cone);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cone.rotation.x += 0.01;
        cone.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      animate();
    }

    // Card 2 Animation - Pulsing sphere
    if (card2Ref.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      const cardRect = card2Ref.current.getBoundingClientRect();
      renderer.setSize(cardRect.width * 0.8, cardRect.height * 0.4);
      card2Ref.current.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(1.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x444444,
        wireframe: true,
        transparent: true,
        opacity: 0.7
      });
      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);

      camera.position.z = 5;

      let scale = 1;
      let scaleDirection = 0.01;

      const animate = () => {
        requestAnimationFrame(animate);
        scale += scaleDirection;
        if (scale > 1.2 || scale < 0.8) scaleDirection *= -1;
        sphere.scale.set(scale, scale, scale);
        sphere.rotation.y += 0.005;
        renderer.render(scene, camera);
      };
      animate();
    }

    // Card 3 Animation - Floating cubes
    if (card3Ref.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      
      const cardRect = card3Ref.current.getBoundingClientRect();
      renderer.setSize(cardRect.width * 0.8, cardRect.height * 0.4);
      card3Ref.current.appendChild(renderer.domElement);

      const cubes = [];
      for (let i = 0; i < 5; i++) {
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshBasicMaterial({ 
          color: 0x555555,
          wireframe: true,
          transparent: true,
          opacity: 0.6
        });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set((Math.random() - 0.5) * 4, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2);
        cubes.push(cube);
        scene.add(cube);
      }

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cubes.forEach((cube, index) => {
          cube.rotation.x += 0.01 * (index + 1);
          cube.rotation.y += 0.01 * (index + 1);
          cube.position.y += Math.sin(Date.now() * 0.001 + index) * 0.01;
        });
        renderer.render(scene, camera);
      };
      animate();
    }
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
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8">
            We Built with Purpose
          </h2>
          <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We power the next generation of web3 application with OG AI.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Features List */}
          <div className="space-y-12">
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
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
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

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Card 1 */}
          <div className="bg-card border border-border p-8 flex flex-col items-center text-center min-h-[500px]">
            <div className="mb-6 w-full flex justify-center">
              <img
                src="/lovable-uploads/77f3bd83-3bf0-45d5-8d3b-bcbfaf30434a.png"
                alt="Unified Ecosystems"
                className="w-48 h-48 object-contain"
              />
            </div>
            <div ref={card1Ref} className="mb-6 flex justify-center"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unifies fragmented ecosystems by enabling agents to integrate with multiple dApps, wallets, and chains seamlessly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-card border border-border p-8 flex flex-col items-center text-center min-h-[500px]">
            <div className="mb-6 w-full flex justify-center">
              <img
                src="/lovable-uploads/e8f13b02-77f5-47d4-87cc-9192dd7638b8.png"
                alt="Scalability"
                className="w-48 h-48 object-contain"
              />
            </div>
            <div ref={card2Ref} className="mb-6 flex justify-center"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scalability through the Agent Communication Protocol (ACP) and 0G Data Availability, letting agents coordinate across high-throughput blockchain environments.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-card border border-border p-8 flex flex-col items-center text-center min-h-[500px]">
            <div className="mb-6 w-full flex justify-center">
              <img
                src="/lovable-uploads/605c238b-8a6a-4b27-8076-6bed9050d62d.png"
                alt="Innovation"
                className="w-48 h-48 object-contain"
              />
            </div>
            <div ref={card3Ref} className="mb-6 flex justify-center"></div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Innovation by enabling autonomous workflows, cross-chain integration, and AI-powered governance paving the way for next-gen decentralized applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
