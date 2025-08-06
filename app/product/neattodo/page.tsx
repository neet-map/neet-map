import Header from "../../components/Header";

export default function NeatTodoDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-16">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            <img src="/neattodo_icon.png" alt="NeatTodo アイコン" className="w-32 h-32 mb-4" />
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              NeatTodo
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              シンプルなTodoアプリケーション
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="https://play.google.com/store/apps/details?id=com.syun561.todoapp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="/GetItOnGooglePlay_Badge_Web_color_English.png" 
                  alt="Google Play で手に入れよう"
                  className="h-16 w-auto"
                />
              </a>
              {/* <button className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                GitHub で見る
              </button> */}
            </div>
          </div>
        </div>

        {/* 機能詳細セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            機能
          </h2>
          <div className="space-y-12">
            {/* 基本機能 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    📋 基本のタスク管理
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>タスクの追加・編集・削除</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>完了状態の管理</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>重要度の設定</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>デイリータスクの設定</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <img 
                      src="/NeatTodo.png" 
                      alt="NeatTodo 基本機能のスクリーンショット"
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* フッターリンク */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            NeatTodoの使用に関する詳細情報
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/product/neattodo/privacy"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 text-sm flex items-center gap-2"
            >
              <span>🔒</span>
              プライバシーポリシー
            </a>
            <span className="hidden sm:inline text-gray-400">|</span>
            <a
              href="/product"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200 text-sm flex items-center gap-2"
            >
              <span>←</span>
              プロダクト一覧に戻る
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 