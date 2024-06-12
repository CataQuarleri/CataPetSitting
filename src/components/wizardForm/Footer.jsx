import React, { useState } from 'react'
import styles from './wizardForm.module.css';
import { useUserStore } from '../../stores/userStore';
import { useNavigate } from 'react-router-dom';

function Footer({formData, userData, setSelectedMenuItem}) {
    const [petSubmitted, setPetSubmitted] = useState(false)
    const [cursor, setCursor] = useState("auto")
const {addPet} = useUserStore()

   async function handleSubmit(e){
    e.preventDefault()
        setCursor("wait")
        console.log("FORM DATA", formData)
        console.log("USER DATA", userData)
        let petExists = userData.pets.find(p => p.name === formData.name)
        if(petExists){
            console.log("PET ", petExists)
        }else {
            try {
                let result = await addPet(formData)
                setTimeout(() => {
                    setCursor("auto")
                    setPetSubmitted(true)
                    setSelectedMenuItem("profile")
                navigate('/success')
                    }, 3000)
                console.log(result)
               
            } catch (error) {
                console.log("ERROR", error)
            }
        }
    }
  return (
  <div style={{display: "flex", justifyContent: "center", cursor: cursor}}>
    <form action="submit" encType='multipart/form-data'>

    {petSubmitted ? <h2>Pet submitted successfully</h2> : <button onClick={handleSubmit} className={styles.nextButton} type="submit" style={{cursor: cursor}}>Submit Information</button>}
    </form>
  </div>
  )
}

export default Footer