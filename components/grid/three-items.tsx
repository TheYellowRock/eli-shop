import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  background
}: {
  item: Product;
  size: 'full' | 'half';
  background: 'white' | 'pink' | 'purple' | 'black' | 'athens' | 'loblolly' | 'ebony' | 'sandal';
}) {
  return (
    <div
      className={size === 'full' ? 'lg:col-span-4 lg:row-span-2' : 'lg:col-span-2 lg:row-span-1'}
    >
      <Link className="block h-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.featuredImage.url}
          width={size === 'full' ? 900 : 540}
          height={size === 'full' ? 900 : 540}
          priority={true}
          background={background}
          alt={item.title}
          labels={{
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function BestSellerForHer() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts('hidden-best-seller-for-her');

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <>
      <div className=" bg-loblolly pb-2 pt-10 text-center text-5xl font-bold text-dark md:pb-5 md:pt-20 lg:text-7xl">
        Best-Seller
      </div>
      <div className=" bg-loblolly pb-10 text-center text-3xl font-light text-dark md:pb-20 lg:text-5xl">
        Pour Elle
      </div>
      <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2" data-testid="homepage-products">
        <ThreeItemGridItem size="full" item={firstProduct} background="loblolly" />
        <ThreeItemGridItem size="half" item={secondProduct} background="ebony" />
        <ThreeItemGridItem size="half" item={thirdProduct} background="sandal" />
      </section>
    </>
  );
}

export async function BestSellerForHim() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts('hidden-best-seller-for-him');

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <>
      <div className=" bg-loblolly pb-2 pt-10 text-center text-5xl font-bold text-dark md:pb-5 md:pt-20 lg:text-7xl">
        Best-Seller
      </div>
      <div className=" bg-loblolly pb-10 text-center text-3xl font-light text-dark md:pb-20 lg:text-5xl">
        Pour Lui
      </div>
      <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2" data-testid="homepage-products">
        <ThreeItemGridItem size="half" item={firstProduct} background="loblolly" />
        <ThreeItemGridItem size="full" item={secondProduct} background="ebony" />
        <ThreeItemGridItem size="half" item={thirdProduct} background="sandal" />
      </section>
    </>
  );
}
