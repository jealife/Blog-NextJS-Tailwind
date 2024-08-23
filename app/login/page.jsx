import React from "react";
import LoginButton from "../components/Header/LoginButton";
import AuthContextProvider from "@/lib/contexts/AuthContext";
import LoginForm from "./LoginForm";

export default function page() {
  return (
    <main className="flex flex-col items-center justify-center h-[60svh] px-3 w-full">
      <div className="bg-white rounded-md shadow-xl h-48 max-w-96 w-full flex flex-col gap-4 items-center justify-center  px-4">
        <h2 className="font-semibold text-2xl text-center">Connectez-vous avec Google</h2>
        <LoginForm />
      </div>
    </main>
  );
}
