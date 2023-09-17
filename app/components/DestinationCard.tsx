import { Link } from "@remix-run/react"

export default function DestinationCard() {
  return (
    <Link
      to="/post"
      className="relative mx-5 mt-5 flex h-48 flex-col justify-between"
    >
      <div className="z-10 flex justify-end py-3 text-white">
        <span className="bg-primary px-3 py-1 text-black">SAMARKAND</span>
      </div>
      <div className="z-10 flex flex-col justify-start gap-3 px-5 pb-3 text-white ">
        <p className="w-4/5 truncate font-bold">
          Printing and typesetting industry. Lorem Ipsum has.
        </p>
        <p className="truncate">
          Lorem Ipsum passages, and more recently with.
        </p>
      </div>
      <img
        className="absolute h-48 w-full rounded-xl object-cover"
        src="https://picsum.photos/1024"
        alt=""
      />
      <span className="absolute h-48 w-full rounded-xl bg-black/50" />
    </Link>
  )
}

// bg-[url('https://picsum.photos/1024')] bg-cover
