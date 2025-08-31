export default function Features() {
  const features = [
    {
      icon: "⚖️",
      title: "Case Management",
      description: "Streamlined case tracking and management with intelligent automation and real-time updates."
    },
    {
      icon: "🔍",
      title: "Evidence Analysis",
      description: "Advanced AI-powered evidence analysis and document processing for faster case resolution."
    },
    {
      icon: "🤝",
      title: "Collaboration Tools",
      description: "Seamless collaboration between legal teams, judges, and stakeholders with secure sharing."
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting to track case progress and system performance."
    },
    {
      icon: "🔒",
      title: "Security & Compliance",
      description: "Enterprise-grade security with full compliance to legal standards and data protection."
    },
    {
      icon: "⚡",
      title: "Automation",
      description: "Intelligent automation of routine tasks to reduce processing time and human error."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features for Modern Justice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge technology with legal expertise
            to revolutionize how justice is administered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
