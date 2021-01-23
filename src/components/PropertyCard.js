function PropertyCard() {
    const data = {
        imageUrl:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Beatiful house",
        beds: 3,
        baths: 2,
        title: "Modern home in the city center",
        price: 190.0,
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
                    <h4 className="mt-2 text-xl font-bold leading-none truncate">
                        {data.title}
                    </h4>
                    <div className="mt-1 text-gray-600 ">
                        <span class="font-semibold">${data.price}</span>{" "}
                        <span class="text-gray-500 text-sm">/ week</span>
                    </div>
                    <div className=" mt-4 text-gray-600 flex">
                        {/* <span class="text-indigo-500 font-semibold">
                            {data.rating}/5 stars
                        </span> */}
                        {[1, 2, 3, 4, 5].map((key) => {
                            return (
                                <svg
                                    class="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            );
                        })}
                        &nbsp;
                        <span class="text-gray-500 text-sm">
                            (from {data.reviewCount} reviews)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
