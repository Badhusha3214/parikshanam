import Link from "next/link"
import Image from "next/image"
import { ChevronLeft } from 'lucide-react'
import Navbar from "../../components/navbar"

export default function Page() {
  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="px-4 bg-[#111111] mx-auto md:px-8 lg:px-72 py-8">
          <Link href="/subscription" className="inline-flex items-center text-tsh text-gray-400 hover:text-white mb-8">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Subscriptions
          </Link>

          {/* Member Header */}
          <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <div className="bg-yellow-400 p-4 rounded-lg">
              <svg className="h-6 w-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-mid font-bold">IAM Member</h1>
              <p className="text-normal text-gray-400">
                Notion is the all-in-one workspace for notes, project management, documents, and collaboration
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid mx-auto px-4 md:px-8 lg:px-64 py-8 grid-cols-1 md:grid-cols-[200px,1fr] gap-6 lg:gap-12 bg-white text-black rounded-lg p-4 sm:p-8">
          {/* Table of Contents */}
          <aside className="space-y-4 md:sticky md:top-4">
            <h2 className="text-pch font-medium mb-4">Table Of Contents</h2>
            <ol className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 space-y-0 md:space-y-3 text-tsh pb-2 md:pb-0">
              <li className="flex-shrink-0">
                <Link href="#introduction" className="text-gray-600 hover:text-black whitespace-nowrap">
                  Introduction
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link href="#for-whom" className="text-gray-600 hover:text-black whitespace-nowrap">
                  For Whom?
                </Link>
              </li>
              <li className="flex-shrink-0">
                <Link href="#getting-started" className="text-gray-600 hover:text-black whitespace-nowrap">
                  Getting Started
                </Link>
              </li>
            </ol>
          </aside>

          {/* Main Content */}
          <div className="space-y-12">
            <section id="introduction" className="p-4">
              <div className="max-w-none md:max-w-3xl mx-auto">
                <h2 className="text-mid font-bold mb-6">Introduction</h2>
                <p className="text-normal text-gray-700 leading-relaxed">
                  Notion is an all-in-one workspace designed to enhance productivity and organization across teams and
                  individuals. By combining elements of note-taking, task management, databases, and collaborative tools into
                  a single platform, Notion provides a flexible and intuitive environment for managing projects, tracking
                  progress, and coordinating work. Its customizable pages and templates allow users to tailor the workspace
                  to their specific needs, making it a versatile solution for a wide range of organizational tasks.
                </p>
                <div className="mt-6 space-y-6">
                  <p className="text-normal text-gray-700 leading-relaxed">
                    With Notion, teams can streamline their workflows by integrating various functions into one cohesive system.
                    The platform supports real-time collaboration, enabling users to work together on documents, share updates,
                    and maintain visibility into project developments. This collaborative aspect ensures that all team members
                    stay aligned, fostering better communication and efficiency within the organization.
                  </p>
                  <p className="text-normal text-gray-700 leading-relaxed">
                    Additionally, Notion's robust integration capabilities make it easy to connect with other tools and services,
                    enhancing its functionality and ensuring seamless data flow across different applications. Whether you're
                    managing a complex project, organizing personal tasks, or coordinating team efforts, Notion offers the tools
                    and flexibility needed to optimize your productivity and achieve your goals.
                  </p>
                </div>
              </div>
            </section>

            <section id="for-whom">
              <div className="max-w-none md:max-w-3xl mx-auto">
                <h2 className="text-mid font-bold mb-6">For Whom?</h2>
                <div className="space-y-6">
                  <p className="text-normal text-gray-700 leading-relaxed">
                    To effectively use Notion, you'll need a stable internet connection to ensure seamless access and real-time
                    updates. The platform is web-based, so access via a modern web browser is essential. For the best
                    experience, using the latest versions of browsers such as Google Chrome, Mozilla Firefox, or Safari is
                    recommended. Additionally, Notion offers dedicated desktop and mobile apps for Windows, macOS, iOS, and
                    Android, allowing users to manage their work from any device.
                  </p>
                  <p className="text-normal text-gray-700 leading-relaxed">
                    Notion's functionality is designed to be intuitive, but having a basic understanding of digital organization
                    tools can enhance your experience. Familiarity with concepts like databases, task management, and
                    collaborative workspaces will help you navigate and utilize Notion's features more effectively. Users should
                    also be comfortable with creating and customizing pages, as Notion's strength lies in its flexibility and
                    customization options.
                  </p>
                  <p className="text-normal text-gray-700 leading-relaxed">
                    For teams or businesses considering Notion, ensuring that all members have their own accounts and access
                    permissions set up correctly is crucial. Notion allows for various user roles and permissions, so
                    understanding these settings will help in managing team collaboration and data security.
                  </p>
                </div>
              </div>
            </section>

            <section id="getting-started">
              <div className="max-w-none md:max-w-3xl mx-auto">
                <h2 className="text-mid font-bold mb-6">Getting Started</h2>
                <div className="space-y-6">
                  <p className="text-normal text-gray-700 leading-relaxed">
                    Getting started with Notion is straightforward and can be accomplished in just a few steps. Begin by signing
                    up for an account on the Notion website or by downloading the desktop or mobile app. After creating your
                    account, you'll be guided through a brief tutorial that introduces you to the platform's core features, including
                    how to create pages, add content, and use templates. This initial walkthrough is designed to familiarize you
                    with Notion's interface and help you get up and running quickly.
                  </p>
                  <p className="text-normal text-gray-700 leading-relaxed">
                    Once you're familiar with the basics, you can start building your workspace by creating and customizing
                    pages to fit your needs. Notion offers a variety of templates for different use cases, such as project
                    management, meeting notes, and personal to-do lists, which you can use as a starting point.
                  </p>
                  <p className="text-normal text-gray-700 leading-relaxed">
                    To maximize your productivity, consider exploring Notion's integration options. Connect Notion with other
                    tools you use, such as Google Drive or Slack, to streamline your workflows and enhance collaboration.
                    Additionally, you can invite team members or collaborators to join your workspace, set permissions, and
                    share documents or projects.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mx-auto w-full max-w-[90%] py-8">
          <section className="bg-black mt-20 p-12 rounded-lg text-center">
            <h2 className="text-mid font-bold mb-4">Join the Talented group of Impact Individuals</h2>
            <p className="text-normal text-gray-400 mb-8 max-w-2xl mx-auto">
              IAM enables you to achieve clarity and significant results on a large scale by networking and workflows to the
              overarching objectives of the adfirms.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/signup">
                <button className="bg-yellow-400 text-black hover:bg-transparent hover:text-white border border-yellow-400  px-6 py-3 rounded-md text-tsh font-medium">
                  Sign Up
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-yellow-400 text-white hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-md text-tsh font-medium">
                  Contact Us
                </button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

