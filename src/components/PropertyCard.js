export default function PropertyCard({ info }) {
    const stars = [];

    for (let i = 1; i < 6; i++) {
        stars.push(
            <svg
                className={`h-6 w-6 fill-current ${
                    i <= info.rating ? "text-teal-500" : "text-gray-300"
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
        <div className="">
            <div class="relative pb-3/4">
                <img
                    className="absolute w-full h-full object-cover rounded-lg shadow-md"
                    src={info.imageUrl}
                    alt={info.imageAlt}
                />
            </div>
            <div class="relative -mt-20 px-6">
                <div className="p-6  bg-white rounded-lg shadow-xl">
                    <div className="flex items-baseline">
                        <span className="px-2 py-0.5 rounded-full bg-teal-200 text-xs  text-teal-600  font-bold uppercase tracking-wider">
                            Exclusive
                        </span>
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-lime-200 text-xs  text-lime-600 font-bold uppercase tracking-wider">
                            New
                        </span>
                        <div className="ml-4 text-xs text-gray-500 tracking-wider font-semibold uppercase">
                            {info.beds} beds &bull; {info.baths} baths
                        </div>
                    </div>
                    <h4 className="mt-2 text-xl font-bold leading-tight tracking-tight">
                        {info.title}
                    </h4>
                    <div className="mt-1 text-gray-600 ">
                        <span class="font-semibold text-lg">
                            ${info.formattedPrice}
                        </span>{" "}
                        <span class="text-gray-500 text-sm">/ week</span>
                    </div>
                    <div className="mt-2 text-gray-600 flex items-center">
                        {stars}
                        &nbsp;
                        <span class="ml-2 text-gray-500 text-sm">
                            {info.reviewCount} reviews
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
