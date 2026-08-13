import Image from "next/image";
import { RefreshCcw, TrendingUp, TrendingDown, BookOpen, Crown, Zap, BarChart2, ShieldCheck, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans font-medium">
      {/* Top Banner */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="flex items-center gap-2 border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 rounded-full">
          <Crown className="w-4 h-4 text-yellow-500" />
          <span className="text-yellow-500 text-xs font-bold tracking-wider">GOPAL SHINDE · MARKET EDUCATOR</span>
        </div>
      </div>

      {/* Profile & Header */}
      <div className="flex flex-col items-center px-4 pt-2 pb-6 text-center max-w-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8 w-full max-w-4xl mx-auto">
          {/* Left Logo - MyBillion */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full bg-white overflow-hidden shrink-0 border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <Image src="/logo.jpeg" alt="MyBillion" fill className="object-contain p-2" />
          </div>

          {/* Right Card - Instagram Profile */}
          <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80">
            <img src="/gopal.png" alt="tradewith_gopal" className="w-full h-auto object-cover" />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl lg:text-4xl  font-black italic tracking-tight mb-3">Learn XAUUSD, Crypto &amp; Bitcoin Trading With Practical Market Insights</h1>
        <p className="text-slate-400 text-[10px] md:text-xs lg:text-sm font-bold tracking-widest uppercase px-4 leading-relaxed">
          Get daily market insights, trading concepts and educational breakdowns focused on XAUUSD, Crypto, Bitcoin and Day Trading — all through one Telegram channel.
        </p>
      </div>

      {/* Main Join Button */}
      <div className="px-4 pb-8 max-w-md mx-auto">
        <div className="text-center mb-3 text-orange-500 text-[10px] font-black tracking-widest uppercase">
          1,00,000+ TRADERS ALREADY IN THE FREE TELEGRAM CHANNEL
        </div>
        <Link href="https://telegram.me/Forex_Trades_MyBillion" className="w-full bg-[#00a86b] hover:bg-[#00915c] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(0,168,107,0.3)]">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.96 1.25-5.54 3.67-.52.35-1 .53-1.42.51-.47-.02-1.38-.27-2.05-.49-.83-.27-1.49-.41-1.43-.87.03-.24.36-.48 1-.74 3.91-1.7 6.52-2.83 7.82-3.37 3.73-1.56 4.5-1.83 5-1.84.11 0 .36.03.49.14.11.09.15.22.16.35-.01.07-.01.16-.02.21z" /></svg>
          Join the Free Channel
        </Link>
        <p className="text-center text-[10px] text-slate-500 mt-3">No cost, no upsell — just daily setups on gold, crypto and forex.</p>
      </div>

      <div className="max-w-md mx-auto px-4 space-y-4 pb-12">
        {/* Live Ticker Strip */}
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-3 rounded-xl border border-slate-800 text-xs font-bold">
          <div className="flex gap-2">
            <span className="text-white">XAUUSD (GOLD)</span>
            <span className="text-[#00a86b] flex items-center"><TrendingUp className="w-3 h-3 mr-0.5" /> 2,412.50</span>
          </div>
          <div className="flex gap-2">
            <span className="text-white">BTC/USD</span>
            <span className="text-[#00a86b] flex items-center"><TrendingUp className="w-3 h-3 mr-0.5" /> 68,240.00</span>
          </div>
        </div>

        {/* Live Market Data Header */}
        <div className="flex items-center justify-between bg-[#161b22] px-4 py-3 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold">
            <div className="w-1.5 h-1.5 bg-[#00a86b] rounded-full animate-pulse" />
            Tracking the pairs that matter
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-[#0d1117] rounded-md flex border border-slate-700 p-0.5">

              <span className="px-2 py-0.5 text-[9px] font-bold text-slate-500">DEMO</span>
            </div>

          </div>
        </div>

        {/* Market Watch Snapshot (Small Indices Cards) */}
        <div className="grid grid-cols-5 gap-2">
          {[
            { name: "XAUUSD", val: "+0.34%", color: "text-[#00a86b]", bg: "border-[#00a86b]/30 bg-[#00a86b]/5" },
            { name: "BTC/USD", val: "+1.12%", color: "text-[#00a86b]", bg: "border-[#00a86b]/30 bg-[#00a86b]/5" },
            { name: "ETH/USD", val: "+0.78%", color: "text-[#00a86b]", bg: "border-slate-800 bg-[#161b22]" },
            { name: "EUR/USD", val: "-0.12%", color: "text-[#00a86b]", bg: "border-slate-800 bg-[#161b22]" },
            { name: "Crypto VIX", val: "+0.26%", color: "text-[#00a86b]", bg: "border-slate-800 bg-[#161b22]" }
          ].map((idx, i) => (
            <div key={i} className={`flex flex-col items-center justify-center p-2 rounded-lg border ${idx.bg}`}>
              <span className="text-[8px] font-bold text-slate-400 mb-1 text-center leading-tight">{idx.name}</span>
              <span className={`text-[9px] font-black ${idx.color}`}>{idx.val}</span>
            </div>
          ))}
        </div>

        {/* Instrument Detail Widgets */}
        {/* {[
          { name: "XAUUSD (Gold)", current: "2,412.50", change: "+8.20", pct: "0.34%", high: "2,418.90", low: "2,401.30", prev: "2,404.30", up: true, disclaimer: "Prices shown are delayed and for learning purposes — not a trade signal." },
          { name: "BTC/USD (Bitcoin)", current: "68,240.00", change: "+760.00", pct: "1.12%", high: "68,410.00", low: "67,395.00", prev: "67,480.00", up: true, disclaimer: "Prices shown are delayed and for learning purposes — not a trade signal." },
          { name: "ETH/USD (Ethereum)", current: "3,215.40", change: "+25.10", pct: "0.78%", high: "3,228.90", low: "3,175.60", prev: "3,190.30", up: true, disclaimer: "Prices shown are delayed and for learning purposes — not a trade signal." },
          { name: "EUR/USD", current: "1.0865", change: "-0.0013", pct: "-0.12%", high: "1.0891", low: "1.0852", prev: "1.0878", up: false, disclaimer: "Prices shown are delayed and for learning purposes — not a trade signal." },
          { name: "Crypto Volatility Index", current: "42.15", change: "+0.11", pct: "0.26%", high: "42.30", low: "41.85", prev: "42.04", up: true, disclaimer: "Index shown for context only — not a trade signal." }
        ].map((widget, i) => (
          <div key={i} className="bg-[#161b22] p-4 rounded-xl border border-slate-800 mt-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className={widget.up ? "text-[#00a86b]" : "text-red-500"}>
                    {widget.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  </span>
                  <span className="font-black text-sm text-white">{widget.name}</span>
                </div>
                <div className="text-3xl font-black text-white">{widget.current}</div>
                <div className={`${widget.up ? "text-[#00a86b]" : "text-red-500"} text-xs font-bold mt-1`}>
                  {widget.change} ({widget.pct})
                </div>
              </div>
              <div className="text-[10px] text-slate-400 text-right space-y-0.5">
                <div>High {widget.high}</div>
                <div>Low {widget.low}</div>
                <div>Prev {widget.prev}</div>
              </div>
            </div>
            <p className="text-[8px] text-slate-500 text-center mt-2">{widget.disclaimer}</p>
          </div>
        ))} */}

        {/* <div className="pt-2">
          <Link href="https://telegram.me/Forex_Trades_MyBillion" className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-xs">
            See Full Breakdowns on Telegram community <ArrowRight className="w-3 h-3" />
          </Link>
        </div> */}

        {/* Features Grid */}
        <div className="grid grid-cols-3 gap-3 pt-4">
          {[
            { icon: <Crown className="w-5 h-5 text-yellow-500" />, title: "VIP", sub: "Free to unlock" },
            { icon: <BookOpen className="w-5 h-5 text-orange-400" />, title: "Daily", sub: "Fresh lessons" },
            { icon: <BarChart2 className="w-5 h-5 text-orange-500" />, title: "Gold+Crypto", sub: "Core focus" },
            { title: "LIVE", sub: "Real-time data", simple: true },
            { title: "FREE", sub: "Always free", simple: true },
            { title: "LEARN", sub: "Daily setups", simple: true }
          ].map((feat, i) => (
            <div key={i} className="bg-[#161b22] border border-slate-800 rounded-xl p-3 flex flex-col items-center justify-center text-center">
              {feat.simple ? null : <div className="mb-2">{feat.icon}</div>}
              <span className="font-bold text-sm text-white mb-0.5">{feat.title}</span>
              <span className="text-[9px] text-slate-400">{feat.sub}</span>
            </div>
          ))}
        </div>

        {/* <div className="pt-2">
          <Link href="https://telegram.me/Forex_Trades_MyBillion" className="w-full bg-[#00a86b] hover:bg-[#00915c] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-xs shadow-lg shadow-[#00a86b]/20">
            Unlock Free Access
          </Link>
        </div> */}

        {/* Market Focus Section */}
        <div className="pt-8">
          <h3 className="text-xl font-black text-center mb-2 text-white uppercase tracking-tight">FOCUS ON THE MARKETS YOU TRADE</h3>
          <p className="text-xs text-slate-400 text-center mb-6">Understand the markets with simple, practical and easy-to-follow educational content.</p>
          <div className="space-y-3">
            {[
              { icon: "XAU", title: "XAUUSD", desc: "Understand Gold price movements, market structure and key trading concepts." },
              { icon: "₿", title: "BITCOIN", desc: "Follow Bitcoin market movements and learn the concepts behind crypto price action." },
              { icon: "🪙", title: "CRYPTO", desc: "Explore important crypto market concepts, trends and price behaviour." },
              { icon: "⏱️", title: "DAY TRADING", desc: "Learn practical concepts around short-term market analysis, trade planning and discipline." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center bg-[#161b22] border border-slate-800 p-4 rounded-xl">
                <div className="w-10 h-10 shrink-0 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-500 font-bold text-xs">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1 text-white">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="pt-4">
            <Link href="https://telegram.me/Forex_Trades_MyBillion" className="w-full bg-transparent border-2 border-[#00a86b] text-[#00a86b] hover:bg-[#00a86b]/10 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-colors text-xs">
              Explore These Markets on Telegram
            </Link>
          </div> */}
        </div>

        {/* What you will learn */}
        <div className="pt-8">
          <h3 className="text-xl font-black text-center mb-6 text-white tracking-tight">Here's what you'll actually walk away knowing</h3>
          <div className="space-y-3">
            {[
              { icon: "🏅", title: "Reading Gold Like a Pro", desc: "What actually moves XAUUSD — the drivers behind every rally and pullback, broken down without the noise." },
              { icon: "📈", title: "The Bitcoin & Altcoin Playbook", desc: "How to track BTC dominance, spot key levels early, and make sense of why crypto swings the way it does." },
              { icon: "🧠", title: "The Day Trader's Discipline", desc: "Entries, exits, stop-losses and position sizing — the unglamorous habits that separate consistent traders from the rest." },
              { icon: "📊", title: "Charts, Minus the Confusion", desc: "Candlestick patterns, price action, volume and indicators, explained the way Gopal wishes someone had explained them to him." },
              { icon: "Aa", title: "Plain English, Always", desc: "No jargon-heavy lectures — every lesson is built for someone starting from scratch." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center bg-[#161b22] border border-slate-800 p-4 rounded-xl">
                <div className="w-10 h-10 shrink-0 bg-orange-500/10 border border-orange-500/20 rounded-lg flex items-center justify-center text-orange-500 font-bold text-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-sm mb-1 text-white">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join the Telegram Channel */}
        <div className="pt-8">
          <h3 className="text-xl font-black text-center mb-6 text-white uppercase tracking-tight">Why Join the Telegram Channel</h3>
          <div className="space-y-3">
            {[
              { id: "01", title: "Focused Market Coverage", desc: "Content focused on XAUUSD, Bitcoin, Crypto and Day Trading." },
              { id: "02", title: "Simple Explanations", desc: "Trading concepts explained in an easy-to-understand format." },
              { id: "03", title: "Regular Market Insights", desc: "Follow market observations and educational analysis regularly." },
              { id: "04", title: "Learn From Real Market Conditions", desc: "Understand how trading concepts are applied while observing actual market movements." },
              { id: "05", title: "Trading Education", desc: "Improve your understanding of technical analysis, market structure and trading discipline." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-center bg-[#161b22] border border-slate-800 p-4 rounded-xl">
                <div className="text-2xl font-black text-slate-700">{item.id}</div>
                <div>
                  <h4 className="font-bold text-sm mb-1 text-white">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="pt-4">
            <Link href="https://telegram.me/Forex_Trades_MyBillion" className="w-full bg-[#00a86b] hover:bg-[#00915c] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_rgba(0,168,107,0.3)]">
              See What You're Missing — Join Now
            </Link>
          </div> */}
        </div>

        {/* Stats 2x2 */}
        <div className="grid grid-cols-2 gap-3 pt-8">
          <div className="bg-[#161b22] border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-xl font-black text-yellow-500 mb-1">4 Years</div>
            <div className="text-[10px] text-slate-400">In the markets, learning what works</div>
          </div>
          <div className="bg-[#161b22] border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-xl font-black text-yellow-500 mb-1">1,00,000+</div>
            <div className="text-[10px] text-slate-400">Traders in the community</div>
          </div>
          <div className="bg-[#161b22] border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-xl font-black text-yellow-500 mb-1">1:2</div>
            <div className="text-[10px] text-slate-400">Risk-to-reward, taught from day one</div>
          </div>
          <div className="bg-[#161b22] border border-slate-800 p-4 rounded-xl text-center">
            <div className="text-xl font-black text-yellow-500 mb-1">100%</div>
            <div className="text-[10px] text-slate-400">Educational, always</div>
          </div>
        </div>

        {/* Live Market Pulse */}
        <div className="bg-[#161b22] border border-slate-800 p-4 rounded-xl mt-4">
          <h4 className="flex items-center gap-2 font-bold text-sm mb-4 text-white">
            <Zap className="w-4 h-4 text-[#00a86b]" /> Live market pulse
          </h4>
          <div className="flex justify-between text-[10px] font-bold mb-2">
            <span className="text-[#00a86b]">Buyers 58%</span>
            <span className="text-red-500">Sellers 42%</span>
          </div>
          <div className="w-full h-1.5 flex rounded-full overflow-hidden bg-slate-800 mb-3">
            <div className="h-full bg-[#00a86b]" style={{ width: "58%" }}></div>
            <div className="h-full bg-red-500" style={{ width: "42%" }}></div>
          </div>
          <p className="text-[9px] text-slate-500">A simple way to visualise order flow — for learning, not for trading decisions.</p>
        </div>

        {/* Intraday session plan */}
        <div className="bg-[#161b22] border border-slate-800 p-5 rounded-xl mt-4">
          <h4 className="flex items-center gap-2 font-bold text-sm mb-4 text-white">
            <Activity className="w-4 h-4 text-[#00a86b]" /> A look inside Gopal's trading day
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] mt-1 shrink-0" />
              Before the open: checking global cues, the dollar index and overnight crypto action
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] mt-1 shrink-0" />
              London–New York overlap: where XAUUSD volatility usually shows up first
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] mt-1 shrink-0" />
              Crypto watch: Bitcoin dominance, key levels and unusual volume
            </li>
            <li className="flex items-start gap-2 text-xs text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a86b] mt-1 shrink-0" />
              After the close: reviewing charts and logging every trade honestly
            </li>
          </ul>
        </div>



        {/* Footer Disclaimer */}
        <div className=" border-t border-slate-800/5 flex gap-2 items-start text-slate-500 text-[9px] leading-relaxed">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
          <p>For educational purposes only. This is not investment or trading advice. Trading in forex, gold (XAUUSD) and cryptocurrency carries a high level of risk and may not be suitable for everyone. Past performance does not guarantee future results.</p>
        </div>

        <p className="text-center text-[9px] text-slate-600 mt-4 pb-4">
          © 2026 Gopal Shinde · Trading education you can actually understand
        </p>

      </div>

      <div className="sticky bottom-0 left-0 right-0 p-4 bg-[#0d1117]/90 backdrop-blur-md">
        <Link href="https://telegram.me/Forex_Trades_MyBillion" className="max-w-md mx-auto w-full bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.19-.08-.05-.19-.02-.27 0-.12.03-1.96 1.25-5.54 3.67-.52.35-1 .53-1.42.51-.47-.02-1.38-.27-2.05-.49-.83-.27-1.49-.41-1.43-.87.03-.24.36-.48 1-.74 3.91-1.7 6.52-2.83 7.82-3.37 3.73-1.56 4.5-1.83 5-1.84.11 0 .36.03.49.14.11.09.15.22.16.35-.01.07-.01.16-.02.21z" /></svg>
          Join 1,00,000+ Traders on Telegram
        </Link>
      </div>

    </div>

  );
}
