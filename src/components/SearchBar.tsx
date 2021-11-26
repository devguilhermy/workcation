import { FiFilter, FiSearch } from 'react-icons/fi';

export default function SearchBar() {
    return (
        <section className="p-5 bg-gray-800">
            <div className="flex justify-between">
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
            </div>
            <form>
                <fieldset>
                    <div>
                        <label>
                            <span>Bedrooms</span>
                            <select name="bedroom_count" id="bedroom_count">
                                <option value="1">1</option>
                            </select>
                        </label>
                        <label>
                            <span>Bathrooms</span>
                            <select name="bathroom_count" id="bathroom_count">
                                <option value="1">1</option>
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span>Price range</span>
                            <select name="price_range" id="price_range">
                                <option value="500">Up to $500 /wk</option>
                                <option value="1000">Up to $1,000 /wk</option>
                            </select>
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Property type</legend>
                    <label>
                        <input
                            type="radio"
                            name="property_type"
                            value="house"
                            id="house"
                        />
                        <label htmlFor="house">House</label>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="property_type"
                            value="apartment"
                            id="apartment"
                        />
                        <label htmlFor="apartment">Apartment</label>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="property_type"
                            value="loft"
                            id="loft"
                        />
                        <label htmlFor="loft">Loft</label>
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Amenities</legend>
                    <label>
                        <input type="checkbox" name="balcony" id="balcony" />
                        <label htmlFor="balcony">Balcony</label>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="air_conditioning"
                            id="air_conditioning"
                        />
                        <label htmlFor="air_conditioning">
                            Air conditioning
                        </label>
                    </label>
                    <label>
                        <input type="checkbox" name="pool" id="pool" />
                        <label htmlFor="pool">Pool</label>
                    </label>
                    <label>
                        <input type="checkbox" name="beach" id="beach" />
                        <label htmlFor="beach">Beach</label>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="pet_friendly"
                            id="pet_friendly"
                        />
                        <label htmlFor="pet_friendly">Pet friendly</label>
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            name="kid_friendly"
                            id="kid_friendly"
                        />
                        <label htmlFor="kid_friendly">Kid friendly</label>
                    </label>
                    <label>
                        <input type="checkbox" name="parking" id="parking" />
                        <label htmlFor="parking">Parking</label>
                    </label>
                </fieldset>
                <div>
                    <button type="submit">Filter results</button>
                </div>
            </form>
        </section>
    );
}
