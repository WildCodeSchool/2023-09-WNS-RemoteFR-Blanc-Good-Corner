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
import createServer from "./config/server";

const port: number = 3001;

const start = async () => {
  const server = await createServer();

  try {
    const { url } = await server.listen({ port });
    console.log(`🚀 Server running at ${url}`);
    
  } catch(err) {
    console.error("Error starting the server");
  }
}

void start();