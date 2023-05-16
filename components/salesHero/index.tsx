export default function SalesHero() {
  return (
    <>
      <div className=" m-8 grid h-screen grid-cols-1 grid-rows-1 border-2 border-ebony md:m-16">
        <div className="relative flex overflow-hidden">
          <img
            src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/Hero.jpg?v=1684261849"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="relative flex w-full flex-col items-center justify-center bg-black bg-opacity-30 p-8 transition-transform duration-700  hover:scale-110 hover:bg-opacity-60 sm:p-12">
            <h2 className="mt-20 text-xl font-medium text-white text-opacity-75 md:text-4xl">
              DÉCOUVRIR
            </h2>
            <p className="mt-1 text-3xl font-extrabold uppercase text-white md:text-7xl">
              Nos Soldes
            </p>
            <a
              href="/search/pour-elle"
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
