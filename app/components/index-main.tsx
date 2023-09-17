import EmblaCarousel from "./Carousel/EmblaCarousel"
import CarouselItemMain from "./Carousel/carousel-item-main"

const Component1 = () => <CarouselItemMain />
const Component2 = () => <CarouselItemMain />
const Component3 = () => <CarouselItemMain />
const Component4 = () => <CarouselItemMain />

const componentArray = [Component1, Component2, Component3, Component4]

export default function IndexMain() {
  return (
    <div className="hidden items-center md:flex md:w-full md:flex-col md:justify-between">
      <EmblaCarousel componentArray={componentArray} />
    </div>
  )
}
