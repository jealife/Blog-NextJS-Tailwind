"use client";

import AuthContextProvider, { useAuth } from "@/lib/contexts/AuthContext";
import WelcomMessage from "../components/WelcomMessage";
import { useEffect } from "react";
import ProtectedRoute from "@/app/admin/protectedRoute";
import Link from "next/link";
import { HandCoins, HandHeart } from "lucide-react";
export default function page() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      // Perform any actions needed when user is not initially authenticated
    }
  }, [user]);
  return (
    <ProtectedRoute>
      <main className="flex flex-col gap-4 items-center justify-center h-[50svh] px-3">
        <AuthContextProvider>
          <WelcomMessage />
        </AuthContextProvider>
        <Link className="flex gap-2 text-[#0F0FD1] " href={"/"}>Go back to bloggg <HandHeart/> </Link>
      </main>
      {/* <Component {...pageProps} /> */}
    </ProtectedRoute>
  );
}
