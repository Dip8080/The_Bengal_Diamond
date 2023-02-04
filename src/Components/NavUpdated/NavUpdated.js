import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link } from 'react-router-dom';
import('./navUp.css');

const NavUpdated = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        
<>            
<div className=''>
      <nav className="bg-light-900 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
               <Link to={'/'}> <img
                  className="h-14 w-24"
                  src="https://i.ibb.co/c1Lt7ny/Logo-Bdl-11.png"
                  alt="Workflow"
                />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                 
                  <Link to={'/'}>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                    Home
                  </a>
                  </Link>

                 <Link to={'/rings'}>
                 <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                   Rings
                  </a>
                 </Link>

                  <Link to={'/earring'}>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                    Ear Rings
                  </a>
                  </Link>

                  <Link to={'/nosepin'}>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                    Nosepin
                  </a>
                  </Link>
                  
                  <Link to={'/care'}>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                    Buying guide
                  </a>
                  </Link>
                  <Link to={'/know'}>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                    Know your diamond
                  </a>
                  </Link>
                  <Link to={'/contact'}>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                  Contact
                  </a>
                     </Link>
                  <Link to={'/calculator'}>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                    Calculator
                  </a>
                     </Link>
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-rose-700  hover:text-white px-3 py-2 rounded-md text-1xl font-medium"
                  >
                  +8801322907401
                  </a>
                 
                 
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-light-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

               <Link to='/'>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-rose-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                </Link>

                <Link to={'/rings'}>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-rose-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Rings
                </a>
                </Link>
              <Link to={'/nosepin'}>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-rose-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Nosepin
                </a>
                </Link>
                <Link to={'/earring'}>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-rose-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Ear Rings
                </a>
                </Link>
                <Link to={'/know'}>                <a
                  href="#"
                  className="text-gray-800 hover:bg-rose-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  know your diamond
                </a>
                </Link>
                <Link to={'care'}>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-rose-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Know your jewellery
                </a>
                </Link>
                <Link to={'/calculator'}>
                <a
                  href="#"
                  className="text-gray-800 hover:bg-rose-700  hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                 Calculator
                </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </div>

</>
    );
};

export default NavUpdated;