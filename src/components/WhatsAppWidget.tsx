import { motion } from 'framer-motion';

export function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/79990000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
    >
      <div className="bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity absolute right-16 w-48 text-right hidden md:block">
        Напишите нам, скинем прайс
      </div>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer relative">
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        <svg viewBox="0 0 24 24" width="32" height="32" fill="white">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.696c1.005.578 1.933.882 3.149.887 3.182 0 5.768-2.587 5.768-5.771.001-3.185-2.585-5.765-5.765-5.765zm6.818 5.771c-.001 3.766-3.059 6.821-6.823 6.821-1.373 0-2.316-.363-3.238-.809l-3.613.948.962-3.513c-.569-1.034-.949-2.071-.948-3.447 0-3.765 3.06-6.821 6.823-6.821 3.762 0 6.82 3.055 6.819 6.821h.001zm-3.493-1.745c-.193-.095-1.141-.561-1.317-.626-.176-.064-.303-.096-.429.096-.127.191-.491.626-.601.753-.111.128-.223.145-.415.048-.193-.097-1.127-.414-2.146-1.321-.796-.707-1.333-1.581-1.491-1.852-.158-.271-.016-.418.081-.515.086-.086.192-.224.288-.336.095-.111.127-.191.191-.319.064-.128.032-.24-.016-.336-.048-.096-.429-1.033-.588-1.415-.154-.373-.312-.321-.429-.327-.111-.005-.238-.006-.365-.006-.127 0-.335.048-.511.239-.176.191-.672.655-.672 1.597 0 .942.688 1.852.784 1.98.096.128 1.354 2.067 3.279 2.898 1.925.831 1.925.554 2.274.52.348-.034 1.141-.466 1.302-.916.16-.45.16-.836.112-.917-.048-.081-.176-.128-.368-.224z" />
        </svg>
      </div>
    </motion.a>
  );
}
