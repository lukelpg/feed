import React, { useState, useEffect } from 'react'

function App() {

    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/members").then(
            res => res.json()
            
        ).then(
            console.log("here"),
            data => {
                
                setData(data)
                
                console.log(data)
                
            }
            
        )
    }, [])
    
    return (
        <div>
            <p>Testing in jsx app return</p>
        </div>
    )
}

export default App