function PropertyCard() {
    const data = {
        imageUrl:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Beatiful house",
        beds: 3,
        baths: 2,
        title: "Modern home in the city center of the town",
        price: 19000,
        reviewCount: 34,
        rating: 4,
    };

    return (
        <div className="bg-gray-100 h-full w-full absolute">
            <div className="bg-white m-10 rounded-lg shadow-lg border overflow-hidden max-w-sm">
                <img
                    className="w-full h-full"
                    src={data.imageUrl}
                    alt={data.imageAlt}
                />
                <div className="p-6">
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                        {data.beds} beds &bull; {data.baths} baths
                    </div>
                    <h4 className="text-xl font-semibold leading-none truncate">
                        {data.title}
                    </h4>
                    <div className="mt-1 text-gray-600 ">
                        ${data.price / 100}{" "}
                        <span class="text-gray-500 text-sm">/ week</span>
                    </div>
                    <div className=" mt-4 text-gray-600">
                        <span class="text-indigo-500 font-semibold">
                            {data.rating}/5 stars
                        </span>
                        &nbsp;
                        <span class="text-gray-500 text-sm">
                            from {data.reviewCount} reviews
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
