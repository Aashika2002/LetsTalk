import React, { useEffect, useState } from 'react'

const Test = () => {

    const [data, setData] = useState(
        "kljdf"
    )
    const [name, setName] = useState("")

    useEffect(() => {
      
        
        setData(Math.random());


        console.log("math.random rendered")
    }, [])

    useEffect(() => {
      console.log("re rendered on name change")
    }, [name])
    

  return (
    <div>
        {data}
      This si test page
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <h2>{name}</h2>
    </div>
  )
}

export default Test
