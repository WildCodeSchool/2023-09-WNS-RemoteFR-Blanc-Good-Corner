import "reflect-metadata"
import { dataSource } from './config/db';
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from "./resolvers/category.resolver";
import { AdResolver } from "./resolvers/ad.resolver";
import * as dotenv from "dotenv";
import { verifyToken } from "./services/auth.service";
import { UserResolver } from "./resolvers/user.resolver";
import { getByEmail } from "./services/user.service";
import { GraphQLError } from 'graphql';

const port: number = 3001;

const start = async () => {
  dotenv.config();
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CategoryResolver, AdResolver, UserResolver],
    validate: { forbidUnknownValues: false },
    authChecker: async ({ context }, roles) => {
      try {
        const payload: any = verifyToken(context.token);
        const userFromDB = await getByEmail(payload.email);
        context.user = userFromDB;

        if (roles.length >= 1) {
          if (roles.includes(context.user.role)) {
            return true;
          }
          else {
            throw new Error();
          }
        }

        return true;
      } catch(e) {
        throw new GraphQLError('You are not authorized to perform this action.', null, null, null, null, null, {
          code: 'UNAUTHENTICATED'
        })
      }
    }
  });

  const server = new ApolloServer({
    schema,
    context: ({ req }) => {
      if (
        req?.headers.authorization === undefined ||
        process.env.JWT_SECRET_KEY === undefined
      ) {
        return {};
      } else {
        try {
          const bearer = req.headers.authorization.split("Bearer ")[1];

          return { token: bearer };
        } catch (e) {
          console.log(e);
          return {};
        }
      }
    },
  });

  try {
    const { url } = await server.listen({ port });
    console.log(`Server running at ${url}`);
    
  } catch(err) {
    console.error("Error starting the server");
  }
}

void start();