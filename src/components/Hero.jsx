export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2AF5D4]/10 to-transparent" />
      
      <div className="relative z-10 text-center max-w-[1200px] mx-auto px-6 py-20">
        <h1 className="text-[32px] sm:text-[52px] font-black leading-[0.95] mb-6">
          <span className="text-gradient">
            Advanced Investment Platform
          </span>
          <br />
          <span className="text-white">For Modern Investors</span>
        </h1>

        <p className="text-[#A0A0B8] text-[18px] max-w-[520px] mx-auto mb-8">
          Leverage cutting-edge technology and real-time market analysis to make informed investment decisions
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary text-[16px]">
            Get Started
          </button>
          <button className="btn-secondary text-[16px]">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
