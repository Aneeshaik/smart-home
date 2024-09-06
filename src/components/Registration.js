import { useState } from "react";

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: [e.target.value]
        })
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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Registration;