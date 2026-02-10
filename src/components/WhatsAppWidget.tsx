import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatsAppWidget() {
  return (
    <motion.a
      href="tel:+79373910382"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute right-16 w-48 text-right hidden md:block">
        Позвонить на фабрику
      </div>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer relative">
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        <Phone size={26} color="white" />
      </div>
    </motion.a>
  );
}
