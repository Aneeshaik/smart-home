import { useEffect } from "react";

const FetchbackEnd = () => {
    const fetchData = async() => {
        const response = await fetch('http://localhost:5000/api/devices')
        if(response.ok){
            const data = await response.json();
            console.log(data);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    
    return (
        <div>

        </div>
    )
}

export default FetchbackEnd;