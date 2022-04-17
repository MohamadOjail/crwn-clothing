import { async } from "@firebase/util";
import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../util/firebase/firebase.utils'

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
}

const SignUpForm = ()=>{

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    console.log(formFields);

    const resetFormFields = ()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(password != confirmPassword){
            alert('password do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('User already exists')
            }else console.log(error)
            
        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]: value })
    };

    return(
        <div>
            <h1>Sig up with emain and password</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Display Name</label>
                <input type="text" required onChange={handleChange} name='displayName' value={displayName} />

                <label htmlFor="">Email</label>
                <input type="email" required onChange={handleChange} name='email' value={email} />

                <label htmlFor="">Password</label>
                <input type="password" required onChange={handleChange} name='password' value={password} />

                <label htmlFor="">Confirm password</label>
                <input type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                
                <button type="submit">Sign up</button>

            </form>
        </div>
    )
}

export default SignUpForm