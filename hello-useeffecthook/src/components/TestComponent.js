import React, {useEffect, useState} from 'react'

function TestComponent() {
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(()=> {
        document.title= `${count}`
         console.log("Use effect hook ran")
     });
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
