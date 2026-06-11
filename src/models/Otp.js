// import mongoose from "mongoose";

// const otpSchema = new mongoose.Schema({
//   email: String,
//   otp: String,
//   role: String,
//   expiresAt: Date,
// });

// export default mongoose.models.Otp || mongoose.model("Otp", otpSchema);

import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: String,
    otp: String,
    role: String,
    expiresAt: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Otp ||
  mongoose.model("Otp", otpSchema);