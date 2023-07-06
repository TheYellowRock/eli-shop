import Link from 'next/link';
import { Suspense } from 'react';

import Cart from 'components/cart';
import CartIcon from 'components/icons/cart';
import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import MobileMenu from './mobile-menu';

export default async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <div>
      <p className="flex h-16 items-center justify-center bg-gray-800 px-4 text-lg font-light text-white sm:px-6 lg:px-8">
        Livraison gratuite a partir de 30 Euro !
      </p>
      <nav className="relative mx-auto flex max-w-7xl items-baseline justify-between bg-white lg:px-6">
        <div className="block w-1/3 p-4 text-black md:hidden">
          <MobileMenu menu={menu} />
        </div>
        <div className="flex justify-self-center md:w-1/3 md:justify-self-center">
          {menu.length ? (
            <ul className="hidden p-4 md:flex">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-justify-center px-4 py-1 text-base text-gray-800 hover:font-bold "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="flex w-1/3 justify-around p-4 ">
          <div className=" h-24 ">
            <Link href="/" aria-label="Go back home">
              <LogoIcon className="transition-transform hover:scale-110" />
            </Link>
          </div>
        </div>

        <div className="flex w-1/3 justify-end p-4">
          <Suspense fallback={<CartIcon className="h-6" />}>
            {/* @ts-expect-error Server Component */}
            <Cart />
          </Suspense>
        </div>
      </nav>
    </div>
  );
}
