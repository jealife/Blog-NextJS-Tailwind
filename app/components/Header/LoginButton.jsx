"use client";

import { useAuth } from "@/lib/contexts/AuthContext";
import { LogOut } from "lucide-react";
import Image from "next/image";

export default function LoginButton() {
  const {user, isLoading, error, handleSignInWithGoogle, handleLogout  } = useAuth();
  if(isLoading){
    return(
      <h2>Loading...</h2>
    )
  }
  if(user){
    return(
      <div className="flex items-center gap-3 flex-row-reverse justify-end">
        <button className="cursor-pointer flex items-center gap-1 bg-[#1B202A]/1 text-[#1B202A] rounded-full px-0 py-0 hover:text-[#d12c0f] duration-300 "
        title="Logout"
        aria-label="Logout"
        onClick={() => {
          handleLogout();
      }}
        >
          <LogOut/>
        </button>
        <div className="text-sm text-right flex">
          {/* {user?.displayName} */}
          <img src={user?.photoURL} alt={user?.displayName} className="h-10 w-10 object-cover rounded-full" />
        </div>
      </div>
    )
  }
  return (
    <section>
      <button
      onClick={()=>{
        handleSignInWithGoogle();
      }}
       className="text-xs flex items-center gap-2 bg-[#1B202A]/90 text-white rounded-full px-4 py-2 hover:bg-[#0F0FD1] duration-300 ">
        <img className="w-7" src="https://firebasestorage.googleapis.com/v0/b/bloggg-8cd30.appspot.com/o/Google.webp?alt=media&token=f95d6e45-26bb-440b-83bf-acd750fa0005" alt="" />
        Login with google
      </button>
    </section>
  );
}
