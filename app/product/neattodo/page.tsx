import Header from "../../components/Header";

export default function NeatTodoDetailPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* ヒーローセクション */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6">
            <div className="text-8xl mb-4">📝</div>
            <h1 className="text-5xl md:text-7xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              NeatTodo
            </h1>
            <p className="text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              シンプルで美しく、使いやすさを追求したTodoアプリケーション
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                今すぐ試す
              </button>
              <button className="border-2 border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
                GitHub で見る
              </button>
            </div>
          </div>
        </div>

        {/* 主な特徴セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            なぜNeatTodoなのか？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                シンプルで直感的
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                複雑な機能は排除し、本当に必要な機能だけを厳選。誰でも簡単に使えるインターフェース。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                高速レスポンス
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                最新のWebテクノロジーを使用し、ストレスフリーな操作性を実現。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                美しいデザイン
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                ダークモード対応で、どんな環境でも目に優しく美しいUI。
              </p>
            </div>
          </div>
        </div>

        {/* 機能詳細セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            充実の機能
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
                      <span>タスクの並び替え</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>検索・フィルタリング</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📋</div>
                      <p className="text-gray-600 dark:text-gray-300">
                        基本機能のスクリーンショット
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 高度な機能 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="flex-1 lg:order-2">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                    🚀 高度な機能
                  </h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>優先度の設定（高・中・低）</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>カテゴリー分類</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>期限設定とリマインダー</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-600 dark:text-blue-400">✓</span>
                      <span>進捗状況の可視化</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 lg:order-1">
                  <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-6 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">⚙️</div>
                      <p className="text-gray-600 dark:text-gray-300">
                        高度な機能のスクリーンショット
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技術スタックセクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            技術スタック
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  フロントエンド
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm">
                      React 18
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      最新のReactを使用
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-sm">
                      TypeScript
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      型安全な開発
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm">
                      Next.js 14
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      最適化されたパフォーマンス
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  スタイリング・UI
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-full text-sm">
                      Tailwind CSS
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      効率的なスタイリング
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full text-sm">
                      CSS Grid & Flexbox
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      レスポンシブデザイン
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-sm">
                      Dark Mode
                    </span>
                    <span className="text-gray-600 dark:text-gray-300">
                      ダークモード対応
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 使用方法セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            使い方
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                タスクを追加
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                簡単な入力でタスクを追加できます
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                優先度を設定
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                重要度に応じて優先度を設定
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                カテゴリー分類
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                プロジェクトや種類別に整理
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 dark:bg-orange-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600 dark:text-orange-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                完了をチェック
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                完了したタスクにチェック
              </p>
            </div>
          </div>
        </div>

        {/* よくある質問セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
            よくある質問
          </h2>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Q: データはどこに保存されますか？
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A: 現在はブラウザのローカルストレージに保存されます。将来的にはクラウド同期機能の追加を予定しています。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Q: モバイルでも使えますか？
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A: はい、レスポンシブデザインでスマートフォンやタブレットでも快適に使用できます。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                Q: オフラインでも使用できますか？
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                A: はい、PWA（Progressive Web App）として動作するため、オフライン環境でも使用可能です。
              </p>
            </div>
          </div>
        </div>

        {/* CTAセクション */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            今すぐNeatTodoを始めましょう
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            シンプルで美しいTodoアプリで、あなたの生産性を向上させましょう。完全無料で使用できます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              アプリを使い始める
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-600 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200 text-lg">
              ソースコードを見る
            </button>
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