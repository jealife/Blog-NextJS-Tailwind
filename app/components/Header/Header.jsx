import React from "react";
import LoginButton from "./LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="px-7 py-6 border-b flex justify-center z-50 " id="nav">
      <div className="w-full max-w-5xl mx-auto flex gap-3 items-center justify-between">
        <Link href={'/'}>
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/bloggg-8cd30.appspot.com/o/Logo.png?alt=media&token=beba0281-0982-4600-ab16-035b95368b45"
            width={70}
            height={50}
            className="h-8 object-contain"
            alt="Logo"
          />
        </Link>

        <ul className="lg:flex gap-6 items-center hidden ">
          <li className="">
            <Link className="flex items-center gap-2 " href={'/'}>
            Home
            </Link>
          </li>
          <li className="flex items-center gap-2">
            Blog
          </li>
          <li className="flex items-center gap-2">
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
