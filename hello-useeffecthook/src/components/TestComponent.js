import React, {useEffect, useState} from 'react'
import axios from 'axios'

function TestComponent() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [posts, setPost]= useState([]);
    // useEffect(()=> {
    //     document.title= `${count}`
    //      console.log("Use effect hook ran")
    //  },[count]);

    //  useEffect(()=>{
    //      localStorage.setItem("darkMode", darkMode)
    //      console.log(" dark mode hook ran")
    //  },[darkMode])

    // useEffect(()=> {
    //     const myTimer = setTimeout (()=>{
    //         alert("hello")
    //         console.log(" alert Use effect hook ran")
    //     },5000);
    //     return () => clearTimeout(myTimer);
    //  },[count]);

    useEffect(()=> {
        const fetchData = async () => {
            const results = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPost(results.data);
            console.log(results.data)
        };
        fetchData()
     },[]);



    return (
        <div>
            <h1>Test Component</h1>
            {count}
            <button onClick={()=>setCount(state => state+1 )}>Increase</button>
            <button onClick={()=>setDarkMode(state => !state )}>Toggle moode</button>
        </div>
    )
}

export default TestComponent
