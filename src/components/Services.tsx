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
            <section className="max-w-7xl mx-auto py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
                    Tại Sao Chọn <span className="text-blue-500 font-bold">Giặt Sấy Thông Minh</span>
                </h2>
                <p className="text-gray-500 mt-4">Những ưu điểm vượt trội giúp hệ thống Giặt Sấy Thông Minh luôn là sự
                    lựa chọn hàng đầu của khách hàng.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic">Tận Tâm</h3>
                                <p className="text-gray-500 text-sm">Quy trình chuyên nghiệp và nhân sự được đào tạo bài
                                    bản.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/3794/3794378.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic">Riêng Biệt</h3>
                                <p className="text-gray-500 text-sm">Mỗi khách hàng có một lồng giặt riêng, không lo
                                    thất lạc đồ.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/179/179257.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic">Cẩn Thận & Chất Lượng</h3>
                                <p className="text-gray-500 text-sm">Mỗi trang phục được chăm sóc cẩn thận bởi đội ngũ
                                    chuyên nghiệp.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic">Dịch Vụ Khách Hàng</h3>
                                <p className="text-gray-500 text-sm">Hỗ trợ 24/7 bởi đội ngũ nhân viên chuyên
                                    nghiệp.</p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex justify-center">
                        <img src="https://www.freepnglogos.com/uploads/businessman-png/businessman-exam-work-gaisinl-3.png"
                             alt="Giặt Sấy" className="w-80"/>
                    </div>

                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-blue-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/3909/3909444.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic text-blue-500">Miễn Phí Giao Nhận</h3>
                                <p className="text-gray-500 text-sm">Không tính thêm phí khi sử dụng dịch vụ.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/2382/2382358.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic">Tiện Lợi</h3>
                                <p className="text-gray-500 text-sm">Hoàn thành đơn hàng trong 12 giờ.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/3209/3209800.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic">Môi Trường</h3>
                                <p className="text-gray-500 text-sm">Sử dụng nguyên liệu xanh, tái chế và thân
                                    thiện.</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div
                                className="w-16 h-16 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                <img src="https://cdn-icons-png.flaticon.com/512/3050/3050479.png" alt="Icon"
                                     className="w-8"/>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold italic">Chăm Sóc Làn Da</h3>
                                <p className="text-gray-500 text-sm">Loại bỏ 90% tác nhân gây dị ứng, bụi bẩn.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>

    );
};

export default Services;
