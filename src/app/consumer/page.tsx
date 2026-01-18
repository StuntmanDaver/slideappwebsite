import Link from "next/link";

export default function ConsumerPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">Consumer Page</h1>
        <p>Welcome to the Consumer section of Slideapp.</p>
        <Link
          href="/"
          className="rounded-full border border-solid border-black/20 transition-colors flex items-center justify-center hover:bg-gray-100 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Home
        </Link>
      </main>
    </div>
  );
}
