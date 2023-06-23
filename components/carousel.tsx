import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts('hidden-homepage-carousel');

  if (!products?.length) return null;

  return (
    <div className="relative w-full overflow-hidden bg-sandal">
      <div className="flex animate-carousel">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            className="relative h-[30vh] w-1/2 flex-none md:w-1/4"
          >
            {product.featuredImage ? (
              <Image
                alt={product.title}
                className="h-full object-contain"
                fill
                sizes="33vw"
                src={product.featuredImage.url}
              />
            ) : null}
            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <div className="inline-flex bg-white p-2 text-sm font-semibold text-black dark:bg-black dark:text-white md:p-4 md:text-xl">
                {product.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function CarouselForHer() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts('pour-elle');

  if (!products?.length) return null;

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-b from-roseLight to-rose">
      <div className="flex animate-carousel">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            className="relative h-[30vh] w-1/2 flex-none md:w-1/4"
          >
            {product.featuredImage ? (
              <Image
                alt={product.title}
                className="h-full object-contain "
                fill
                sizes="33vw"
                src={product.featuredImage.url}
              />
            ) : null}
            
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function CarouselForHim() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts('pour-lui');

  if (!products?.length) return null;

  return (
    <div className="relative w-full overflow-hidden bg-ebony">
      <div className="flex animate-carousel">
        {[...products, ...products].map((product, i) => (
          <Link
            key={`${product.handle}${i}`}
            href={`/product/${product.handle}`}
            className="relative h-[30vh] w-1/2 flex-none md:w-1/4"
          >
            {product.featuredImage ? (
              <Image
                alt={product.title}
                className="h-full object-contain"
                fill
                sizes="33vw"
                src={product.featuredImage.url}
              />
            ) : null}
            <div className="absolute inset-y-0 right-0 flex items-center justify-center">
              <div className="inline-flex bg-white p-2 text-sm font-semibold text-black dark:bg-black dark:text-white md:p-4 md:text-xl">
                {product.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
