import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import app from '../config/firebase'
import { getFirestore, collection, onSnapshot } from "firebase/firestore";


export default function Home() {
    const db = getFirestore(app);

    const [articles, setArticles] = useState(null);

    document.title = 'Home';
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

    if (!articles)
        return (
            <div className='w-screen mb-10'>
                <div className="border shadow rounded-md p-4 md:w-3/4 ml-10 mr-8 mt-10 mb-5">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-8 bg-slate-300 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-6 bg-slate-300 rounded col-span-2"></div>
                                    <div className="h-6 bg-slate-300 rounded col-span-1"></div>
                                </div>
                                <div className="h-6 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border shadow rounded-md p-4 md:w-3/4 ml-10 mr-8 mt-10 mb-5">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-8 bg-slate-300 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-6 bg-slate-300 rounded col-span-2"></div>
                                    <div className="h-6 bg-slate-300 rounded col-span-1"></div>
                                </div>
                                <div className="h-6 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border shadow rounded-md p-4 md:w-3/4 ml-10 mr-8 mt-10 mb-5">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-8 bg-slate-300 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-6 bg-slate-300 rounded col-span-2"></div>
                                    <div className="h-6 bg-slate-300 rounded col-span-1"></div>
                                </div>
                                <div className="h-6 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border shadow rounded-md p-4 md:w-3/4 ml-10 mr-8 mt-10 mb-5">
                    <div className="animate-pulse flex space-x-4">
                        <div className="rounded-full bg-slate-300 h-10 w-10"></div>
                        <div className="flex-1 space-y-6 py-1">
                            <div className="h-8 bg-slate-300 rounded"></div>
                            <div className="space-y-3">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-6 bg-slate-300 rounded col-span-2"></div>
                                    <div className="h-6 bg-slate-300 rounded col-span-1"></div>
                                </div>
                                <div className="h-6 bg-slate-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    return (
        <>
            <div className='w-full flex mb-10 mt-5'>
                <main className='flex justify-between w-full px-5 md:px-20'>
                    <div className='w-11/12 md:w-3/5'>
                        <span className='font-bold text-3xl'>Latest Posts</span>
                        {
                            articles.map((article, index) => {
                                return (
                                    <Link to={`/Article/${article.id}`} key={index}>
                                        <div className='border border-gray-300 rounded-md mt-5'>
                                            <div className='px-5 py-2 pt-3'>
                                                <span className='text-gray-500'>{article.date} by</span>
                                                <span className='text-blue-950'> {article.author}</span>
                                            </div>
                                            <div className='flex w-full px-2'>
                                                <div className='w-2/3 pr-3 pl-3 pb-5'>
                                                    <h2 className='text-lg font-bold line-clamp-2 md:text-xl xl:text-2xl'>{article.title}</h2>
                                                    <div className='text-gray-500 line-clamp-3 lg:text-lg'>{article.shortDescription}</div>
                                                </div>
                                                <div className='w-1/3 pb-4'>
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/cipherblocks.appspot.com/o/articleFeaturedImages%2F%20qKbsAbfRSVS10xZKZxfY%20.png?alt=media&token=ebbd7c8c-c81e-4ca8-ae34-0486fb2075f7" alt="Featured Image" className='rounded-md w-full xl:h-40' />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className='hidden w-1/3 md:block'>
                    </div>
                </main>
            </div>
        </>
    )
}