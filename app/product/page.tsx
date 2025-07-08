import Header from "../components/Header";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              作ったもの
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              これまでに開発したアプリ・サービスを紹介します
            </p>
          </div>
        </div>

        {/* アプリ紹介セクション */}
        <div className="mb-16">
          {/* NeatTodo */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* アプリ情報 */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/neattodo_icon.png" alt="NeatTodo アイコン" className="w-16 h-16" />
                  <div>
                    <a href="/product/neattodo" className="block">
                      <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                        NeatTodo
                      </h2>
                    </a>
                    <p className="text-gray-600 dark:text-gray-300">
                      シンプルなTodoアプリケーション
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                    主な機能
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      基本的なタスク管理
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      タスクの習慣化
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      優先度の設定
                    </li>
                  </ul>
                </div>




              </div>

              {/* アプリスクリーンショット/プレビュー */}
              <div className="flex-1">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-80 flex items-center justify-center">
                  <img 
                    src="/NeatTodo.png" 
                    alt="NeatTodo アプリのスクリーンショット"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 今後のアプリ予告セクション */}
        <div className="text-center bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            今後のアプリ開発予定
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            より多くの便利なアプリケーションを開発中です。お楽しみに！
          </p>
          <div className="text-4xl">🚀</div>
        </div>
      </main>
    </div>
  );
} 