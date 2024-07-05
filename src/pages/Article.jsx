import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import app from '../config/firebase'
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(app);

export default function Article() {
    const { ArticleId } = useParams();
    const [articleData, setArticleData] = useState(null);

    useEffect(() => {
        const docRef = doc(db, "articles", ArticleId);
        const unsubscribe = async () => {
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const data = docSnap.data();
                setArticleData(data.post);
            } else {
                console.log("No such document!");
            }
        }
        return () => unsubscribe();
    }, [])

    if (!articleData) {
        return (
            <p>Loading</p>
        )
    }

    return (
        <>
            {articleData && (
                <div dangerouslySetInnerHTML={{ __html: articleData }} />
            )}
        </>
    )
}