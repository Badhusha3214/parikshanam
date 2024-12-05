'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ChevronDown } from 'lucide-react';

export default function Navbar() {
    const [modelsOpen, setModelsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Refs for dropdowns to handle outside clicks
    const modelsDropdownRef = useRef(null);
    const moreDropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Handle responsive design
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // Changed to 1024 for more standard breakpoint
        };

        // Check on initial load
        checkMobile();

        // Add event listener for window resize
        window.addEventListener('resize', checkMobile);

        // Cleanup listener
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle clicks outside of dropdowns to close them
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check models dropdown
            if (modelsDropdownRef.current && 
                !modelsDropdownRef.current.contains(event.target)) {
                setModelsOpen(false);
            }

            // Check more dropdown
            if (moreDropdownRef.current && 
                !moreDropdownRef.current.contains(event.target)) {
                setMoreOpen(false);
            }
        };

        // Add event listener when any menu is open
        if (modelsOpen || moreOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modelsOpen, moreOpen]);

    // Toggle functions for dropdowns
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
        // Reset dropdowns when closing mobile menu
        if (mobileMenuOpen) {
            setModelsOpen(false);
            setMoreOpen(false);
        }
    };

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [mobileMenuOpen]);

    // Render link component with optional click handler
    const NavLink = ({ href, children, onClick, className, closeMenu = true }) => (
        <Link
            href={href}
            className={`block py-3 text-lg hover:text-yellow-400 transition-colors ${className || ''}`}
            onClick={(e) => {
                if (closeMenu) toggleMobileMenu();
                if (onClick) onClick(e);
            }}
        >
            {children}
        </Link>
    );

    // Main Navigation Dropdown
    const NavigationDropdown = ({ 
        title, 
        isOpen, 
        toggleDropdown, 
        children, 
        dropdownRef,
        isMobileMenu = false 
    }) => (
        <div ref={dropdownRef} className="relative">
            <button
                className={`w-full text-left py-3 text-lg flex justify-between items-center 
                    ${isMobileMenu ? 'text-white' : 'text-white'} 
                    hover:text-yellow-400 transition-colors`}
                onClick={toggleDropdown}
            >
                {title}
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </button>
            {isOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 10, y: -10 }}
                    className={`
                        ${isMobileMenu 
                            ? 'w-full z-[9000] bg-black/80 -ml-4 px-4' 
                            : 'absolute z-50 top-full mt-3 w-56 bg-gray-900/80 rounded-lg shadow-xl'}
                        py-2 border border-gray-700
                    `}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );

    return (
        <nav className="relative bg-black shadow-lg z-50">
            {/* Responsive Navigation Container */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-0">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                        <Link href="/" className="flex-shrink-0 relative z-[11000]">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="logo.svg"
                                    alt="Logo"
                                    width={120}
                                    height={40}
                                    priority
                                    className="h-8 w-auto object-contain"
                                />
                            </motion.div>
                        </Link>

                    {/* Desktop Navigation */}
                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center space-x-4 lg:space-x-8`}>
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
                            href="/partners" 
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
                                href="/careers" 
                                className="block px-4 py-2 text-white hover:bg-gray-800 hover:text-yellow-400"
                                closeMenu={false}
                            >
                                Careers
                            </NavLink>
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
                    <div className={`${isMobile ? 'hidden' : 'flex'} items-center space-x-10`}>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                href="/signin"
                                className="text-yellow-400 font-lg text-lg transition-all hover:text-yellow-300"
                            >
                                Sign In
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <Link
                                href="/join"
                                className="bg-yellow-400 text-black font-lg text-lg px-6 py-2 rounded-md 
                                transition-all hover:bg-yellow-500 hover:shadow-lg"
                            >
                                Join
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className={`${isMobile ? 'block' : 'hidden'}`}>
                        <motion.button 
                            onClick={toggleMobileMenu}
                            className="text-white focus:outline-none "
                            whileTap={{ scale: 0.9 }}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/95 z-[9999]"
                            onClick={toggleMobileMenu}
                        />
                        
                        {/* Close button at the top level */}
                        <motion.button 
                            onClick={toggleMobileMenu}
                            className=" top-4 right-4 text-white hover:text-yellow-400 absolute transition-colors z-[20000]"
                            whileTap={{ scale: 0.9 }}
                            aria-label="Close menu"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            <X className="w-8 h-8 " />
                        </motion.button>

                        {/* Menu content */}
                        <motion.div 
                            ref={mobileMenuRef}
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween' }}
                            className="fixed inset-0 bg-black text-white px-4 py-6 w-screen overflow-y-auto z-[10000]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="space-y-4 max-w-full px-1 mt-12"
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
                                        <NavLink 
                                            href="/contact"
                                            >
                                            Contact
                                        </NavLink>
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
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}