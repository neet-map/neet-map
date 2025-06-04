import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              NEET相互扶助計画(仮)
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              It's the only NEET things to do
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">相互支援</h2>
            <p className="text-gray-600 dark:text-gray-300">
              同じ境遇の仲間と共に、お互いを支え合いながら前進していきましょう。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">情報共有</h2>
            <p className="text-gray-600 dark:text-gray-300">
              就職情報、生活の知恵、心のケアなど、役立つ情報を共有し合いましょう。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">コミュニティ</h2>
            <p className="text-gray-600 dark:text-gray-300">
              オンラインでの交流を通じて、新しいつながりを作りましょう。
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
