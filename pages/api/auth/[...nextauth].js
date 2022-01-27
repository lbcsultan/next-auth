import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id;
  //     }
  //     return token;
  //   },
  //   async session(session, token) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },
  // database: process.env.MONGO_LOCAL,
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: "mysupersecret",
  // },
});
