import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import facebook_icon from '../assets/icons/facebook.png'
import linkedin_icon from '../assets/icons/linkedin.png'
import twitter_icon from '../assets/icons/twitter.png'
export default function Footer() {
    return (
        <>
            <footer className="bg-gray-50 dark:bg-gray-800 antialiased">
                <div className="p-4 py-6 mx-auto max-w-screen-xl md:p-8 lg:p-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link to="/Home" className=" hover:underline">Home</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/AboutUs" className="hover:underline">About Us</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/ContactUs" className="hover:underline">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Help center</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Twitter</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.facebook.com/profile.php?id=61561690173764&mibextid=ZbWKwL" className="hover:underline">Facebook</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/company/cipher-blocks/?viewAsMember=true" className="hover:underline">Linked In</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link to="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="/Disclaimer" className="hover:underline">Disclaimer</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Top Stories</h2>
                            <ul className="text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">iOS</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Android</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Windows</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">MacOS</a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="text-center">
                        <Link to="/Home" className="flex justify-center items-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img src={logo} alt="Logo" className='h-8 w-8 mr-3' />
                            Cipher Blocks
                        </Link>
                        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024-2025 <Link to="/Home" className="hover:underline">Cipher Blocks™</Link>. All Rights Reserved.
                        </span>
                        <ul className="flex justify-center mt-5 space-x-5">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=61561690173764&mibextid=ZbWKwL" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <img src={facebook_icon} alt="facebook" className='w-6 h-6 dark:invert'/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <img src={twitter_icon} alt="Twitter" className='w-6 h-6 dark:invert'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/cipher-blocks/?viewAsMember=true" className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                    <img src={linkedin_icon} alt="LinkedIn" className='w-6 h-6 dark:invert'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
