import mongoose from "mongoose";

import { mongo_uri } from "./index.js";

export default async () => {
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(mongo_uri, {})
    .then(() => {
      console.log("Mongodb Connection");
    })
    .catch((err) => {
      console.log(err);
    });
};
