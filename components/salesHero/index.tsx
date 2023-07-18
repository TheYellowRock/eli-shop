export default function SalesHero() {
  return (
    <>
      <main className=" overflow-hidden bg-gradient-to-b from-white to-tealLight">
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto w-full px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto  gap-x-14 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full lg:w-1/2 lg:shrink-0 lg:pl-4 xl:pl-6 2xl:pl-10 3xl:pl-24">
                  <h1 className="pb-8 text-center text-4xl font-light tracking-tight text-gray-900 lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl">
                    Découvrez notre incroyable collection de parfums alliant une qualité
                    exceptionnelle et des prix abordables.
                  </h1>
                  <p className="relative mt-6 text-justify font-extralight leading-8 text-gray-600 sm:max-w-md lg:max-w-none lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">
                    Nous sommes fiers de vous offrir une gamme de fragrances exquises, conçues avec
                    soin et passion. Chaque parfum est le fruit d'une expertise parfumée unique,
                    captivant les sens et laissant une empreinte mémorable. Ne manquez pas
                    l'occasion de parcourir l'intégralité de notre collection, où vous trouverez
                    certainement la fragrance parfaite qui correspond à votre style et à votre
                    personnalité. Visitez notre collection dès maintenant et laissez-vous envoûter
                    par la beauté olfactive qui vous attend.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <a
                      href="/search"
                      className="w-full text-right text-sm font-extralight uppercase leading-6 text-gray-900 lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl"
                    >
                      Découvrez la collection <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 ">
                  <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                    <div className="mx-auto w-1/3 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80 lg:px-1  xl:px-4 2xl:px-6 3xl:px-10">
                      <div className="relative">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/TheOne.png?v=1683868014"
                          alt=""
                          className="aspect-[2/3] w-full  object-cover shadow-lg"
                        />
                      </div>
                    </div>
                    <div className="mx-auto w-1/3 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36 lg:px-1  xl:px-4 2xl:px-6 3xl:px-10">
                      <div className="relative">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/LogoEli.png?v=1684263399"
                          alt=""
                          className="aspect-[2/3] w-full  object-cover"
                        />
                      </div>
                      <div className="relative">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/slide2.jpg?v=1684329940"
                          alt=""
                          className="aspect-[2/3] w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="mx-auto w-1/3 flex-none space-y-8 pt-32 sm:pt-0 lg:px-1  xl:px-4 2xl:px-6 3xl:px-10">
                      <div className="relative">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/slide.jpg?v=1684329941"
                          alt=""
                          className="aspect-[2/3] w-full  object-cover "
                        />
                      </div>
                      <div className="relative">
                        <img
                          src="https://cdn.shopify.com/s/files/1/0764/5514/9880/files/MyWay.png?v=1683803552"
                          alt=""
                          className="aspect-[2/3] w-full  object-cover shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
