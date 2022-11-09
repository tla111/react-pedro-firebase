import { useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

interface Post {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
}

export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null)
    const postsRef = collection(db, "posts")

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]);

    }

    getPosts()

    return (
        <div>

        </div>
    )
}