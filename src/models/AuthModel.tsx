import SessionModel from "@models/SessionModel";

export default interface AuthModel {
  session?: SessionModel
  updateSession: (update: SessionModel) => void
}

export interface AuthLoginModel {
  email: string
  password: string
}

export interface AuthLoginForm extends AuthLoginModel {
  remember: string
}


export interface AuthRegisterModel {
  email: string
  name: string
  password: string
  password_confirmation: string
}

export interface EndpointAuthLogin {
  token: string
}