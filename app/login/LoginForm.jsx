import React from 'react'
import AuthContextProvider from '@/lib/contexts/AuthContext'
import LoginFormButton from '../components/Header/LoginFormButton'

export default function LoginForm() {
  return (
    <AuthContextProvider>
    <LoginFormButton />
  </AuthContextProvider>
  )
}
