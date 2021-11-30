import { BsFillStarFill } from 'react-icons/bs';
import { priceFormatter } from '../utils/utils';

export interface Rental {
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
    badges: { new: boolean; premium: boolean };
    type: 'house' | 'chalet' | 'loft' | 'apartment';
    amenities: {
        balcony: boolean;
        air_conditioning: boolean;
        pool: boolean;
        beach: boolean;
        pet_friendly: boolean;
        kid_friendly: boolean;
        parking: boolean;
        wheelchair_access: boolean;
    };
}

interface RentalProps {
    data: Rental;
    className: string;
}

export default function RentalCard({ data, className }: RentalProps) {
    return (
        <div className={`${className}`}>
            <a href={`/rental/${data.id}`} className="">
                <div className="relative pb-5/6">
                    <img
                        src={data.pictures[0]}
                        alt={data.title}
                        className="absolute inset-0 w-full h-full rounded-lg shadow-md cover-center"
                    />
                </div>
                <div className="relative px-4 -mt-10">
                    <div className="px-4 py-3 transition bg-white rounded-lg shadow-lg hover:shadow-xl">
                        <p className="flex items-center mt-1 text-xs font-semibold tracking-wide">
                            <span className="text-gray-600 uppercase">
                                {data.bedroom_count}{' '}
                                {data.bedroom_count === 1 ? 'bed' : 'beds'}{' '}
                                &bull; {data.bathroom_count}{' '}
                                {data.bathroom_count === 1 ? 'bath' : 'baths'}
                            </span>
                        </p>
                        <h4 className="mt-1 text-lg font-semibold truncate">
                            {data.title}
                        </h4>
                        <p className="text-lg ">
                            <span className="text-gray-900">
                                {priceFormatter(data.weekly_price)}
                            </span>
                            <span className="ml-1 text-sm text-gray-600">
                                / wk
                            </span>
                        </p>
                        <p className="flex mt-2">
                            {[1, 2, 3, 4, 5].map((index) => {
                                return (
                                    <BsFillStarFill
                                        className={`${
                                            data.rating >= index
                                                ? 'text-blue-500'
                                                : 'text-gray-300'
                                        } w-4 h-4 ${index > 1 && 'ml-0.5'}`}
                                        key={index}
                                    />
                                );
                            })}
                            <span className="ml-2 text-xs font-semibold text-gray-600 ">
                                {data.review_count} reviews
                            </span>
                        </p>
                        <p className="flex items-center mt-4 text-xs font-semibold tracking-wide">
                            {data.badges.new && (
                                <span className="inline-block px-2.5 text-blue-800 uppercase bg-blue-300 rounded-full">
                                    new
                                </span>
                            )}
                            {data.badges.premium && (
                                <span
                                    className={`inline-block px-2.5 text-yellow-800 uppercase bg-yellow-300 rounded-full ${
                                        data.badges.new && 'ml-2'
                                    }`}
                                >
                                    premium
                                </span>
                            )}
                        </p>
                    </div>
                </div>
            </a>
        </div>
    );
}
