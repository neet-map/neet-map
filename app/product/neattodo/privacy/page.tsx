import Header from "../../../components/Header";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      <main className="container mx-auto px-4 pt-20 pb-16">
        {/* ヘッダーセクション */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl mb-4">🔒</div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              プライバシーポリシー
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              NeatTodoにおけるプライバシー保護について
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              最終更新日: 2025年7月6日
            </p>
          </div>
        </div>

        {/* プライバシーポリシー内容 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              基本方針
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              このプライバシーポリシーは、サービス提供者によって無料サービスとして作成されたモバイルデバイス向けNeatTodoアプリ（以下「アプリケーション」と称します）に適用されます。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              このサービスは「現状のまま」での使用を意図しています。
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              アプリケーションはどのような情報を取得し、どのように使用しますか？
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              <strong>アプリケーションは、ダウンロードおよび使用時に一切の情報を取得しません。</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              アプリケーションの使用に登録は必要ありません。
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              アプリケーションはデバイスの正確なリアルタイム位置情報を収集しますか？
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              <strong>このアプリケーションは、あなたのモバイルデバイスの位置に関する正確な情報を収集しません。</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              第三者はアプリケーションが取得した情報を見ることや、アクセスすることができますか？
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              <strong>アプリケーションは一切の情報を収集しないため、第三者とデータを共有することはありません。</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              オプトアウト権とは何ですか？
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              アプリケーションをアンインストールすることで、アプリケーションによるすべての情報収集を簡単に停止できます。モバイルデバイスの一部として利用可能な標準的なアンインストールプロセス、またはモバイルアプリケーションマーケットプレイスやネットワークを介してアンインストールできます。
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              児童
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              アプリケーションは、13歳未満の児童からデータを意図的に収集したり、13歳未満の児童に向けてマーケティングを行うために使用されることはありません。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              サービス提供者は、児童から個人識別情報を意図的に収集することはありません。サービス提供者は、すべての児童に対して、アプリケーションおよび/またはサービスを通じて個人識別情報を提出しないよう推奨しています。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              サービス提供者は、保護者および法定後見人に対して、児童のインターネット使用を監視し、児童が許可なくアプリケーションおよび/またはサービスを通じて個人識別情報を提供しないよう指導することで、このポリシーの実施を支援することを推奨しています。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              児童がアプリケーションおよび/またはサービスを通じてサービス提供者に個人識別情報を提供したと信じる理由がある場合は、サービス提供者（keymon114514@gmail.com）に連絡してください。必要な措置を取ることができます。また、あなたの国で個人識別情報の処理に同意するには、少なくとも16歳以上である必要があります（一部の国では、保護者または後見人が代わりに同意することが可能です）。
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              セキュリティ
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              サービス提供者は、あなたの情報の機密性を保護することを重視しています。ただし、<strong>アプリケーションは一切の情報を収集しないため、権限のない個人があなたのデータにアクセスするリスクはありません。</strong>
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              変更
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              このプライバシーポリシーは、何らかの理由で随時更新される場合があります。サービス提供者は、新しいプライバシーポリシーでこのページを更新することにより、プライバシーポリシーの変更をお知らせします。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              変更については定期的にこのプライバシーポリシーを確認することをお勧めします。継続的な使用は、すべての変更の承認とみなされます。
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              このプライバシーポリシーは2025年7月6日より有効です。
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              あなたの同意
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              アプリケーションを使用することにより、あなたは、このプライバシーポリシーおよびサービス提供者によって修正される内容に従って、あなたの情報の処理に同意することになります。
            </p>

            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
              お問い合わせ
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              アプリケーションの使用中にプライバシーに関してご質問がある場合、または実践に関してご質問がある場合は、keymon114514@gmail.comまでメールでサービス提供者にお問い合わせください。
            </p>
          </div>
        </div>

        {/* 戻るボタン */}
        <div className="text-center mt-12">
          <a
            href="/product/neattodo"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <span>←</span>
            NeatTodoに戻る
          </a>
        </div>
      </main>
    </div>
  );
} 