import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-900 block mb-4">
              spacia<span className="text-blue-600">.</span>ua
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              Створюємо затишні та функціональні простори для вашого дому та офісу.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Навігація</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors">Головна</Link>
              </li>
              <li>
                <Link href="/#categories" className="hover:text-blue-600 transition-colors">Категорії</Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-blue-600 transition-colors">Кошик</Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Контакти</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>м. Київ, вул. Прикладна, 12</li>
              <li>
                <a href="tel:+380000000000" className="hover:text-blue-600 transition-colors">
                  +38 (000) 000-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@spacia.ua" className="hover:text-blue-600 transition-colors">
                  info@spacia.ua
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center bg-gray-50">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Spacia.ua. Всі права захищено.
          </p>
        </div>
      </div>
    </footer>
  );
}