import { SearchIcon } from 'lucide-react'

export function Search() {
    return (
        <div className="flex gap-4">
            <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search By Category"
                    className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
                />
            </div>
            <button className="rounded-md bg-black px-6 py-2 text-white">Search</button>
        </div>
    )
}

