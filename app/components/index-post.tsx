import CarouselItem from './Carousel/carousel-item'
import Carousel from './carousel'

export default function IndexPost() {
  return (
    <>
      {/* <img
        src="https://picsum.photos/1024"
        alt=""
        className="w-full h-96 object-cover aspect-square"
      /> */}
      {/* <div className="bg-[url('https://picsum.photos/1024')] opacity-100 duration-300 bg-cover bg-center h-96 w-full text-6xl text-white font-semibold flex items-center">
        <span className="absolute from-white bg-gradient-to-r from-30% w-full h-96" />
        <p className="text-black uppercase w-1/4 font-bold text-3xl p-12 flex mr-auto z-10">
          Travel to Samarkand
        </p>
        <span className="text-primary uppercase w-1/4 font-bold text-3xl flex mr-auto z-10 bg-black">
          <p>from {`${'998'}`} &euro;</p>
        </span>
      </div> */}

      <Carousel />
      {/* <CarouselItem /> */}
    </>
  )
}
