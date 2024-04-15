import {useState} from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LogInForm from "../../components/LogInForm/LogInForm";
import { useNavigate } from 'react-router-dom';

export default function AuthPage({setUser}) {

    const navigate = useNavigate();
    const [showLogInForm, setShowLogInForm] =  useState(false);
    
    const toggleForms = () => {
        setShowLogInForm(!showLogInForm);
    };
    
    return(
        <main>
            <h1>SignUp</h1>
            {showLogInForm ? 
                <LogInForm setUser={setUser}/>
                :
                (
                    <>
                        <SignUpForm setUser={setUser} navigate={navigate}/>
                        <p style={{ display: 'inline' }}>Already have an account?</p>
                        <button onClick={toggleForms}>Log in</button>
                    </>
                )
            }
        </main>
    );
}