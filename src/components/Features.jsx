const features = [
  {
    title: 'Real-Time Analytics',
    description: 'Monitor market trends and portfolio performance with live data updates',
    icon: '📊'
  },
  {
    title: 'Smart Trading',
    description: 'AI-powered insights to optimize your investment strategy',
    icon: '🤖'
  },
  {
    title: 'Secure Wallet',
    description: 'Enterprise-grade security for your digital assets',
    icon: '🔒'
  },
  {
    title: 'Multi-Asset Support',
    description: 'Trade stocks, crypto, commodities, and more from one platform',
    icon: '💎'
  },
  {
    title: 'Low Fees',
    description: 'Industry-leading fee structure for all transaction types',
    icon: '💰'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock customer support via chat, email, and phone',
    icon: '🎧'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-[#121225]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] font-bold text-center mb-16">
          Why Choose <span className="text-[#2AF5D4]">Logan-Beldex</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="card-hover">
              <div className="text-[32px] mb-4">{feature.icon}</div>
              <h3 className="text-[18px] font-semibold mb-3">{feature.title}</h3>
              <p className="text-[#A0A0B8] text-[14px]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
