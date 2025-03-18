import React from "react";

const Header: React.FC = () => {
    return (
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Giặt Sấy Thông Minh</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><a href="#services" className="hover:underline">Dịch vụ</a></li>
                    <li><a href="#pricing" className="hover:underline">Bảng giá</a></li>
                    <li><a href="#contact" className="hover:underline">Liên hệ</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
