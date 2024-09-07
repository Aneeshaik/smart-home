import { useState } from "react";
import image from "../assets/images/loginImage.jpg"

const Registration = ({onSuccessfullRegistration}) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
     const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
           console.log("Password doesn't match");
           return;          
        }
        try{
            const response = await fetch('http://localhost:5000/register', {
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
            localStorage.setItem("token", data.token)
            onSuccessfullRegistration();
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        }
        catch(error){
            console.error("Registration Failed:", error);
        }
    }
    return (
        <div className="flex">
        <div className="w-1/2 border-r-2 border-slate-400">
            <img className="rounded-3xl p-2" src={image} alt="frame" />
        </div>
        <div className="m-2 w-1/2">
            <form onSubmit={handleSubmit}>
                <div className="m-2">
                    {/* <label className="text-left" htmlFor="firstName">First Name:</label> */}
                    <input className="rounded-lg border-b-2 p-2 bg-transparent focus:outline-none" type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="m-2">
                    {/* <label className="text-left" htmlFor="lastName">Last Name:</label> */}
                    <input className="rounded-lg border-b-2 p-2 bg-transparent focus:outline-none" type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="m-2">
                    {/* <label className="text-left" htmlFor="email">Email:</label> */}
                    <input className="rounded-lg border-b-2 p-2 bg-transparent focus:outline-none" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="m-2">
                    {/* <label className="text-left" htmlFor="password">Password:</label> */}
                    <input className="rounded-lg border-b-2 p-2 bg-transparent focus:outline-none" type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="m-2">
                    {/* <label className="text-left" htmlFor="confirmPassword">Confirm Password:</label> */}
                    <input className="rounded-lg border-b-2 p-2 bg-transparent focus:outline-none" type="password" placeholder="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div> 
                <button className="px-2 py-1 text-lg bg-gradient-to-r from-[#000046] to-[#1CB5E0] rounded-lg" type="submit">Register</button>
            </form>
        </div>
        </div>
    )
}

export default Registration;