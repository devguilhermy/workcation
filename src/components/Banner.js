function Banner() {
    return (
        <div class="flex bg-gray-100">
            <div class="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-10">
                <div class="xl:max-w-lg xl:ml-auto">
                    <img
                        class="mt-6 rounded-lg shadow-lg sm:mt-8 sm:h-80 sm:w-full sm:object-cover sm:object-center lg:hidden"
                        src="img/workcationing.jpg"
                        alt="Man workcationing on the beach"
                    />
                    <h1 class="mt-6 text-2xl font-bold text-gray-800 leading-tight sm:mt-8 sm:text-3xl lg:text-3xl xl:text-4xl">
                        You can work from anywhere.
                        <br />
                        <span class="text-brand-blue">
                            Take advantage of it.
                        </span>
                    </h1>
                    <p class="mt-2 text-gray-600 font-medium sm:mt-4 sm:text-xl">
                        Workcation helps you find work places work-friendly
                        places so you can relax but keep working on what's
                        important
                    </p>
                    <div class="mt-6">
                        <a class="btn-blue shadow-lg sm:text-base" href="#">
                            Book your escape
                        </a>
                        <a
                            class="btn-gray ml-2 shadow-lg sm:text-base"
                            href="#"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
            <div class="hidden lg:block lg:w-1/2 lg:relative">
                <img
                    class="absolute inset-0 h-full w-full object-cover object-center"
                    src="img/workcationing.jpg"
                    alt="Man workcationing on the beach"
                />
            </div>
        </div>
    );
}

export default Banner;
