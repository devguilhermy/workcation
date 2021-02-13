import { useState } from "react";
export default function ProfileDropdown({ className }) {
    const links = [
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

    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className={`relative ${className}`}>
            <button
                className="block w-12 h-12 rounded-full overflow-hidden border-2 border-gray-400 focus:outline-none focus:border-4 focus:border-indigo-500"
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <img
                    class="w-full h-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt="Avatar"
                />
            </button>
            <div
                class={`absolute right-0 mt-2 w-56 bg-white py-2 rounded-lg shadow-lg ${
                    isOpen ? "" : "hidden"
                }`}
            >
                {links.map((link) => {
                    return (
                        <a
                            class="block px-4 py-2 font-medium hover:bg-indigo-500 focus:bg-indigo-500 hover:text-white focus:text-white transition-all"
                            href={link.location}
                        >
                            {link.icon}
                            {link.name}
                        </a>
                    );
                })}
            </div>
        </div>
    );
}
