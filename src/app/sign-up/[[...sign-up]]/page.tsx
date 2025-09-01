import { SignUp } from '@clerk/nextjs'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Join JusticeOS</h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700',
              card: 'shadow-xl border-0',
              headerTitle: 'text-gray-900',
              headerSubtitle: 'text-gray-600',
            },
          }}
        />
      </div>
    </div>
  )
}
