import { HeroPromo } from 'components/hero';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <HeroPromo />
      <div className="mx-auto flex lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl flex-col bg-white py-6 text-black md:flex-row">
        <div className="order-first flex-none md:w-1/6">
          <Collections />
        </div>
        <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        <div className="order-none md:order-last md:w-1/6 md:flex-none">
          <FilterList list={sorting} title="Trier par" />
        </div>
      </div>
      {/* @ts-expect-error Server Component */}
      <Footer />
    </Suspense>
  );
}
