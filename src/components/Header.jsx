export default function Header({ isConnected, setIsConnected }) {
  return (
    <header className="sticky top-0 z-[80] bg-[#0A0A18]/90 backdrop-blur-xl border-b border-[#1E1E32]">
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#EF4444] via-[#FBBF24] to-[#2AF5D4]" />
          <span className="text-[20px] font-bold">Logan-Beldex</span>
        </div>
        
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="text-[#A0A0B8] hover:text-[#2AF5D4] transition">Features</a>
          <a href="#dashboard" className="text-[#A0A0B8] hover:text-[#2AF5D4] transition">Dashboard</a>
          <a href="#about" className="text-[#A0A0B8] hover:text-[#2AF5D4] transition">About</a>
        </nav>

        <button
          onClick={() => setIsConnected(!isConnected)}
          className={`px-6 py-2 rounded-lg font-semibold transition ${
            isConnected
              ? 'bg-[#EF4444]/20 text-[#EF4444] border border-[#EF4444]'
              : 'bg-[#2AF5D4] text-black hover:bg-[#20E0C0]'
          }`}
        >
          {isConnected ? 'Disconnect' : 'Connect Wallet'}
        </button>
      </div>
    </header>
  )
}
