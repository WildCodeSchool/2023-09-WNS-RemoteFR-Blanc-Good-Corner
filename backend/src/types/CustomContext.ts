import { User } from "../entities/user"

export type CustomContext = {
  user: User,
  token: string
}