import { useEffect } from "react";
import { useState } from "react";

const Registration = () => {
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
            [e.target.name]: [e.target.value]
        })
    }
    const handleSubmit = async () => {
        if(formData.password !== formData.confirmPassword){
           console.log("Password doesn't match");          
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
            console.log("Registration Successful:", data);
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
        <div>
            <form>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                <br/>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <br/>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword" />
                <br/>
                <button type="submit" onSubmit={handleSubmit} >Register</button>
            </form>
        </div>
    )
}

export default Registration;