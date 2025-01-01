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
    const [currentPage, setCurrentPage] = useState(2);
    const [selectedCategory, setSelectedCategory] = useState('All Category');
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

    const categories = ['All Category', 'Film making', 'IAM News', 'Sports', 'Initiatives'];

    const filteredPosts = blogPosts.filter(post =>
        (selectedCategory === 'All Category' || post.category === selectedCategory) &&
        (post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const postsPerPage = 9;
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const displayedPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        setIsMobileFiltersOpen(false);
    };

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <main className="min-h-screen mt-14 bg-white text-black">
            <Navbar />
            
            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto p-5 py-4 sm:py-6 lg:py-8">
                {/* Header Section */}
                <div className="space-y-2 mb-6 sm:mb-8 lg:mb-12">
                    <span className="text-xs sm:text-sm text-gray-500">Blog Post</span>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Blog Insights & Industry News</h1>
                    <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                        Explore curated articles, tips, and resources shared by industry leaders and experts.
                    </p>
                </div>

                {/* Featured Post */}
                <Link href="/blog/post" className="block group mb-8 sm:mb-12">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden rounded-lg">
                        <Image
                            src="/bg-blog.svg"
                            alt="AI in Filmmaking"
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="absolute bottom-0 p-4 sm:p-6 lg:p-8 w-full">
                            <div className="max-w-3xl space-y-2">
                                <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white">AI in Ad & Film making</h2>
                                <p className="text-sm sm:text-base text-gray-200 line-clamp-2 sm:line-clamp-none">
                                    Revolutionizing Creativity Discover how artificial intelligence is reshaping ad film production in unprecedented ways.
                                </p>
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                                            <span className="text-xs">25</span>
                                        </span>
                                        <span className="text-sm text-gray-300">Jun 25, 2025</span>
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/10 text-sm text-white">Film making</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Filters Section */}
                <div className="sticky top-0 z-10 bg-white py-4 mb-6">
                    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                        {/* Categories */}
                        <div className="overflow-x-auto scrollbar-hide">
                            <div className="flex gap-2 bg-yellow-100 p-2 rounded-xl min-w-max">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`px-3 py-1.5 rounded-xl text-sm whitespace-nowrap transition-colors
                                            ${selectedCategory === category
                                                ? 'bg-black text-white'
                                                : 'hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Search */}
                        <div className="relative flex-shrink-0 w-full sm:w-72 lg:w-96">
                            <input
                                type="search"
                                placeholder="Search article..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className="w-full px-4 py-2 bg-yellow-100 text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-200"
                            />
                            <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {displayedPosts.map((post, index) => (
                        <article key={index} className="group cursor-pointer border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 space-y-2">
                                <span className="text-xs text-gray-500">{post.category}</span>
                                <h3 className="text-lg font-semibold line-clamp-2 group-hover:text-gray-600">
                                    {post.title}
                                </h3>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {post.description}
                                </p>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-xs text-gray-500">{post.date}</span>
                                    <span className="text-xs text-gray-500">{post.readTime} min read</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 py-4">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`p-2 rounded-lg ${currentPage === 1 ? 'text-gray-400' : 'hover:bg-gray-100'}`}
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="hidden sm:flex gap-1">
                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => handlePageChange(idx + 1)}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm
                                    ${currentPage === idx + 1
                                        ? 'bg-black text-white'
                                        : 'hover:bg-gray-100'
                                    }`}
                            >
                                {idx + 1}
                            </button>
                        ))}
                    </div>

                    <div className="sm:hidden">
                        <span className="text-sm text-gray-600">
                            Page {currentPage} of {totalPages}
                        </span>
                    </div>

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`p-2 rounded-lg ${currentPage === totalPages ? 'text-gray-400' : 'hover:bg-gray-100'}`}
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </main>
    );
}

