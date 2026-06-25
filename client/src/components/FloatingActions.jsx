import { Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';

function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 md:right-8">
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-[0_18px_60px_rgba(37,211,102,0.28)] transition hover:scale-105"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="group inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#5E98FF] to-[#8CDBFF] text-white shadow-[0_18px_60px_rgba(94,152,255,0.28)] transition hover:scale-105 md:hidden"
        aria-label="Call"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}

export default FloatingActions;
