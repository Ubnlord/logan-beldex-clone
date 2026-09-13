import { useState } from 'react'

const portfolioData = [
  { symbol: 'BTC', name: 'Bitcoin', amount: 0.5234, value: '$21,450', change: '+12.45%', color: '#FBBF24' },
  { symbol: 'ETH', name: 'Ethereum', amount: 5.123, value: '$8,920', change: '+8.32%', color: '#2AF5D4' },
  { symbol: 'AAPL', name: 'Apple', amount: 50, value: '$8,450', change: '-2.15%', color: '#A78BFA' },
  { symbol: 'GOLD', name: 'Gold', amount: 10, value: '$18,600', change: '+4.20%', color: '#EF4444' }
]

export default function Dashboard() {
  const [selectedAsset, setSelectedAsset] = useState(null)

  return (
    <section id="dashboard" className="py-20 px-6 bg-[#0A0A18]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-[32px] font-bold mb-12">Your Portfolio</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Portfolio Summary */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-[#A0A0B8] text-[14px] mb-2">Total Portfolio Value</p>
                  <h3 className="text-[32px] font-bold">$57,420.00</h3>
                </div>
                <div className="text-right">
                  <p className="text-[#2AF5D4] text-[14px] font-semibold">+$2,340.50</p>
                  <p className="text-[#A0A0B8] text-[12px]">+4.25% today</p>
                </div>
              </div>

              <div className="h-[120px] bg-[#1C1C2E] rounded-[12px] flex items-end justify-around p-4">
                {[30, 65, 45, 80, 55, 70, 90].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-[#2AF5D4] to-[#2AF5D4]/50 rounded-t mx-1"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-3">
              {portfolioData.map((asset, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedAsset(asset)}
                  className="card-hover"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full"
                        style={{ backgroundColor: asset.color + '20', borderColor: asset.color, borderWidth: '2px' }}
                      />
                      <div>
                        <p className="font-semibold">{asset.symbol}</p>
                        <p className="text-[#A0A0B8] text-[12px]">{asset.amount}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{asset.value}</p>
                      <p className={asset.change.startsWith('+') ? 'text-[#2AF5D4]' : 'text-[#EF4444]'}>
                        {asset.change}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-[18px] font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary">Buy Assets</button>
                <button className="w-full btn-secondary">Sell Assets</button>
                <button className="w-full btn-secondary">Transfer</button>
              </div>
            </div>

            {selectedAsset && (
              <div className="card">
                <h3 className="text-[18px] font-semibold mb-4">{selectedAsset.symbol} Details</h3>
                <div className="space-y-3 text-[14px]">
                  <div className="flex justify-between">
                    <span className="text-[#A0A0B8]">Current Price</span>
                    <span className="font-semibold">${(Math.random() * 100 + 50).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A0A0B8]">24h High</span>
                    <span className="font-semibold">${(Math.random() * 100 + 50).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A0A0B8]">24h Low</span>
                    <span className="font-semibold">${(Math.random() * 100 + 50).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
