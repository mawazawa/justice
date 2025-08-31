export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Revolutionizing Justice Through Technology
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              JusticeOS represents the future of legal administration. By combining artificial intelligence,
              blockchain security, and user-centric design, we create a platform that serves justice efficiently,
              transparently, and accessibly.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transparency First</h3>
                  <p className="text-gray-400">Every action is logged and auditable, ensuring complete transparency in the justice process.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">AI-Powered Efficiency</h3>
                  <p className="text-gray-400">Intelligent automation handles routine tasks while legal professionals focus on complex decision-making.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Universal Access</h3>
                  <p className="text-gray-400">Accessible to all stakeholders with intuitive interfaces and multi-language support.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">2024</div>
                  <div className="text-gray-400">Launched</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                    <div className="text-sm text-gray-400">Courts Using</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400 mb-1">1M+</div>
                    <div className="text-sm text-gray-400">Cases Processed</div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">Current Status</div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-400 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">75% Adoption Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
