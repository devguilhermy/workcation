import Header from '../components/Header';
import { Link } from 'react-router-dom';
import workcationingImg from '../assets/img/workcationing.jpg';

export default function Home() {
    return (
        <div className="min-h-screen antialiased bg-gray-200 lg:flex lg:flex-col lg:h-screen">
            <Header className="xl:flex-shrink-0" />
            <div className="flex flex-1">
                <div className="p-8 sm:mx-auto lg:w-1/2 lg:px-10 lg:py-8 lg:my-auto">
                    <div className="max-w-lg lg:max-w-2xl lg:ml-auto">
                        <div className="relative pb-1/2 sm:mt-6 lg:hidden ">
                            <img
                                src={workcationingImg}
                                alt="Woman workcationing on the beach"
                                className="absolute inset-0 w-full h-full rounded-lg shadow-lg cover-center"
                            />
                        </div>
                        <div className="mt-6 lg:mt-0">
                            <h2 className="text-2xl font-semibold leading-tight lg:text-4xl">
                                <span className="">
                                    You can work from anywhere.
                                </span>
                                <br />
                                <span className="text-indigo-600 ">
                                    Take advantage of it.
                                </span>
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 lg:text-xl xl:text-2xl">
                                Workcation helps you find work-friendly rentals
                                in beautiful locations so you get some work done
                                while enjoying yourself.
                            </p>
                            <div className="flex items-center mt-6">
                                <Link
                                    to="/listings"
                                    className="px-4 py-2 text-sm font-medium tracking-wide text-white uppercase transition bg-indigo-600 rounded-lg shadow-lg xl:py-3 xl:px-6 xl:text-xl hover:bg-indigo-500 sm:text-lg"
                                >
                                    See listings
                                </Link>
                                <Link
                                    to="/about"
                                    className="px-4 py-2 ml-2 text-sm font-medium tracking-wide text-white uppercase transition bg-gray-500 rounded-lg shadow-lg xl:py-3 xl:px-6 xl:text-xl hover:bg-gray-400 hover:text-gray-900 sm:text-lg"
                                >
                                    Learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden lg:block lg:w-1/2">
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="absolute inset-y-0 left-0 z-20 w-32 h-full"
                        preserveAspectRatio="none"
                    >
                        <polygon
                            className="text-gray-200 "
                            points="0,0 0,100 100,0"
                            fill="currentColor"
                        />
                    </svg>
                    <img
                        src={workcationingImg}
                        alt="Woman workcationing on the beach"
                        className="absolute inset-0 w-full h-full cover-center"
                    />
                </div>
            </div>
        </div>
    );
}
