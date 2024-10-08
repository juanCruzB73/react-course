import { AppRouter } from './router/AppRouter'
import AuthProvider from './auth/context/AuthProvider'

export function HeroApp() {

  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}
