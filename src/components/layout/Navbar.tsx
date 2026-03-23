import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 md:px-12 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-black">FitAnalyzer</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/login" className="px-5 py-2 text-sm font-medium text-black bg-transparent border border-gray-200 rounded-full hover:bg-gray-50 transition-colors">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
