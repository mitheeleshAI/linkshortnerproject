import { SignInButton, SignUpButton, Show, UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Link2, Zap, BarChart3, Share2, Lock, Users } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Link2,
      title: 'Create Short Links',
      description: 'Convert long URLs into concise, shareable links instantly'
    },
    {
      icon: BarChart3,
      title: 'Track Analytics',
      description: 'Monitor clicks and view detailed statistics for each link'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Redirect to your destination with minimal latency'
    },
    {
      icon: Share2,
      title: 'Easy Sharing',
      description: 'Share your short links across all social media platforms'
    },
    {
      icon: Lock,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Manage links with your team and organize by projects'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Link2 className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Link Shortener</h1>
          </div>
          <div className="flex gap-2 sm:gap-4">
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

      {/* Hero Section */}
      <section className="flex-1 w-full bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Your Links,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Shortened & Tracked
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Create custom short links, track analytics, and share with confidence. 
              Manage all your links in one powerful platform.
            </p>

            <Show when="signed-out">
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <SignUpButton>
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started Free
                  </Button>
                </SignUpButton>
                <SignInButton>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </Show>

            <Show when="signed-in">
              <div className="pt-8">
                <Button size="lg" asChild>
                  <a href="/dashboard">Go to Dashboard</a>
                </Button>
              </div>
            </Show>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              Powerful Features
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              Everything you need to manage and track your links effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index} 
                  className="flex flex-col items-start p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <div className="mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-purple-600 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to shorten your links?
          </h3>
          <p className="text-lg text-blue-100">
            Join thousands of users who are already shortening and tracking their links
          </p>
          <Show when="signed-out">
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <SignUpButton>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Start Free Today
                </Button>
              </SignUpButton>
            </div>
          </Show>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-zinc-900 dark:bg-black text-zinc-400 dark:text-zinc-500">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <p className="text-sm">
                The fastest and most reliable URL shortening service
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Features</a></li>
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Pricing</a></li>
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Blog</a></li>
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Careers</a></li>
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Privacy</a></li>
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Terms</a></li>
                <li><a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Link Shortener. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0 text-sm">
              <a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">Twitter</a>
              <a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">LinkedIn</a>
              <a href="javascript:void(0)" className="hover:text-white transition cursor-pointer">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
