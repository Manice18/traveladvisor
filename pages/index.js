// import Map from "@/components/Map";
import PlaceDetails from "@/components/PlaceDetails";
import Map from "@/components/Map";


export default function Home() {
  return (
    <main
      className="grid grid-cols-2 mt-20"
    // {`flex min-h-screen items-center justify-between p-24`}
    >
      <PlaceDetails />
      <Map />
    </main>
  )
}
