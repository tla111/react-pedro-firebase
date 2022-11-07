import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"

export const Login = () => {
    const signInWithGoogle = async () => {
        const result = await signInWithPopup(auth, provider)
        console.log(result);

    }

    return (
        <div>
            <p>Sign In with Google</p>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}