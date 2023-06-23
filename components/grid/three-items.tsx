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
  background:
    | 'white'
    | 'pink'
    | 'purple'
    | 'black'
    | 'athens'
    | 'loblolly'
    | 'ebony'
    | 'sandal'
    | 'teal'
    | 'rose'
    | 'off-white';
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
    <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2" data-testid="homepage-products">
      <ThreeItemGridItem size="full" item={firstProduct} background="rose" />
      <ThreeItemGridItem size="half" item={secondProduct} background="off-white" />
      <ThreeItemGridItem size="half" item={thirdProduct} background="teal" />
    </section>
  );
}

export async function BestSellerForHim() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const homepageItems = await getCollectionProducts('hidden-best-seller-for-him');

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="lg:grid lg:grid-cols-6 lg:grid-rows-2" data-testid="homepage-products">
      <ThreeItemGridItem size="half" item={firstProduct} background="off-white" />
      <ThreeItemGridItem size="full" item={secondProduct} background="teal" />
      <ThreeItemGridItem size="half" item={thirdProduct} background="rose" />
    </section>
  );
}
