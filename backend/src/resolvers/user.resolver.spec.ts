import { ApolloServer, gql } from "apollo-server";
import createServer from "../config/server";

const tokenContext: {token?: string} = {};

describe("Category resolver", () => {
  let server: ApolloServer;

  beforeAll(async () => {
    server = await createServer(() => tokenContext);
  });

  it("should cerate a new user", async () => {
    const userCreateMutation = gql`
      mutation Mutation($password: String!, $email: String!) {
        signUp(password: $password, email: $email) {
          email
          role
          id
        }
      }
    `;

    let response = await server.executeOperation({
      query: userCreateMutation,
      variables: {
        email: "mael@example.fr",
        password: "1234"
      },
    }
  );

  tokenContext.token = "Bearer TOTOTOTOTOTOTO"

  response = await server.executeOperation({
      query: userCreateMutation,
      variables: {
        email: "mael@example.fr",
        password: "1234"
      },
    }
  );


    expect(response.errors).toBeUndefined();
    expect(response.data?.signUp.email).toBe("mael@example.fr");
  });
});
