import { User } from "../entities/user";
import * as argon2 from "argon2";

/**
 * Create a new user and hash the password.
 * @param email user email
 * @param password user password unhashed
 * @return the created user
 */
export async function create(email: string, password: string): Promise<User> {
  const newUser = new User();
    newUser.email = email;
    newUser.hashedPassword = await argon2.hash(password);
    newUser.role = "USER";
    return newUser.save();
}

/**
 * Return the user relative to the given email
 * @param email user email
 * @return the related user
 */
export function getByEmail(email: string): Promise<User> {
  return User.findOneByOrFail({ email });
}