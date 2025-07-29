import Header from "../components/Header";

export default function DonatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-green-600 dark:text-green-400 mb-4">
              寄付のお願い
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              活動継続にご協力ください
            </p>
          </div>
        </div>

        {/* 寄付の目的セクション */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
              💡 寄付の使い道
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>サーバー運営費</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>コミュニティ運営ツールの維持費</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>プロジェクト開発費</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>メンバーの生活支援</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">
              🤝 あなたの支援で
            </h2>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>より多くの人が参加できるコミュニティ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>継続的なサポート体制の構築</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>新しいプロジェクトの立ち上げ</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 dark:text-green-400 mt-1">•</span>
                <span>仲間同士の相互扶助の実現</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 寄付ボタンセクション */}
        <div className="text-center mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              寄付をする
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              どんな金額でも大変ありがたく、コミュニティの運営に活用させていただきます。
            </p>
            <a
              href="https://buy.stripe.com/test_3cI4gy9wF4ee5p0eUFdfG00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-200 text-lg w-full"
            >
              💝 寄付ページへ進む
            </a>
          </div>
        </div>

        {/* 注意事項 */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
            ⚠️ 寄付に関する注意事項
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li>• 寄付金の返金は原則として行っておりません</li>
            <li>• 寄付の使途について定期的にコミュニティ内で報告いたします</li>
          </ul>
        </div>

        {/* 戻るリンク */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <span>←</span>
            ホームに戻る
          </a>
        </div>
      </main>
    </div>
  );
}
