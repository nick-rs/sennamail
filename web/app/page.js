export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">senna.email</h1>
        <ol className="list-inside list-none text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            AES-256 Encryption, Fast...{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-2 py-0.5 rounded font-semibold">
              Low Fee
            </code>
            .
          </li>
          <li></li>
        </ol>
      </main>
    </div>
  );
}
