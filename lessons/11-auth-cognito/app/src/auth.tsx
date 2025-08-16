import React, { createContext, useContext, useState } from 'react'

type User = { username: string } | null
type AuthCtx = { user: User; signIn(u: string, p: string): Promise<void>; signOut(): void }

const Ctx = createContext<AuthCtx>({ user: null, async signIn(){}, signOut(){} })

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)
  return (
    <Ctx.Provider value={{
      user,
      async signIn(username) { setUser({ username }) }, // wire to Cognito SDK here
      signOut() { setUser(null) }
    }}>{children}</Ctx.Provider>
  )
}
export const useAuth = () => useContext(Ctx)
