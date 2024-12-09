import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../lib/prisma";
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" },
        },
        authorize: async (credentials) => {
          if (!credentials) return null;
  
          const user = await prisma.user.findUnique({
            where: { username: credentials.username },
          });
  
          if (user && (await bcrypt.compare(credentials.password, user.password))) {
            return { id: user.id, name: user.username, role: user.role };
          }
  
          return null; // Invalid credentials
        },
      }),
    ],
    session: {
      strategy: "jwt" as const, // Explicitly set strategy
    },
    callbacks: {
      jwt: async ({ token, user }: { token: any; user?: any }) => {
        if (user) {
          token.id = user.id;
          token.name = user.name;
          token.role = user.role;
        }
        return token;
      },
      session: async ({ session, token }: { session: any; token: any }) => {
        if (token) {
          session.user = {
            id: token.id,
            name: token.name,
            role: token.role,
          };
        }
        return session;
      },
    },
  };
  

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
