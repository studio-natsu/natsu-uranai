import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🌈 たべるの大好き！なつだよ～</h1>
      <p className="mb-8">今何が食べたい？教えて～！</p>
      <Link href="/question" className="px-4 py-2 bg-blue-500 text-white rounded">
        スタート
      </Link>
    </main>
  );
}
