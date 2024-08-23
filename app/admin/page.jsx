"use client";

import AuthContextProvider, { useAuth } from "@/lib/contexts/AuthContext";
import WelcomMessage from "../components/WelcomMessage";

export default function page() {
  return (
    <main className="flex items-center justify-center h-svh px-3">
      <AuthContextProvider>
        <WelcomMessage />
      </AuthContextProvider>
    </main>
  );
}
