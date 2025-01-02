'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const BlogArticle = () => {
    const articles = [
        {
            category: 'IAM News',
            title: 'Blog post title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d...',
            image: '/blogimg.png'
        },
        {
            category: 'Initiatives',
            title: 'Blog post title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d...',

            image: '/blogimg.png'
        },
        {
            category: 'IAM News',
            title: 'Blog post title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d...',

            image: '/blogimg.png'
        },
        {
            category: 'IAM News',
            title: 'Blog post title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d...',

            image: '/blogimg.png'
        },
        {
            category: 'Initiatives',
            title: 'Blog post title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d...',

            image: '/blogimg.png'
        },
        {
            category: 'IAM News',
            title: 'Blog post title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et d...',

            image: '/blogimg.png'
        },
    ]

    return (
        <section className="py sm:py-[20px] lg:py-[30px] xl:py-[50px]">
            <div className="container mx-auto px-4">
            <div className="flex flex-col xl:flex-row justify-between items-center mb-8">
    <div>
        <span className="text-sm text-black bg-yellow-100 p-1 rounded-lg font-medium">blog</span>
        <h2 className="text-4xl font-bold mt-2">Latest Articles</h2>
        <p className="text-gray-600 mt-2">
            Donec ac odio tempor orci dapibus ultrices. Ut lectus arcu bibendum at varius
            vel pharetra vel. Enim sed faucibus turpis in eu mi bibendum.
        </p>
    </div>
    <Link href="/posts" className="bg-yellow-400 hover:bg-black hover:text-yellow-400 px-6 mt-2 py-2 font-medium self-start xl:self-auto">
        View All Posts →
    </Link>
</div>

                <div className="relative">
                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next-custom',
                            prevEl: '.swiper-button-prev-custom',
                        }}
                        spaceBetween={30}
                        slidesPerView={3}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="relative"
                    >
                        {articles.map((article, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg overflow-hidden">
                                    <div className="relative h-80 w-full">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover rounded-xl"
                                        />
                                    </div>
                                    <div className="py-6">
                                        <span className="text-lg text-gray-600">{article.category}</span>
                                        <h3 className="text-3xl font-bold mt-2">{article.title}</h3>
                                        <p className="text-gray-600 text-lg mt-2">{article.description}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="flex justify-end mt-8 space-x-4">
                        <button
                            className="swiper-button-prev-custom bg-white border-2 md:border-4 border-black p-4 md:p-4 rounded-xl hover:bg-yellow-400 transition-colors"
                        >
                            <ChevronLeft className="text-gray-800 w-4 h-4 md:w-6 md:h-6" />
                        </button>
                        <button
                            className="swiper-button-next-custom bg-white border-2 md:border-4 border-black p-4 md:p-4 rounded-xl hover:bg-yellow-400 transition-colors"
                        >
                            <ChevronRight className="text-gray-800 w-4 h-4 md:w-6 md:h-6" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogArticle
