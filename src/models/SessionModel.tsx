import UserModel from "@models/UserModel"

export default interface SessionModel {
  token?: string
  loaded: boolean
  user?: UserModel
}