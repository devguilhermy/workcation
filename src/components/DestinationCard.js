function DestinationCard(props) {
    return (
        <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <img
                class="h-32 w-32 flex-shrink-0"
                src={props.data.imageUrl}
                alt={props.data.imageAlt}
            />
            <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {props.data.city}
                </h3>
                <p className="text-gray-600">
                    ${props.data.averagePrice} / night average
                </p>
                <div className="mt-4">
                    <a
                        href="/properties"
                        className="text-indigo-500 hover:text-indigo-400 font-semibold text-sm"
                    >
                        Explore {props.data.propertyCount} properties
                    </a>
                </div>
            </div>
        </div>
    );
}
export default DestinationCard;
