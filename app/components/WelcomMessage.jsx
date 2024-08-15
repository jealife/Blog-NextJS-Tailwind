"use client";

import { useAuth } from "@/lib/contexts/AuthContext";

export default function WelcomMessage() {
    const {user, isLoading, error, handleSignInWithGoogle, handleLogout  } = useAuth();

    if(user){
        return(
          <div className="flex items-center gap-5 flex-row-reverse justify-end">
            <h2 className="font-bold text-4xl">
                Welcome, {user?.displayName}
            </h2>
          </div>
        )
      }
  return (
    <div>

    </div>
  )
}
