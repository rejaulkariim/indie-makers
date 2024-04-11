import { db } from '@/lib/db';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { NextAuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.credits = token.credits as number;
        session.user.image = token.picture;
        session.user.role = token.role;
      }
      return session;
    },

    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email !== null ? token.email : undefined,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user!.id;
        }
        return token;
      }
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        credits: dbUser.credits,
        picture: dbUser.image,
        role: dbUser.role,
      };
    },
    redirect() {
      return '/';
    },
  },
};

export const getAuthSession = () => getServerSession(authOptions);
