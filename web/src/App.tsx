import React from "react";

function App() {
    const locations = [
        {
            title: "Los Angeles",
            description:
                "Live like the stars in these luxurious Southern California estates.",
            properties: [
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    beds: 3,
                    baths: 2,
                    title: "Modern home in city center",
                    price: 190000,
                    reviewCount: 34,
                    rating: 4,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    beds: 4,
                    baths: 1,
                    title: "Quiet living outside the city",
                    price: 175000,
                    reviewCount: 12,
                    rating: 3,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
                    beds: 5,
                    baths: 4,
                    title: "Renovated apartment uptown",
                    price: 200000,
                    reviewCount: 54,
                    rating: 5,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    beds: 3,
                    baths: 2,
                    title: "Family home in the suburbs",
                    price: 115000,
                    reviewCount: 34,
                    rating: 4,
                },
            ],
        },
        {
            title: "Phoenix",
            description:
                "Escape the cold and enjoy great weather without breaking the bank.",
            properties: [
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1447958272669-9c562446304f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
                    beds: 3,
                    baths: 2,
                    title: "Modern home in city center",
                    price: 190000,
                    reviewCount: 34,
                    rating: 4,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
                    beds: 4,
                    baths: 1,
                    title: "Quiet living outside the city",
                    price: 175000,
                    reviewCount: 12,
                    rating: 3,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1472224371017-08207f84aaae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    beds: 5,
                    baths: 4,
                    title: "Renovated apartment uptown",
                    price: 200000,
                    reviewCount: 54,
                    rating: 5,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    beds: 3,
                    baths: 2,
                    title: "Family home in the suburbs",
                    price: 115000,
                    reviewCount: 34,
                    rating: 4,
                },
            ],
        },
        {
            title: "Dallas",
            description:
                "Experience Texas living in these awesome ranch-style homes.",
            properties: [
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1471231681582-352356ab45a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
                    beds: 3,
                    baths: 2,
                    title: "Modern home in city center",
                    price: 190000,
                    reviewCount: 34,
                    rating: 4,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
                    beds: 4,
                    baths: 1,
                    title: "Quiet living outside the city",
                    price: 175000,
                    reviewCount: 12,
                    rating: 3,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1432303492674-642e9d0944b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    beds: 5,
                    baths: 4,
                    title: "Renovated apartment uptown",
                    price: 200000,
                    reviewCount: 54,
                    rating: 5,
                },
                {
                    imageUrl:
                        "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    beds: 3,
                    baths: 2,
                    title: "Family home in the suburbs",
                    price: 115000,
                    reviewCount: 34,
                    rating: 4,
                },
            ],
        },
    ];

    return (
        <div className="App">
            <div className="bg-gray-800 flex">
                <div className="px-8 py-4 max-w-md mx-auto sm:max-w-xl pb-12 lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
                    <div className="xl:max-w-lg xl:ml-auto lg:text-right">
                        <img
                            className="h-10 lg:ml-auto xl:h-12"
                            src="./img/logo.svg"
                            alt="Workcation Logo"
                        />
                        <img
                            className="mt-5 rounded-xl shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
                            src="./img/workcation.jpg"
                            alt="Woman working on the beach"
                        />
                        <h1 className="mt-6 text-gray-100 text-2xl font-semibold leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
                            You can work from anywhere.
                            <span className="text-blue-300">
                                <br />
                                Take advantage of it.
                            </span>
                        </h1>
                        <p className="mt-2 text-gray-200 text-lg italic sm:mt-4 xl:text-xl xl:mt-4">
                            Workcation helps you find places where you can relax
                            and keep up the work, because you have to take take
                            of yourself but the work is pretty important too.
                        </p>
                        <div className="mt-4 sm:mt-6 xl:mt-8 flex">
                            <a className="btn btn-indigo" href="#">
                                {" "}
                                Book your escape{" "}
                            </a>
                            <a className="btn btn-gray ml-2" href="#">
                                {" "}
                                Learn more{" "}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 lg:relative">
                    <img
                        className="absolute inset-0 h-full w-full object-cover object-center"
                        src="./img/workcation.jpg"
                        alt="Woman working on the beach"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
