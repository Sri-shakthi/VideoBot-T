import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useGoogleLogin } from "@react-oauth/google";
import { useState } from "react";

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSuccess = async (tokenResponse: any) => {
    setIsLoading(true);
    try {
      // Fetch user info using the access token
      const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenResponse.access_token}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch user info");
      }
      
      const userInfo = await response.json();
      
      console.log("Google login successful:", userInfo);
      
      // Store user info in localStorage (or send to your backend)
      localStorage.setItem("user", JSON.stringify(userInfo));
      localStorage.setItem("access_token", tokenResponse.access_token);
      
      // Call the onLogin callback to proceed to dashboard
      onLogin();
    } catch (error) {
      console.error("Google login error:", error);
      alert("Failed to sign in with Google. Please try again.");
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    console.error("Google login failed");
    setIsLoading(false);
    alert("Failed to sign in with Google. Please try again.");
  };

  // Use the useGoogleLogin hook with implicit flow
  const login = useGoogleLogin({
    onSuccess: handleGoogleSuccess,
    onError: handleGoogleError,
    flow: "implicit", // Implicit flow for client-side apps
  });

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#0f0a1f] to-[#0a0a0f]">
      {/* Bokeh Lights Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${50 + Math.random() * 150}px`,
              height: `${50 + Math.random() * 150}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0
                  ? "rgba(99, 102, 241, 0.1)"
                  : i % 3 === 1
                  ? "rgba(139, 92, 246, 0.1)"
                  : "rgba(59, 130, 246, 0.1)"
              }, transparent)`,
              filter: "blur(40px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Light Rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-screen">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          {/* Frosted Glass Card */}
          <div className="glass-strong rounded-2xl p-12 shadow-cinematic relative overflow-hidden">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-violet-500/5" />

            {/* Content */}
            <div className="relative z-10">
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center mb-8"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-10 h-10 text-indigo-400" />
                  <span className="text-3xl tracking-wider text-indigo-300" style={{ fontSize: "2rem" }}>
                    NEXUS AI
                  </span>
                </div>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl mb-3 text-white" style={{ fontSize: "2rem", fontWeight: 600 }}>
                  Welcome Back
                </h2>
                <p className="text-gray-400" style={{ fontSize: "1rem" }}>
                  Sign in to continue your AI experience
                </p>
              </motion.div>

              {/* Google Sign In Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  onClick={() => login()}
                  disabled={isLoading}
                  className="w-full py-6 bg-white hover:bg-gray-100 text-gray-900 shadow-neon-blue group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontSize: "1.125rem", fontWeight: 600 }}
                >
                  {/* Button Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-500/20"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="relative flex items-center justify-center gap-3">
                    {isLoading ? (
                      <>
                        <svg className="animate-spin h-6 w-6 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Signing in...</span>
                      </>
                    ) : (
                      <>
                        {/* Google Icon */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          />
                        </svg>
                        <span>Continue with Google</span>
                      </>
                    )}
                  </div>
                </Button>
              </motion.div>

              {/* Divider */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="relative my-8"
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#1a1a24] text-gray-500">Secure Authentication</span>
                </div>
              </motion.div>

              {/* Footer Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-center text-sm text-gray-500"
              >
                By continuing, you agree to our Terms of Service and Privacy Policy
              </motion.p>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-500/10 to-transparent rounded-bl-2xl" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
