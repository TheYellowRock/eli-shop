
import { CarouselForHer } from 'components/carousel';
import { BestSellerForHer, BestSellerForHim } from 'components/grid/three-items';
import { Genders, HeroBanner } from 'components/hero';
import Footer from 'components/layout/footer';
import { ListMoreHer, ListMoreHim, ListNewHer, ListNewHim } from 'components/list/list';
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
      <HeroBanner />
      <Suspense>
            {/* @ts-expect-error Server Component */}
            <CarouselForHer />
      <Genders />
       
           {/* @ts-expect-error Server Component */}
          <BestSellerForHer />

           {/* @ts-expect-error Server Component */}
<ListNewHer />
{/* @ts-expect-error Server Component */}
<ListMoreHer />
            <Suspense>
              {/* @ts-expect-error Server Component */}
              <BestSellerForHim />
{/* @ts-expect-error Server Component */}
<ListNewHim />
{/* @ts-expect-error Server Component */}
<ListMoreHim />

                <SalesHero />

                <Suspense>
                  {/* @ts-expect-error Server Component */}
                  <Footer />
                </Suspense>
              </Suspense>
            </Suspense>
          
      
    
    </>
  );
}
