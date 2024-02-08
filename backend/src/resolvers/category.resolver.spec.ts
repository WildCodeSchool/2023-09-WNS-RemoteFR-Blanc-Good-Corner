import { ApolloServer, gql } from "apollo-server"
import createServer from "../config/server";

describe("Category resolver", () => {
  let server: ApolloServer;

  beforeAll(async () => {
    server = await createServer();
  });

  it("should return all categories", async () => {
    const categoriesQuery = gql`
      query Categories {
        categories {
          id
          name
        }
      }`;

      const response = await server.executeOperation({
        query: categoriesQuery
      });

      expect(response.errors).toBeUndefined();
      expect(response.data?.categories).toBeDefined();
  });

  it("should return only specific categories",  async () => {
    const categoriesQuery = gql`
      query Categories {
        categories {
          id
          name
        }
      }
    `;

    const response = await server.executeOperation({
        query: categoriesQuery,
        variables: {
          terms: "Voit"
        }
      });

    expect(response.errors).toBeUndefined();
    expect(response.data?.categories).toBeDefined();
    expect(response.data?.categories.length).toBeGreaterThanOrEqual(1);
    expect(response.data?.categories[0].name).toBe("Voiture");
  });
})