import { BsFillStarFill } from 'react-icons/bs';

interface RentalProps {
    data: {
        id: number;
        title: string;
        area: number;
        bathroom_count: number;
        bedroom_count: number;
        description: string;
        weekly_price: number;
        location: {
            address: string;
            latitude: number;
            longitude: number;
        };
        pictures: string[];
        rating: number;
        review_count: number;
        is_new: boolean;
        is_premium: boolean;
    };
    className: string;
}

export default function RentalCard({ data, className }: RentalProps) {
    return (
        <div className={`${className}`}>
            <div className="relative pb-5/6">
                <img
                    src={data.pictures[0]}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full rounded-lg shadow-md cover-center"
                />
            </div>
            <div className="relative px-4 -mt-10">
                <div className="px-4 py-3 bg-white rounded-lg shadow-lg ">
                    <p className="flex items-center text-xs font-semibold tracking-wide">
                        <span className="inline-block px-2.5 text-blue-800 uppercase bg-blue-300 rounded-full">
                            plus
                        </span>
                        <span className="ml-2 text-gray-600 uppercase">
                            {data.bedroom_count} beds &bull;{' '}
                            {data.bathroom_count} baths
                        </span>
                    </p>
                    <h4 className="mt-1 text-lg font-semibold truncate">
                        {data.title}
                    </h4>
                    <p className="text-lg ">
                        <span className="text-gray-900">
                            ${data.weekly_price}
                        </span>
                        <span className="ml-1 text-sm text-gray-600">/ wk</span>
                    </p>
                    <p className="flex mt-2">
                        <BsFillStarFill
                            className={`${
                                data.rating >= 1 ? 'inline' : 'hidden'
                            } w-4 h-4 text-blue-500`}
                        />
                        <BsFillStarFill
                            className={`${
                                data.rating >= 2 ? 'inline' : 'hidden'
                            } ml-0.5 w-4 h-4 text-blue-500`}
                        />
                        <BsFillStarFill
                            className={`${
                                data.rating >= 3 ? 'inline' : 'hidden'
                            } ml-0.5 w-4 h-4 text-blue-500`}
                        />
                        <BsFillStarFill
                            className={`${
                                data.rating >= 4 ? 'inline' : 'hidden'
                            } ml-0.5 w-4 h-4 text-blue-500`}
                        />
                        <BsFillStarFill
                            className={`${
                                data.rating === 5 ? 'inline' : 'hidden'
                            } ml-0.5 w-4 h-4 text-blue-500`}
                        />
                        <span className="ml-2 text-xs font-semibold text-gray-600 ">
                            {data.review_count} reviews
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
