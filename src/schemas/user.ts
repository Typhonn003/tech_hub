import { registerSchema } from ".";

export const userSchema = registerSchema
  .clone()
  .omit(["password", "confirm_password"]);
