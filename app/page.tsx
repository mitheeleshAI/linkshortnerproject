import { SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mx-auto px-16 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Link Shortener</h1>
          <div className="flex gap-4">
            <Show when="signed-out">
              <SignInButton />
              <SignUpButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>
        </div>
      </nav>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to Link Shortener</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            <Show when="signed-out">
              Sign in or create an account to get started.
            </Show>
            <Show when="signed-in">
              You're now authenticated! Start creating short links.
            </Show>
          </p>
        </div>
      </main>
    </div>
  );
}
