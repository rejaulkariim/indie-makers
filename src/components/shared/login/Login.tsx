import LoginButton from '../button/LoginButton';

export default function Login() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        {/* <Icons.logo className="mx-auto h-10 w-10 text-green-300 motion-safe:animate-bounce" /> */}
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">
          Login to your account with google
        </p>
      </div>
      {/* <Button
        type="button"
        className={cn(buttonVariants({ variant: 'default' }))}
      >
        {isGoogleLoading ? (
        //   <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
        //   <Icons.google className="mr-2 h-4 w-4" />
        )}{' '}
        Google
      </Button> */}
      <LoginButton />
    </div>
  );
}
