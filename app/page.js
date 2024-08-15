"use client"
import Image from "next/image";
import AuthContextProvider, { useAuth } from "@/lib/contexts/AuthContext";
import WelcomMessage from "./components/WelcomMessage";
export default function Home() {
  return (
    <main className="w-full max-w-4xl mx-auto py-4 px-3 flex items-center justify-center h-48">
      
      <AuthContextProvider>
        <WelcomMessage/>
      </AuthContextProvider>
    </main>
  );
}
