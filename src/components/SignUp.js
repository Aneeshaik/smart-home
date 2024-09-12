import { useState } from "react";
import image from "../assets/images/loginImage.jpg"

const SignUp = ({onSuccessfullRegistration}) => {
    const [login, setLogin] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const handleClick = () => {
        setLogin(!login);
        setFormData({
            email: '',
            password: '',
        })
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSigninSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            })
            const data = await response.json();
            console.log("Login Successful from frontend:", data);
            // console.log(data.token);
            localStorage.setItem("token", data.token)
            localStorage.setItem("userId", data.userId)
            onSuccessfullRegistration();
        }
        catch(error){
            console.error("Registration Failed:", error);
        }
    }
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
           console.log("Password doesn't match");
           return;          
        }
        try{
            const response = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password,
                }),
            })
            const data = await response.json();
            console.log("Registration Successful from frontend:", data);
            // console.log(data.token);
            localStorage.setItem("token", data.token)
            localStorage.setItem("userId", data.userId)
            onSuccessfullRegistration();
        }
        catch(error){
            console.error("Registration Failed:", error);
        }
    }
    return (
        <div className="flex">
        <div className="w-1/2">
            <img className="rounded-3xl p-2 border-r-2 border-gray-500 opacity-70" src={image} alt="frame" />
            <div className="absolute top-2 left-2 m-3 text-left text-white ">
                <h1 className="text-4xl gradient-text font-semibold text-shadow-glow">{
                    login ? 'Welcome Back!' : 'Welcome!'
                }</h1><p className="mt-2 text-shadow-glow">{
                    login? 'Ready to take control of your smart home?' : (
                        <>
                        Unlock the potential of your home.<br/> Register now for a smarter tomorrow.
                        </>
                    )
                }</p>
            </div>
        </div>
        <div className="m-2 w-1/2 flex justify-start">
            <form className="" onSubmit={login? handleSigninSubmit : handleSignupSubmit}>
                <h1 className="mx-auto text-3xl">{
                    login? 'Sign In' : 'Sign Up'
                }</h1>
                {!login &&
                <div className="m-4 mt-2">
                    {/* <label className="text-left" htmlFor="firstName">First Name:</label> */}
                    <input className="rounded-lg w-80 border-b-2 p-2 bg-transparent focus:outline-none" type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                }
                {!login &&
                <div className="m-4">
                    {/* <label className="text-left" htmlFor="lastName">Last Name:</label> */}
                    <input className="rounded-lg w-80 border-b-2 p-2 bg-transparent focus:outline-none" type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                }
                <div className="m-4">
                    {/* <label className="text-left" htmlFor="email">Email:</label> */}
                    <input className="rounded-lg w-80 border-b-2 p-2 bg-transparent focus:outline-none" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="m-4">
                    {/* <label className="text-left" htmlFor="password">Password:</label> */}
                    <input className="rounded-lg w-80 border-b-2 p-2 bg-transparent focus:outline-none" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                {!login &&
                <div className="m-4">
                    {/* <label className="text-left" htmlFor="confirmPassword">Confirm Password:</label> */}
                    <input className="rounded-lg w-80 border-b-2 p-2 bg-transparent focus:outline-none" type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div> 
                }
                <button className="px-2 w-80 py-1 text-lg bg-gradient-to-r from-[#000046] to-[#1CB5E0] rounded-3xl" type="submit">{
                    login? 'Sign In' : 'Sign Up'
                }</button>
                {login? 
                <p className="m-2">Don't have an account? <button onClick={handleClick} type="button" className="underline">Sign Up</button></p> :
                <p className="m-2">Created an account? <button onClick={handleClick} type="button" className="underline">Sign In</button></p>
                }
                {/* <p className="m-2">Created a account? <Link to="/signin" onClick={handleClick} className="underline">Sign In</Link></p> */}
            </form>
        </div>
        </div>
    )
}

export default SignUp;