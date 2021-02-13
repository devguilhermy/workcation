import { useState } from "react";
import ProfileDropdown from "./ProfileDropdown";

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const links = [
        { name: "Home", icon: "", href: "#" },
        { name: "Cities", icon: "", href: "#" },
        { name: "Help", icon: "", href: "#" },
    ];

    const profileLinks = [
        {
            name: "Hires",
            location: "#",
            icon: "",
        },
        {
            name: "My properties",
            location: "#",
            icon: "",
        },
        {
            name: "Settings",
            location: "#",
            icon: "",
        },
        {
            name: "Support",
            location: "#",
            icon: "",
        },
        {
            name: "Sign out",
            location: "#",
            icon: "",
        },
    ];

    return (
        <header className="relative bg-gray-300 shadow-md sm:flex sm:justify-between sm:px-10 sm:py-3 z-10">
            <div className="flex justify-between px-5 py-3 sm:p-0">
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
                            className="h-8 w-8 fill-current"
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
            <div className={`sm:block ${openMenu ? "block" : "hidden"}`}>
                <div class="px-4 py-4 sm:p-0 sm:flex ">
                    {links.map((link) => {
                        return (
                            <a
                                href={link.href}
                                className="mt-4 block px-2 py-2 text-2xl rounded-full  font-semibold text-gray-600  transition-all hover:text-gray-900 hover:bg-gray-400 focus:text-gray-900 focus:bg-gray-400 leading-none sm:ml-4 sm:mt-0 sm:text-xl"
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <ProfileDropdown className="hidden sm:block sm:ml-5" />
                </div>
                <div className="pt-2 px-6 border-t border-gray-400 sm:hidden">
                    <div className="mt-4 flex items-center">
                        <img
                            class="w-14 h-14 border-2 border-gray-400 rounded-full object-cover object-center"
                            src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt="Avatar"
                        />
                        <span className="ml-2 font-semibold text-xl">
                            William Doe
                        </span>
                    </div>
                    <div className={`pt-2 pb-4`}>
                        {profileLinks.map((link) => {
                            return (
                                <a
                                    class="block mt-2 text-lg hover:text-gray-500 transition"
                                    href={link.location}
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </header>
    );
}
