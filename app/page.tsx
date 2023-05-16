import { CarouselForHer, CarouselForHim } from 'components/carousel';
import { BestSellerForHer, BestSellerForHim } from 'components/grid/three-items';
import Hero from 'components/hero';
import Footer from 'components/layout/footer';
import SalesHero from 'components/salesHero';
import { Suspense } from 'react';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    images: [
      {
        url: `/api/og?title=${encodeURIComponent(process.env.SITE_NAME || '')}`,
        width: 1200,
        height: 630
      }
    ],
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Suspense>
        {/* @ts-expect-error Server Component */}
        <BestSellerForHer />
        <Suspense>
          {/* @ts-expect-error Server Component */}
          <CarouselForHer />
          <Suspense>
            {/* @ts-expect-error Server Component */}
            <BestSellerForHim />
            <Suspense>
              {/* @ts-expect-error Server Component */}
              <CarouselForHim />

              <SalesHero />

              <Suspense>
                {/* @ts-expect-error Server Component */}
                <Footer />
              </Suspense>
            </Suspense>
          </Suspense>
        </Suspense>
      </Suspense>
    </>
  );
}
