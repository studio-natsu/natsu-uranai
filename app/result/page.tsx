import { notFound } from "next/navigation";

const foodAdvice: Record<
  string,
  { mood: string; advice: string }
> = {
  choco: {
    mood: "甘えたい・癒されたい気分だね！?",
    advice: "リラックスタイムを大切にしてね。よかったら話聞くよ。",
  },
  lemon: {
    mood: "ピリッと刺激的！ふぅ～！",
    advice: "わかるよ、辛いの大好き。無理せず、リフレッシュも忘れずに。",
  },
  burger: {
    mood: "ガツガツ挑戦したい気分！さすが！！",
    advice: "燃えてる気持ちを大事に行動してみて。やりたいことやろ！",
  },
  salad: {
    mood: "ヘルシーで落ち着いてる気分。",
    advice: "心の余裕、すてきです。周りに分けてあげよう。",
  },
};

export default function Result({ searchParams }: { searchParams: { food?: string } }) {
  const food = searchParams.food;

  if (!food || !foodAdvice[food]) {
    notFound();
  }

  const { mood, advice } = foodAdvice[food];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">教えてくれてありがとう！今日のあなたは…</h2>
      <div className="text-4xl mb-2">{mood}</div>
      <div className="text-lg">{advice}</div>
    </main>
  );
}
