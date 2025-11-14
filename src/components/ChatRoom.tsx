import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Phone,
  Globe,
  Upload,
  FileText,
  Calculator,
  ClipboardList,
  Sparkles,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ChatRoomProps {
  characterId: string;
  onEndCall: () => void;
}

const characterData = {
  insurance: {
    name: "Alex Carter",
    role: "Insurance Agent",
    image: "https://images.unsplash.com/photo-1738750908048-14200459c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbnN1cmFuY2UlMjBhZ2VudHxlbnwxfHx8fDE3NjMxMTI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "from-blue-500 to-cyan-500",
  },
  tutor: {
    name: "Dr. Sarah Chen",
    role: "GATE Tutor",
    image: "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwcHJvZmVzc29yJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYzMTEyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "from-amber-500 to-orange-500",
  },
  psychic: {
    name: "Luna Mystique",
    role: "Mystic Psychic",
    image: "https://images.unsplash.com/photo-1719937075989-795943caad2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaGljJTIwZm9ydHVuZSUyMHRlbGxlcnxlbnwxfHx8fDE3NjMxMTI4NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "from-purple-500 to-pink-500",
  },
  doctor: {
    name: "Dr. James Wilson",
    role: "Medical Assistant",
    image: "https://images.unsplash.com/photo-1758691463626-0ab959babe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBtZWRpY2FsJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzEwMDI5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "from-teal-500 to-emerald-500",
  },
  magician: {
    name: "Marcus Enigma",
    role: "Card Trickster",
    image: "https://images.unsplash.com/photo-1677287787790-db8ec0ec8ec8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWdpY2lhbiUyMHBlcmZvcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzExMjg3NXww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "from-red-500 to-rose-500",
  },
  receptionist: {
    name: "Emma Parker",
    role: "Hotel Receptionist",
    image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbmlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjMxMTI4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "from-indigo-500 to-blue-500",
  },
};

export function ChatRoom({ characterId, onEndCall }: ChatRoomProps) {
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [language, setLanguage] = useState("en");
  const [showDocumentBlur, setShowDocumentBlur] = useState(true);
  const [showPremiumBlur, setShowPremiumBlur] = useState(true);

  const character = characterData[characterId as keyof typeof characterData];

  // Simulated audio waveform
  const [audioLevel] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f]">
      <div className="h-screen flex flex-col lg:flex-row p-4 gap-4">
        {/* Left: AI Character Video Panel */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-2/3 flex flex-col gap-4"
        >
          {/* Video Container */}
          <div className="flex-1 relative glass rounded-2xl overflow-hidden shadow-cinematic">
            {/* Character Video */}
            <div className="absolute inset-0">
              <ImageWithFallback
                src={character.image}
                alt={character.name}
                className="w-full h-full object-cover"
              />

              {/* Studio Lighting Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/50" />

              {/* Subtle Breathing Animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
            </div>

            {/* Top Bar - Character Info */}
            <div className="absolute top-0 inset-x-0 p-6">
              <div className="glass-strong rounded-xl p-4 inline-block">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <div>
                    <div className="text-white" style={{ fontSize: "1.125rem", fontWeight: 600 }}>
                      {character.name}
                    </div>
                    <div className="text-gray-400 text-sm">{character.role}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Subtitles */}
            <div className="absolute bottom-24 inset-x-0 px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-strong rounded-xl p-4 max-w-3xl mx-auto text-center"
              >
                <p className="text-white" style={{ fontSize: "1.125rem" }}>
                  "Hello! How can I assist you today?"
                </p>
              </motion.div>
            </div>

            {/* Audio Waveform Indicator */}
            {micEnabled && (
              <div className="absolute bottom-40 left-6">
                <div className="glass-strong rounded-xl p-3 flex items-center gap-2">
                  <Mic className="w-4 h-4 text-green-400" />
                  <div className="flex items-center gap-1">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-1 bg-green-400 rounded-full"
                        animate={{
                          height: [4, 12 + Math.random() * 8, 4],
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: Infinity,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Controls Bar */}
          <div className="glass-strong rounded-2xl p-6">
            <div className="flex items-center justify-between">
              {/* Left: Mic & Camera */}
              <div className="flex items-center gap-3">
                <Button
                  onClick={() => setMicEnabled(!micEnabled)}
                  variant={micEnabled ? "default" : "destructive"}
                  size="lg"
                  className="rounded-xl px-6"
                >
                  {micEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                </Button>
                <Button
                  onClick={() => setCameraEnabled(!cameraEnabled)}
                  variant={cameraEnabled ? "default" : "destructive"}
                  size="lg"
                  className="rounded-xl px-6"
                >
                  {cameraEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                </Button>
              </div>

              {/* Center: Language Selector */}
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-400" />
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-40 glass border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">🇺🇸 English</SelectItem>
                    <SelectItem value="es">🇪🇸 Spanish</SelectItem>
                    <SelectItem value="fr">🇫🇷 French</SelectItem>
                    <SelectItem value="de">🇩🇪 German</SelectItem>
                    <SelectItem value="zh">🇨🇳 Chinese</SelectItem>
                    <SelectItem value="ja">🇯🇵 Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Right: End Call */}
              <Button
                onClick={onEndCall}
                variant="destructive"
                size="lg"
                className="rounded-xl px-8 bg-red-600 hover:bg-red-700"
              >
                <Phone className="w-5 h-5 mr-2" />
                End Call
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Right: Room-Specific Interface */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-1/3 flex flex-col gap-4"
        >
          {/* Room-specific content based on character */}
          {characterId === "insurance" && <InsurancePanel showBlur={showDocumentBlur} setShowBlur={setShowDocumentBlur} showPremiumBlur={showPremiumBlur} setShowPremiumBlur={setShowPremiumBlur} />}
          {characterId === "tutor" && <TutorPanel />}
          {characterId === "psychic" && <PsychicPanel />}
          {characterId === "doctor" && <DoctorPanel />}
          {characterId === "magician" && <MagicianPanel />}
          {characterId === "receptionist" && <ReceptionistPanel />}
        </motion.div>
      </div>
    </div>
  );
}

// Insurance Agent Panel
function InsurancePanel({ showBlur, setShowBlur, showPremiumBlur, setShowPremiumBlur }: { showBlur: boolean; setShowBlur: (v: boolean) => void; showPremiumBlur: boolean; setShowPremiumBlur: (v: boolean) => void }) {
  return (
    <>
      {/* Document Upload */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="text-xl mb-4 text-white flex items-center gap-2">
          <Upload className="w-5 h-5 text-blue-400" />
          Upload Documents
        </h3>
        <div className="border-2 border-dashed border-gray-700 rounded-xl p-8 text-center hover:border-blue-500 transition-colors cursor-pointer">
          <FileText className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <p className="text-gray-400 mb-2">Drag & drop your documents</p>
          <p className="text-sm text-gray-600">or click to browse</p>
        </div>
      </div>

      {/* Face Analysis Preview */}
      <div className="glass-strong rounded-2xl p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-white flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-blue-400" />
            Face Analysis
          </h3>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowBlur(!showBlur)}
            className="gap-2"
          >
            {showBlur ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showBlur ? "Show" : "Hide"}
          </Button>
        </div>
        <div className={`relative rounded-xl p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 ${showBlur ? 'blur-md' : ''}`}>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Age Estimate:</span>
              <span className="text-white">32 years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Health Score:</span>
              <span className="text-green-400">92/100</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Risk Level:</span>
              <span className="text-blue-400">Low</span>
            </div>
          </div>
        </div>
        {showBlur && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-strong rounded-xl p-4">
              <p className="text-sm text-gray-400">Allow camera access to view</p>
            </div>
          </div>
        )}
      </div>

      {/* Premium Calculator */}
      <div className="glass-strong rounded-2xl p-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl text-white flex items-center gap-2">
            <Calculator className="w-5 h-5 text-blue-400" />
            Premium Breakdown
          </h3>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowPremiumBlur(!showPremiumBlur)}
            className="gap-2"
          >
            {showPremiumBlur ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showPremiumBlur ? "Show" : "Hide"}
          </Button>
        </div>
        <div className={`relative rounded-xl p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 ${showPremiumBlur ? 'blur-md' : ''}`}>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Base Premium:</span>
              <span className="text-white">$1,250/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Coverage:</span>
              <span className="text-white">$500,000</span>
            </div>
            <div className="h-px bg-gray-700 my-2" />
            <div className="flex justify-between">
              <span className="text-white" style={{ fontWeight: 600 }}>Total:</span>
              <span className="text-blue-400 text-xl" style={{ fontWeight: 700 }}>$1,250/mo</span>
            </div>
          </div>
        </div>
        {showPremiumBlur && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="glass-strong rounded-xl p-4">
              <p className="text-sm text-gray-400">Complete analysis to view</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// GATE Tutor Panel
function TutorPanel() {
  return (
    <>
      {/* Whiteboard */}
      <div className="glass-strong rounded-2xl p-6 flex-1">
        <h3 className="text-xl mb-4 text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" />
          Interactive Whiteboard
        </h3>
        <div className="bg-white rounded-xl h-64 relative shadow-lg">
          {/* Simulated whiteboard content */}
          <div className="absolute inset-0 p-4">
            <svg className="w-full h-full" viewBox="0 0 400 300">
              <text x="20" y="30" className="text-2xl" fill="#1f2937" fontWeight="600">
                Topic: Data Structures
              </text>
              <line x1="20" y1="40" x2="380" y2="40" stroke="#6366f1" strokeWidth="2" />
              
              {/* Tree diagram */}
              <circle cx="200" cy="80" r="20" fill="#6366f1" />
              <text x="192" y="87" fill="white" fontWeight="600">A</text>
              
              <line x1="200" y1="100" x2="150" y2="130" stroke="#6366f1" strokeWidth="2" />
              <line x1="200" y1="100" x2="250" y2="130" stroke="#6366f1" strokeWidth="2" />
              
              <circle cx="150" cy="140" r="20" fill="#8b5cf6" />
              <text x="142" y="147" fill="white" fontWeight="600">B</text>
              
              <circle cx="250" cy="140" r="20" fill="#8b5cf6" />
              <text x="242" y="147" fill="white" fontWeight="600">C</text>
            </svg>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="text-xl mb-4 text-white">Session Notes</h3>
        <div className="space-y-3">
          <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <p className="text-sm text-gray-300">Binary trees: O(log n) search time</p>
          </div>
          <div className="p-3 bg-amber-500/10 rounded-lg border border-amber-500/30">
            <p className="text-sm text-gray-300">Remember: Balanced trees are key!</p>
          </div>
        </div>
      </div>
    </>
  );
}

// Psychic Panel
function PsychicPanel() {
  return (
    <>
      {/* Crystal Ball */}
      <div className="glass-strong rounded-2xl p-6 flex-1 relative overflow-hidden">
        <h3 className="text-xl mb-6 text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          Crystal Vision
        </h3>
        
        {/* Crystal Ball Effect */}
        <div className="relative aspect-square max-w-xs mx-auto">
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          
          <div className="relative aspect-square rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-2 border-purple-400/50 shadow-neon-purple flex items-center justify-center overflow-hidden">
            {/* Mystic particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-300 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            <Sparkles className="w-16 h-16 text-purple-300" />
          </div>
        </div>

        {/* Mystic fog at base */}
        <motion.div
          className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-purple-500/20 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Reading */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="text-xl mb-4 text-white">Your Reading</h3>
        <div className="space-y-3">
          <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
            <p className="text-sm text-purple-300 mb-2" style={{ fontWeight: 600 }}>
              Past
            </p>
            <p className="text-sm text-gray-300">A significant change has shaped your journey...</p>
          </div>
          <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
            <p className="text-sm text-purple-300 mb-2" style={{ fontWeight: 600 }}>
              Present
            </p>
            <p className="text-sm text-gray-300">You stand at a crossroads of opportunity...</p>
          </div>
        </div>
      </div>
    </>
  );
}

// Doctor Panel
function DoctorPanel() {
  return (
    <>
      {/* Symptoms Checker */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="text-xl mb-4 text-white flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-teal-400" />
          Symptoms
        </h3>
        <div className="space-y-2">
          {["Headache", "Fever", "Fatigue"].map((symptom) => (
            <div key={symptom} className="p-3 bg-teal-500/10 rounded-lg border border-teal-500/30 flex items-center justify-between">
              <span className="text-gray-300">{symptom}</span>
              <div className="w-3 h-3 bg-teal-400 rounded-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Vitals */}
      <div className="glass-strong rounded-2xl p-6 flex-1">
        <h3 className="text-xl mb-4 text-white">Diagnostic Summary</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Heart Rate</span>
              <span className="text-teal-400">72 bpm</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-gradient-to-r from-teal-500 to-emerald-500" />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-400">Blood Pressure</span>
              <span className="text-teal-400">120/80</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-teal-500 to-emerald-500" />
            </div>
          </div>
          <div className="mt-6 p-4 bg-teal-500/10 rounded-xl border border-teal-500/30">
            <p className="text-sm text-gray-300">
              Overall health status appears normal. Continue monitoring symptoms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// Magician Panel
function MagicianPanel() {
  return (
    <>
      {/* Card Display */}
      <div className="glass-strong rounded-2xl p-6 flex-1 relative overflow-hidden">
        <h3 className="text-xl mb-6 text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-red-400" />
          Pick a Card
        </h3>
        
        <div className="relative h-64">
          {/* Floating cards */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 w-24 h-36 -translate-x-1/2 -translate-y-1/2"
              style={{
                x: (i - 1) * 40,
                rotate: (i - 1) * 15,
                zIndex: i === 1 ? 3 : 1,
              }}
              animate={{
                y: [0, -10, 0],
                rotate: [(i - 1) * 15, (i - 1) * 15 + 5, (i - 1) * 15],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-red-600 to-rose-600 rounded-lg shadow-2xl border-2 border-red-400/50 flex items-center justify-center">
                <span className="text-4xl">🂡</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dramatic lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-full bg-gradient-to-b from-red-500/20 to-transparent blur-2xl" />
      </div>

      {/* Trick Info */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="text-xl mb-4 text-white">Current Trick</h3>
        <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
          <p className="text-sm text-gray-300 mb-3">
            "Think of any card in the deck. I will read your mind..."
          </p>
          <div className="flex gap-2">
            <div className="w-12 h-16 bg-gradient-to-br from-red-600 to-rose-600 rounded border border-red-400/50" />
            <div className="w-12 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded border border-blue-400/50" />
            <div className="w-12 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded border border-gray-500/50" />
          </div>
        </div>
      </div>
    </>
  );
}

// Receptionist Panel
function ReceptionistPanel() {
  return (
    <>
      {/* Booking Form */}
      <div className="glass-strong rounded-2xl p-6">
        <h3 className="text-xl mb-4 text-white">Reservation Details</h3>
        <div className="space-y-4">
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Check-in Date</label>
            <input
              type="date"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Check-out Date</label>
            <input
              type="date"
              className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Room Type</label>
            <select className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-2 text-white">
              <option>Standard Room</option>
              <option>Deluxe Room</option>
              <option>Suite</option>
            </select>
          </div>
        </div>
      </div>

      {/* Available Rooms */}
      <div className="glass-strong rounded-2xl p-6 flex-1">
        <h3 className="text-xl mb-4 text-white">Available Rooms</h3>
        <div className="space-y-3">
          {[
            { type: "Standard", price: "$120/night", available: 5 },
            { type: "Deluxe", price: "$180/night", available: 3 },
            { type: "Suite", price: "$350/night", available: 1 },
          ].map((room) => (
            <div key={room.type} className="p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/30">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-white" style={{ fontWeight: 600 }}>{room.type}</p>
                  <p className="text-sm text-gray-400">{room.available} available</p>
                </div>
                <p className="text-indigo-400" style={{ fontWeight: 600 }}>{room.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
