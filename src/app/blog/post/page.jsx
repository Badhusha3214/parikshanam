'use client'

import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/navbar'
import { FooterSection } from '../../components/footer'
import BlogArticle from '../../components/blogarticle';


export default function BlogPost() {
  return (
    <div className="min-h-screen bg-white text-[16px]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mx-auto px-4 py-12 sm:py-20 mt-8">
        {/* Article Header */}
        <div className="text-center mb-8">
          <p className="text-black mb-4">Published Jan 23, 2023</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ai in Advertisement and Film Making
          </h1>
          <p className="mb-6 w-full sm:w-5/6 text-base sm:text-lg mx-auto text-black">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="flex items-center bg-green-100 p-2 rounded-xl gap-1">
              <span className="text-green-500 text-lg">Ai</span>
            </span>
            <span className="flex items-center bg-red-100 p-2 rounded-xl gap-1">
              <span className="text-red-500 text-lg">Marketing</span>
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12">
          <Image
            src="/blogpost.svg"
            alt="AI in Filmmaking"
            width={900}
            height={400}
            className="rounded-lg w-full max-w-[1550px] mx-auto"
          />
        </div>

        {/* Article Content */}
        <article className="prose max-w-none">
          <div className="max-w-[900px] mx-auto px-2 sm:px-4">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="mb-6 text-gray-700">
              Tellus rutrum tellus pellentesque eu. Purus viverra accumsan in nisl. Posuere sollicitudin aliquam ultrices sagittis orci a. Aliquam faucibus purus in massa tempor nec feugiat. Arcu ac tortor dignissim convallis aenean et. Amet mauris commodo quis imperdiet. Duis ut diam quam nulla porttitor massa id. Adipiscing elit pellentesque habitant morbi. Quam vulputate dignissim suspendisse in est ante. Iaculis urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget. Augue mauris augue neque gravida in fermentum et sollicitudin.          </p>
            <br></br>
            <p className="mb-6 text-gray-700">
              Tellus rutrum tellus pellentesque eu. Purus viverra accumsan in nisl. Posuere sollicitudin aliquam ultrices sagittis orci a. Aliquam faucibus purus in massa tempor nec feugiat. Arcu ac tortor dignissim convallis aenean et. Amet mauris commodo quis imperdiet. Duis ut diam quam nulla porttitor massa id. Adipiscing elit pellentesque habitant morbi. Quam vulputate dignissim suspendisse in est ante. Iaculis urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget. Augue mauris augue neque gravida in fermentum et sollicitudin.          </p>

            {/* Content Image */}
            <div className="my-8">
              <Image
                src="/blogpost2.svg"
                alt="Modern Building"
                width={800}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
            <p className="mb-6 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra aliquet. Sit amet tellus cras adipiscing enim eu. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Lectus proin nibh nisl condimentum id venenatis.
              <br></br><br></br>
              Tellus rutrum tellus pellentesque eu. Purus viverra accumsan in nisl. Posuere sollicitudin aliquam ultrices sagittis orci a. Aliquam faucibus purus in massa tempor nec feugiat. Arcu ac tortor dignissim convallis aenean et. Amet mauris commodo quis imperdiet. Duis ut diam quam nulla porttitor massa id. Adipiscing elit pellentesque habitant morbi. Quam vulputate dignissim suspendisse in est ante. Iaculis urna id volutpat lacus laoreet. Pharetra vel turpis nunc eget. Augue mauris augue neque gravida in fermentum et sollicitudin.          </p>

            <h2 className="text-2xl font-bold mb-4">Why AI Is Important</h2>
            <p className="mb-6 text-gray-700">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <ol className="list-decimal pl-6 mb-6 text-gray-700">
              <li>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</li>
              <li>Neque laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget</li>
              <li>Eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum</li>
              <li>Mattis aliquam faucibus purus in massa tempor. Ultrices neque ornare aenean euismod</li>
            </ol>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Conclusion
              </h3>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A diam maecenas sed enim ut sem viverra aliquam. Sit amet est placerat in egestas erat imperdiet sed euismod. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Lacus vel facilisis volutpat est velit egestas dui id ornare.
              </p>
            </div>
          </div>
        </article>

        {/* Share Section */}
        <div className="flex flex-col sm:flex-row items-center max-w-[900px] mx-auto justify-between border-t border-b border-gray-200 py-6 my-8 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <Image
              src="/blogio/logo.svg"
              alt="Author"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Admin</p>
              <p className="text-sm text-gray-600">Indian Ad Film Makers</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-[#1a1d1f] text-white rounded-lg">
              <span>Share Link</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8.8C11.4667 8.8 11 9.26667 11 9.8V13C11 13.2667 10.7333 13.5333 10.4667 13.5333H3C2.73333 13.5333 2.46667 13.2667 2.46667 13V5.53333C2.46667 5.26667 2.73333 5 3 5H6.2C6.73333 5 7.2 4.53333 7.2 4C7.2 3.46667 6.73333 3 6.2 3H3C1.6 3 0.466667 4.13333 0.466667 5.53333V13C0.466667 14.4 1.6 15.5333 3 15.5333H10.4667C11.8667 15.5333 13 14.4 13 13V9.8C13 9.26667 12.5333 8.8 12 8.8Z" fill="white" />
                <path d="M15.8667 0.466667C15.6 0.2 15.2 0.0666667 14.8 0.133333L8.86667 1.06667C8.26667 1.13333 7.86667 1.73333 7.93333 2.33333C8 2.93333 8.6 3.33333 9.2 3.26667L12.2667 2.8L6.93333 8.13333C6.53333 8.53333 6.53333 9.13333 6.93333 9.53333C7.13333 9.73333 7.4 9.8 7.66667 9.8C7.93333 9.8 8.2 9.73333 8.4 9.53333L13.7333 4.2L13.2667 7.26667C13.2 7.86667 13.6 8.46667 14.2 8.53333C14.2667 8.53333 14.2667 8.53333 14.3333 8.53333C14.8667 8.53333 15.3333 8.13333 15.4 7.6L16.3333 1.66667C16.4 1.26667 16.2 0.8 15.8667 0.466667Z" fill="white" />
              </svg>
            </button>
            <div className="flex gap-2">
              <Link href="#" className="hover:opacity-80">
                <Image src="/blogio/sm2.svg" alt="Facebook" width={50} height={50} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image src="/blogio/sm3.svg" alt="Twitter" width={50} height={50} />
              </Link>
              <Link href="#" className="hover:opacity-80">
                <Image src="/blogio/sm1.svg" alt="LinkedIn" width={50} height={50} />
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
      </main>
      <BlogArticle />
      {/* Footer */}
      <FooterSection />
    </div>
  )
}

