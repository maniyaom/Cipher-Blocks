import React from 'react'
import profile_image from '../assets/images/profile_image.png'

export default function Temp() {
    return (
        <>
            <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
                <div className="flex justify-between px-4 mx-auto max-w-screen-xl text-white">
                    <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                        <header className="mb-4 lg:mb-6 not-format">
                            <address className="flex items-center mb-6 not-italic">
                                <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-gray-400">
                                    <img className="mr-4 w-16 h-16 rounded-full" src={profile_image} alt="Om Maniya" />
                                    <div>
                                        <span className="text-xl font-bold text-gray-900 dark:text-gray-200">Jese Leos</span>
                                        <p className="text-base text-gray-500 dark:text-gray-400">Author</p>
                                        <p className="text-base text-gray-500 dark:text-gray-400">
                                            <time pubdate dateTime="2022-02-08" title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                </div>
                            </address>
                            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-gray-300">Best practices for successful prototypes</h1>
                        </header>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">Flowbite is an open-source library of UI components built with the utility-first
                            classNamees from Tailwind CSS. It also includes interactive elements such as dropdowns, modals,
                            datepickers.</p>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                            you can think things through before committing to an actual design project.</p>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">But then I found a component library. It comes with the most commonly used UI components, such as buttons, navigation
                            bars, cards, form elements, and more which are conveniently built with the utility classNamees from
                            Tailwind CSS.</p>
                        <figure className='mt-5 mb-5'>
                            <img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-1.png" alt="" />
                            <figcaption className='text-center text-gray-400 mt-2'>Digital art by Anonymous</figcaption>
                        </figure>
                        <h2 className='text-2xl font-bold mb-2.5 text-gray-900 dark:text-gray-300'>Getting started with Flowbite</h2>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">First of all you need to understand how Flowbite works. This library is not another framework.
                            Rather, it is a set of components based on Tailwind CSS that you can just copy-paste from the
                            documentation.</p>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">It also includes a JavaScript file that enables interactive components, such as modals, dropdowns,
                            and datepickers which you can optionally include into your project via CDN or NPM.</p>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">You can check out the quick to explore the elements by including the CDN files into your project. But if you want
                            to build a project with Flowbite I recommend you to follow the build tools steps so that you can
                            purge and minify the generated CSS.</p>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">You'll also receive a lot of useful application UI, marketing UI, and e-commerce pages that can help
                            you get started with your projects even faster. You can check out this <a
                                href="https://flowbite.com/docs/components/tables/">comparison table</a> to better understand
                            the differences between the open-source and pro version of Flowbite.</p>
                        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-gray-300">When does design come in handy?</h2>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">While it might seem like extra work at a first glance, here are some key moments in which prototyping
                            will come in handy:</p>
                        <ol className='list-decimal list-inside text-gray-500 dark:text-gray-300'>
                            <li className='mb-3'><strong className='text-gray-700 dark:text-white'>Usability testing</strong>. Does your user know how to exit out of screens? Can they
                                follow your intended user journey and buy something from the site you’ve designed? By running a
                                usability test, you’ll be able to see how users will interact with your design once it’s live;
                            </li>
                            <li className='mb-3'><strong className='text-gray-700 dark:text-white'>Involving stakeholders</strong>. Need to check if your GDPR consent boxes are displaying
                                properly? Pass your prototype to your data protection team and they can test it for real;</li>
                            <li className='mb-3'><strong className='text-gray-700 dark:text-white'>Impressing a client</strong>. Prototypes can help explain or even sell your idea by
                                providing your client with a hands-on experience;</li>
                            <li className='mb-3'><strong className='text-gray-700 dark:text-white'>Communicating your vision</strong>. By using an interactive medium to preview and test
                                design elements, designers and developers can understand each other — and the project — better.
                            </li>
                        </ol>
                        <h3 className='text-xl font-bold mb-2.5 text-gray-900 dark:text-gray-300'>Laying the groundwork for best design</h3>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">Before going digital, you might benefit from scribbling down some ideas in a sketchbook. This way,
                            you can think things through before committing to an actual design project.</p>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">Let's start by including the CSS file inside the <code>head</code> tag of your HTML.</p>
                        <h3 className='text-xl font-bold mb-2.5 text-gray-900 dark:text-gray-300'>Understanding typography</h3>
                        <h4 className='text-base font-semibold mb-2.5 text-gray-900 dark:text-gray-300'>Type properties</h4>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                            letters. A typeface represents shared patterns across a collection of letters.</p>
                        <h4 className='text-base font-semibold mb-2.5 text-gray-900 dark:text-gray-300'>Baseline</h4>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                            letters. A typeface represents shared patterns across a collection of letters.</p>
                        <h4 className='text-base font-semibold mb-2.5 text-gray-900 dark:text-gray-300'>Measurement from the baseline</h4>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">A typeface is a collection of letters. While each letter is unique, certain shapes are shared across
                            letters. A typeface represents shared patterns across a collection of letters.</p>
                        <h3 className='text-xl font-bold mb-2.5 text-gray-900 dark:text-gray-300'>Type classNameification</h3>
                        <h4 className='text-base font-semibold mb-2.5 text-gray-900 dark:text-gray-300'>Serif</h4>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">A serif is a small shape or projection that appears at the beginning or end of a stroke on a letter.
                            Typefaces with serifs are called serif typefaces. Serif fonts are classNameified as one of the
                            following:</p>
                        <h4 className='text-base font-semibold mb-2.5 text-gray-900 dark:text-gray-300'>Old-Style serifs</h4>
                        <ul className='list-disc list-inside mb-4 text-gray-500 dark:text-gray-300'>
                            <li>Low contrast between thick and thin strokes</li>
                            <li>Diagonal stress in the strokes</li>
                            <li>Slanted serifs on lower-case ascenders</li>
                        </ul><img src="https://flowbite.s3.amazonaws.com/typography-plugin/typography-image-2.png" alt="" className='mb-4' />
                        <ol className='list-decimal list-inside mb-4 text-gray-500 dark:text-gray-300'>
                            <li>Low contrast between thick and thin strokes</li>
                            <li>Diagonal stress in the strokes</li>
                            <li>Slanted serifs on lower-case ascenders</li>
                        </ol>
                        <h3 className='text-xl font-bold mb-2.5 text-gray-900 dark:text-gray-300'>Laying the best for successful prototyping</h3>
                        <p className="text-gray-500 mb-4 dark:text-gray-300">A serif is a small shape or projection that appears at the beginning:</p>
                        <section className="not-format">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-gray-300">Discussion (1)</h2>
                            </div>
                            <form className="mb-6">
                                <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment" rows="6"
                                        className="px-0 w-full text-sm text-gray-900 border-0 outline-none focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                        placeholder="Write a comment..." required></textarea>
                                </div>
                                <button type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                                    Post comment
                                </button>
                            </form>
                            <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                <footer className="flex justify-between items-center mb-2">
                                    <div className="flex items-center">
                                        <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white"><img
                                            className="mr-2 w-6 h-6 rounded-full"
                                            src={profile_image}
                                            alt="Michael Gough" />Michael Gough</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08"
                                            title="February 8th, 2022">Feb. 8, 2022</time></p>
                                    </div>
                                    <div id="dropdownComment1"
                                        className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200"
                                            aria-labelledby="dropdownMenuIconHorizontalButton">
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </footer>
                                <p className='text-gray-500 dark:text-gray-300'>Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                                    instruments for the UX designers. The knowledge of the design tools are as important as the
                                    creation of the design strategy.</p>
                            </article>
                        </section>
                    </article>
                </div>
            </main>
        </>
    )
}