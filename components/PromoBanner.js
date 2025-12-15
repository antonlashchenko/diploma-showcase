"use client";

export default function PromoBanner() {
    const benefits = [
        {
            icon: "🚚",
            title: "Безкоштовна доставка",
            description: "При замовленні від 10,000 ₴"
        },
        {
            icon: "📱",
            title: "AR-перегляд",
            description: "Спробуйте меблі у вашому просторі"
        },
        {
            icon: "✓",
            title: "Гарантія якості",
            description: "2 роки гарантії на всі товари"
        },
        {
            icon: "💳",
            title: "Зручна оплата",
            description: "Оплата частинами без переплат"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                        >
                            <div className="text-5xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {benefit.title}
                            </h3>
                            <p className="text-gray-600">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
