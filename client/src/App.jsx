import React, { useState, useEffect } from 'react'

function App() {

    const [data, setData] = useState([{}])

    let members, res;

    const tryGetData = {
        run: function getData() {
            
            fetch("/members",{
                method: 'GET', 
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    members: members
                })
                
            }).then((response) => {
                const res = response.data
                console.log(res)
                setData(({
                    profile_name: res.name,
                }))
            }).catch((error) => {
                if (error.response) {
                    console.log(error.response)
                    console.log(error.response.status)
                    console.log(error.response.headers)
                }
            })
        }
    }
    
    
    tryGetData.run()
    
    return (
        <div>
            <p>Testing in jsx app return</p>
        </div>
    )
}

export default App