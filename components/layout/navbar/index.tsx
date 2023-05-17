import Link from 'next/link';
import { Suspense } from 'react';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import MobileMenu from './mobile-menu';
import Search from './search';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center justify-between bg-white  lg:px-6">
      <div className="block w-1/3 p-4 text-black md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex justify-self-center md:w-1/3 md:justify-self-start">
        <div className=" h-16 md:mr-12">
          <Link href="/" aria-label="Go back home">
            <LogoIcon className="transition-transform hover:scale-110" />
          </Link>
        </div>
        {menu.length ? (
          <ul className="hidden p-4 md:flex">
            {menu.map((item: Menu) => (
              <li key={item.title}>
                <Link
                  href={item.path}
                  className="rounded-lg px-2 py-1 text-gray-800 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <div className="hidden w-1/3 p-4 md:block">
        <Search />
      </div>

      <div className="flex w-1/3 justify-end p-4">
        <Suspense fallback={<CartIcon className="h-6" />}>
          {/* @ts-expect-error Server Component */}
          <Cart />
        </Suspense>
      </div>
    </nav>
  );
}
