import { BsFillStarFill } from 'react-icons/bs';

export default function RentalList() {
    return (
        <main className="px-4 py-6">
            <h2 className="hidden">Search results</h2>
            <h3 className="text-xl font-semibold text-gray-800">Los Angeles</h3>
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
                            <p className="flex items-center text-xs font-semibold tracking-wide">
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
                                <span className="text-gray-900">$1,400</span>
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
    );
}
