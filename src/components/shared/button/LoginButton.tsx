'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';

const LoginButton = () => {
  return (
    <Button onClick={() => signIn('google')} variant="outline">
      Google
    </Button>
  );
};

export default LoginButton;
