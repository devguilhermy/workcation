import { FiFilter, FiSearch } from 'react-icons/fi';

import { useState } from 'react';

export default function SearchBar() {
    const [isFiltersMenuOpen, setIsFiltersMenuOpen] = useState(true);

    return (
        <section className="bg-gray-800">
            <div className="flex justify-between p-5">
                <div className="relative w-full max-w-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <FiSearch className="w-6 h-6 text-gray-600" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search by keywords"
                        className="w-full py-2 pl-10 pr-4 text-gray-300 transition bg-gray-900 border-transparent rounded-lg focus:outline-none focus:bg-gray-200 focus:text-gray-900"
                    />
                </div>
                <button
                    className={`inline-flex py-2 pl-3 pr-4 ml-4 rounded-lg  shadow focus:ring ${
                        isFiltersMenuOpen
                            ? 'bg-gray-900 hover:bg-gray-600'
                            : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                    onClick={() => setIsFiltersMenuOpen(!isFiltersMenuOpen)}
                >
                    <FiFilter className="w-6 h-6 text-gray-500" />
                    <span className="ml-1 font-medium text-white">Filters</span>
                </button>
            </div>
            <form className={`${isFiltersMenuOpen ? 'block' : 'hidden'}`}>
                {/* FIRST FIELDSET */}
                <fieldset className="p-5 border-t border-gray-900 sm:flex">
                    {/* BEDS AND BATHS */}
                    <div className="flex sm:w-1/2">
                        <label className="block w-1/2">
                            <span className="text-sm text-gray-300">
                                Bedrooms
                            </span>
                            <select className="block w-full py-2 mt-1 text-gray-300 bg-gray-700 border-transparent rounded-lg shadow focus:bg-gray-600 focus:outline-none ">
                                <option value="1">1</option>
                            </select>
                        </label>
                        <label className="block w-1/2 ml-4">
                            <span className="text-sm text-gray-300">
                                Bathrooms
                            </span>
                            <select className="block w-full py-2 mt-1 text-gray-300 bg-gray-700 border-transparent rounded-lg shadow focus:bg-gray-600 focus:outline-none">
                                <option value="1">1</option>
                            </select>
                        </label>
                    </div>
                    {/* PRICE RANGE */}
                    <div className="mt-4 sm:w-1/2 sm:mt-0 sm:ml-4">
                        <label className="block w-full">
                            <span className="text-sm text-gray-300">
                                Price range
                            </span>
                            <select className="block w-full py-2 mt-1 text-gray-300 bg-gray-700 border-transparent rounded-lg shadow focus:bg-gray-600 focus:outline-none ">
                                <option value="500">Up to $500 /wk</option>
                                <option value="1000">Up to $1,000 /wk</option>
                            </select>
                        </label>
                    </div>
                </fieldset>
                {/* PROPERTY TYPE */}
                <fieldset className="p-5 border-t border-gray-900">
                    <span className="text-sm text-gray-300">
                        <legend>Property type</legend>
                    </span>
                    <div className="sm:grid sm:grid-cols-4 sm:gap-4">
                        <label className="flex items-center mt-3">
                            <input
                                type="radio"
                                name="property_type"
                                value="house"
                                id="house"
                                className="w-6 h-6 bg-gray-900 border-transparent focus:bg-gray-700"
                            />
                            <span className="ml-3 text-white">House</span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="radio"
                                name="property_type"
                                value="apartment"
                                id="apartment"
                                className="w-6 h-6 bg-gray-900 border-transparent focus:bg-gray-700"
                            />
                            <span className="ml-3 text-white">Apartment</span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="radio"
                                name="property_type"
                                value="loft"
                                id="loft"
                                className="w-6 h-6 bg-gray-900 border-transparent focus:bg-gray-700"
                            />
                            <span className="ml-3 text-white">Loft</span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="radio"
                                name="property_type"
                                value="chalet"
                                id="chalet"
                                className="w-6 h-6 bg-gray-900 border-transparent focus:bg-gray-700"
                            />
                            <span className="ml-3 text-white">Chalet</span>
                        </label>
                    </div>
                </fieldset>
                {/* AMENITIES */}
                <fieldset className="p-5 border-t border-gray-900 sm:pb-8">
                    <span className="text-sm text-gray-300">
                        <legend>Amenities</legend>
                    </span>
                    <div className="sm:grid sm:grid-cols-4 sm:gap-3">
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="balcony"
                                id="balcony"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Balcony
                            </span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="air_conditioning"
                                id="air_conditioning"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Air conditioning
                            </span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="pool"
                                id="pool"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Pool
                            </span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="beach"
                                id="beach"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Beach
                            </span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="pet_friendly"
                                id="pet_friendly"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Pet friendly
                            </span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="kid_friendly"
                                id="kid_friendly"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Kid friendly
                            </span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="parking"
                                id="parking"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Parking
                            </span>
                        </label>
                        <label className="flex items-center mt-3">
                            <input
                                type="checkbox"
                                name="parking"
                                id="parking"
                                className="w-6 h-6 bg-gray-900 border-transparent rounded-lg focus:bg-gray-700"
                            />
                            <span className="ml-3 leading-5 text-white">
                                Wheelchair access
                            </span>
                        </label>
                    </div>
                </fieldset>
                <div className="p-5 bg-gray-900">
                    <button
                        type="submit"
                        className="block w-full px-4 py-2 ml-auto font-semibold text-white bg-blue-700 rounded-lg sm:w-auto hover:bg-blue-600"
                    >
                        Filter results
                    </button>
                </div>
            </form>
        </section>
    );
}
