import mongoose from "mongoose";
import { mongoUri } from "./index.js";

export default async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(mongoUri, {})
    .then(() => {
      console.log("Mongodb Connection");
    })
    .catch((err) => {
      console.log(err);
    });
};
