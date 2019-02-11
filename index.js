import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";

import schema from "./graphql/";

const app = express();
app.use(cors());

const PORT = process.env.PORT || "4000";
const db =
  "mongodb://bengquist:yourmom1023@resourceappcluster-shard-00-00-97s9x.mongodb.net:27017,resourceappcluster-shard-00-01-97s9x.mongodb.net:27017,resourceappcluster-shard-00-02-97s9x.mongodb.net:27017/test?ssl=true&replicaSet=ResourceAppCluster-shard-0&authSource=admin&retryWrites=true";

// Connect to MongoDB with Mongoose.
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.use(
  "/graphql",
  bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
