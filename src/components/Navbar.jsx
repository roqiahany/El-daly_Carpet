// import { Disclosure } from '@headlessui/react';
// import {
//   Bars3Icon,
//   XMarkIcon,
//   ShoppingCartIcon,
// } from '@heroicons/react/24/outline';
// import { Link, useLocation } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import { useContext } from 'react';
// import { CartContext } from '../../Context/CartContext';

// const navigation = [
//   { name: 'الرئيسية', href: '/', current: false },
//   { name: 'منتجاتنا', href: '/products', current: false },
//   { name: 'عننا', href: '/about', current: false },
//   { name: '50% خصومات', href: '/offers', current: false },
//   { name: 'تواصل معنا', href: '/contact', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const location = useLocation();
//   const { cartItems } = useContext(CartContext); // عدد المنتجات في الكارت

//   return (
//     <Disclosure
//       as="nav"
//       className="fixed top-0 right-0 left-0 w-full z-50 bg-[#f8f1ec]/90 backdrop-blur shadow-md"
//     >
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               {/* Logo */}
//               <div className="flex items-center">
//                 <img
//                   src="https://res.cloudinary.com/dhhjspn72/image/upload/v1756201781/ChatGPT_Image_Aug_26_2025_12_48_05_PM_nbp5l5.png"
//                   className="h-8 w-auto"
//                   alt="Logo"
//                 />
//                 <h1
//                   className="mr-2 text-2xl font-bold text-[#5a3d2b]"
//                   style={{ fontFamily: 'Cairo, sans-serif' }}
//                 >
//                   سجاد الدالى
//                 </h1>
//               </div>

//               {/* Desktop Links */}
//               <div className="hidden sm:flex space-x-4">
//                 {navigation.map((item) =>
//                   item.type === 'hash' ? (
//                     <HashLink
//                       smooth
//                       key={item.name}
//                       to={item.href}
//                       style={{ fontFamily: 'Tajawal, sans-serif' }}
//                       className={classNames(
//                         'text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34]',
//                         'rounded-md px-3 py-2 text-lg transition-colors duration-200'
//                       )}
//                     >
//                       {item.name}
//                     </HashLink>
//                   ) : (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       style={{ fontFamily: 'Tajawal, sans-serif' }}
//                       className={classNames(
//                         location.pathname === item.href
//                           ? 'bg-[#f8f1ec] text-[#7e5a3d] font-bold'
//                           : 'text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34]',
//                         'rounded-md px-3 py-2 text-lg transition-colors duration-200'
//                       )}
//                     >
//                       {item.name}
//                     </Link>
//                   )
//                 )}

//                 {/* Cart Icon */}
//                 <Link
//                   to="/cart"
//                   className="relative flex items-center justify-center text-[#5a3d2b] hover:text-[#744f34] transition-colors duration-200"
//                 >
//                   <ShoppingCartIcon className="h-6 w-6" />

//                   {cartItems.length > 0 && (
//                     <span className="absolute -top-2 -left-2 bg-[#7e5a3d] text-white text-xs px-1.5 py-0.5 rounded-full">
//                       {cartItems.length}
//                     </span>
//                   )}
//                 </Link>
//               </div>

//               {/* Mobile menu button */}
//               <div className="sm:hidden flex items-center gap-2">
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#5a3d2b] hover:bg-[#e8d9cc] focus:outline-2 focus:outline-offset-2 focus:outline-[#744f34]">
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>

//                 {/* Cart Icon Mobile */}
//                 <Link
//                   to="/cart"
//                   className="relative flex items-center justify-center text-[#5a3d2b] hover:text-[#744f34] transition-colors duration-200"
//                 >
//                   <ShoppingCartIcon className="h-6 w-6" />
//                   {cartItems.length > 0 && (
//                     <span className="absolute -top-2 -left-2 bg-[#7e5a3d] text-white text-xs px-1.5 py-0.5 rounded-full">
//                       {cartItems.length}
//                     </span>
//                   )}
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Mobile menu */}
//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pt-2 pb-3">
//               {navigation.map((item) =>
//                 item.type === 'hash' ? (
//                   <Disclosure.Button
//                     key={item.name}
//                     as={HashLink}
//                     smooth
//                     to={item.href}
//                     style={{ fontFamily: 'Tajawal, sans-serif' }}
//                     className="block rounded-md px-3 py-2 text-base text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34] transition-colors duration-200"
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 ) : (
//                   <Disclosure.Button
//                     key={item.name}
//                     as={Link}
//                     to={item.href}
//                     style={{ fontFamily: 'Tajawal, sans-serif' }}
//                     className={classNames(
//                       location.pathname === item.href
//                         ? 'bg-[#f8f1ec] text-[#7e5a3d] font-bold'
//                         : 'text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34]',
//                       'block rounded-md px-3 py-2 text-base transition-colors duration-200'
//                     )}
//                   >
//                     {item.name}
//                   </Disclosure.Button>
//                 )
//               )}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
///////////////////////////////////////////////////////

// import { Disclosure } from '@headlessui/react';
// import {
//   Bars3Icon,
//   XMarkIcon,
//   ShoppingCartIcon,
// } from '@heroicons/react/24/outline';
// import { Link, useLocation } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import { useContext } from 'react';
// import { CartContext } from '../../Context/CartContext';

// const navigation = [
//   { name: 'الرئيسية', href: '/', current: false },
//   { name: 'منتجاتنا', href: '/products', current: false },
//   { name: 'عننا', href: '/about', current: false },
//   { name: '50% خصومات', href: '/offers', current: false },
//   { name: 'تواصل معنا', href: '/contact', current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

// export default function Navbar() {
//   const location = useLocation();
//   const { cartItems } = useContext(CartContext);

//   return (
//     <Disclosure
//       as="nav"
//       className="fixed top-0 right-0 left-0 w-full z-50 bg-[#f8f1ec]/90 backdrop-blur shadow-md"
//     >
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   src="https://res.cloudinary.com/dhhjspn72/image/upload/v1756201781/ChatGPT_Image_Aug_26_2025_12_48_05_PM_nbp5l5.png"
//                   className="h-8 w-auto"
//                   alt="Logo"
//                 />
//                 <h1
//                   className="mr-2 text-2xl font-bold text-[#5a3d2b]"
//                   style={{ fontFamily: 'Cairo, sans-serif' }}
//                 >
//                   سجاد الدالى
//                 </h1>
//               </div>

//               <div className="hidden sm:flex space-x-4">
//                 {navigation.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.href}
//                     style={{ fontFamily: 'Tajawal, sans-serif' }}
//                     className={classNames(
//                       location.pathname === item.href
//                         ? 'bg-[#f8f1ec] text-[#7e5a3d] font-bold'
//                         : 'text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34]',
//                       'rounded-md px-3 py-2 text-lg transition-colors duration-200'
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}

//                 <Link
//                   to="/cart"
//                   className="relative flex items-center justify-center text-[#5a3d2b] hover:text-[#744f34] transition-colors duration-200"
//                 >
//                   <ShoppingCartIcon className="h-6 w-6" />
//                   {cartItems?.length > 0 && (
//                     <span className="absolute -top-2 -left-2 bg-[#7e5a3d] text-white text-xs px-1.5 py-0.5 rounded-full">
//                       {cartItems.length}
//                     </span>
//                   )}
//                 </Link>
//               </div>

//               <div className="sm:hidden flex items-center gap-2">
//                 <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#5a3d2b] hover:bg-[#e8d9cc] focus:outline-2 focus:outline-offset-2 focus:outline-[#744f34]">
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" />
//                   )}
//                 </Disclosure.Button>

//                 <Link
//                   to="/cart"
//                   className="relative flex items-center justify-center text-[#5a3d2b] hover:text-[#744f34] transition-colors duration-200"
//                 >
//                   <ShoppingCartIcon className="h-6 w-6" />
//                   {cartItems?.length > 0 && (
//                     <span className="absolute -top-2 -left-2 bg-[#7e5a3d] text-white text-xs px-1.5 py-0.5 rounded-full">
//                       {cartItems.length}
//                     </span>
//                   )}
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </Disclosure>
//   );
// }

////////////////////////////////////////
import { Disclosure } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const navigation = [
  { name: 'الرئيسية', href: '/', current: false },
  { name: 'منتجاتنا', href: '/products', current: false },
  { name: 'عننا', href: '/about', current: false },
  { name: '50% خصومات', href: '/offers', current: false },
  { name: 'تواصل معنا', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const location = useLocation();
  const { cartItems } = useContext(CartContext);

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 right-0 left-0 w-full z-50 bg-[#f8f1ec]/90 backdrop-blur shadow-md"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="https://res.cloudinary.com/dhhjspn72/image/upload/v1756201781/ChatGPT_Image_Aug_26_2025_12_48_05_PM_nbp5l5.png"
                  className="h-8 w-auto"
                  alt="Logo"
                />
                <h1
                  className="mr-2 text-2xl font-bold text-[#5a3d2b]"
                  style={{ fontFamily: 'Cairo, sans-serif' }}
                >
                  سجاد الدالى
                </h1>
              </div>

              {/* Desktop Links */}
              <div className="hidden sm:flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    style={{ fontFamily: 'Tajawal, sans-serif' }}
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-[#f8f1ec] text-[#7e5a3d] font-bold'
                        : 'text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34]',
                      'rounded-md px-3 py-2 text-lg transition-colors duration-200'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Cart Icon */}
                <Link
                  to="/cart"
                  className="relative flex items-center justify-center text-[#5a3d2b] hover:text-[#744f34] transition-colors duration-200"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cartItems?.length > 0 && (
                    <span className="absolute -top-2 -left-2 bg-[#7e5a3d] text-white text-xs px-1.5 py-0.5 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="sm:hidden flex items-center gap-2">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#5a3d2b] hover:bg-[#e8d9cc] focus:outline-2 focus:outline-offset-2 focus:outline-[#744f34]">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>

                {/* Cart Icon Mobile */}
                <Link
                  to="/cart"
                  className="relative flex items-center justify-center text-[#5a3d2b] hover:text-[#744f34] transition-colors duration-200"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cartItems?.length > 0 && (
                    <span className="absolute -top-2 -left-2 bg-[#7e5a3d] text-white text-xs px-1.5 py-0.5 rounded-full">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) =>
                item.type === 'hash' ? (
                  <Disclosure.Button
                    key={item.name}
                    as={HashLink}
                    smooth
                    to={item.href}
                    style={{ fontFamily: 'Tajawal, sans-serif' }}
                    className="block rounded-md px-3 py-2 text-base text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34] transition-colors duration-200"
                  >
                    {item.name}
                  </Disclosure.Button>
                ) : (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    style={{ fontFamily: 'Tajawal, sans-serif' }}
                    className={classNames(
                      location.pathname === item.href
                        ? 'bg-[#f8f1ec] text-[#7e5a3d] font-bold'
                        : 'text-[#5a3d2b] hover:bg-[#e8d9cc] hover:text-[#744f34]',
                      'block rounded-md px-3 py-2 text-base transition-colors duration-200'
                    )}
                  >
                    {item.name}
                  </Disclosure.Button>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
