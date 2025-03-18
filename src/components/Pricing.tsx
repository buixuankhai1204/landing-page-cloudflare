import React from "react";

interface PricingPlan {
    plan: string;
    price: string;
    details: string;
}

const pricing: PricingPlan[] = [
    { plan: "Giặt ủi", price: "50,000đ", details: "Giặt sạch + ủi hơi nước" },
    { plan: "Sấy khô", price: "30,000đ", details: "Nhanh chóng, không nhăn" },
    { plan: "Giặt hấp", price: "100,000đ", details: "Giặt cao cấp, bảo vệ vải" },
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-16 bg-gray-100 text-center">
            <h2 className="text-3xl font-bold mb-6">Bảng Giá Dịch Vụ</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {pricing.map((item, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow bg-white">
                        <h3 className="text-xl font-bold">{item.plan}</h3>
                        <p className="text-blue-500 text-2xl font-bold">{item.price}</p>
                        <p className="text-gray-600">{item.details}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;
