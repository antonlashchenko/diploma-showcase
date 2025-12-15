import Link from 'next/link';

export default function ProductCard({ product }) {
    return (
        <Link
            href={`/item/${product.id}`}
            className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
        >
            <div className="relative h-56 w-full bg-white flex items-center justify-center overflow-hidden">
                <img
                    src={product.mainImage}
                    alt={product.title}
                    className="h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">
                    {product.category}
                </p>
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.title}
                </h3>
                <div className="mt-auto pt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {product.price.toFixed(2)} ₴
                    </p>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                        →
                    </span>
                </div>
            </div>
        </Link>
    );
}
