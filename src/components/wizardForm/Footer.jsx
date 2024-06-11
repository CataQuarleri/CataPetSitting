import React from 'react'
import styles from './wizardForm.module.css';
import { useUserStore } from '../../stores/userStore';

function Footer({formData, userData}) {
const {addPet} = useUserStore()

   async function handleSubmit(){
        console.log("FORM DATA", formData)
        console.log("USER DATA", userData)
        let petExists = userData.pets.find(p => p.name === formData.name)
        if(petExists){
            console.log("PET ", petExists)
        }else {
            try {
                let result = await addPet(formData)
                console.log(result)
            } catch (error) {
                console.log("ERROR", error)
            }
        }
    }
  return (
  <div style={{display: "flex", justifyContent: "center"}}>
    <button onClick={handleSubmit} className={styles.nextButton}>Submit Information</button>
  </div>
  )
}

export default Footer