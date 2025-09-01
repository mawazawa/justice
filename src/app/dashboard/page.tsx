import { auth } from '@clerk/nextjs/server'
import { createServerSupabaseClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const supabase = createServerSupabaseClient()

  // Get user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single()

  // Get user's cases
  const { data: cases } = await supabase
    .from('cases')
    .select('*')
    .or(`created_by.eq.${userId},assigned_to.eq.${userId}`)
    .order('created_at', { ascending: false })
    .limit(5)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.full_name || 'User'}!
          </h1>
          <p className="text-gray-600">Here's what's happening with your JusticeOS account.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Active Cases</h3>
            <p className="text-3xl font-bold text-blue-600">{cases?.length || 0}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Completed Cases</h3>
            <p className="text-3xl font-bold text-green-600">12</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Pending Reviews</h3>
            <p className="text-3xl font-bold text-orange-600">3</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Cases</h3>
          {cases && cases.length > 0 ? (
            <div className="space-y-4">
              {cases.map((caseItem) => (
                <div key={caseItem.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{caseItem.title}</h4>
                    <p className="text-sm text-gray-600">{caseItem.description}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    caseItem.status === 'open' ? 'bg-blue-100 text-blue-800' :
                    caseItem.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {caseItem.status}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No cases yet. Create your first case to get started!</p>
          )}
        </div>
      </div>
    </div>
  )
}
