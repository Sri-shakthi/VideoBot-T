import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { LoginPage } from "./components/LoginPage";
import { Dashboard } from "./components/Dashboard";
import { ChatRoom } from "./components/ChatRoom";
import { EndSession } from "./components/EndSession";
// @ts-expect-error - SplashCursor is a .jsx file without type definitions
import SplashCursor from "./components/SplashCursor";

type Page = "landing" | "login" | "dashboard" | "chat" | "end";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");
  const [selectedCharacter, setSelectedCharacter] = useState<string>("");

  const handleGetStarted = () => {
    setCurrentPage("login");
  };

  const handleLogin = () => {
    setCurrentPage("dashboard");
  };

  const handleSelectCharacter = (characterId: string) => {
    setSelectedCharacter(characterId);
    setCurrentPage("chat");
  };

  const handleEndCall = () => {
    setCurrentPage("end");
  };

  const handleBackToHome = () => {
    setSelectedCharacter("");
    setCurrentPage("dashboard");
  };

  return (
    <div className="dark">
      <SplashCursor />
      {currentPage === "landing" && <LandingPage onGetStarted={handleGetStarted} />}
      {currentPage === "login" && <LoginPage onLogin={handleLogin} />}
      {currentPage === "dashboard" && <Dashboard onSelectCharacter={handleSelectCharacter} />}
      {currentPage === "chat" && <ChatRoom characterId={selectedCharacter} onEndCall={handleEndCall} />}
      {currentPage === "end" && <EndSession characterId={selectedCharacter} onBackToHome={handleBackToHome} />}
    </div>
  );
}
