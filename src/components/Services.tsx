import React from "react";

interface Service {
    title: string;
    description: string;
}

const services: Service[] = [
    { title: "Giặt ủi", description: "Dịch vụ giặt ủi chuyên nghiệp." },
    { title: "Sấy khô", description: "Máy sấy hiện đại giúp quần áo nhanh khô." },
    { title: "Giặt hấp", description: "Giặt hấp cao cấp cho quần áo đặc biệt." },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 bg-white text-center">
            <h2 className="text-3xl font-bold mb-6">Dịch Vụ Của Chúng Tôi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {services.map((service, index) => (
                    <div key={index} className="p-6 border rounded-lg shadow">
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
