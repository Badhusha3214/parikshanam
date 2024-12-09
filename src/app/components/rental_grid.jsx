export function RentalGrid() {
    // Simulating 8 rental items
    const rentals = Array(8).fill({
        title: "Camera Rental",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, veniam, Lorem ipsum dolor sit amet, veniam",
    })

    return (
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {rentals.map((rental, i) => (
                <div key={i} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            <img
                                alt="Camera"
                                className="h-32 w-full sm:w-40 sm:h-40 rounded-lg object-cover"
                                src="/cam.png"
                            />
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="mb-2 text-lg font-semibold">{rental.title}</h3>
                                    <p className="text-sm text-gray-600 line-clamp-4">
                                        {rental.description}
                                    </p>
                                </div>
                                <button className="flex items-center border-2 border-gray-400 text-black font-bold py-2 pl-4 sm:pl-8 rounded-full hover:bg-gray-100 transition-colors w-full sm:w-44 justify-center sm:justify-start mt-4 sm:mt-0">
                                    Learn More
                                    <img src="/Next.svg" alt="arrow" className="w-5 h-5 mx-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

