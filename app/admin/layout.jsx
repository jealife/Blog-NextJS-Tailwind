'use client'

import AuthContextProvider from "@/lib/contexts/AuthContext"

export default function Layout({children}) {

  return (
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
  )
}

