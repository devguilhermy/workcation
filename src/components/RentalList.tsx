import { Rental } from './RentalCard';
import RentalCard from './RentalCard';
import { useState } from 'react';

interface RentalListProps {
    className?: string;
}

export default function RentalList({ className }: RentalListProps) {
    const [rentalList] = useState<Rental[]>([
        {
            id: 1,
            title: 'Cozy lake House',
            area: 420,
            bathroom_count: 5,
            bedroom_count: 6,
            description: 'This house is perfect to be with family and have fun',
            location: {
                address: 'Marietta St, 4, New York',
                latitude: 56.232342,
                longitude: -23.889424,
            },
            weekly_price: 3800,
            pictures: [
                'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                'https://images.unsplash.com/photo-1621571113981-f51bde2a125b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
            ],
            rating: 4.5,
            review_count: 18,
            badges: {
                new: true,
                premium: true,
            },
            type: 'chalet',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: true,
                beach: true,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 6,
            title: 'Pool modern house',
            area: 200,
            bathroom_count: 3,
            bedroom_count: 4,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 2500,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 5,
            review_count: 10,
            badges: {
                new: false,
                premium: true,
            },
            type: 'house',
            amenities: {
                balcony: false,
                air_conditioning: true,
                pool: true,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 2,
            title: 'Cottage in the Swiss mountains',
            area: 129,
            bathroom_count: 3,
            bedroom_count: 4,
            description: 'Amazing house to relax and enjoy the snowy view.',
            location: {
                address: '3716 Kandergrund, Switzerland',
                latitude: 46.561807,
                longitude: 7.646569,
            },
            weekly_price: 2800,
            pictures: [
                'https://images.unsplash.com/photo-1567607351039-460841f82915?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
            ],
            rating: 5,
            review_count: 18,
            badges: {
                new: true,
                premium: true,
            },
            type: 'chalet',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: true,
                beach: true,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 3,
            title: 'Downtown modern house',
            area: 78,
            bathroom_count: 2,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1900,
            location: {
                address: '12 Flowers Blvd, Chicago',
                latitude: 41.933392,
                longitude: -87.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 5,
            review_count: 33,
            badges: {
                new: true,
                premium: true,
            },
            type: 'house',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: true,
                beach: true,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 5,
            title: 'Quiet living outside the city',
            area: 134,
            bathroom_count: 4,
            bedroom_count: 5,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1900,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
            ],
            rating: 5,
            review_count: 74,
            badges: {
                new: true,
                premium: true,
            },
            type: 'house',
            amenities: {
                balcony: false,
                air_conditioning: true,
                pool: true,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 7,
            title: 'Cozy apartment with vista',
            area: 92,
            bathroom_count: 2,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1750,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 4,
            review_count: 91,
            badges: {
                new: false,
                premium: true,
            },
            type: 'apartment',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: false,
                beach: false,
                pet_friendly: false,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 8,
            title: 'High balcony downtown',
            area: 80,
            bathroom_count: 3,
            bedroom_count: 2,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1400,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 5,
            review_count: 31,
            badges: {
                new: true,
                premium: false,
            },
            type: 'apartment',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: false,
                beach: false,
                pet_friendly: false,
                kid_friendly: true,
                parking: true,
                wheelchair_access: false,
            },
        },

        {
            id: 9,
            title: 'Nature connected apartment',
            area: 59,
            bathroom_count: 2,
            bedroom_count: 2,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1350,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 4,
            review_count: 19,
            badges: {
                new: false,
                premium: true,
            },
            type: 'apartment',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: true,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },

        {
            id: 10,
            title: 'Apartment in the city heart',
            area: 40,
            bathroom_count: 1,
            bedroom_count: 1,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 990,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1613575831056-0acd5da8f085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 4,
            review_count: 45,
            badges: {
                new: false,
                premium: true,
            },
            type: 'apartment',
            amenities: {
                balcony: false,
                air_conditioning: true,
                pool: false,
                beach: false,
                pet_friendly: false,
                kid_friendly: false,
                parking: true,
                wheelchair_access: true,
            },
        },

        {
            id: 11,
            title: 'Spacious and cozy studio',
            area: 110,
            bathroom_count: 4,
            bedroom_count: 4,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1900,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80',
            ],
            rating: 5,
            review_count: 39,
            badges: {
                new: false,
                premium: true,
            },
            type: 'apartment',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: false,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: false,
                wheelchair_access: true,
            },
        },
        {
            id: 12,
            title: 'Minimalist living',
            area: 50,
            bathroom_count: 2,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1400,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1628592102751-ba83b0314276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1097&q=80',
            ],
            rating: 4,
            review_count: 4,
            badges: {
                new: true,
                premium: true,
            },
            type: 'loft',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: false,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: false,
            },
        },
        {
            id: 13,
            title: 'Modern aesthetic loft',
            area: 58,
            bathroom_count: 2,
            bedroom_count: 4,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 2500,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1597498178146-3e9378203bc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
            ],
            rating: 5,
            review_count: 24,
            badges: {
                new: false,
                premium: true,
            },
            type: 'loft',
            amenities: {
                balcony: false,
                air_conditioning: true,
                pool: false,
                beach: false,
                pet_friendly: false,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 14,
            title: 'Cozy loft in the suburbs',
            area: 60,
            bathroom_count: 3,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1300,
            location: {
                address: 'Barcelona, Spain',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1561495935-cafaf7d196e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 4,
            review_count: 39,
            badges: {
                new: false,
                premium: true,
            },
            type: 'loft',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: true,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 15,
            title: 'Japanese style house by the woods',
            area: 140,
            bathroom_count: 3,
            bedroom_count: 5,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 3500,
            location: {
                address: 'Japan',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1629292116668-921112f088db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 5,
            review_count: 9,
            badges: {
                new: true,
                premium: true,
            },
            type: 'house',
            amenities: {
                balcony: false,
                air_conditioning: false,
                pool: true,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 16,
            title: 'Modern living by the beach',
            area: 114,
            bathroom_count: 2,
            bedroom_count: 5,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 2400,
            location: {
                address: 'Japan',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://media.istockphoto.com/photos/luxury-modern-living-room-interior-with-panoramic-sea-view-picture-id1322290907?b=1&k=20&m=1322290907&s=170667a&w=0&h=d942xWez0mXsbbJ3DHLSFvkN9lRNFU4a777tc6lYp0A=',
            ],
            rating: 5,
            review_count: 32,
            badges: {
                new: false,
                premium: true,
            },
            type: 'loft',
            amenities: {
                balcony: false,
                air_conditioning: true,
                pool: true,
                beach: true,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 17,
            title: 'Quiet chalet in the forest',
            area: 91,
            bathroom_count: 1,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1700,
            location: {
                address: 'Japan',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            ],
            rating: 4,
            review_count: 39,
            badges: {
                new: false,
                premium: false,
            },
            type: 'chalet',
            amenities: {
                balcony: true,
                air_conditioning: false,
                pool: false,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: false,
            },
        },
        {
            id: 18,
            title: 'Chalet facing snowy mountains',
            area: 84,
            bathroom_count: 3,
            bedroom_count: 5,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 2800,
            location: {
                address: 'Switzerland',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1584098731526-e3924fad98db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            ],
            rating: 5,
            review_count: 19,
            badges: {
                new: false,
                premium: true,
            },
            type: 'chalet',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: false,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: false,
            },
        },
        {
            id: 19,
            title: 'Rustic chalet in the woods',
            area: 45,
            bathroom_count: 2,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1380,
            location: {
                address: 'USA',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1515126610754-a10f0df8fd3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            ],
            rating: 3,
            review_count: 22,
            badges: {
                new: false,
                premium: false,
            },
            type: 'chalet',
            amenities: {
                balcony: true,
                air_conditioning: false,
                pool: false,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: false,
            },
        },
        {
            id: 20,
            title: 'Playful rural wooden house',
            area: 60,
            bathroom_count: 3,
            bedroom_count: 3,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1500,
            location: {
                address: 'USA',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1522071500372-f0fd8c452178?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            ],
            rating: 5,
            review_count: 70,
            badges: {
                new: false,
                premium: true,
            },
            type: 'chalet',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: true,
                beach: false,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
        {
            id: 4,
            title: 'Wooden house in the suburbs',
            area: 104,
            bathroom_count: 3,
            bedroom_count: 4,
            description: 'Technological house with aesthetic decoration.',
            weekly_price: 1300,
            location: {
                address: '3 Marblehead, Massachusets',
                latitude: 12.933392,
                longitude: -37.646569,
            },
            pictures: [
                'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
            ],
            rating: 3,
            review_count: 12,
            badges: {
                new: true,
                premium: true,
            },
            type: 'house',
            amenities: {
                balcony: true,
                air_conditioning: true,
                pool: true,
                beach: true,
                pet_friendly: true,
                kid_friendly: true,
                parking: true,
                wheelchair_access: true,
            },
        },
    ]);

    return (
        <main className={`py-6 ${className} overflow-x-auto`}>
            <h2 className="hidden">List of properties</h2>
            <div>
                <div className="px-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Houses
                    </h3>
                    <p className="text-gray-600">
                        Amazing cozy houses for you to have good moments with
                        family.
                    </p>
                </div>
                <div className="mt-6 sm:overflow-x-auto sm:pb-8">
                    {/* <div className="px-5 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-3 "> */}
                    <div className="px-5 sm:overflow-x-auto sm:inline-flex sm:-mx-3">
                        {rentalList.map(
                            (rental, index) =>
                                rental.type === 'house' && (
                                    <RentalCard
                                        data={rental}
                                        key={rental.id}
                                        className={
                                            ' sm:px-3 sm:w-72 lg:w-80 sm:flex-shrink-0'
                                        }
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="px-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Apartments
                    </h3>
                    <p className="text-gray-600">
                        Spacious and modern apartments for you to relax and
                        enjoy the view.
                    </p>
                </div>
                <div className="mt-6 sm:overflow-x-auto sm:pb-8">
                    {/* <div className="px-5 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-3 "> */}
                    <div className="px-5 sm:overflow-x-auto sm:inline-flex sm:-mx-3">
                        {rentalList.map(
                            (rental, index) =>
                                rental.type === 'apartment' && (
                                    <RentalCard
                                        data={rental}
                                        key={rental.id}
                                        className={
                                            ' sm:px-3 sm:w-72 lg:w-80 sm:flex-shrink-0'
                                        }
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="px-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Lofts
                    </h3>
                    <p className="text-gray-600">
                        Modern living and space-efficient apartments.
                    </p>
                </div>
                <div className="mt-6 sm:overflow-x-auto sm:pb-8">
                    {/* <div className="px-5 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-3 "> */}
                    <div className="px-5 sm:overflow-x-auto sm:inline-flex sm:-mx-3">
                        {rentalList.map(
                            (rental, index) =>
                                rental.type === 'loft' && (
                                    <RentalCard
                                        data={rental}
                                        key={rental.id}
                                        className={
                                            ' sm:px-3 sm:w-72 lg:w-80 sm:flex-shrink-0'
                                        }
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="px-5">
                    <h3 className="text-xl font-semibold text-gray-800">
                        Chalets
                    </h3>
                    <p className="text-gray-600">
                        Cozy modern-rustic houses to enjoy cold weather with
                        family and friends.
                    </p>
                </div>
                <div className="mt-6 sm:overflow-x-auto sm:pb-8">
                    {/* <div className="px-5 sm:grid sm:grid-cols-2 sm:gap-x-4 sm:gap-y-6 lg:grid-cols-3 "> */}
                    <div className="px-5 sm:overflow-x-auto sm:inline-flex sm:-mx-3">
                        {rentalList.map(
                            (rental, index) =>
                                rental.type === 'chalet' && (
                                    <RentalCard
                                        data={rental}
                                        key={rental.id}
                                        className={
                                            ' sm:px-3 sm:w-72 lg:w-80 sm:flex-shrink-0'
                                        }
                                    />
                                )
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
