import { motion } from "motion/react";
import { CheckCircle, Download, Home, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface EndSessionProps {
  characterId: string;
  onBackToHome: () => void;
}

const sessionData = {
  insurance: {
    title: "Insurance Consultation Complete",
    icon: "🛡️",
    cards: [
      {
        title: "Policy Recommendation",
        content: "Comprehensive Life Insurance - $500,000 coverage",
        details: ["Monthly Premium: $1,250", "Coverage: Full medical & accident", "Term: 20 years"],
      },
      {
        title: "Documents Uploaded",
        content: "3 files successfully processed",
        details: ["ID Verification ✓", "Income Proof ✓", "Medical History ✓"],
      },
      {
        title: "Next Steps",
        content: "Review and sign your policy documents",
        details: ["Download policy PDF", "E-signature required", "Activation in 24-48 hours"],
      },
    ],
  },
  tutor: {
    title: "Tutoring Session Complete",
    icon: "📚",
    cards: [
      {
        title: "Topics Covered",
        content: "Data Structures & Algorithms",
        details: ["Binary Trees", "Graph Traversal", "Dynamic Programming"],
      },
      {
        title: "Session Notes",
        content: "Key concepts and practice problems",
        details: ["15 problems solved", "3 new concepts learned", "Homework assigned"],
      },
      {
        title: "Next Session",
        content: "Advanced Algorithms - Nov 20, 2025",
        details: ["Time: 3:00 PM EST", "Duration: 60 minutes", "Prep: Review notes"],
      },
    ],
  },
  psychic: {
    title: "Psychic Reading Complete",
    icon: "🔮",
    cards: [
      {
        title: "Your Reading",
        content: "Past, Present & Future Insights",
        details: ["Past: Major transformation", "Present: New opportunities", "Future: Success ahead"],
      },
      {
        title: "Spiritual Guidance",
        content: "Messages from the universe",
        details: ["Trust your intuition", "Embrace change", "New beginnings await"],
      },
      {
        title: "Crystal Energy",
        content: "Recommended crystals for your path",
        details: ["Amethyst - Clarity", "Rose Quartz - Love", "Citrine - Abundance"],
      },
    ],
  },
  doctor: {
    title: "Medical Consultation Complete",
    icon: "⚕️",
    cards: [
      {
        title: "Diagnosis Summary",
        content: "Overall health status: Good",
        details: ["No major concerns", "Vitals within normal range", "Follow-up recommended"],
      },
      {
        title: "Recommendations",
        content: "Health & wellness advice",
        details: ["Stay hydrated", "Regular exercise", "Balanced diet"],
      },
      {
        title: "Prescription",
        content: "Medication and supplements",
        details: ["Multivitamin - Daily", "Vitamin D - 1000 IU", "Follow-up in 3 months"],
      },
    ],
  },
  magician: {
    title: "Magic Show Complete",
    icon: "🎩",
    cards: [
      {
        title: "Tricks Performed",
        content: "5 amazing illusions revealed",
        details: ["Card Prediction ✓", "Mind Reading ✓", "Vanishing Act ✓"],
      },
      {
        title: "Your Chosen Card",
        content: "The Ace of Spades ♠️",
        details: ["Predicted correctly!", "Magic rating: 10/10", "Surprise level: Maximum"],
      },
      {
        title: "Learn Magic",
        content: "Book a private magic lesson",
        details: ["1-on-1 training", "Learn 3 tricks", "Amaze your friends"],
      },
    ],
  },
  receptionist: {
    title: "Booking Confirmed",
    icon: "🏨",
    cards: [
      {
        title: "Reservation Details",
        content: "Deluxe Room - 3 Nights",
        details: ["Check-in: Nov 20, 2025", "Check-out: Nov 23, 2025", "Confirmation: #BK12345"],
      },
      {
        title: "Room Amenities",
        content: "Premium facilities included",
        details: ["King-size bed", "Ocean view", "Free WiFi & Breakfast"],
      },
      {
        title: "Total Cost",
        content: "$540 (3 nights @ $180/night)",
        details: ["Room: $540", "Tax: $54", "Total: $594"],
      },
    ],
  },
};

export function EndSession({ characterId, onBackToHome }: EndSessionProps) {
  const data = sessionData[characterId as keyof typeof sessionData];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f] relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
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

      <div className="relative z-10 min-h-screen px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-indigo-400" />
            <span className="text-2xl tracking-wider text-indigo-300">NEXUS AI</span>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <CheckCircle className="w-24 h-24 text-green-400" />
            </motion.div>
            
            <h1 className="text-5xl mb-4 text-white" style={{ fontSize: "3.5rem", fontWeight: 700 }}>
              {data.title}
            </h1>
            <p className="text-xl text-gray-400">
              Here's a summary of your session
            </p>
          </div>
        </motion.div>

        {/* Result Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {data.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group"
              >
                {/* Card with realistic shadow */}
                <div className="glass-strong rounded-2xl p-6 shadow-cinematic relative overflow-hidden hover:shadow-neon-blue transition-all duration-300">
                  {/* Paper texture overlay */}
                  <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-white to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-5xl mb-4">{data.icon}</div>
                    
                    {/* Title */}
                    <h3 className="text-xl mb-3 text-white" style={{ fontSize: "1.5rem", fontWeight: 600 }}>
                      {card.title}
                    </h3>
                    
                    {/* Content */}
                    <p className="text-gray-400 mb-4" style={{ fontSize: "1rem" }}>
                      {card.content}
                    </p>
                    
                    {/* Details List */}
                    <div className="space-y-2">
                      {card.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-sm text-gray-500">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-tr-2xl" />
                  
                  {/* Bottom glow on hover */}
                  <motion.div
                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="px-8 py-6 glass-strong hover:glass border border-gray-700 group"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download Summary
            </Button>
            
            <Button
              onClick={onBackToHome}
              size="lg"
              className="px-8 py-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-neon-blue"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Button>
          </motion.div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500">
              Session recorded on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
