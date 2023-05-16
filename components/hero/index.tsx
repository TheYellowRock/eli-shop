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
              Shop now
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
              href="#"
              className="mt-4 rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-50"
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
