import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
function UserProfile() {
    const {userData} = useUserStore()
    const [entries, setEntries] = useState([])
    useEffect(()=>{
    let entries = Object.entries(userData)
    console.log("ENTRIES", entries)
        let eachEntry = entries.map((entry, i)=>{
            if(typeof entry[1] == 'object' || entry[0] == '_id' || entry[0] == '__v'){
                return
            }else {
                return <><span>{entry[0]}:</span><span>{entry[1]}</span></>
            }
        })
        setEntries(eachEntry)
}, [])
  return (
    <div>UserProfile
        {entries.map((entry, i)=>{
            return <div key={i}>{entry}</div>
        })}
    </div>
  )
}

export default UserProfile