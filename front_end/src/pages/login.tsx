import { auth, provider } from "../config/firebase"
import { signInWithPopup } from "firebase/auth"

export const Login = () => {
    return (
        <div>
            <p>Sign In with Google</p>
            <button>Sign In with Google</button>
        </div>
    )
}