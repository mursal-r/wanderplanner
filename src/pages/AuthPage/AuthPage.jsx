import {useState} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from "../../components/LogInForm/LogInForm";


export default function AuthPage({setUser}) {
    const [showLogInForm, setShowLogInForm] =  useState(false);
    
    const toggleForms = () => {
        setShowLogInForm(!showLogInForm);
    };
    
    return(
        <main>
            <h1>Auth</h1>
            {showLogInForm ? 
                <LogInForm setUser={setUser}/>
                :
                (
                    <>
                        <SignUpForm setUser={setUser}/>
                        <p style={{ display: 'inline' }}>Already have an account?</p>
                        <button onClick={toggleForms}>Log in</button>
                    </>
                )
            }
        </main>
    );
}