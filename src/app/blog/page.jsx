'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/navbar';
import Link from 'next/link';

// Mock blog post data
const blogPosts = [
    {
        category: 'Film making',
        title: 'AI in Ad & Film making',
        description: 'Revolutionizing Creativity Discover how artificial intelligence is reshaping ad film production in unprecedented ways.',
        date: 'Jun 25, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 25
    },
    {
        category: 'IAM News',
        title: 'Industry Innovations Unveiled',
        description: 'Exploring the latest breakthroughs and transformative technologies in our industry.',
        date: 'Jul 10, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 18
    },
    {
        category: 'Sports',
        title: 'Performance Enhancement Technologies',
        description: 'How cutting-edge tech is revolutionizing athlete training and performance monitoring.',
        date: 'Aug 5, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 22
    },
    {
        category: 'Initiatives',
        title: 'Community Impact Programs',
        description: 'Highlighting groundbreaking initiatives that are making a difference in local communities.',
        date: 'Sep 15, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 15
    },
    {
        category: 'IAM News',
        title: 'Industry Innovations Unveiled',
        description: 'Exploring the latest breakthroughs and transformative technologies in our industry.',
        date: 'Jul 10, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 18
    },
    {
        category: 'Sports',
        title: 'Performance Enhancement Technologies',
        description: 'How cutting-edge tech is revolutionizing athlete training and performance monitoring.',
        date: 'Aug 5, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 22
    },
    {
        category: 'Initiatives',
        title: 'Community Impact Programs',
        description: 'Highlighting groundbreaking initiatives that are making a difference in local communities.',
        date: 'Sep 15, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 15
    },
    {
        category: 'IAM News',
        title: 'Industry Innovations Unveiled',
        description: 'Exploring the latest breakthroughs and transformative technologies in our industry.',
        date: 'Jul 10, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 18
    },
    {
        category: 'Sports',
        title: 'Performance Enhancement Technologies',
        description: 'How cutting-edge tech is revolutionizing athlete training and performance monitoring.',
        date: 'Aug 5, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 22
    },
    {
        category: 'Initiatives',
        title: 'Community Impact Programs',
        description: 'Highlighting groundbreaking initiatives that are making a difference in local communities.',
        date: 'Sep 15, 2025',
        imageUrl: '/placeholder.svg',
        readTime: 15
    },
    // Add more mock posts to fill the grid
    ...Array(10).fill(null).map((_, index) => ({
        category: 'Filmmaking',
        title: `Blog Post Title ${index + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et d...',
        date: `Aug ${15 + index}, 2025`,
        imageUrl: '/placeholder.svg',
        readTime: 10 + index
    }))
];

export default function BlogPage() {
    // State for current page and category filter
    const [currentPage, setCurrentPage] = useState(2);
    const [selectedCategory, setSelectedCategory] = useState('All Category');
    const [searchQuery, setSearchQuery] = useState('');

    // Categories for filtering
    const categories = ['All Category', 'Film making', 'IAM News', 'Sports', 'Initiatives'];

    // Filtering and pagination logic
    const filteredPosts = blogPosts.filter(post =>
        (selectedCategory === 'All Category' || post.category === selectedCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Pagination
    const postsPerPage = 9;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    // Handlers
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    return (
        <main className="min-h-screen bg-white text-black">
            <Navbar />
            <div className=" mx-auto px-72 py-8 mt-10">
                
                {/* Header Section */}
                <div className="mb-12">
                    <span className="text-sm text-gray-500">Blog Post</span>
                    <h1 className="text-4xl font-bold mt-2 mb-4">Blog Insights & Industry News</h1>
                    <p className="text-gray-600">
                        Explore curated articles, tips, and resources shared by industry leaders and experts.
                    </p>
                </div>

                {/* Featured Post */}
                <Link href="/blog/post" className="block relative mb-12 group cursor-pointer">
                    <div className="relative h-[800px] w-full overflow-hidden rounded-xl">
                        <Image
                            src="/bg-blog.svg"
                            alt="AI in Filmmaking"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 p-8 text-white w-full bg-opacity-50 backdrop-blur-sm">
                            <h2 className="text-3xl font-bold mb-2">AI in Ad & Film making</h2>
                            <p className="text-gray-200 mb-4">
                                Revolutionizing Creativity Discover how artificial intelligence is reshaping ad film production in
                                unprecedented ways.
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                        <span className="text-xs">25</span>
                                    </span>
                                    <span className="text-sm text-gray-400">Jun 25, 2025</span>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-white/10 text-sm">Film making</span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Category and Search Filters */}
                <div className="flex items-center justify-between  mb-12">
                    <div className="flex gap-4 bg-yellow-100">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-4 py-2 rounded-xl text-md transition-colors ${selectedCategory === category
                                        ? 'bg-black text-white'
                                        : ' hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                    <div className="relative ">
                        <input
                            type="search"
                            placeholder="Search article..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            className="px-4 py-2 bg-yellow-100 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-100 border-0 w-96 placeholder:text-black"
                        />
                        <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-black  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedPosts.map((post, index) => (
                        <article key={index} className="group cursor-pointer">
                            <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                                <Image
                                    src={post.imageUrl}
                                    alt="Blog post"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="mb-2">
                                <span className="text-sm text-gray-500">{post.category}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {post.description}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`flex-none w-10 h-10 rounded-xl md:mr-10 flex items-center justify-center border border-gray-300 ${currentPage === 1
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white hover:bg-black hover:text-white transition-colors'
                            }`}
                        aria-label="Previous page"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <div className="flex justify-center gap-2">
                        {[...Array(totalPages)].map((_, idx) => {
                            const pageNumber = idx + 1;
                            const isCurrentPage = currentPage === pageNumber;

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handlePageChange(pageNumber)}
                                    className={`w-10 h-10 rounded-xl flex items-center justify-center border border-gray-300 transition-colors ${isCurrentPage
                                            ? 'bg-black text-white'
                                            : 'bg-white hover:bg-black hover:text-white'
                                        }`}
                                    aria-label={`Go to page ${pageNumber}`}
                                    aria-current={isCurrentPage ? 'page' : undefined}
                                >
                                    {pageNumber}
                                </button>
                            );
                        })}
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`flex-none md:ml-10 w-10 h-10 rounded-xl flex items-center justify-center border border-gray-300 ${currentPage === totalPages
                                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                : 'bg-white hover:bg-black hover:text-white transition-colors'
                            }`}
                        aria-label="Next page"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </main>
    );
}