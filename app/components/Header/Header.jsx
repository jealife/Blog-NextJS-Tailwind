import {
  Contact,
  Grid2X2,
  HouseIcon,
  ListIcon,
  MessageCircle,
} from "lucide-react";
import React from "react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";

export default function Header() {
  return (
    <nav className="px-7 py-6 border-b flex justify-center ">
      <div className="w-full max-w-5xl mx-auto flex gap-3 items-center justify-between">
        <img src="/logo.png" className="h-8" alt="Logo" />
        <ul className="lg:flex gap-6 items-center hidden ">
          <li className="flex items-center gap-2">
            <HouseIcon />
            Home
          </li>
          <li className="flex items-center gap-2">
            <Grid2X2 />
            Blog
          </li>
          <li className="flex items-center gap-2">
            <MessageCircle />
            Contact Us
          </li>
        </ul>
        <AuthContextProvider>
          <LoginButton />
        </AuthContextProvider>
      </div>
    </nav>
  );
}
