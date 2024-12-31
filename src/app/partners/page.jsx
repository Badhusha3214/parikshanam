import { Search } from "../components/search"
import { RentalGrid } from "../components/rental_grid"
import { FooterSection } from '../components/footer'
import Navbar from "../components/navbar"

export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 mt-16">
        {/* Hero Section */}
        <section className="relative w-full ">
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="h-[200px] sm:h-[350px] w-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/bg-img.png')",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <h1 className="text-mobile-mid lg:text-mid font-bold text-white text-center max-w-[90%]">
              Preferred{" "}
              <span className="relative inline-block">
                Partners
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-brand" />
              </span>
            </h1>
          </div>
        </section>

        {/* Main Content Section */}
        <div className="w-full max-w-[90%] md:max-w-[680px] lg:max-w-[1600px] mx-auto px-4 py-6">
          {/* Search Section */}
          <div className="w-full">
            <Search />
          </div>

          {/* Results Count */}
          <div className="mt-4 text-tsh text-fontColor-subtle">
            Showing 48 results out of 129,627 based on the filter criteria.
          </div>
          {/* Rental Grid */}
          <div className="my-6">
          
            <RentalGrid />
          </div>
        </div>
      </main>


      <FooterSection />
    </div>
  )
}