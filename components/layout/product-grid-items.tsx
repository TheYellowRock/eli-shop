import Grid from 'components/grid';
import { GridTileImage } from 'components/grid/tile';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductGridItems({ products }: { products: Product[] }) {
  return (
    <>
      {products.map((product) => (
        <Grid.Item key={product.handle} className="animate-fadeIn">
          <Link className="h-full w-full" href={`/product/${product.handle}`}>
            <GridTileImage
              alt={product.title}
              labels={{
                isSmall: true,
                title: product.title,
                amount: product.priceRange.maxVariantPrice.amount,
                currencyCode: product.priceRange.maxVariantPrice.currencyCode
              }}
              src={product.featuredImage?.url}
              width={600}
              height={600}
            />
          </Link>
        </Grid.Item>
      ))}
    </>
  );
}

export function ProductCercleItem({product}:{product:Product}) {
  return(
    <>
      <div className='rounded-full bg-white flex-col w-full justify-center'>
        <div className=''>
      <Image src={product.featuredImage.url} width={600}
              height={600} alt={product.featuredImage.altText} className='relative h-full w-full object-contain transition duration-300 ease-in-out hover:scale-105'/>
      <h3>{product.title}</h3>
      <h5>{product.priceRange.minVariantPrice.amount}{product.priceRange.minVariantPrice.currencyCode}</h5>
      </div>
      </div>
    </>
  )
}