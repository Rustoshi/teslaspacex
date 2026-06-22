"use client";

import { usePathname } from "next/navigation";

const TELEGRAM_USERNAME = "tesla_space_x_support";

export default function TelegramChat() {
    const pathname = usePathname();

    // Hide on admin routes
    const isAdmin = pathname?.startsWith("/admin");
    if (isAdmin) return null;

    return (
        <a
            href={`https://t.me/${TELEGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on Telegram"
            className="fixed bottom-[90px] right-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] shadow-lg shadow-black/30 transition-transform duration-200 hover:scale-110 active:scale-95"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="h-7 w-7 translate-x-[-1px]"
            >
                <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
            </svg>
        </a>
    );
}
