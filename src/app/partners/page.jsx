import { Search } from "../components/search"
import { RentalGrid } from "../components/rental_grid"
import { FooterSection } from '../components/footer';
import Navbar from "../components/navbar"


export default function PartnersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-black/60" />
          <div
            className="h-[300px] bg-cover bg-center"
            style={{
                backgroundImage: "url('/bg-img.png')",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">
              Preferred{" "}
              <span className="relative">
                Partners
                <span className="absolute -bottom-2 left-0 h-1 w-full bg-yellow-400" />
              </span>
            </h1>
          </div>
        </section>
        <div className="container mx-auto px-4 py-8">
          <Search />
          <div className="mt-8 text-sm text-muted-foreground">
            Showing 48 results out of 129,627 based on the filter criteria.
          </div>
          <RentalGrid />
        </div>
      </main>
      <FooterSection />
    </div>
  )
}

