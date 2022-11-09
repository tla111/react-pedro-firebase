import { useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

export const Main = () => {
    const [postsList, setPostsList] = useState(null)
    const postsRef = collection(db, "posts")

    const getPosts = async () => {
        const data = await getDocs(postsRef)
        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    }

    getPosts()

    return (
        <div>

        </div>
    )
}