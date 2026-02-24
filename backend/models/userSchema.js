import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    validate: [validator.isEmail, "Please provide a valid email!"] 
  },
  phone: { type: String, required: true },
  dob: { type: Date, required: [true, "Date of birth is required!"] },
  gender: { type: String, required: true, enum: ["Male", "Female"] },
  password: { type: String, required: true, minLength: [8, "Password must contain at least 8 characters!"], select: false },
  role: { type: String, required: true, enum: ["Admin", "Patient", "Doctor"] },
  doctorDepartment: { type: String },
  docAvatar: { public_id: String, url: String },
});

// PASSWORD HASHING
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

// JWT GENERATION (Pro-level Auth)
userSchema.methods.generateJsonWebToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User = mongoose.model("User", userSchema);