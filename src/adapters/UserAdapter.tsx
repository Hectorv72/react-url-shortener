import UserModel, { EndpointUser } from "@models/UserModel";

export default (response: EndpointUser) => {
  const user = response.user
  const formatedUser: UserModel = {
    email: user.email,
    username: user.name,
    limit: user.limit_links
  }
  return formatedUser
}