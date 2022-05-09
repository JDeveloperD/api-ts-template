import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentiaslProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

const options: NextAuthOptions = {
  theme: {
    colorScheme: 'light',
    brandColor: '',
    logo: ''
  },
  pages: {
    signIn: '/auth/credentials-signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  session: {},
  debug: true,
  jwt: {},
  providers: [
    CredentiaslProvider({
      name: 'Agroclub',
      credentials: {
        email: { label: 'email', type: 'email' },
        password: { label: 'password', type: 'password' }
      },
      async authorize(credentials, req) {
        console.log(credentials);
        // conectar API
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/agroclub`, {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: {
            'Content-type': 'application/json'
          }
        });
        // JSON rta API
        const user = await res.json();
        // return user ?? null
        if (res.ok && user) {
          return user;
        }

        return null;
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
};

export default NextAuth(options);
