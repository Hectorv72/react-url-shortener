import UserModel from "@models/UserModel"
import { AlertMessageTypes } from "./enums/AlertEnums"
export default interface SessionModel {
  token?: string
  user?: UserModel
  loaded: boolean
  loading: boolean
  message: {
    text: string
    color: AlertMessageTypes
  } | null
}