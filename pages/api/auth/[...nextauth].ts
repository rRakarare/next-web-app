import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import prisma from "../../../lib/prisma";
const bcrypt = require("bcrypt");

let userAccount = null;

const configuration = {
  cookie: {
    secure: process.env.NODE_ENV && process.env.NODE_ENV === "production",
  },
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Providers.Credentials({
      id: "credentials",
      name: "Login",
      async authorize(credentials) {
        const userraw = await prisma.user.findFirst({
          where: {
            username: credentials.username,
          },
        });

        console.log(userraw)

        const result = bcrypt.compareSync(
          credentials.password,
          userraw.password
        );

        if (userraw !== null && result) {
          const user = {
            id: userraw.id,
            username: userraw.username,
            isActive: userraw.isActive,
            role: userraw.role,
          };
          userAccount = user;

          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      if (typeof user.id !== typeof undefined) {
        if (user.isActive === "1") {
          return user;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    async session(session, token) {
      if (userAccount !== null) {
        session.user = userAccount;
      } else if (
        typeof token.user !== typeof undefined &&
        (typeof session.user === typeof undefined ||
          (typeof session.user !== typeof undefined &&
            typeof session.user.userId === typeof undefined))
      ) {
        session.user = token.user;
      } else if (typeof token !== typeof undefined) {
        session.token = token;
      }
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (typeof user !== typeof undefined) {
        token.user = user;
      }
      return token;
    },
  },
};
export default (req, res) => NextAuth(req, res, configuration);
