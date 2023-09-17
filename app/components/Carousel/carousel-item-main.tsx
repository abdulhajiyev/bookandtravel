import { Link } from "@remix-run/react"

export default function CarouselItemMain() {
  return (
    <>
      <span className="absolute h-[512px] w-full bg-gradient-to-r from-white from-50% opacity-80" />
      <div className="flex h-[512px] w-full flex-col items-start justify-center gap-5 bg-[url('https://picsum.photos/1024')] bg-cover bg-center text-white opacity-100 duration-300">
        <div className="ml-16 flex flex-col gap-5">
          <p className="z-10 text-left text-4xl font-bold text-black font-primary">
            Spanish Ballad
          </p>
          <p className="z-10 text-left text-base text-black">
            Lorem Ipsum is simply dummy text printing and typesetting industry
          </p>
          <p className="z-10 mr-auto flex bg-black px-6 py-1 text-left text-2xl font-semibold text-primary">
            from {`${"998"}`} &euro;
          </p>
          <Link
            to="/post"
            className="z-10 flex w-32 justify-center rounded-lg bg-primary py-3 text-center text-xl text-black"
          >
            Learn more
          </Link>
        </div>
      </div>
    </>
  )
}
