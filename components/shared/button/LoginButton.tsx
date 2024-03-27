'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
  return (
    <Button onClick={() => signIn('google')} className="w-full">
      Login with google
    </Button>
  );
};

export default LoginButton;
