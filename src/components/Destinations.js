import DestinationCard from "./DestinationCard";

function Destinations() {
    const locations = [
        {
            city: "Toronto",
            averagePrice: 120,
            propertyCount: 76,
            imageUrl:
                "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
            imageAlt: "Toronto skyline",
        },
        {
            city: "Dubai",
            averagePrice: 340,
            propertyCount: 45,
            imageUrl:
                "https://images.unsplash.com/photo-1528702748617-c64d49f918af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
            imageAlt: "Camels on Dubai beach",
        },
        {
            city: "New York",
            averagePrice: 267,
            propertyCount: 87,
            imageUrl:
                "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
            imageAlt: "New York street with trees and buildings",
        },
        {
            city: "Rio de Janeiro",
            averagePrice: 190,
            propertyCount: 12,
            imageUrl:
                "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
            imageAlt: "Rio de Janeiro bay with beachs and rocky hills",
        },
        {
            city: "Buenos Aires",
            averagePrice: 165,
            propertyCount: 55,
            imageUrl:
                "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
            imageAlt: "Buenos Aires downtown with obelisk",
        },
        {
            city: "Sidney",
            averagePrice: 120,
            propertyCount: 215,
            imageUrl:
                "https://images.unsplash.com/photo-1524820197278-540916411e20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
            imageAlt: "Sidney Opera house and sunset",
        },
    ];
    return (
        <div class="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
            <h2 class="text-2xl text-gray-900 font-bold">
                Popular destinations
            </h2>
            <p class="text-gray-600">
                A selection of great work-friendly cities with lots to see and
                explore
            </p>
            <div className="flex flex-wrap -mx-4">
                {locations.map((location) => {
                    return (
                        <div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
                            <DestinationCard data={location} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Destinations;
