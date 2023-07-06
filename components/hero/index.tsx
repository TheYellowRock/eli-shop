import Link from 'next/link';

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
        <div className="relative flex overflow-hidden  ">
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
          <div className="bg-gradient-to-r from-roseLight  to-rose p-5 text-white hover:from-offWhite hover:to-roseLight hover:text-rose">
            <h2 className="w-full text-right text-4xl font-medium text-opacity-75">Pour</h2>
            <p className="mt-1 w-full text-right text-7xl font-extrabold uppercase">Elle</p>
          </div>
        </Link>
        <Link className="p-4" href="/search/pour-lui">
          <div className="bg-gradient-to-r from-tealLight  to-teal p-5 text-white hover:from-offWhite hover:to-tealLight hover:text-teal">
            <h2 className=" font-mediumtext-opacity-75 text-4xl">Pour</h2>
            <p className="mt-1 text-7xl font-extrabold uppercase">Lui </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export function HeroBanner() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-row justify-around bg-gradient-to-b from-offWhite to-roseLight ">
        <div className="w-2/3 p-2 xl:p-16">
          <div className=" animate-fade-up animate-duration-1000 animate-delay-500 animate-ease-in-out my-6 text-center font-paris text-3xl font-extralight xl:text-7xl">
            Vivez l'essence du luxe olfactif à chaque instant
          </div>
          <div className=" animate-fade-up animate-duration-1000 animate-delay-800 animate-ease-in-out my-6 text-center text-lg font-extralight xl:text-3xl">
            Explorez notre univers parfumé et laissez-vous transporter Vers des horizons envoûtants
            de sophistication et de beauté.
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroPourElle() {
  return (
    <div className="mx-auto mt-5 h-auto max-w-7xl lg:mt-20">
      <div className="relative flex  overflow-hidden ">
        <img
          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/pourElle.jpg?v=1688543224"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="justify-right relative ml-auto flex w-1/2 flex-col items-center p-6 lg:p-16">
          <div className="pb-5 pt-5 text-xl font-light lg:pt-28 lg:text-5xl">
            Découvrez l'essence de l'élégance{' '}
          </div>
          <div className="pb-10 pt-5 text-sm font-extralight lg:pb-28 lg:text-2xl">
            Notre collection repousse les limites de la parfumerie traditionnelle et présente des
            fragrances innovantes.
          </div>
          <Link
            href="/search/pour-elle"
            className="my-5 border border-black p-2 text-sm font-extralight uppercase text-black hover:bg-black hover:text-white lg:mt-10 lg:p-5 lg:text-3xl"
          >
            Collection Pour Femme
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HeroPourLui() {
  return (
    <div className="mx-auto h-auto max-w-7xl">
      <div className="relative flex  overflow-hidden ">
        <img
          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/pourLui.jpg?v=1688543224"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="justify-right relative mr-auto flex w-1/2 flex-col items-center p-6 lg:p-16">
          <div className="pb-5 pt-5 text-xl font-light lg:pt-28 lg:text-5xl">
            Affirmez votre Parfum Signature{' '}
          </div>
          <div className="pb-10 pt-5 text-sm font-extralight lg:pb-28 lg:text-2xl">
            Notre collection de parfums pour hommes présente une variété d'options captivantes qui
            font des cadeaux inoubliables.
          </div>
          <Link
            href="/search/pour-lui"
            className="my-5 border border-black p-2 text-sm font-extralight uppercase text-black hover:bg-black hover:text-white lg:mt-10 lg:p-5 lg:text-3xl"
          >
            Collection Pour Homme
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export function HeroPromo() {
  return (
    <div className="mx-auto mt-5 h-auto max-w-7xl ">
      <div className="relative flex  overflow-hidden ">
        <img
          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/PromoBanner.jpg?v=1688547800"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="justify-right relative mr-auto flex w-1/2 flex-col items-center p-5">
          <div className="pb-5 pt-5 text-2xl font-extrabold text-white lg:text-5xl">1 + 1 = 3 </div>
          <div className="pb-5  text-2xl font-extrabold text-white lg:text-5xl">2 + 2 = 5 </div>
          <div className="pb-5  text-center text-sm font-extralight lg:text-2xl">
            Utilisez le code promo: ELISUMMER
          </div>
        </div>
      </div>
    </div>
  );
}
