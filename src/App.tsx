import { FiFilter, FiMenu, FiSearch } from 'react-icons/fi';
import { BsFillStarFill } from 'react-icons/bs';

import logoImg from './assets/img/logo.svg';

export default function App() {
    // const [rentalList] = useState([
    //     {
    //         id: 1,
    //         title: 'Cozy Lake House',
    //         area: 420,
    //         bathroom_count: 5,
    //         bedroom_count: 6,
    //         description: 'This house is perfect to be with family and have fun',
    //         location: {
    //             address: 'Marietta St, 4, New York',
    //             latitude: 56.232342,
    //             longitude: -23.889424,
    //         },
    //         weekly_price: 3800,
    //         pictures: [
    //             'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    //             'https://images.unsplash.com/photo-1621571113981-f51bde2a125b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    //         ],
    //         rating: 4.5,
    //         review_count: 18,
    //         is_new: true,
    //         is_premium: true,
    //     },
    //     {
    //         id: 2,
    //         title: 'Cottage in the Swiss mountains',
    //         area: 129,
    //         bathroom_count: 3,
    //         bedroom_count: 4,
    //         description: 'Amazing house to relax and enjoy the snowy view.',
    //         location: {
    //             address: '3716 Kandergrund, Switzerland',
    //             latitude: 46.561807,
    //             longitude: 7.646569,
    //         },
    //         weekly_price: 2800,
    //         pictures: [
    //             'https://images.unsplash.com/photo-1567607351039-460841f82915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
    //         ],
    //         rating: 5,
    //         review_count: 18,
    //         is_new: false,
    //         is_premium: true,
    //     },
    //     {
    //         id: 3,
    //         title: 'Downtown modern house',
    //         area: 78,
    //         bathroom_count: 2,
    //         bedroom_count: 3,
    //         description: 'Technological house with aesthetic decoration.',
    //         weekly_price: 1900,
    //         location: {
    //             address: '12 Flowers Blvd, Chicago',
    //             latitude: 41.933392,
    //             longitude: -87.646569,
    //         },
    //         pictures: [
    //             'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    //         ],
    //         rating: 5,
    //         review_count: 33,
    //         is_new: false,
    //         is_premium: false,
    //     },
    //     {
    //         id: 4,
    //         title: 'Wooden house in the suburbs',
    //         area: 104,
    //         bathroom_count: 3,
    //         bedroom_count: 4,
    //         description: 'Technological house with aesthetic decoration.',
    //         weekly_price: 1300,
    //         location: {
    //             address: '3 Marblehead, Massachusets',
    //             latitude: 12.933392,
    //             longitude: -37.646569,
    //         },
    //         pictures: [
    //             'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
    //         ],
    //         rating: 3,
    //         review_count: 12,
    //         is_new: true,
    //         is_premium: false,
    //     },
    // ]);

    return (
        <div className="min-h-screen antialiased bg-gray-200">
            <header className="flex items-center justify-between px-4 py-3 text-white bg-gray-900">
                <div>
                    <img src={logoImg} alt="Logo" className="w-auto h-8" />
                </div>
                <button
                    type="button"
                    className="text-gray-400"
                    aria-label="Menu"
                >
                    <FiMenu className="w-6 h-6" />
                </button>
            </header>
            <section className="flex justify-between px-4 py-3 bg-gray-800">
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
            <main className="px-4 py-6">
                <h2 className="hidden">Search results</h2>
                <h3 className="text-xl font-semibold text-gray-600">
                    Los Angeles
                </h3>
                <p className="text-gray-600">
                    Live like the stars in these luxurious Southern California
                    estates.
                </p>
                <div className="mt-6">
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt="House"
                            className="object-cover object-center w-full h-64 rounded-lg shadow-md object-fit"
                        />
                        <div className="px-4">
                            <div className="relative px-4 py-3 -mt-10 bg-white rounded-lg shadow-lg">
                                <p className="flex items-center text-sm font-semibold tracking-wide">
                                    <span className="inline-block px-2.5 text-blue-800 uppercase bg-blue-300 rounded-full">
                                        plus
                                    </span>
                                    <span className="ml-2 text-gray-600 uppercase">
                                        3 beds &bull; 2 baths
                                    </span>
                                </p>
                                <h4 className="mt-1 text-lg font-semibold truncate">
                                    Downtown modern house
                                </h4>
                                <p className="text-lg ">
                                    <span className="text-gray-900">
                                        $1,400
                                    </span>
                                    <span className="ml-1 text-sm text-gray-600">
                                        / wk
                                    </span>
                                </p>
                                <p className="flex mt-2">
                                    <BsFillStarFill className="w-4 h-4 text-blue-500" />
                                    <BsFillStarFill className="ml-0.5 w-4 h-4 text-blue-500" />
                                    <BsFillStarFill className="ml-0.5 w-4 h-4 text-blue-500" />
                                    <BsFillStarFill className="ml-0.5 w-4 h-4 text-blue-500" />
                                    <BsFillStarFill className="ml-0.5 w-4 h-4 text-blue-500" />
                                    <span className="ml-2 text-xs font-semibold text-gray-600 ">
                                        34 reviews
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
