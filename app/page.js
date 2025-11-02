export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <header className="w-full p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">Мій E-commerce Шоукейс</h1>
      </header>

      <div className="w-full text-center p-10">
        <p>Скоро тут будуть товари...</p>
      </div>

      <footer className="w-full p-4 text-center text-gray-500 text-sm mt-auto">
        © 2025 Антон Лащенко, ДПУ. Демонстрація трендів е-комерції.
      </footer>
    </main>
  );
}