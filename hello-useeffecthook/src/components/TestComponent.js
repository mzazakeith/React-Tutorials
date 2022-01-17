import React, {useEffect, useState} from 'react'
import axios from 'axios'

function TestComponent() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [posts, setPost]= useState([]);
    const [search, setSearch]= useState("");
    const [breweries, setBreweries]=useState([])
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

    // useEffect(()=> {
    //     const fetchData = async () => {
    //         const results = await axios.get("https://jsonplaceholder.typicode.com/posts");
    //         setPost(results.data);
    //         console.log(results.data)
    //     };
    //     fetchData()
    //  },[]);

     useEffect(()=> {
        const fetchData = async () => {
            const results = await axios.get(`https://api.openbrewerydb.org/breweries/search?query=${search}`);
            setBreweries(results.data)
            // console.log(results.data)
        };
        fetchData()
     },[search]);



    return (
        <div>
            <h1>Test Component</h1>
            {count}
            <button onClick={()=>setCount(state => state+1 )}>Increase</button>
            <button onClick={()=>setDarkMode(state => !state )}>Toggle moode</button>
            <input value={search} onChange={ (e) => setSearch(e.target.value)} type='text'/>
            {breweries.map((brewery) => {
                return <h2 key={brewery.id}>{brewery.name}</h2>
            })}
        </div>
    )
}

export default TestComponent
