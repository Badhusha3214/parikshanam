"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [modelsOpen, setModelsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const modelsDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modelsDropdownRef.current &&
        !modelsDropdownRef.current.contains(event.target)
      ) {
        setModelsOpen(false);
      }
      if (
        moreDropdownRef.current &&
        !moreDropdownRef.current.contains(event.target)
      ) {
        setMoreOpen(false);
      }
    };

    if (modelsOpen || moreOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modelsOpen, moreOpen]);

  const toggleModelsDropdown = (e) => {
    e.stopPropagation();
    setModelsOpen(!modelsOpen);
    setMoreOpen(false);
  };

  const toggleMoreDropdown = (e) => {
    e.stopPropagation();
    setMoreOpen(!moreOpen);
    setModelsOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) {
      setModelsOpen(false);
      setMoreOpen(false);
    }
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const NavLink = ({
    href,
    children,
    onClick,
    className,
    closeMenu = true,
  }) => (
    <Link
      href={href}
      className={`block py-3 text-lg hover:text-yellow-400 transition-colors ${
        className || ""
      }`}
      onClick={(e) => {
        if (closeMenu) toggleMobileMenu();
        if (onClick) onClick(e);
      }}
    >
      {children}
    </Link>
  );

  const NavigationDropdown = ({
    title,
    isOpen,
    toggleDropdown,
    children,
    dropdownRef,
    isMobileMenu = false,
  }) => (
    <div ref={dropdownRef} className="relative">
      <button
        className={`w-full text-left py-3 text-lg flex justify-between items-center 
                    ${isMobileMenu ? "text-white" : "text-white"} 
                    hover:text-yellow-400 transition-colors`}
        onClick={toggleDropdown}
      >
        {title}
        <div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      {isOpen && (
        <div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 10, y: -10 }}
          className={`
                        ${
                          isMobileMenu
                            ? "w-full z-[9000] bg-black/80 -ml-4 p"
                            : "absolute z-50 top-full mt-3 w-56 bg-gray-900/80 rounded-lg shadow-xl"
                        }
                        py-2 border border-gray-700
                    `}
        >
          {children}
        </div>
      )}
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black shadow-lg z-50 px">
      <div className="container mx-auto
       lg:px-0">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 relative z-[11000]">
            <div
              whilehover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="/logo.svg"
                alt="Logo"
                width={120}
                height={40}
                priority
                className="h-8 w-auto object-contain"
              />
            </div>
          </Link>

          <div
            className={`${
              isMobile ? "hidden" : "flex"
            } items-center space-x-4 lg:space-x-8`}
          >
            <NavLink
              href="/about"
              className="text-white font-lg text-lg transition-colors hover:text-yellow-400"
              closeMenu={false}
            >
              About
            </NavLink>
            <NavLink
              href="/members"
              className="text-white font-lg text-lg transition-colors hover:text-yellow-400"
              closeMenu={false}
            >
              Members
            </NavLink>
            <NavLink
              href="/technicians"
              className="text-white font-lg text-lg transition-colors hover:text-yellow-400"
              closeMenu={false}
            >
              Technicians
            </NavLink>
            <NavLink
              href="/partner"
              className="text-white font-lg text-lg transition-colors hover:text-yellow-400"
              closeMenu={false}
            >
              Partners
            </NavLink>

            {/* Desktop Dropdowns */}
            <NavigationDropdown
              title="Models"
              isOpen={modelsOpen}
              toggleDropdown={toggleModelsDropdown}
              dropdownRef={modelsDropdownRef}
            >
              <NavLink
                href="/models/a3"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                closeMenu={false}
              >
                a
              </NavLink>
              <NavLink
                href="/models/haiku"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                closeMenu={false}
              >
                b
              </NavLink>
              <NavLink
                href="/models/opus"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                closeMenu={false}
              >
                c
              </NavLink>
            </NavigationDropdown>

            <NavLink
              href="/subscription"
              className="text-white font-lg text-lg transition-colors hover:text-yellow-400"
              closeMenu={false}
            >
              Subscriptions
            </NavLink>

            <NavigationDropdown
              title="More"
              isOpen={moreOpen}
              toggleDropdown={toggleMoreDropdown}
              dropdownRef={moreDropdownRef}
            >
              <NavLink
                href="/research"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                closeMenu={false}
              >
                Research
              </NavLink>
              <NavLink
                href="/gallery"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                closeMenu={false}
              >
                Gallery
              </NavLink>
              <NavLink
                href="/blog"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                closeMenu={false}
              >
                blog
              </NavLink>
              {/* <NavLink 
                                href="/careers" 
                                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                                closeMenu={false}
                            >
                                Careers
                            </NavLink> */}
              <NavLink
                href="/contact"
                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                closeMenu={false}
              >
                Contact
              </NavLink>
            </NavigationDropdown>
          </div>

          {/* Desktop Auth Buttons */}
          <div
            className={`${
              isMobile ? "hidden" : "flex"
            } items-center space-x-10`}
          >
            <Link
              href="/signup"
              className="text-yellow-400 font-lg text-lg hover:text-black hover:bg-yellow-400 px-2 py-2 rounded-md"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              className="bg-yellow-400 text-black font-lg text-lg px-6 py-2 rounded-md hover:bg-black hover:text-yellow-400"
            >
              Join
            </Link>
          </div>

          <div className={`${isMobile ? "block" : "hidden"}`}>
            <button
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-[9999]"
              onClick={toggleMobileMenu}
            />

            <button
              onClick={toggleMobileMenu}
              className="top-4 right-4 text-white hover:text-yellow-400 absolute transition-colors z-[20000]"
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <X className="w-8 h-8" />
            </button>

            <div
              ref={mobileMenuRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween" }}
              className="fixed inset-0 bg-black text-white p w-screen overflow-y-auto z-[10000]"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 max-w-full p mt-12"
              >
                {/* Mobile Menu Content */}
                <div className="space-y-4">
                  <NavLink href="/about">About</NavLink>
                  <NavLink href="/members">Members</NavLink>
                  <NavLink href="/technicians">Technicians</NavLink>
                  <NavLink href="/partners">Partners</NavLink>

                  {/* Mobile Models Dropdown */}
                  <NavigationDropdown
                    title="Models"
                    isOpen={modelsOpen}
                    toggleDropdown={toggleModelsDropdown}
                    isMobileMenu={true}
                  >
                    <NavLink
                      href="/models/a3"
                      className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                    >
                      a
                    </NavLink>
                    <NavLink
                      href="/models/haiku"
                      className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                    >
                      b
                    </NavLink>
                    <NavLink
                      href="/models/opus"
                      className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                    >
                      c
                    </NavLink>
                  </NavigationDropdown>

                  <NavLink href="/subscription">Subscriptions</NavLink>

                  {/* Mobile More Dropdown */}
                  <NavigationDropdown
                    title="More"
                    isOpen={moreOpen}
                    toggleDropdown={toggleMoreDropdown}
                    isMobileMenu={true}
                  >
                    <NavLink
                      href="/research"
                      className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                    >
                      Research
                    </NavLink>
                    <NavLink
                      href="/careers"
                      className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                    >
                      Careers
                    </NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                  </NavigationDropdown>

                  {/* Mobile Auth Buttons */}
                  <div className="mt-8 space-y-4">
                    <NavLink
                      href="/signin"
                      className="block w-full text-center text-yellow-400 py-3 border border-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
                    >
                      Sign In
                    </NavLink>
                    <NavLink
                      href="/join"
                      className="block w-full text-center bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-500 transition-all"
                    >
                      Join
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
