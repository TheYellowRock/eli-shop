import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

import Grid from 'components/grid';
import { HeroPromo } from 'components/hero';
import Footer from 'components/layout/footer';
import ProductGridItems from 'components/layout/product-grid-items';
import { AddToCart } from 'components/product/add-to-cart';
import { Gallery } from 'components/product/gallery';
import { VariantSelector } from 'components/product/variant-selector';
import Prose from 'components/prose';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct, getProductRecommendations } from 'lib/shopify';
import { Image } from 'lib/shopify/types';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const hide = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: hide,
      follow: hide,
      googleBot: {
        index: hide,
        follow: hide
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  return (
    <>
      <HeroPromo />
      <div className="mx-auto max-w-7xl">
        <div className="lg:m-20 lg:grid lg:grid-cols-6">
          <div className="lg:col-span-3">
            <Gallery
              title={product.title}
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              images={product.images.map((image: Image) => ({
                src: image.url,
                altText: image.altText
              }))}
            />
          </div>

          <div className="px-6 lg:col-span-3 lg:px-12">
            {/* @ts-expect-error Server Component */}
            <VariantSelector options={product.options} variants={product.variants} />

            {product.descriptionHtml ? (
              <Prose className="mb-6 text-sm leading-tight" html={product.descriptionHtml} />
            ) : null}

            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
          </div>
        </div>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <RelatedProducts id={product.id} />
        </Suspense>
      </div>
      <div>
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await (await getProductRecommendations(id)).slice(0,4);

  if (!relatedProducts.length) return null;

  return (
    <div className="px-4 py-8">
      <div className="mb-4 text-3xl font-bold">Related Products</div>
      <Grid className="grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        <ProductGridItems products={relatedProducts} />
      </Grid>
    </div>
  );
}
