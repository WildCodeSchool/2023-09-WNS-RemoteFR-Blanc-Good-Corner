import jwt from "jsonwebtoken";
import * as UserService from "./user.service";
import * as argon2 from "argon2";

/**
 * Return the token payload from the token in parameter.
 * @param token token to verify
 * @returns
 */
export function verifyToken(token: string) {
  if (process.env.JWT_SECRET_KEY === undefined) {
    throw new Error();
  }

  return jwt.verify(token, process.env.JWT_SECRET_KEY);
}

export async function signIn(email: string, password: string) {
  try {
      // Récupérer l'utilisateur dans la bdd suivant l'email
      const userFromDB = await UserService.getByEmail(email);

      // Vérifier que ce sont les même mots de passe
      if (
        await verifyPassword(password, userFromDB.hashedPassword)
      ) {
        // Créer un nouveau token => signer un token
        const token = signJwt({
          email: userFromDB.email,
          role: userFromDB.role,
        });

        // Renvoyer le token
        return token;
      } else {
        throw new Error();
      }
    } catch (e) {
      throw new Error("Invalid Auth");
    }
}

/**
 * Return true if the password in parameter is the same as the hashed password in parameter as well.
 * @param password password
 * @param hashedPassword hashed password
 * @returns
 */
export async function verifyPassword(password: string, hashedPassword: string) {
  return await argon2.verify(hashedPassword, password);
}

/**
 * Return a signed payload.
 * @param payload payload to sign
 * @returns
 */
export function signJwt(payload: any) {
  if (process.env.JWT_SECRET_KEY === undefined) {
    throw new Error();
  }

  return jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: 60 * 60,
  });
}