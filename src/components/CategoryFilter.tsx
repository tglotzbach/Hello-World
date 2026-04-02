"use client";

import { useSearchParams, useRouter } from "next/navigation";

export function CategoryFilter({ categories }: { categories: string[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const active = searchParams.get("category") ?? "All";

  function handleFilter(cat: string) {
    if (cat === "All") {
      router.push("/work", { scroll: false });
    } else {
      router.push(`/work?category=${encodeURIComponent(cat)}`, { scroll: false });
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => handleFilter(cat)}
          className={`rounded-full border px-3 py-1 text-xs transition-colors ${
            active === cat
              ? "border-ink bg-ink text-cream"
              : "border-ink/15 text-ink/50 hover:border-ink/30 hover:text-ink"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
