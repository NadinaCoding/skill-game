import type { Topic } from './types';

export async function loadMathsTopics(): Promise<Topic[]> {
  // @ts-ignore: Webpack-specific feature
  const context = (require as any).context('./data/subjects/maths', false, /\.json$/);

  const topics: Topic[] = context.keys().map((key: string) => {
    const Topic = context(key);
    return Topic as Topic;
  });

  return topics;
}
