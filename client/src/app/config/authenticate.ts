import { signIn } from 'next-auth/react';

const handleGoogleSignIn = () => {
  signIn('google', { callbackUrl: '/' });
};

const handleCredentialsSignIn = async (email, password) => {
  const result = await signIn('credentials', {
    redirect: false,
    email,
    password,
  });
  if (result.ok) {
    // Redirect or update UI
  } else {
    // Handle error
  }
};
