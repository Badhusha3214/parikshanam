export function RentalGrid() {
    // Simulating 8 rental items
    const rentals = Array(8).fill({
        title: "Camera Rental",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.Lorem ipsum dolor sit amet, veniam, Lorem ipsum dolor sit amet, veniam",
    })

    return (
        <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {rentals.map((rental, i) => (
                <div key={i} className="rounded-lg border border-gray-200 bg-white shadow-sm">
                    <div className="p-4">
                        <div className="flex flex-col md:flex-row gap-4">
                            <img
                                alt="Camera"
                                className="h-48 w-full md:w-44 md:h-44 rounded-lg object-cover"
                                src="/cam.png"
                            />
                            <div className="flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="mb-2 text-lg font-semibold text-fontColor-heading">
                                        {rental.title}
                                    </h3>
                                    <p className="text-tsh text-fontColor-primary line-clamp-4">
                                        {rental.description}
                                    </p>
                                </div>
                                <button className="flex items-center border-2 border-gray-400 text-fontColor-heading font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors mt-4 md:mt-0 md:w-44 justify-center">
                                    Learn More
                                    <img src="/Next.svg" alt="arrow" className="w-5 h-5 ml-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}