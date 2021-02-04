import Header from "../components/Header";
import PropertyCard from "../components/PropertyCard";

export default function PropertyList() {
    const properties = [
        {
            imageUrl:
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
            imageAlt: "Beautiful house",
            beds: 3,
            baths: 2,
            title: "Modern home in the city center",
            price: 190000,
            formattedPrice: "1,900.00",
            reviewCount: 34,
            rating: 4,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Cool apartment downtown",
            price: 250000,
            formattedPrice: "2,500.00",
            reviewCount: 52,
            rating: 5,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
        {
            imageUrl:
                "https://images.unsplash.com/photo-1515263487990-61b07816b324",
            imageAlt: "Apartment",
            beds: 2,
            baths: 1,
            title: "Quiet studio near the park",
            price: 120000,
            formattedPrice: "1,900.00",
            reviewCount: 12,
            rating: 3,
        },
    ];

    return (
        <>
            <Header />
            <div class="p-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 xl:gap-10">
                {properties.map((property) => {
                    return <PropertyCard info={property} />;
                })}
            </div>
        </>
    );
}
