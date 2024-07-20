import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = { email: 'admin@example.com', password: 'admin' }; // 示例用户
        if (credentials.email === user.email && credentials.password === user.password) {
          return user;
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);
