export default function Header({ title }: { title: string }) {
  return (
    <header className="p-8 font-[family-name:var(--font-geist-sans)]">
      <h2>{title}</h2>
    </header>
  );
}
