import React, { useEffect } from 'react'
import axios from 'axios'

function GreeceTotal() {

    useEffect(() => {
        axios.get('https://covid-19-greece.herokuapp.com/all')
            .then(res => {
                const data = res.data
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <h1>hy everyone</h1>
        </div>
    )
}

export default GreeceTotal
