import { Link } from '@remix-run/react'

export default function CarouselItem() {
  return (
    <>
      <div className="flex h-96 w-full flex-col items-center justify-center gap-5 bg-[url('https://picsum.photos/1024')] bg-cover bg-center px-5 text-white opacity-100 duration-300">
        <p className="z-10 w-full text-left text-2xl font-bold text-black">
          Travel to Samarkand
        </p>
        <p className="z-10 w-full text-left text-base text-black">
          Lorem Ipsum is simply dummy text printing and typesetting industry
        </p>
        <p className="z-10 mr-auto flex bg-black px-5 py-3 text-left text-2xl font-bold text-primary">
          from {`${'998'}`} &euro;
        </p>
        <Link
          to="/post"
          className="z-10 flex w-full justify-center rounded-lg bg-primary px-5 py-3 text-center text-xl font-bold text-black"
        >
          Learn more
        </Link>
        <span className="absolute h-96 w-full bg-gradient-to-r from-white from-50% opacity-80" />
      </div>
    </>
  )
}