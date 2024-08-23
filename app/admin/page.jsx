"use client";

import AuthContextProvider, { useAuth } from "@/lib/contexts/AuthContext";
import WelcomMessage from "../components/WelcomMessage";
import { useEffect } from "react";
import ProtectedRoute from "@/app/admin/protectedRoute";
export default function page() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      // Perform any actions needed when user is not initially authenticated
    }
  }, [user]);
  return (
    <ProtectedRoute>
      <main className="flex items-center justify-center h-[50svh] px-3">
        <AuthContextProvider>
          <WelcomMessage />
        </AuthContextProvider>
      </main>
      {/* <Component {...pageProps} /> */}
    </ProtectedRoute>
  );
}
