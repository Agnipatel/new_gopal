import Link from "next/link";
import { ArrowRight, BarChart3, Menu } from "lucide-react";

export default function Navbar() {
  const telegramLink = "https://t.me/Forex_Trades_MyBillion";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            <BarChart3 className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl text-slate-900 tracking-tight">Gopal Shinde</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#" className="hover:text-blue-600 transition-colors">Markets</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Curriculum</Link>
          <Link href="#" className="hover:text-blue-600 transition-colors">Daily Insights</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={telegramLink}
            className="hidden sm:inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-sm"
          >
            Join Telegram <ArrowRight className="w-4 h-4" />
          </Link>
          
          <button className="md:hidden p-2 text-slate-600 hover:text-slate-900">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
