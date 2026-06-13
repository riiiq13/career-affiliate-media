export const site = {
  name: "未経験キャリア研究所",
  url: import.meta.env.SITE_URL ?? (import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : "https://mikeiken-career-lab.vercel.app"),
  description:
    "学歴・職歴に自信がない20代から30代向けに、転職・資格・AI活用・スクール・退職判断を現実的に整理するキャリア再設計メディアです。"
};

export const categories = [
  {
    name: "未経験転職",
    slug: "job-change",
    path: "/job-change/",
    description:
      "職歴に自信がない人、低収入から抜けたい人、未経験転職を考える人向けのカテゴリです。",
    monetization: "転職エージェント、キャリア相談、求人登録、派遣登録"
  },
  {
    name: "資格・スクール",
    slug: "school",
    path: "/school/",
    description:
      "資格、ITスクール、Webマーケティングスクール、通信講座を比較したい人向けのカテゴリです。",
    monetization: "資格スクール、ITスクール、Webマーケスクール、通信講座"
  },
  {
    name: "AIキャリア",
    slug: "ai-career",
    path: "/ai-career/",
    description:
      "AIを仕事・転職・副業に活用したい人向けに、学び方と使い方を整理するカテゴリです。",
    monetization: "AIスクール、プログラミングスクール、AI活用教材、自作PDF"
  },
  {
    name: "仕事辞めたい・退職判断",
    slug: "quit-work",
    path: "/quit-work/",
    description:
      "退職判断、ブラック職場の見極め、次のキャリアへの橋渡しを扱うカテゴリです。",
    monetization: "転職エージェント、キャリア相談、専門家相談、退職代行は補助的に扱う"
  }
];

export function buildTitle(title: string) {
  return `${title} | ${site.name}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}

export function getCategoryPath(categoryName: string) {
  return categories.find((category) => category.name === categoryName)?.path ?? "/";
}
