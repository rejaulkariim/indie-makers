'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="h-6 w-6 p-0 rounded-md"
      onClick={() => router.back()}
    >
      <X aria-label="close modal" className="h-4 w-4" />
    </Button>
  );
};

export default CloseModal;
