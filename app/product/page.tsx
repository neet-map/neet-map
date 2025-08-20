import Header from "../components/Header";

// アプリデータの型定義
interface AppData {
  id: string;
  name: string;
  description: string;
  icon?: string;
  screenshot?: string;
  status: 'released' | 'development';
  link?: string;
}

// アプリデータ配列
const appsData: AppData[] = [
  {
    id: 'neattodo',
    name: 'NeatTodo',
    description: 'シンプルなスマホ向けTodoアプリ',
    icon: '/neattodo_icon.png',
    screenshot: '/NeatTodo.png',
    status: 'released',
    link: '/product/neattodo'
  },
  {
    id: 'seqhord',
    name: 'Seqhord',
    description: 'ブラウザで動作する音楽プログラミングアプリ',
    icon: '/seq_icon.png',
    screenshot: '/seqhord.png',
    link: 'https://seqhord.com',
    status: 'released'
  },
  {
    id: 'n-board',
    name: 'N-Board',
    description: '内部向けのグループウェアです',
    icon: '/n-board_icon.png',
    screenshot: '/n-board.png',
    link: 'https://n-board.com',
    status: 'released'
  },
];

export default function ProductPage() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-16">
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
          {/* レスポンシブグリッド: モバイル1列、タブレット2列、PC3列 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appsData.map((app) => (
              <div 
                key={app.id} 
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                  app.status !== 'released' ? 'border-2 border-dashed border-gray-300 dark:border-gray-600' : ''
                }`}
              >
                {/* アプリスクリーンショット/プレビューエリア */}
                {app.link ? (
                  <a href={app.link} target="_blank" rel="noopener noreferrer" className="block">
                    <div className={`aspect-video flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity duration-200 ${
                      app.status === 'released' ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-700'
                    }`}>
                      {app.screenshot ? (
                        <img 
                          src={app.screenshot} 
                          alt={`${app.name} アプリのスクリーンショット`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center">
                          <div className="text-4xl mb-2">
                            {app.status === 'development' ? '🚀' : '📱'}
                          </div>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">
                            {app.status === 'development' ? '開発中' : 'プレビュー準備中'}
                          </p>
                        </div>
                      )}
                    </div>
                  </a>
                ) : (
                  <div className={`aspect-video flex items-center justify-center ${
                    app.status === 'released' ? 'bg-gray-100 dark:bg-gray-700' : 'bg-gray-50 dark:bg-gray-700'
                  }`}>
                    {app.screenshot ? (
                      <img 
                        src={app.screenshot} 
                        alt={`${app.name} アプリのスクリーンショット`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="text-4xl mb-2">
                          {app.status === 'development' ? '🚀' : '📱'}
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {app.status === 'development' ? '開発中' : 'プレビュー準備中'}
                        </p>
                      </div>
                    )}
                  </div>
                )}
                
                {/* アプリ情報 */}
                <div className="pt-6 px-6 pb-6">
                  <div className="flex items-center gap-3">
                    {app.icon ? (
                      <img src={app.icon} alt={`${app.name} アイコン`} className="w-12 h-12" />
                    ) : (
                      <div className="w-12 h-12 rounded-lg bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-gray-500 dark:text-gray-400">📱</span>
                      </div>
                    )}
                    <div>
                      {app.link ? (
                        <a href={app.link} target="_blank" rel="noopener noreferrer" className="block">
                          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                            {app.name}
                          </h2>
                        </a>
                      ) : (
                        <h2 className={`text-xl font-bold ${
                          app.status === 'released' 
                            ? 'text-blue-600 dark:text-blue-400' 
                            : 'text-gray-500 dark:text-gray-400'
                        }`}>
                          {app.name}
                        </h2>
                      )}
                      <p className={`text-sm ${
                        app.status === 'released' 
                          ? 'text-gray-600 dark:text-gray-300' 
                          : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {app.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
} 