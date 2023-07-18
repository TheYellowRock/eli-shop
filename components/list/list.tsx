import Grid from 'components/grid';
import ProductGridItems from 'components/layout/product-grid-items';
import { getCollectionProducts } from 'lib/shopify';

export async function ListNewHer() {
  const products = await getCollectionProducts('hidden-new-elle');
  return (
    <>
      <div className="bg-gradient-to-b from-roseLight to-offWhite lg:mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 sm:py-14 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-bold tracking-tight text-gray-900">
              Nouveautés pour Elle
            </h2>
            <a
              href="#"
              className="text-teal-500 hover:text-teal-700 hidden text-sm lg:text-sm xl:text-lg 3xl:text-xl font-medium md:block"
            >
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <Grid className="grid-cols-2 lg:grid-cols-4">
            <ProductGridItems products={products} />
          </Grid>

          <div className="mt-8 pb-8 text-sm md:hidden">
            <a href="#" className="text-teal-500 hover:text-teal-700 font-medium">
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function ListMoreHer() {
  const products = await getCollectionProducts('hidden-plus-elle');
  return (
    <>
      <div className="bg-gradient-to-b from-offWhite to-white lg:mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 sm:py-14 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-bold tracking-tight text-gray-900">Plus pour Elle</h2>
            <a
              href="#"
              className="text-teal-500 hover:text-teal-700 hidden text-sm lg:text-sm xl:text-lg 3xl:text-xl font-medium md:block"
            >
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <Grid className="grid-cols-2 lg:grid-cols-4">
            <ProductGridItems products={products} />
          </Grid>

          <div className="mt-8 pb-8 text-sm md:hidden">
            <a href="#" className="text-teal-500 hover:text-teal-700 font-medium">
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function ListNewHim() {
  const products = await getCollectionProducts('hidden-new-lui');
  return (
    <>
      <div className="bg-gradient-to-b from-tealLight to-offWhite lg:mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 sm:py-14 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-bold tracking-tight text-gray-900">Nouveautés pour Lui</h2>
            <a
              href="#"
              className="text-teal-500 hover:text-teal-700 hidden text-sm lg:text-sm xl:text-lg 3xl:text-xl font-medium md:block"
            >
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <Grid className="grid-cols-2 lg:grid-cols-4">
            <ProductGridItems products={products} />
          </Grid>

          <div className="mt-8 pb-8 text-sm md:hidden">
            <a href="#" className="text-teal-500 hover:text-teal-700 font-medium">
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export async function ListMoreHim() {
  const products = await getCollectionProducts('hidden-plus-lui');
  return (
    <>
      <div className="bg-gradient-to-b from-offWhite to-white lg:mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
        <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 sm:py-14 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <h2 className="text-lg lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-bold tracking-tight text-gray-900">Plus Pour Lui</h2>
            <a
              href="#"
              className="text-teal-500 hover:text-teal-700 hidden text-sm lg:text-sm xl:text-lg 3xl:text-xl font-medium md:block"
            >
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <Grid className="grid-cols-2 lg:grid-cols-4">
            <ProductGridItems products={products} />
          </Grid>

          <div className="mt-8 pb-8 text-sm md:hidden">
            <a href="#" className="text-teal-500 hover:text-teal-700 font-medium">
              Voir plus
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
