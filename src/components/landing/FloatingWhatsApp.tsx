import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://wa.me/5548999545649"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 animate-bounce-slow"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="absolute right-full mr-3 bg-white text-foreground text-xs font-semibold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
                Fale conosco
            </span>
        </a>
    );
};

export default FloatingWhatsApp;
