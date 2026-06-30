import { SignIn } from "@clerk/nextjs";
import { dark, shadcn } from "@clerk/themes";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn appearance={{ theme: [dark, shadcn] }} />
    </div>
  );
}
