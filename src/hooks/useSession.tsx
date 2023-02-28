import { useContext } from "react"
import SessionContext from "@contexts/SessionContext"
import AuthModel from "@models/AuthModel"
import { authGetProfile, authLogin } from "@services/AuthServices"
import SessionModel from "@models/SessionModel"
import { AlertMessageTypes } from "@models/enums/AlertEnums"

export default () => {
  const { session, updateSession }: AuthModel = useContext<AuthModel>(SessionContext)
  const defaultSession = { loading: false, loaded: false, message: null }

  const verify = async () => {
    const token = localStorage.getItem('shorty-token')
    if (token) {
      try {
        await authGetProfile(token)
        return true
      } catch (error) {
        logout()
        console.log(error)
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

  const logout = () => {
    updateSession(defaultSession)
    localStorage.removeItem('shorty-token')
  }

  return { session, login, logout }
}