import React from 'react'
import { Link } from 'react-router-dom'
import facebook_icon from '../assets/icons/facebook.png'
import linkedin_icon from '../assets/icons/linkedin.png'
import twitter_icon from '../assets/icons/twitter.png'
import about_us_img01 from '../assets/images/about_us_img01.jpg'
import about_us_img02 from '../assets/images/about_us_img02.png'
import about_us_img03 from '../assets/images/about_us_img03.png'
import join_our_community_image from '../assets/images/together_we_create.jpg'

export default function AboutUs() {
    document.title = 'About Us';
    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">About Me</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I'm a passionate tech enthusiast always looking to learn and share the latest advancements in technology.
                            This platform focuses on delivering high-quality content to keep you informed and spread awareness about future technologies.  Feel free to contact me if you have any questions or doubts..</p>
                        <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                            <Link to="/Home" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Explore now
                            </Link>
                            <Link to="/ContactUs" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Contact Us
                            </Link>

                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={about_us_img01} alt="Image 01" className='rounded-md' />
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What we offer</h2>
                        <p className="mb-4">Our blogs dives deep into the ever evolving world of technology, with a laser focus on keeping you and your data safe.  Whether you're a seasoned techie or just starting out, we've got you covered. Here's what you can expect:</p>
                        <p>
                            <strong className='font-bold'>Unpacking the Latest Tech News: </strong>
                            Forget the fluff, we deliver in-depth analyses of the latest tech advancements, with a keen eye on potential security implications.
                        </p>
                        <p className='mt-3'>
                            <strong className='font-bold'>Security: </strong>We explore the mind-blowing possibilities of tomorrow's technologies, but always with a critical security lens. We'll help you understand the potential risks alongside the innovations.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <img className="w-full rounded-lg" src={about_us_img02} alt="Office Image 1" />
                        <img className="mt-4 w-full lg:mt-10 rounded-lg" src={about_us_img03} alt="Office Image 2" />
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-3xl xl:text-4xl dark:text-white">Join Our Community</h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Stay connected with us for all the latest blog updates and Be the first to know: Subscribe for the latest tech and security insights.</p>
                        <div className="space-y-0 flex sm:space-x-5">
                            <img src={linkedin_icon} alt="LinkedIn" className='w-11 h-11 dark:invert' />
                            <img src={twitter_icon} alt="X" className='w-11 h-11 dark:invert' />
                            <img src={facebook_icon} alt="Facebook" className='w-11 h-11 dark:invert' />
                        </div>
                    </div>
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={join_our_community_image} alt="hero image" className='rounded-md' />
                    </div>
                </div>
            </section>
        </>
    )
}
