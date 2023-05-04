import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from '../../../utils/auth';
import { connectToDatabase } from '../../../utils/db';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      type: 'credentials',
      credentials: {},

      async authorize(credentials, res, req) {
        const client = await connectToDatabase();
        const usersCollection = client.db().collection('users');

        // Find user based on input email
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (credentials.email === '') {
          client.close();
          return;
        }

        // If returned users email doesnt match input email
        if (user.email !== credentials.email) {
          console.log('Check login credentials');
          client.close();
          return;
        }

        // Check if input password is valid
        const isValid = await verifyPassword(
          credentials.password,
          user.password,
        );

        // If input password is not good
        if (!isValid) {
          console.log('Check login credentials');
          client.close();
          return;
        }

        // If credentials match
        if (isValid && user.email === credentials.email) {
          console.log('Kirjautuminen onnistui!');
          return { email: user.email };
        }

        client.close();
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,

  // Redirect to custom pages
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};

export default NextAuth(authOptions);
