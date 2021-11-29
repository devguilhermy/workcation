import { FiMenu, FiSearch } from 'react-icons/fi';

import { CgClose } from 'react-icons/cg';
import Dropdown from './Dropdown';
import logoImg from '../assets/img/logo.svg';
import { useState } from 'react';

interface HeaderProps {
    className?: string;
}

export default function Header({ className }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header
            className={`bg-gray-900 xl:bg-white sm:flex sm:items-center sm:justify-between ${className}`}
        >
            <div className="flex items-center justify-between px-4 py-3 sm:py-4 xl:py-5 xl:w-72 xl:bg-gray-900 xl:justify-center">
                <div className="">
                    <img src={logoImg} alt="Logo" className="w-auto h-8" />
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="p-1 text-gray-400 transition hover:text-white focus:outline-none focus:text-white "
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
            </div>
            <nav
                className={`${
                    isMobileMenuOpen ? 'block' : 'hidden'
                } text-white xl:text-gray-800 sm:flex xl:flex-1 xl:justify-between xl:px-5 xl:items-center`}
            >
                <div className="hidden xl:relative xl:max-w-lg xl:w-full xl:block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FiSearch className="w-6 h-6 text-gray-600" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by keywords"
                        className="w-full py-2 pl-10 pr-4 text-gray-600 transition bg-gray-200 border-transparent rounded-lg shadow focus:outline-none focus:bg-white focus:text-gray-800"
                    />
                </div>
                <div className="xl:ml-5">
                    <div className="px-2 pt-2 pb-5 font-medium sm:py-0 sm:flex sm:items-center sm:px-5 sm:text-sm xl:px-0">
                        <a
                            href="/"
                            className="block px-3 py-1 transition rounded-full hover:bg-gray-700 xl:hover:bg-gray-200 xl:focus:bg-gray-200 focus:bg-gray-700"
                        >
                            Listings
                        </a>
                        <a
                            href="/"
                            className="block px-3 py-1 mt-3 transition rounded-full sm:mt-0 hover:bg-gray-700 xl:hover:bg-gray-200 xl:focus:bg-gray-200 focus:bg-gray-700"
                        >
                            List your property
                        </a>
                        <a
                            href="/"
                            className="block px-3 py-1 mt-3 transition rounded-full sm:mt-0 hover:bg-gray-700 xl:hover:bg-gray-200 xl:focus:bg-gray-200 focus:bg-gray-700"
                        >
                            Contact
                        </a>
                        <div className="relative px-3 py-3 mt-3 border-t border-gray-600 sm:p-0 sm:border-0 sm:mt-0 sm:ml-3">
                            <div className="sm:hidden">
                                <div className="flex items-center ">
                                    <img
                                        src="https://avatars.githubusercontent.com/u/55157846?v=4"
                                        alt="Avatar"
                                        className="h-12 transition border-4 border-gray-600 rounded-full hover:border-white cover-center"
                                    />
                                    <span className="ml-2 font-semibold sm:hidden">
                                        Dev Guilhermy
                                    </span>
                                </div>
                                <div className="py-2 mt-2 text-gray-400 sm:hidden">
                                    <a
                                        href="/"
                                        className="block sm:border-b hover:text-white focus:text-white "
                                    >
                                        Account
                                    </a>
                                    <a
                                        href="/"
                                        className="block mt-2 sm:border-b hover:text-white focus:text-white "
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
                            <Dropdown
                                className="hidden sm:block"
                                trigger={
                                    <span className="relative block w-10 h-10 overflow-hidden transition border-4 border-gray-600 rounded-full hover:border-white focus:border-white xl:border-gray-200 xl:hover:border-gray-400 xl:focus:border-gray-400">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/55157846?v=4"
                                            alt="Avatar"
                                            className="w-full h-full cover-center"
                                        />
                                    </span>
                                }
                                items={
                                    <div className="w-48 py-0 mt-2 overflow-hidden text-base text-gray-800 bg-white rounded-lg shadow-xl">
                                        <a
                                            href="/"
                                            className="block px-4 py-2 border-b hover:text-white focus:text-white hover:bg-gray-600 focus:bg-gray-600"
                                        >
                                            Account
                                        </a>
                                        <a
                                            href="/"
                                            className="block px-4 py-2 border-b hover:text-white focus:text-white hover:bg-gray-600 focus:bg-gray-600"
                                        >
                                            My listings
                                        </a>
                                        <a
                                            href="/"
                                            className="block px-4 py-2 hover:text-white focus:text-white hover:bg-gray-600 focus:bg-gray-600"
                                        >
                                            Sign out
                                        </a>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
