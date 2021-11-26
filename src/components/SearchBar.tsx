import { FiFilter, FiSearch } from 'react-icons/fi';

export default function SearchBar() {
    return (
        <section className="flex justify-between p-5 bg-gray-800">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <FiSearch className="w-6 h-6 text-gray-600" />
                </div>
                <input
                    type="text"
                    placeholder="Search by keywords"
                    className="w-full py-2 pl-10 pr-4 text-gray-300 transition bg-gray-900 rounded-lg focus:outline-none focus:bg-gray-200 focus:text-gray-900"
                />
            </div>
            <button className="inline-flex py-2 pl-3 pr-4 ml-2 bg-gray-700 rounded-lg shadow hover:bg-gray-600 active:bg-gray-800 focus:outline-none focus:ring">
                <FiFilter className="w-6 h-6 text-gray-500" />
                <span className="ml-1 font-medium text-white">Filters</span>
            </button>
        </section>
    );
}
