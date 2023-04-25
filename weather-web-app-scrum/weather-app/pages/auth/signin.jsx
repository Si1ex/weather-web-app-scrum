import React from 'react';
import SignInForm from '@/components/SignInForm';
import { providers, signIn, getSession, csrfToken } from 'next-auth/react';

function SignIn({ providers }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-repeat-space p-10 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
      <SignInForm providers={providers} />
    </div>
  );
}

// Get providers
export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  // Check if user is alrady logged in
  if (session) {
    return {
      // redirect to protected route or here(?)
      redirect: { destination: '/' },
    };
  }

  return {
    props: {},
  };
}

export default SignIn;
