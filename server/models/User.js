const { model, models, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    picture: { type: String, required: [true, "image is required"] },
    email: { type: String, required: [true, "password is required"] },
    name: { type: String, required: [true, "name is required"] },
    hearted_thought: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

module.exports = model("User", UserSchema);
