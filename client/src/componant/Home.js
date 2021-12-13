import React,{useEffect, useState} from 'react'

const Home = () => {
const [name, setName] = useState("")
const FetchApi=async ()=>{
    const res=await fetch("/getdata",{method:"GET",
    headers:{"content-Type":"application/json"}})
    const data=await res.json()
    setName(data.name)
}
useEffect(()=>{
FetchApi()
},[])
    return (
        <>
          <div className="main_div">

<h1>WELCOME {name}</h1>

          </div>
        </>
    )
}

export default Home
