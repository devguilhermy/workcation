import { ReactNode, useEffect, useState } from 'react';

interface DropdownProps {
    className: string;
    trigger: ReactNode;
    items: ReactNode;
}

export default function Dropdown({ className, trigger, items }: DropdownProps) {
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
        <div className={className}>
            <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={'relative z-40 block focus:outline-none focus:ring'}
            >
                {trigger}
            </button>
            <div className={`${isMenuOpen ? 'block' : 'hidden'}`}>
                {/* ESCAPE BUTTON */}
                <button
                    className={
                        'block fixed inset-0 z-30 w-full h-full bg-black opacity-30 cursor-default'
                    }
                    onClick={() => setIsMenuOpen(false)}
                    tabIndex={-1}
                >
                    {' '}
                </button>
                <div className="absolute right-0 z-40">{items}</div>
            </div>
        </div>
    );
}
