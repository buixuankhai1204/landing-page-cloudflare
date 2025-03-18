import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gray-100 text-center py-20">
            <h2 className="text-4xl font-bold mb-4">Dịch Vụ Giặt Sấy Thông Minh</h2>
            <p className="text-lg text-gray-600">Nhanh chóng - Tiện lợi - Giá tốt</p>
            <a href="#contact" className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-full">
                Đặt dịch vụ ngay
            </a>
        </section>
    );
};

export default HeroSection;
