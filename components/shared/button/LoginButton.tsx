'use client';
import { Button } from '@/components/ui/button';
import { SplineIcon } from 'lucide-react';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

const LoginButton = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  return (
    <Button
      type="button"
      className="w-full"
      onClick={() => {
        setIsGoogleLoading(true);
        signIn('google');
      }}
      disabled={isGoogleLoading}
    >
      {isGoogleLoading ? (
        <SplineIcon className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        ''
      )}{' '}
      Google
    </Button>
  );
};

export default LoginButton;
