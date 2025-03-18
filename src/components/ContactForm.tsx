import React from "react";

const ContactForm: React.FC = () => {
    return (
        <section id="contact" className="py-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
            <form className="max-w-lg mx-auto bg-white p-6 shadow rounded-lg">
                <input type="text" placeholder="Tên của bạn" className="w-full p-3 border rounded mb-3" />
                <input type="email" placeholder="Email" className="w-full p-3 border rounded mb-3" />
                <textarea placeholder="Lời nhắn" className="w-full p-3 border rounded mb-3"></textarea>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-full">Gửi</button>
            </form>
        </section>
    );
};

export default ContactForm;
