import { ReactNode, useEffect, useState } from 'react';

interface DropdownProps {
    trigger: ReactNode;
    items: ReactNode;
}

export default function Dropdown({ trigger, items }: DropdownProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const escEvent = (e: KeyboardEvent) => {
            if (isMenuOpen && (e.key === 'Esc' || e.key === 'Escape')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('keydown', escEvent);

        return () => document.removeEventListener('keydown', escEvent);
    }, [isMenuOpen]);

    return (
        <div>
            <button
                className="relative z-30 hidden h-10 transition sm:w-10 sm:overflow-hidden sm:border-4 sm:border-gray-600 sm:rounded-full sm:block sm:hover:border-white xl:border-gray-200 xl:hover:border-gray-400 sm:focus:outline-none sm:focus:border-white xl:focus:border-gray-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {trigger}
            </button>

            {/* ESCAPE BUTTON */}
            <button
                className={`hidden sm:fixed sm:inset-0 sm:z-20 sm:w-full sm:h-full sm:bg-black sm:opacity-30 sm:cursor-default ${
                    isMenuOpen ? 'sm:block' : 'sm:hidden'
                }`}
                onClick={() => setIsMenuOpen(false)}
            >
                {' '}
            </button>
            <div
                className={`py-2 sm:py-0 mt-2 text-gray-400 sm:absolute sm:bg-white sm:shadow-xl sm:right-0 sm:z-30 sm:rounded-lg sm:w-48 sm:text-base sm:overflow-hidden sm:text-gray-800  ${
                    isMenuOpen ? 'block' : 'sm:hidden'
                }`}
            >
                {items}
            </div>
        </div>
    );
}
