import { useState } from "react";

export default function Header() {
    const links = [
        { name: "Home", icon: "", href: "#" },
        { name: "Cities", icon: "", href: "#" },
        { name: "Help", icon: "", href: "#" },
        { name: "Profile", icon: "", href: "#" },
    ];

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="bg-gray-200 sm:flex sm:justify-between sm:items-center sm:px-10 sm:py-3">
            <div className="flex items-center justify-between px-10 py-3 sm:p-0">
                <div className="">
                    <img
                        class="h-10"
                        src="./img/workcation-logo.svg"
                        alt="Workcation logo"
                    />
                </div>
                <div className="sm:hidden">
                    <button
                        type="button"
                        className="text-gray-800 hover:bg-gray-300 focus:text-gray-700"
                        onClick={() => {
                            setOpenMenu(!openMenu);
                        }}
                    >
                        <svg
                            className="h-8 w-8 fill-curren"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                className={openMenu ? "hidden" : ""}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={openMenu ? "" : "hidden"}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
            <div
                className={`px-3 pt-4 pb-8 sm:p-0 justify-center items-center text-center sm:flex  ${
                    openMenu ? "sm:block" : "hidden"
                }`}
            >
                {links.map((link) => {
                    return (
                        <a
                            href={link.href}
                            className="mt-4 mx-auto block px-2 py-2 text-2xl rounded-full w-1/3 font-semibold text-gray-600  transition-all hover:text-gray-900 hover:bg-gray-300 focus:text-gray-900 focus:bg-gray-300 leading-none sm:ml-4 sm:mt-0 sm:text-xl"
                        >
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </header>
    );
}
