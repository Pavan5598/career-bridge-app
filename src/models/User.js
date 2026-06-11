// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//     },

//     role: {
//       type: String,
//       enum: ["user"],
//       default: "user",
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.models.User ||
//   mongoose.model("User", userSchema);

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: String,
//     email: { type: String, unique: true },
//     phone: String,
//     role: {
//       type: String,
//       enum: ["admin", "user"],
//       default: "user",
//     },

//     // 👇 THIS IS IMPORTANT
//     permissions: {
//       type: [String], // ["dashboard", "users", "courses"]
//       default: [],
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.models.User ||
//   mongoose.model("User", userSchema);


import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      default: "",
    },

    role: {
      type: String,
      required: true,
      enum: [
        "Counsellor",
        "Tutor",
        "Placement Officer",
        "Content Manager",
        "Student Support",
      ],
    },

    permissions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.User ||
  mongoose.model("User", UserSchema);