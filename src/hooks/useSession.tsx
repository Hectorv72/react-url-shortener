import { useContext } from "react"
import SessionContext from "@contexts/SessionContext"
import AuthModel from "@models/AuthModel"
import { authGetProfile, authLogin } from "@services/AuthServices"
import SessionModel from "@models/SessionModel"
import { AlertMessageTypes } from "@models/enums/AlertEnums"

export default () => {
  const { session, updateSession }: AuthModel = useContext<AuthModel>(SessionContext)
  const defaultSession = { loading: false, loaded: false, message: null }

  const load = async (): Promise<boolean> => {
    const token = localStorage.getItem('shorty-token')
    if (token) {
      const previous = { ...defaultSession, token, loading: true }
      updateSession(previous)
      try {
        const user = await authGetProfile(token)
        updateSession({ ...previous, loading: false, loaded: true, user })
      } catch (error) {
        logout()
      }
    }
    return false
  }

  const login = async (email: string, password: string): Promise<SessionModel | null> => {
    updateSession({ loading: true, loaded: false, message: { text: 'ingresando...', color: AlertMessageTypes.info } })
    const session: SessionModel = await authLogin(email, password)
    updateSession(session)
    if (session.token) {
      localStorage.setItem('shorty-token', session.token)
      return session
    }
    return null
  }

  const logout = (): void => {
    updateSession(defaultSession)
    localStorage.removeItem('shorty-token')
  }

  return { session, login, logout, load }
}