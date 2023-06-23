import Link from "next/link";


export default function Hero() {
  return (
    <>
      <div className="grid h-screen grid-cols-1  grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div className="relative flex overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0734/6654/4406/files/ForHer.jpg?v=1681912930"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex w-full flex-col items-center justify-center bg-black bg-opacity-10 p-8 transition-transform duration-700  hover:scale-110 hover:bg-opacity-30 sm:p-12">
            <h2 className="mt-20 text-4xl font-medium text-white text-opacity-75">Pour</h2>
            <p className="mt-1 text-7xl font-extrabold uppercase text-white">Elle</p>
            <a
              href="/search/pour-elle"
              className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Acheter Maintenant
            </a>
          </div>
        </div>
        <div className="relative flex overflow-hidden ">
          <img
            src="https://cdn.shopify.com/s/files/1/0734/6654/4406/files/ForHim.jpg?v=1681912930"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex w-full flex-col items-center justify-center bg-black bg-opacity-10 p-8 transition-transform duration-700  hover:scale-110 hover:bg-opacity-30 sm:p-12">
            <h2 className="mt-20 text-4xl font-medium text-white text-opacity-75">Pour</h2>
            <p className="mt-1 text-7xl font-extrabold uppercase text-white">Lui </p>
            <a
              href="/search/pour-lui"
              className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Acheter maintenant
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function Genders() {
  return (
    <>
      <div className="grid grid-cols-1  grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <Link className="p-4" href="/search/pour-elle">
          <div  className="bg-gradient-to-r from-roseLight  text-white to-rose p-5 hover:from-offWhite hover:to-roseLight hover:text-rose"> 
          <h2 className="w-full text-4xl font-medium text-right text-opacity-75">Pour</h2>
            <p className="w-full mt-1 text-7xl text-right font-extrabold uppercase">Elle</p>

          </div>
        </Link>
        <Link className="p-4"  href="/search/pour-lui">
          <div className="p-5 text-white  bg-gradient-to-r from-tealLight to-teal hover:from-offWhite hover:to-tealLight hover:text-teal" >
          <h2 className=" text-4xl font-mediumtext-opacity-75">Pour</h2>
            <p className="mt-1 text-7xl font-extrabold uppercase">Lui </p>

          </div>
        </Link>
      </div>
    </>
  )
}

export function HeroBanner() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row justify-around bg-gradient-to-b from-offWhite to-roseLight ">
        <div className="w-2/3 p-2 xl:p-16">
          <div className=" text-3xl text-center my-6 font-paris xl:text-7xl font-extralight animate-fade-up animate-duration-1000 animate-delay-500 animate-ease-in-out">
            Vivez l'essence du luxe olfactif à chaque instant
          </div>
          <div className=" text-center my-6 text-lg xl:text-3xl font-extralight animate-fade-up animate-duration-1000 animate-delay-800 animate-ease-in-out">
            
            Explorez notre univers parfumé et laissez-vous transporter
            Vers des horizons envoûtants de sophistication et de beauté.
          </div>
        </div>

      </div>
    </div>
  );
}
