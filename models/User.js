import mongoose from "mongoose";

const Schema = mongoose.Schema;

// Create the User Schema.
const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", UserSchema);

export default User;
