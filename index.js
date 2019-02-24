const cors = require("cors");
const express = require("express");
import session from "express-session";
const { ApolloServer, gql } = require("apollo-server-express");
import { redis } from "./redis";
import typeDefs from "./graphql/types/";
import resolvers from "./graphql/resolvers/";
import connectRedis from "connect-redis";
import mongoose from "mongoose";

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

const app = express();

const RedisStore = connectRedis(session);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

app.use(
  session({
    store: new RedisStore({
      client: redis
    }),
    name: "token",
    secret: "aslkdfjoiq12312",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
    }
  })
);

const verifyUser = async (req, res) => {
  // const token = req.heaaders["authentication"];
  console.log(req.headers);

  try {
    // const { user } = await jwt.verify(token, "secret");
    req.user = user;
  } catch (err) {
    console.log("Invalid token");
  }

  req.next();
};

app.use(verifyUser);

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
