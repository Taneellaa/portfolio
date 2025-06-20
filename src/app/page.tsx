import Header from '@/components/header';

export default function Home() {
  return (
    <div className="p-8 font-[family-name:var(--font-geist-sans)]">
      <Header title="My Personal Portfolio" />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2>This is my personal portfolio my man</h2>
      </main>
    </div>
  );
}
