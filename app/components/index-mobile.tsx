import EmblaCarousel from "./Carousel/EmblaCarousel"
import CarouselItem from "./Carousel/carousel-item"
import DestinationCard from "./DestinationCard"

const Component1 = () => <CarouselItem />
const Component2 = () => <CarouselItem />
const Component3 = () => <CarouselItem />
const Component4 = () => <CarouselItem />

const componentArray = [Component1, Component2, Component3, Component4]

export default function IndexMobile() {
  return (
    <div className="flex w-full flex-col justify-between text-black md:hidden">
      <EmblaCarousel componentArray={componentArray} />
      <p className="mx-5 mt-5 text-xl font-bold">
        Popular destinations in this month
      </p>
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
    </div>
  )
}
