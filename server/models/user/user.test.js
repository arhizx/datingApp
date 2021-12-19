import makeFakeUser from "../../__test__/user";
import buildMakeUser from "./user";
import bcrypt from "bcrypt";
import { expect } from "@jest/globals";

const encrypt = (password) => {
  const saltRounds = 10;
  let hashedPassword = bcrypt.hash(saltRounds, password);

  return hashedPassword;
};

const validate = (user) => {
  if (!user.name)
    return {
      error: 1,
    };
  return "validated";
};

describe("user", () => {
  it("must have a name", () => {
    const user = makeFakeUser({ name: undefined });

    expect(buildMakeUser({ validate, encrypt })(user)).toThrow(
      "invalid user fields"
    );
  });
});
