# 未経験キャリア研究所

学歴・職歴・正社員経験に自信がない20代から30代向けに、転職、資格、AI活用、スクール、副業、退職判断を現実的に整理するSEO/AIOメディアです。

## A8登録用サイト説明文

未経験キャリア研究所は、学歴・職歴・正社員経験に自信がない20代から30代向けに、転職支援、キャリア相談、資格・スクール、AI/IT学習、退職判断の選び方を整理するキャリア再設計メディアです。単なるランキングではなく、読者の状況に応じて「今すぐ転職活動を始めるべきか」「先に資格やスクールを検討すべきか」「退職前に何を確認すべきか」を判断できるよう、比較表、FAQ、注意点、免責事項を掲載しています。

主な掲載ジャンルは、転職エージェント、キャリア相談、求人登録、資格スクール、ITスクール、Webマーケティングスクール、AI活用講座、通信講座です。退職代行は主力商材ではなく、退職判断や労働問題に関する選択肢の一部として慎重に扱い、法律問題がある場合は弁護士など専門家への相談を促します。

## セットアップ

```bash
npm install
npm run dev
```

ローカル確認URLは通常 `http://127.0.0.1:4321/` です。本番予定URLは `https://mikeiken-career-lab.vercel.app` で進めます。canonical、OGP、構造化データ、sitemapに使う公開URLは `SITE_URL` で指定します。

## 開発コマンド

```bash
npm run dev
npm run build
npm run preview
```

## Vercelデプロイ設定

Vercelでは以下の設定でデプロイできます。`vercel.json`にも同じ設定を入れています。

- Framework Preset: Astro
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## SITE_URLの設定

`SITE_URL` はcanonical URL、OGP URL、構造化データ、sitemap生成に使います。A8登録用の公開URLは `https://mikeiken-career-lab.vercel.app` で進めるため、VercelのProject Settingsで以下の環境変数を追加してください。

- Key: `SITE_URL`
- Value: `https://mikeiken-career-lab.vercel.app`
- Environment: Production

独自ドメインを設定した後は、`SITE_URL` を独自ドメインに変更してください。末尾のスラッシュは不要です。

ローカルで本番URLを確認したい場合は、次のように実行します。

```bash
SITE_URL="https://mikeiken-career-lab.vercel.app" npm run build
```

## 公開後に確認するURL

Vercel公開後、以下のURLをブラウザで確認してください。

- `https://mikeiken-career-lab.vercel.app/`
- `https://mikeiken-career-lab.vercel.app/job-change/`
- `https://mikeiken-career-lab.vercel.app/school/`
- `https://mikeiken-career-lab.vercel.app/ai-career/`
- `https://mikeiken-career-lab.vercel.app/quit-work/`
- `https://mikeiken-career-lab.vercel.app/diagnosis/career-route-check/`
- `https://mikeiken-career-lab.vercel.app/lp/job-change-support/`
- `https://mikeiken-career-lab.vercel.app/lp/school-comparison/`
- `https://mikeiken-career-lab.vercel.app/lp/ai-it-school-comparison/`
- `https://mikeiken-career-lab.vercel.app/articles/20dai-kouhan-keireki-yowai-tenshoku/`
- `https://mikeiken-career-lab.vercel.app/about/`
- `https://mikeiken-career-lab.vercel.app/editorial-policy/`
- `https://mikeiken-career-lab.vercel.app/disclaimer/`
- `https://mikeiken-career-lab.vercel.app/privacy-policy/`
- `https://mikeiken-career-lab.vercel.app/sitemap-index.xml`
- `https://mikeiken-career-lab.vercel.app/robots.txt`

## 記事追加方法

記事は `src/content/articles/` にMarkdownまたはMDXで追加します。frontmatterには、title、description、category、target_reader、search_intent、monetization、related_articles、updated_at、faqsを設定します。

## LP編集方法

比較LPは `src/pages/lp/` 配下にあります。A8などの広告リンクを追加する場合は、公式情報と提携条件を確認し、誇大表現を避けて掲載してください。

## アフィリエイトリンク差し替え方針

現時点ではA8登録前のため、外部アフィリエイトリンクは設置していません。提携承認後に、各LPやCTAのリンク先を広告URLへ差し替えます。差し替え時も、特定サービスの利用や成果を保証する表現は使いません。

## コンプライアンス注意点

「必ず転職できる」「誰でも稼げる」「未経験でも必ず年収アップ」「退職代行なら必ず即日退職できる」などの断定表現は禁止です。退職、未払い賃金、有給交渉、損害賠償、ハラスメントなど法律問題が絡む場合は、弁護士など専門家への相談を促してください。

## 現在の公開前状態

トップページ、カテゴリページ、診断ページ、比較LP、基本ポリシーページ、サンプル記事を実装済みです。外部広告リンクは未設置で、アフィリエイト広告表記はLPと記事テンプレートに表示されます。

## GitHubに上げる前の手順

1. `npm install` を実行して依存関係を揃える
2. `npm run build` でビルドが通ることを確認する
3. `rg -n "localhost|127\\.0\\.0\\.1" dist` で生成物にローカルURLが残っていないことを確認する
4. A8登録前は外部アフィリエイトリンクを入れず、広告表記と免責事項が表示されていることを確認する
5. GitHubへpush後、VercelでリポジトリをImportする
6. VercelのEnvironment Variablesに `SITE_URL=https://mikeiken-career-lab.vercel.app` を設定する
7. Deploy後、公開URLのトップページ、LP、記事ページ、ポリシーページを確認する
