import Link from 'next/link';

import LogoIcon from 'components/icons/logo';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';

const { SITE_NAME } = process.env;

export default async function Footer() {
  const currentYear = new Date().getFullYear();
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '');
  const menu = await getMenu('next-js-frontend-footer-menu');

  return (
    <footer className=" bg-sky-600">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 border-b border-t border-gray-700 py-12 transition-colors duration-150 lg:grid-cols-12">
          <div className="relative col-span-1 lg:col-span-4 mx-auto">
            <a className="flex flex-row align-middle font-bold md:mr-24" href="/">
              <span className="mr-2 h-32 ">
                <LogoIcon />
              </span>
            </a>
          </div>
          {menu.length ? (
            <nav className="col-span-1 lg:col-span-8">
              <ul className="grid  md:grid-flow-col md:grid-cols-2 md:grid-rows-4">
                {menu.map((item: Menu) => (
                  <li key={item.title} className="py-3 mx-auto md:py-0 md:pb-4">
                    <Link
                      href={item.path}
                      className="text-gray-800 transition duration-150 ease-in-out hover:text-gray-300"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
        <div className="flex w-full flex-col space-y-4 pb-10 pt-6text-sm md:flex-row">
          <p className='w-full text-center py-2'>
            &copy; {copyrightDate} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
