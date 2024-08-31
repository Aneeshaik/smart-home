import { useEffect } from "react";

const FetchbackEnd = () => {
    const fetchData = async() => {
        const response = await fetch('http://localhost:5000/')
        if(response.ok){
            const textData = await response.text();
            console.log(textData);
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