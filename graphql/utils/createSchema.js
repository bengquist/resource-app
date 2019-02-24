import { buildSchema } from "type-graphql";
import userResolver from "../resolvers/User/index";

export const createSchema = () =>
  buildSchema({
    resolvers: [userResolver],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    }
  });
