import { models, model } from "mongoose";
import UserSchema from "./user.schema";
import { User } from "./user.types";

export default models.User || model<User>("User", UserSchema);
