import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/9174594195"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-2xl text-3xl z-50"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;