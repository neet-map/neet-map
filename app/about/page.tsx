import Header from "../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              私たちについて
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              NEET相互扶助計画の理念と目指す未来について
            </p>
          </div>

          <div className="space-y-12">
            {/* コミュニティの理念 */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                私たちの理念
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  NEET相互扶助計画は、現代社会の「普通」に疑問を持つ人々が集まる場所です。
                  週5日8時間という従来の働き方に縛られることなく、自分らしい生き方を模索し、
                  お互いを支え合うコミュニティを目指しています。
                </p>
                <p>
                  私たちは「働くこと」の意味を再定義し、一人ひとりが自分のペースで、
                  自分の価値観に基づいて活動できる環境を作り上げたいと考えています。
                </p>
              </div>
            </section>

            {/* 設立背景 */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                設立の背景
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  現代日本では「正社員として週5日8時間働く」ことが当たり前とされていますが、
                  この働き方に適応できない、または疑問を感じる人々が多く存在しています。
                </p>
                <p>
                  しかし、そのような人々は往々にして孤立し、自分だけが社会から取り残されているような
                  感覚に陥りがちです。私たちは、そんな境遇にある人々が繋がり合い、
                  お互いを理解し支え合える場を作りたいと考えました。
                </p>
              </div>
            </section>

            {/* 大切にしている価値観 */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                大切にしている価値観
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">
                    多様性の尊重
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    一人ひとりの価値観、生き方、ペースを尊重し、
                    画一的な「正解」を押し付けることはしません。
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">
                    相互扶助
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    お互いの得意分野を活かし合い、困ったときは支え合い、
                    共に成長していくことを大切にしています。
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">
                    自分らしさ
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    社会の期待よりも、自分自身が本当にやりたいこと、
                    大切にしたいことを優先できる環境を作ります。
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-blue-500 dark:text-blue-300">
                    ゆるやかなつながり
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    強制や義務感ではなく、自然体で参加できる
                    居心地の良いコミュニティを心がけています。
                  </p>
                </div>
              </div>
            </section>

            {/* 将来のビジョン */}
            <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
                将来のビジョン
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  私たちは、従来の労働観にとらわれない新しい働き方を実践し、
                  それを社会に示していきたいと考えています。
                </p>
                <p>
                  YouTubeでの情報発信、プログラミングによるソフトウェア開発、
                  その他のオンラインで完結する活動を通じて、
                  メンバー一人ひとりが自分の能力を活かせる場を提供します。
                </p>
                <p>
                  最終的には、私たちのようなコミュニティが社会の一つの選択肢として
                  認知され、多様な生き方が尊重される社会の実現に貢献したいと思っています。
                </p>
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}