import { getCategoryProductsWithImages } from '@/app/actions';
import { getCategoryBySlug, categorySlugs } from '@/lib/data';
import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return Object.values(categorySlugs).map((slug) => ({
        slug: slug,
    }));
}

export default async function CategoryPage({ params }) {
    const { slug } = await params;
    const categoryName = getCategoryBySlug(slug);

    if (!categoryName) {
        notFound();
    }

    const products = await getCategoryProductsWithImages(slug);

    return (
        <>
            <Header />

            <main className="container mx-auto px-4 sm:px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {categoryName}
                    </h2>
                    <Link
                        href="/"
                        className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                    >
                        ← Повернутися до всіх товарів
                    </Link>
                </div>

                {products.length === 0 ? (
                    <div className="text-center py-10">
                        <p className="text-gray-600 text-lg">В цій категорії поки немає товарів.</p>
                        <Link
                            href="/"
                            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Переглянути інші товари
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </main>

            <PromoBanner />
        </>
    );
}
