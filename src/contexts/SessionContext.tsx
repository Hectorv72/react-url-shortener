import { ReactNode, createContext, useState } from "react";
import SessionModel from "@models/SessionModel";
import AuthModel from "@models/AuthModel";

type Props = {
  children: ReactNode
}
const defaultAuth = { updateSession: () => { } }

const SessionContext = createContext<AuthModel>(defaultAuth)

export const SessionProvider = ({ children }: Props) => {
  const defaultSession: SessionModel = { loaded: false, loading: false, message: null }
  const [session, setSession] = useState<SessionModel>(defaultSession)
  const updateSession = (update: SessionModel) => setSession(prev => ({ ...prev, ...update }))

  const auth: AuthModel = { session, updateSession }

  return (
    <SessionContext.Provider children={children} value={auth} />
  )
}

export default SessionContext