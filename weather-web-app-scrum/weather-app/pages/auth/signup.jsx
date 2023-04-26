import React from 'react';
import SignUpForm from '@/components/SignUpForm';

function SignUp() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-repeat-space p-10 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300">
      <SignUpForm />
    </div>
  );
}

export default SignUp;
