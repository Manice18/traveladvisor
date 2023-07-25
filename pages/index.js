import PlaceDetails from "@/components/PlaceDetails";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <div className="z-10 relative">
        <Navbar />
      </div>
      <main
        className="grid grid-cols-2 mt-20"
      >
        <PlaceDetails />
        <Map />
      </main>
    </div>
  )
}
