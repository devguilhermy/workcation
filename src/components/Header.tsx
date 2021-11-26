import { CgClose } from 'react-icons/cg';
import { FiMenu } from 'react-icons/fi';
import logoImg from '../assets/img/logo.svg';
import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900 ">
            <div className="flex items-center justify-between px-4 py-3">
                <div>
                    <img src={logoImg} alt="Logo" className="w-auto h-8" />
                </div>
                <button
                    type="button"
                    className="p-2 text-gray-400 transition hover:text-white focus:outline-none focus:text-white"
                    aria-label="Menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <CgClose className="w-8 h-8" />
                    ) : (
                        <FiMenu className="w-8 h-8" />
                    )}
                </button>
            </div>
            <nav
                className={`${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } text-white`}
            >
                <div className="px-2 pt-2 pb-5 font-medium">
                    <a
                        href="/"
                        className="block px-3 py-1 transition rounded-full hover:bg-gray-700 focus:bg-gray-700"
                    >
                        Listings
                    </a>
                    <a
                        href="/"
                        className="block px-3 py-1 mt-3 transition rounded-full hover:bg-gray-700 focus:bg-gray-700"
                    >
                        List your property
                    </a>
                    <a
                        href="/"
                        className="block px-3 py-1 mt-3 transition rounded-full hover:bg-gray-700 focus:bg-gray-700"
                    >
                        Contact
                    </a>
                </div>
                <div className="p-5 border-t border-gray-600">
                    <div className="flex items-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/55157846?v=4"
                            alt="Avatar"
                            className="h-12 transition border-4 border-gray-600 rounded-full hover:border-white cover-center"
                        />
                        <span className="ml-2 font-semibold">
                            Dev Guilhermy
                        </span>
                    </div>
                    <div className="py-2 mt-2 text-gray-400 ">
                        <a
                            href="/"
                            className="block hover:text-white focus:text-white"
                        >
                            Account
                        </a>
                        <a
                            href="/"
                            className="block mt-2 hover:text-white focus:text-white"
                        >
                            My listings
                        </a>
                        <a
                            href="/"
                            className="block mt-2 hover:text-white focus:text-white"
                        >
                            Sign out
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
