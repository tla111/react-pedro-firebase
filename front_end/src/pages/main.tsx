import { getDocs, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

export const Main = () => {
    const postsRef = collection(db, "posts")

    return (
        <div>

        </div>
    )
}