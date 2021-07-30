import Link from "next/link";

export default function PreviewAlert() {
  return (
    <div className="mb-4 text-right">
      <Link href="/api/exit-preview">
        <a className="px-4 py-3 text-white hover:text-yellow-500 text-xs hover:bg-white bg-yellow-500 border-2 border-yellow-500 rounded-lg">
          プレビューモードの切り替え
        </a>
      </Link>
    </div>
  );
}
