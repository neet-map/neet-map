import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              NEET相互扶助計画
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              - It's the only NEET things to do -
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">目的</h2>
            <p className="text-gray-600 dark:text-gray-300">
            現代日本の「週5で8時間働く」という社会一般の考えを受け入れられない無職やフリーターが集まり、ゆるく助け合いをしていくことを目的としています。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">活動内容</h2>
            <p className="text-gray-600 dark:text-gray-300">
            2025年2月頃からサーバーを立て、現在コミュニティの人数を増やしている段階です。将来的にはYoutubeやプログラミングなど、オンラインで完結する簡単なお仕事なども行っていく予定です。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">コミュニティ</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discordを利用し、情報共有や、各自毎週進捗報告などをしています。
            </p>
          </div>
        </div>



        <div className="mt-16 text-center">
          <a
            href="https://discord.gg/BtqQecTW"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            Discordに参加
          </a>
        </div>
      </main>
    </div>
  );
}
