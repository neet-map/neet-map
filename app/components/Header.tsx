'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ/サイト名 */}
          <Link 
            href="/"
            className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            NEET相互扶助計画
          </Link>

          {/* ナビゲーション */}
          <nav className="flex items-center space-x-4 md:space-x-6">
            <Link
              href="/"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              ホーム
            </Link>
            <Link
              href="/product"
              className={`font-medium transition-colors duration-200 ${
                pathname === '/product' 
                  ? 'text-blue-600 dark:text-blue-400' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              作ったもの
            </Link>
            <a
              href="https://discord.gg/BtqQecTW"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 text-sm md:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
} 