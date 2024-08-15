'use client'

export default function Layout({children}) {

  return (
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
  )
}
