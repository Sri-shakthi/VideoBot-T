import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { GridScan } from './GridScan';


interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f]">
      {/* GridScan Background */}
      <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%' }}>
        <GridScan
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#392e4e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}
        />
      </div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Light Rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-violet-500/50 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Logo/Brand */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 flex items-center gap-2"
        >
          <Sparkles className="w-8 h-8 text-indigo-400" />
          <span className="text-2xl tracking-wider text-indigo-300">NEXUS AI</span>
        </motion.div>

        {/* Hero Content */}
        <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              style={{ fontWeight: 700, fontSize: "5rem", lineHeight: 1.1 }}
            >
              <span className="text-glow bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Experience
              </span>
              <br />
              <span className="text-white">Real-Time</span>
              <br />
              <span className="text-white">AI Characters</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-400 mb-10 max-w-xl"
              style={{ fontSize: "1.5rem", fontWeight: 400 }}
            >
              Lifelike video chat with intelligent personas across industries.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                onClick={onGetStarted}
                className="group relative px-12 py-8 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-neon-blue transition-all duration-300"
                style={{ fontSize: "1.25rem", fontWeight: 600 }}
              >
                Get Started
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Hologram Character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {/* Hologram Platform */}
            <div className="relative mx-auto max-w-md">
              {/* Glow Circle */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/20 to-violet-500/20 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              {/* Hologram Container - Floating Animation */}
              <motion.div
                className="relative aspect-square"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Multiple Ring Layers */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-indigo-400/50 shadow-neon-blue"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-full" />
                </motion.div>
                
                {/* Second Ring with opposite animation */}
                <motion.div
                  className="absolute inset-8 rounded-full border border-violet-400/30"
                  animate={{
                    scale: [1, 0.95, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.5,
                  }}
                />

                {/* Third Ring */}
                <motion.div
                  className="absolute inset-16 rounded-full border border-blue-400/20"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: 0.5,
                  }}
                />

                {/* Character Image with Parallax Effect */}
                <motion.div
                  className="absolute inset-12 rounded-full overflow-hidden"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1729375874763-45ddfc9feec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMDczNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Character"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Holographic glitch effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-transparent to-indigo-500/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  />
                </motion.div>

                {/* Scan Lines with different animation */}
                <motion.div
                  className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent"
                    animate={{
                      y: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Floating Data Points - Orbital animation */}
              {[...Array(8)].map((_, i) => {
                const angle = (i * Math.PI * 2) / 8;
                return (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-indigo-400 rounded-full shadow-neon-blue"
                    style={{
                      left: "50%",
                      top: "50%",
                    }}
                    animate={{
                      x: [
                        Math.cos(angle) * 180,
                        Math.cos(angle + Math.PI / 4) * 200,
                        Math.cos(angle) * 180,
                      ],
                      y: [
                        Math.sin(angle) * 180,
                        Math.sin(angle + Math.PI / 4) * 200,
                        Math.sin(angle) * 180,
                      ],
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}