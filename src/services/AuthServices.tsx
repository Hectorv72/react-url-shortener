import { EndpointAuthLogin } from "@models/AuthModel";
import SessionModel from "@models/SessionModel";
import UserAdapter from "adapters/UserAdapter";
import axios from "axios";

const url = import.meta.env.VITE_APP_API_URL

export const authLogin = async (email: string, password: string): Promise<SessionModel> => {
  const { token }: EndpointAuthLogin = (await axios.post(`${url}/login`, { email, password })).data
  const user = await authGetProfile(token)
  return ({ token, user, loaded: true })
}

export const authGetProfile = async (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return UserAdapter((await axios.get(`${url}/user/profile`)).data)
}