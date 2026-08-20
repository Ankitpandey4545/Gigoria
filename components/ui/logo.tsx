 import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 group shrink-0">
      <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-all group-hover:scale-105">
        <span className="text-white font-bold text-xl">G</span>
      </div>
      <div>
        <span className="font-bold text-xl text-gray-900">Gigoria</span>
        <p className="text-[9px] font-semibold text-blue-600 uppercase tracking-[0.2em] leading-tight">
          Powering Growth
        </p>
      </div>
    </Link>
  );
}