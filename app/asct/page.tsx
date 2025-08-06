import Header from "../components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "NEET相互扶助計画の特定商取引法に基づく表記ページです。",
};

export default function AsctPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-16">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            特定商取引法に基づく表記
          </h1>
        </div>

        {/* 表記内容 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              
              {/* 運営者情報 */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  運営者情報
                </h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">販売会社の名称</span>
                    <span>NEET相互扶助計画</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">所在地</span>
                    <span>東京都千代田区神田和泉町1番地6-16ヤマトビル405</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">電話番号</span>
                    <span>070-8422-8971</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">メールアドレス</span>
                    <span>support@neet-map.com</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">運営統括責任者</span>
                    <span>猿渡俊祐</span>
                  </div>


                </div>
              </div>

              {/* 寄付について */}
              <div>
                <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  寄付について
                </h2>
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">追加手数料等の追加料金</span>
                    <span>なし</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">交換及び返品（返金ポリシー）</span>
                    <span>本団体への寄付については、性質上、決済手続完了後のキャンセルはお受けできません。また、お支払い後の返金は行っておりません
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">引渡時期</span>
                    <span>寄付の性質上、「引渡し」に該当する商品等はございません。決済完了後、直ちに寄付が成立いたします。</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">受付可能な決済手段</span>
                    <span>クレジットカード決済のみに対応しています</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">決済期間</span>
                    <span>ただちに処理されます</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:gap-4">
                    <span className="font-medium text-gray-800 dark:text-white min-w-50">販売価格</span>
                    <span>寄付金額（任意）については、決済ページに表示しています</span>
                  </div>
                  



                  
                </div>
              </div>
            </div>
          </div>
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