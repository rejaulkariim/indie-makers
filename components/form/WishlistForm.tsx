'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { createWishlist } from '@/lib/actions/wishlist.action';
import { wishlistValidationSchema } from '@/lib/validation/wishlist.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';
import { Icons } from '../shared/icons/Icons';

const WishlistForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof wishlistValidationSchema>>({
    resolver: zodResolver(wishlistValidationSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof wishlistValidationSchema>) => {
    try {
      setLoading(true);
      const res = await createWishlist(data.email);
      if (res?.success) {
        setLoading(false);
        form.reset();
        toast.success(res.message);
      }

      if (!res?.success) {
        setLoading(false);
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-6 ">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto">
          {loading && <Icons.spinner className="size-4 mr-2 animate-spin" />}
          Get Early Access
        </Button>
      </form>
    </Form>
  );
};

export default WishlistForm;
