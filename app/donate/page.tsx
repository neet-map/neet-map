import Header from "../components/Header";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-8">
        {/* ヒーローセクション */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
            ご寄付のお願い
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            NEET相互扶助計画の活動継続にご協力ください
          </p>
        </div>

        {/* メインコンテンツ */}
        <div className="max-w-2xl mx-auto space-y-6">
          {/* 寄付の目的セクション */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-600 dark:text-green-400 mb-3">
              💡 寄付の使い道
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>サーバー運営・維持費</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>新規プロジェクト開発費</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 dark:text-green-400">•</span>
                <span>イベント開催費</span>
              </li>
            </ul>
          </div>

          {/* 寄付ボタンセクション */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md text-center">
            <a
              href="https://buy.stripe.com/test_3cI4gy9wF4ee5p0eUFdfG00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-base"
            >
              💝 寄付をする(現在準備中)
            </a>
          </div>

          {/* 注意事項 */}
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="text-base font-semibold text-gray-800 dark:text-white mb-2">
              ⚠️ 注意事項
            </h3>
            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
              <li>• 現在テスト中です。</li>
              <li>• 寄付金の返金は原則として行っておりません</li>
              <li>• 寄付の金額、使途について定期的にコミュニティ内で報告いたします</li>
            </ul>
          </div>
        </div>

        {/* 戻るリンク */}
        <div className="text-center mt-8">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <span>←</span>
            ホームに戻る
          </a>
        </div>
      </main>
    </div>
  );
}
