import * as userService from "../services/user.service";
import { User } from "../entities/user";

const userMock = jest.spyOn(User.prototype, 'save').mockImplementation(async () => {
  return {
    email: "mael@example.fr",
    hashedPassword: "$argon2id$v=19$m=65536,t=3,p=4$BtNN5iK1WMinyzzzjZavbw$4ayubPITQi55NK31ZyLW/7k/InQJcYFhUqMnm50K5J0"
  } as User
});

describe("User service", () => {
  it("should create a new user", async () => {
    const user = await userService.create("mael@example.fr", "1234");

    expect(user.email).toBe("mael@example.fr");
    expect(user.hashedPassword).toBe("$argon2id$v=19$m=65536,t=3,p=4$BtNN5iK1WMinyzzzjZavbw$4ayubPITQi55NK31ZyLW/7k/InQJcYFhUqMnm50K5J0");
    expect(userMock).toHaveBeenCalled();
    expect(userMock).toHaveBeenCalledTimes(1);
  });
});