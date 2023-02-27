import { useContext } from "react"
import SessionContext from "@contexts/SessionContext"
import AuthModel from "@models/AuthModel"
import { authGetProfile, authLogin } from "@services/AuthServices"
import SessionModel from "@models/SessionModel"

export default () => {
  const { session, updateSession }: AuthModel = useContext<AuthModel>(SessionContext)

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

  const login = async (email: string, password: string) => {
    try {
      const session: SessionModel = await authLogin(email, password)
      if (session.token) {
        localStorage.setItem('shorty-token', session.token)
        updateSession(session)
      }
    } catch (error) {
      logout()
      console.log(error)
    }
  }

  const logout = () => {
    updateSession({ loaded: false })
    localStorage.removeItem('shorty-token')
  }

  return { session, login, logout }
}