import React, { useState, useEffect } from 'react'

const About = () => {
    const [datas, setName] = useState("")
    const FetchApi = async () => {
        const res = await fetch("/getdata", {
            method: "GET",
            headers: { "content-Type": "application/json" }
        })
        const data = await res.json()
        setName(data)
    }
    useEffect(() => {
        FetchApi()
    }, [])

    return (
        <>
            <div className="main_div">



                <table className="">
                    <thead>
                        <tr>
                            <th>NAME </th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{datas.name}</td>
                            <td>{datas.email}</td>
                            <td>{datas.phone}</td>
                        </tr>
                    </tbody>

                </table>


            </div>
        </>
    )
}

export default About
