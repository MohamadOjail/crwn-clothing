import { signInWithGooglePopup } from "../../util/firebase/firebase.utils";

const SignIn = ()=>{

    const logGoogleUser = async ()=>{
        const response = await signInWithGooglePopup();
        console.log(response);
    }

    return(
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>
                Sign in with google popup
            </button>
        </div>
    )
}

export default SignIn;