  import { createRoot } from "react-dom/client";
  import { GoogleOAuthProvider } from "@react-oauth/google";
  import App from "./App";
  import "./index.css";

  // Get Google Client ID from environment variable or use a placeholder
  // Replace with your actual Google OAuth Client ID
  // To set up: Create a .env file in the root directory with: VITE_GOOGLE_CLIENT_ID=your_client_id_here
  const GOOGLE_CLIENT_ID = (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID_HERE";

  createRoot(document.getElementById("root")!).render(
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  );
  