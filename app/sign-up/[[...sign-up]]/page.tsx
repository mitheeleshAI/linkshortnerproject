import { SignUp } from "@clerk/nextjs";
import { dark, shadcn } from "@clerk/themes";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp appearance={{ theme: [dark, shadcn] }} />
    </div>
  );
}
