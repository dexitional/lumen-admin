import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

import { getUser } from "./utils/serverApi";
export const options: NextAuthOptions = {
    session: {
      strategy: "jwt",
    },
    jwt: {
      secret: process.env.NEXTAUTH_SECRET
    },
    providers: [
      CredentialsProvider({
        id: "credentials",
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text"  },
          password:    { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const { username, password }: any = credentials;
          if(!username) throw new Error("Username field empty !")
          if(!password) throw new Error("Password field empty !")
          
          const resp = await getUser(username,password);
          console.log(resp)
          if(resp.total > 0){
             const user:any = resp.documents[0];
             return user
          }

          throw new Error("Invalid details")
          
        },
      }),

      GoogleProvider({
        id: "google",
        name: "Google",
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        authorization: {
          params: {
            prompt: "consent",
            access_type: "offline",
            response_type: "code"
          }
        },
       
        // profile(profile) {
        //   return {
        //     // Return all the profile information you need.
        //     // The only truly required field is `id`
        //     // to be able identify the account when added to a database
        //   }
        // },
      })

    ],

    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;
            return session;
        },
        // async signIn({ account, profile }: any) {
        //   if (account.provider === "google") {
        //     return profile.email_verified && profile.email.endsWith("@ucc.edu.gh")
        //   }
        //   return true // Do different verification for other providers that don't have `email_verified`
        // },
    },
    
    pages:{
      signIn:'/'
    }
  };