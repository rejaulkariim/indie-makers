// 'use client';

// import { Button, buttonVariants } from '@/components/ui/button';
// import { cn } from '@/lib/utils';

// export function UserAuthForm() {
//   // const [isLoading, setIsLoading] = React.useState<boolean>(false);
//   // const [isGoogleLoading, setIsGoogleLoading] = React.useState<boolean>(false);
//   // const searchParams = useSearchParams();

//   // if (!signInResult?.ok) {
//   //   return toast({
//   //     title: 'Something went wrong.',
//   //     description: 'Your sign in request failed. Please try again.',
//   //     variant: 'destructive',
//   //   });
//   // }

//   // return toast({
//   //   title: 'Check your email',
//   //   description: 'We sent you a login link. Be sure to check your spam too.',
//   // });
// }

// return (
//   <div className={cn('grid gap-6')}>
//     {/* <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="grid gap-2">
//           <div className="grid gap-1">
//             <Label className="sr-only" htmlFor="email">
//               Email
//             </Label>
//             <Input
//               id="email"
//               placeholder="name@example.com"
//               type="email"
//               autoCapitalize="none"
//               autoComplete="email"
//               autoCorrect="off"
//               disabled={isLoading || isGoogleLoading}
//               {...register("email")}
//             />
//             {errors?.email && (
//               <p className="px-1 text-xs text-red-600">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>
//           <Button className={cn(buttonVariants())} disabled={isLoading}>
//             {isLoading && (
//               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//             )}
//             Sign In with Email
//           </Button>
//         </div>
//       </form>
//       <div className="relative">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t" />
//         </div>
//         <div className="relative flex justify-center text-xs uppercase">
//           <span className="bg-background px-2 text-muted-foreground">
//             Or continue with
//           </span>
//         </div>
//       </div> */}
//     <Button
//       type="button"
//       className={cn(buttonVariants({ variant: 'default' }))}
//     >
//       {/* {isGoogleLoading ? (
//         //   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//         ) : (
//         //   <Icons.google className="mr-2 h-4 w-4" />
//         )}{' '} */}
//       Google
//     </Button>
//   </div>
// );
