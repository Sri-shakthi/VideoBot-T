import { motion } from "motion/react";
import { Sparkles, User, GraduationCap, Sparkle, Stethoscope, Wand2, Building2, Lock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Character {
  id: string;
  name: string;
  role: string;
  image: string;
  color: string;
  icon: React.ReactNode;
  locked?: boolean;
}

interface DashboardProps {
  onSelectCharacter: (characterId: string) => void;
}

export function Dashboard({ onSelectCharacter }: DashboardProps) {
  const characters: Character[] = [
    {
      id: "insurance",
      name: "Alex Carter",
      role: "Insurance Agent",
      image: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnN1cmFuY2UlMjBhZ2VudHxlbnwxfHx8fDE3NjMxMTI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-blue-500/20 to-cyan-500/20",
      icon: <Building2 className="w-5 h-5" />,
    },
    {
      id: "tutor",
      name: "Dr. Sarah Chen",
      role: "GATE Tutor",
      image: "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTEyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-amber-500/20 to-orange-500/20",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      id: "psychic",
      name: "Luna Mystique",
      role: "Mystic Psychic",
      image: "https://images.unsplash.com/photo-1719937075989-795943caad2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaGljJTIwZm9ydHVuZSUyMHRlbGxlcnxlbnwxfHx8fDE3NjMxMTI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-purple-500/20 to-pink-500/20",
      icon: <Sparkle className="w-5 h-5" />,
    },
    {
      id: "doctor",
      name: "Dr. James Wilson",
      role: "Medical Assistant",
      image: "https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzEwMDI5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-teal-500/20 to-emerald-500/20",
      icon: <Stethoscope className="w-5 h-5" />,
    },
    {
      id: "magician",
      name: "Marcus Enigma",
      role: "Card Trickster",
      image: "https://images.unsplash.com/photo-1677287787790-db8ec0ec8ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2lhbiUyMHBlcmZvcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExMjg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-red-500/20 to-rose-500/20",
      icon: <Wand2 className="w-5 h-5" />,
    },
    {
      id: "receptionist",
      name: "Emma Parker",
      role: "Hotel Receptionist",
      image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbmlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMxMTI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: "from-indigo-500/20 to-blue-500/20",
      icon: <User className="w-5 h-5" />,
    },
    {
      id: "locked1",
      name: "Coming Soon",
      role: "More Characters",
      image: "",
      color: "from-gray-500/10 to-gray-600/10",
      icon: <Lock className="w-5 h-5" />,
      locked: true,
    },
    {
      id: "locked2",
      name: "Coming Soon",
      role: "More Characters",
      image: "",
      color: "from-gray-500/10 to-gray-600/10",
      icon: <Lock className="w-5 h-5" />,
      locked: true,
    },
    {
      id: "locked3",
      name: "Coming Soon",
      role: "More Characters",
      image: "",
      color: "from-gray-500/10 to-gray-600/10",
      icon: <Lock className="w-5 h-5" />,
      locked: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto mb-16"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl tracking-wider text-indigo-300">NEXUS AI</span>
            </div>
          </div>

          <div className="mt-12">
            <h1 className="text-5xl mb-4 text-white" style={{ fontSize: "3.5rem", fontWeight: 700 }}>
              Choose Your AI Character
            </h1>
            <p className="text-xl text-gray-400" style={{ fontSize: "1.25rem" }}>
              Select an expert to begin your immersive AI experience
            </p>
          </div>
        </motion.div>

        {/* Character Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <motion.div
                key={character.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={!character.locked ? { y: -10, scale: 1.02 } : {}}
                className="group"
              >
                <button
                  onClick={() => !character.locked && onSelectCharacter(character.id)}
                  disabled={character.locked}
                  className="w-full text-left relative"
                >
                  {/* Card Container */}
                  <div className="glass rounded-2xl overflow-hidden shadow-cinematic relative">
                    {/* Character Image */}
                    <div className="relative aspect-[3/4] overflow-hidden">
                      {character.locked ? (
                        <div className={`w-full h-full bg-gradient-to-br ${character.color} flex items-center justify-center`}>
                          <div className="text-center">
                            <Lock className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                            <div className="text-gray-500" style={{ fontSize: "1.125rem" }}>Coming Soon</div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <ImageWithFallback
                            src={character.image}
                            alt={character.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${character.color} opacity-30`} />
                          
                          {/* Bottom Gradient for Text */}
                          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                          {/* Hover Glow Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </>
                      )}

                      {/* Character Info Overlay */}
                      {!character.locked && (
                        <div className="absolute inset-x-0 bottom-0 p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-2xl mb-1 text-white" style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                                {character.name}
                              </h3>
                              <p className="text-gray-300" style={{ fontSize: "1rem" }}>
                                {character.role}
                              </p>
                            </div>
                            <motion.div
                              className={`p-3 glass-strong rounded-xl ${character.locked ? 'opacity-50' : ''}`}
                              whileHover={!character.locked ? { scale: 1.1, rotate: 5 } : {}}
                            >
                              {character.icon}
                            </motion.div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Card Bottom Border Glow */}
                    {!character.locked && (
                      <motion.div
                        className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${character.color.replace('/20', '/60')} opacity-0 group-hover:opacity-100 transition-opacity`}
                      />
                    )}
                  </div>

                  {/* Card Shadow on Hover */}
                  {!character.locked && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(to bottom right, ${
                          character.color.includes("blue")
                            ? "rgba(59, 130, 246, 0.2)"
                            : character.color.includes("purple")
                            ? "rgba(139, 92, 246, 0.2)"
                            : character.color.includes("teal")
                            ? "rgba(20, 184, 166, 0.2)"
                            : "rgba(99, 102, 241, 0.2)"
                        }, transparent)`,
                        filter: "blur(20px)",
                        zIndex: -1,
                        opacity: 0,
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
