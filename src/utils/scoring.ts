const funnelWeights: Record<string, number> = {
  comparison: 5,
  consideration: 4,
  problem: 3,
  awareness: 2,
  retention: 1
};

export function scoreKeyword({
  difficulty,
  monetizationPotential,
  funnelStage,
  priority
}: {
  difficulty: number;
  monetizationPotential: number;
  funnelStage: string;
  priority: number;
}) {
  const funnel = funnelWeights[funnelStage] ?? 2;
  return Math.round((monetizationPotential * 3 + priority * 2 + funnel * 2 - difficulty * 1.4) * 10) / 10;
}

export function scoreArticle({
  monetization,
  priority,
  searchIntent
}: {
  monetization: string;
  priority: number;
  searchIntent: string;
}) {
  const monetizationScore = /転職|キャリア相談|スクール|講座|求人/.test(monetization)
    ? 5
    : /AI|資格|副業/.test(monetization)
      ? 4
      : /退職代行/.test(monetization)
        ? 2
        : 1;
  const intentScore = searchIntent.length >= 18 ? 5 : searchIntent.length >= 10 ? 3 : 1;
  return Math.round((monetizationScore * 3 + priority * 2 + intentScore * 2) * 10) / 10;
}
