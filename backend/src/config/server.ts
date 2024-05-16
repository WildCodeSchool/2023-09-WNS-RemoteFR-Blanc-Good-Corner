import * as dotenv from "dotenv";
import { dataSource } from "./db";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from "../resolvers/category.resolver";
import { AdResolver } from "../resolvers/ad.resolver";
import { UserResolver } from "../resolvers/user.resolver";
import { verifyToken } from "../services/auth.service";
import { getByEmail } from "../services/user.service";
import { GraphQLError } from 'graphql';
import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageDisabled } from 'apollo-server-core';
import { createClient } from "redis";

export const redisClient = createClient({ url: "redis://redis" });

redisClient.on("error", (err) => {
  console.log("Redis Client Error", err);
});
redisClient.on("connect", () => {
  console.log("redis connected");
});

async function createServer(customContext: any = undefined): Promise<ApolloServer> {
  await redisClient.connect();
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

  const plugins = [];
  if (process.env.NODE_ENV === 'production') {
    plugins.push(ApolloServerPluginLandingPageDisabled());
  }

  return new ApolloServer({
    schema,
    context: customContext ? customContext : ({ req }) => {
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
          return {};
        }
      }
    },
    plugins: [
      ...plugins
    ]
  });
}

export default createServer;