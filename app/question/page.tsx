"use client";
import { useRouter } from "next/navigation";

const foods = [
  { name: "チョコ", value: "choco", emoji: "🍫" },
  { name: "レモン", value: "lemon", emoji: "🍋" },
  { name: "ハンバーガー", value: "burger", emoji: "🍔" },
  { name: "サラダ", value: "salad", emoji: "🥗" },
];

export default function Question() {
  const router = useRouter();

  const handleSelect = (food: string) => {
    router.push(`/result?food=${food}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">今、なにたべたい～？</h2>
      <div className="grid grid-cols-2 gap-4">
        {foods.map((f) => (
          <button
            key={f.value}
            onClick={() => handleSelect(f.value)}
            className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-gray-100 shadow"
          >
            <div className="text-3xl">{f.emoji}</div>
            <div>{f.name}</div>
          </button>
        ))}
      </div>
    </main>
  );
}

