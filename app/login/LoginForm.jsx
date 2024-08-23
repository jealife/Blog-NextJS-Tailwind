import React from 'react'
import LoginButton from '../components/Header/LoginButton'
import AuthContextProvider from '@/lib/contexts/AuthContext'

export default function LoginForm() {
  return (
    <AuthContextProvider>
    <LoginButton />
  </AuthContextProvider>
  )
}
