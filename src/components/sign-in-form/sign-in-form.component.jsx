import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import "./sign-up-form.styles.scss";
import { signInWithGooglePopup, signAuthUserWithEmailAndPassword } from "../../utils/firebase.utils";


const defaultFormFields = {
    email: "",
    password: "",
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        

        try{
            await signAuthUserWithEmailAndPassword(email, password);
            resetFields();
        }catch (error) {
            switch (error.code) {
              case 'auth/wrong-password':
                alert('incorrect password for email');
                break;
              case 'auth/user-not-found':
                alert('no user associated with this email');
                break;
              default:
                console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormFields({...formFields, [name]:value});
    }

    return(
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
        
                <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />
        
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign in</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType={BUTTON_TYPE_CLASSES.google}>Sign in with GOOGLE</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;