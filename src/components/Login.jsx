import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useRef } from 'react';
import './login.css'
import Input from "./InputButtons/Input";
import SocialButtons from "./SocialButtons/SocialButtons";

export default function App() {
    const containerRef = useRef(null);

    const handleRegisterClick = () => {
        containerRef.current.classList.add('active');
    };

    const handleLoginClick = () => {
        containerRef.current.classList.remove('active');
    };

    return (
        <>
            <div className="container" id="container" ref={containerRef}>
                <div className="form-container sign-up">
                    <form >
                        <h1>Create Account</h1>
                        <div className="social-icons">
                        <SocialButtons />
                        </div>
                        <span>or use your email for registeration</span>
                    
                        <Input text={"Name"}/>
                        <Input text={"Email"}/>
                        <Input text={"Password"} type="password"/>
                        <button>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in">
                    <form>
                        <h1>Sign In </h1>
                        <div className="social-icons">
                          <SocialButtons />
                        </div>
                        <span>or use your email for registeration</span>
                        <Input text={"Name"}/>
                        <Input text={"Email"}/>
                        <Input text={"Password"} type="password"/>
                        <button>Sign In</button>
                    </form>
                </div>
                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>Welcome back</h1>
                            <p>Enter your personal details to use all of site features</p>
                            <button className="hidden" id="login" onClick={handleLoginClick}>Sign In</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>Hello, Friend!</h1>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="hidden" id="register" onClick={handleRegisterClick}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

