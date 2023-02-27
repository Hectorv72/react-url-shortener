export default interface UserModel {
  username: string
  email: string
  limit: number
}

export interface EndpointUser {
  message: '',
  user: {
    id: number
    name: string
    email: string
    limit_links: number
    created_at: Date
    updated_at: Date
  }
}