import SessionModel from "@models/SessionModel";

export default interface AuthModel {
  session?: SessionModel
  updateSession: (update: SessionModel) => void
}

export interface EndpointAuthLogin {
  token: string
}