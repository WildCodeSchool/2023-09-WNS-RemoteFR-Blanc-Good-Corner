import "reflect-metadata"
import { dataSource } from './config/db';
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { CategoryResolver } from "./resolvers/category.resolver";
import { AdResolver } from "./resolvers/ad.resolver";

const port: number = 3001;

const start = async () => {
  await dataSource.initialize();

  const schema = await buildSchema({
    resolvers: [CategoryResolver, AdResolver],
    validate: false
  });

  const server = new ApolloServer({
    schema,
  });

  try {
    const { url } = await server.listen({ port });
    console.log(`Server running at ${url}`);
    
  } catch(err) {
    console.error("Error starting the server");
  }
}

void start();