import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import sample_image from '../assets/images/sample_image.png'
import app from '../config/firebase'
import { getFirestore, collection, onSnapshot } from "firebase/firestore";


export default function Home() {
    const db = getFirestore(app);

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "articles"), async (snapshot) => {
            let list = [];
            snapshot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
            });
            setArticles(list);
        });
        return () => unsub();
    }, [])


    return (
        <>
            <div className='w-full flex mb-10'>
                <main className='flex justify-between w-full mt-10 px-5 md:px-20'>
                    <div className='w-11/12 md:w-3/5'>
                        <Link to='/Article'>
                            <div className='border border-gray-300 rounded-md mt-10'>
                                <div className='px-5 py-2 pt-3'>
                                    <span className='text-gray-500'>22 March 2024 by</span>
                                    <span className='text-blue-950'> Om Maniya</span>
                                </div>
                                <div className='flex w-full px-2'>
                                    <div className='w-2/3 pr-3 pl-3 pb-5'>
                                        <h2 className='text-lg font-bold line-clamp-2 md:text-xl xl:text-2xl'>The Year Starts with a Data Breach: 26 Billion Records Leaked</h2>
                                        <div className='text-gray-500 line-clamp-3 lg:text-lg'>If I ask you, “Is your information safe on the internet?” The response might not align with our expectation. The year 2024 just started with the biggest data leak ever. This data breach affected top companies such as Tencent, LinkedIn, Twitter, Dropbox, and many others.</div>
                                    </div>
                                    <div className='w-1/3 pb-4'>
                                        <img src={sample_image} alt="Featured Image" className='rounded-md w-full xl:h-40' />
                                    </div>
                                </div>
                            </div>
                        </Link>
                        <div className='border border-gray-300 rounded-md mt-10'>
                            <div className='px-5 py-2 pt-3'>
                                <span className='text-gray-500'>22 March 2024 by</span>
                                <span className='text-blue-950'> Om Maniya</span>
                            </div>
                            <div className='flex w-full px-2'>
                                <div className='w-2/3 pr-3 pl-3 pb-5'>
                                    <h2 className='text-lg font-bold line-clamp-2 md:text-xl xl:text-2xl'>The Year Starts with a Data Breach: 26 Billion Records Leaked</h2>
                                    <div className='text-gray-500 line-clamp-3 lg:text-lg'>If I ask you, “Is your information safe on the internet?” The response might not align with our expectation. The year 2024 just started with the biggest data leak ever. This data breach affected top companies such as Tencent, LinkedIn, Twitter, Dropbox, and many others.</div>
                                </div>
                                <div className='w-1/3 pb-4'>
                                    <img src={sample_image} alt="Featured Image" className='rounded-md w-full xl:h-40' />
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-300 rounded-md mt-10'>
                            <div className='px-5 py-2 pt-3'>
                                <span className='text-gray-500'>22 March 2024 by</span>
                                <span className='text-blue-950'> Om Maniya</span>
                            </div>
                            <div className='flex w-full px-2'>
                                <div className='w-2/3 pr-3 pl-3 pb-5'>
                                    <h2 className='text-lg font-bold line-clamp-2 md:text-xl xl:text-2xl'>The Year Starts with a Data Breach: 26 Billion Records Leaked</h2>
                                    <div className='text-gray-500 line-clamp-3 lg:text-lg'>If I ask you, “Is your information safe on the internet?” The response might not align with our expectation. The year 2024 just started with the biggest data leak ever. This data breach affected top companies such as Tencent, LinkedIn, Twitter, Dropbox, and many others.</div>
                                </div>
                                <div className='w-1/3 pb-4'>
                                    <img src={sample_image} alt="Featured Image" className='rounded-md w-full xl:h-40' />
                                </div>
                            </div>
                        </div>
                        <div className='border border-gray-300 rounded-md mt-10'>
                            <div className='px-5 py-2 pt-3'>
                                <span className='text-gray-500'>22 March 2024 by</span>
                                <span className='text-blue-950'> Om Maniya</span>
                            </div>
                            <div className='flex w-full px-2'>
                                <div className='w-2/3 pr-3 pl-3 pb-5'>
                                    <h2 className='text-lg font-bold line-clamp-2 md:text-xl xl:text-2xl'>The Year Starts with a Data Breach: 26 Billion Records Leaked</h2>
                                    <div className='text-gray-500 line-clamp-3 lg:text-lg'>If I ask you, “Is your information safe on the internet?” The response might not align with our expectation. The year 2024 just started with the biggest data leak ever. This data breach affected top companies such as Tencent, LinkedIn, Twitter, Dropbox, and many others.</div>
                                </div>
                                <div className='w-1/3 pb-4'>
                                    <img src={sample_image} alt="Featured Image" className='rounded-md w-full xl:h-40' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden w-1/3 md:block'>
                    </div>
                </main>
            </div>
        </>
    )
}