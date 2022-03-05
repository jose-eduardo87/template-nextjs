import { Schema } from "mongoose";
// import { hash, compare } from "bcryptjs";
import { User } from "./user.types";

const UserSchema = new Schema<User>({
  name: {
    type: String,
    required: [true, "Please provide your name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your e-mail address."],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [
      true,
      "Please provide a strong password. (minimum six characters long.)",
    ],
    minlength: 6,
    select: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// UserSchema.pre("save", async function (next) {
//   // Checks if password was modified
//   if (!this.isModified("password")) {
//     return next();
//   }

//   // Hash password with cost of 12
//   this.password = await hash(this.password, 12);

//   next();
// });

// UserSchema.pre('save', async function(next) {
//     if(!this.isModified('password') || this.isNew) {
//         return next();
//     }

//     this.passwordChangedAt = Date.now() - 1000;

//     next();
// });

// UserSchema.methods.correctPassword = async function (
//   candidatePassword: String,
//   userPassword: String
// ) {
//     return await compare(candidatePassword, userPassword);
// };

export default UserSchema;
