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
import { onboardingValidationSchema } from '@/lib/validation/onboarding.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const OnboardingForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof onboardingValidationSchema>>({
    resolver: zodResolver(onboardingValidationSchema),
    defaultValues: {
      handle: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof onboardingValidationSchema>) => {
    router.push(`/${data.handle}`);
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-6 max-w-max mx-auto"
      >
        <FormField
          control={form.control}
          name="handle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="rejaul" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full sm:w-auto">
          Grab my link
        </Button>
      </form>
    </Form>
  );
};

export default OnboardingForm;
