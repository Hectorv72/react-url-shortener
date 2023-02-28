import { EndpointAuthLogin } from "@models/AuthModel";
import SessionModel from "@models/SessionModel";
import { AlertMessageTypes } from "@models/enums/AlertEnums";
import UserAdapter from "adapters/UserAdapter";
import axios, { AxiosError } from "axios";

const url = import.meta.env.VITE_APP_API_URL

export const authLogin = async (email: string, password: string): Promise<SessionModel> => {
  let data: SessionModel = {
    loaded: false,
    loading: false,
    message: { text: 'Error verificar', color: AlertMessageTypes.danger }
  }

  try {
    const response = await axios.post(`${url}/login`, { email, password })
    const { token }: EndpointAuthLogin = response.data
    const user = await authGetProfile(token)
    data = {
      ...data,
      token,
      user,
      loaded: true,
      loading: false,
      message: { text: 'Usuario logueado correctamente', color: AlertMessageTypes.succes }
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      const message = error.response?.data?.message
      data.message = { text: message, color: AlertMessageTypes.danger }
    } else {
      data.message = { text: 'Error al comprobar la información, vuelva a intentarlo más tarde', color: AlertMessageTypes.danger }
    }
    console.log(error)
  }
  return data
}

export const authGetProfile = async (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return UserAdapter((await axios.get(`${url}/user/profile`)).data)
}