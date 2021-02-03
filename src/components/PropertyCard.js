function PropertyCard() {
    const data = {
        imageUrl:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Beautiful house",
        beds: 3,
        baths: 2,
        title: "Modern home in the city center",
        price: 190000,
        formattedPrice: "1,900.00",
        reviewCount: 34,
        rating: 4,
    };

    const stars = [];

    for (let i = 1; i < 6; i++) {
        stars.push(
            <svg
                className={`h-6 w-6 fill-current ${
                    i <= data.rating ? "text-teal-500" : "text-gray-300"
                }`}
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        );
    }

    return (
        <div className="bg-gray-100 h-full w-full absolute">
            <div className="bg-white m-10 rounded-lg shadow-lg border overflow-hidden max-w-sm">
                <img
                    className="w-full h-full"
                    src={data.imageUrl}
                    alt={data.imageAlt}
                />
                <div className="p-6">
                    <div className="flex items-baseline">
                        <span className="px-2 py-0.5 rounded-full bg-teal-200 text-xs  text-teal-600  font-bold uppercase tracking-wider">
                            Exclusive
                        </span>
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-lime-200 text-xs  text-lime-600 font-bold uppercase tracking-wider">
                            New
                        </span>
                        <div className="ml-4 text-xs text-gray-500 tracking-wider font-semibold uppercase">
                            {data.beds} beds &bull; {data.baths} baths
                        </div>
                    </div>
                    <h4 className="mt-2 text-xl font-bold leading-tight">
                        {data.title}
                    </h4>
                    <div className="mt-2 text-gray-600 ">
                        <span class="font-semibold text-lg">
                            ${data.formattedPrice}
                        </span>{" "}
                        <span class="text-gray-500 text-sm">/ week</span>
                    </div>
                    <div className="mt-2 text-gray-600 flex items-center">
                        {stars}
                        &nbsp;
                        <span class="ml-2 text-gray-500 text-sm">
                            {data.reviewCount} reviews
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PropertyCard;
