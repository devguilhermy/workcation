import { useState } from "react";

export default function Header() {
    const links = [
        { name: "Home", href: "#" },
        { name: "Cities", href: "#" },
        { name: "My properties", href: "#" },
        { name: "My trips", href: "#" },
        { name: "Help", href: "#" },
        { name: "Sign out", href: "#" },
    ];

    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="bg-gray-200 ">
            <div className="flex items-center justify-between px-5 py-3 ">
                <div className="">
                    <img
                        class="h-10"
                        src="./img/workcation-logo.svg"
                        alt="Workcation logo"
                    />
                </div>
                <div>
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
            <div class={`px-3 pt-4 pb-8 ${openMenu ? "" : "hidden"}`}>
                {links.map((link) => {
                    return (
                        <a
                            href={link.href}
                            className="mt-4 block px-2 py-2 text-2xl rounded-full font-semibold hover:bg-gray-300 focus:text-gray-700 "
                        >
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </header>
    );
}
