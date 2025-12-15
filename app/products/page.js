import Header from '@/components/Header';
import PromoBanner from '@/components/PromoBanner';
import ProductFilter from '@/components/ProductFilter';
import { getProductsWithImages } from '../actions';

export default async function AllProductsPage() {
    const products = await getProductsWithImages();

    return (
        <>
            <Header />

            <main className="container mx-auto px-4 sm:px-6 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Всі товари
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Перегляньте наш повний каталог меблів та знайдіть ідеальне рішення для вашого простору.
                    </p>
                </div>

                <ProductFilter initialProducts={products} showCategoryFilter={true} />
            </main>

            <PromoBanner />
        </>
    );
}
