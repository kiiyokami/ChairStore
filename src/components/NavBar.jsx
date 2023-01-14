import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky z-10 top-0 flex flex-wrap items-center justify-between px-2 py-3 bg-blue-500 mb-3 navbar">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white uppercase"
              href="/"
            >
              Chair Store
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
              <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold text-white hover:opacity-75"
                  href="/search"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
              </li>
              <li className="nav-item">
                  
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold text-white hover:opacity-75"
                  href="/cart"
                >
                   <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}