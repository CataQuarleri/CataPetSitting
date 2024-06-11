import {Wizard} from 'react-use-wizard'
import { AnimatePresence } from 'framer-motion'
import Header from './Header'
import MainInfo from './MainInfo'
import Food from './Food'
import Behavior from './Behavior'
import Health from './Health'
import Walks from './Walks'
import MoreInfo from './MoreInfo'
import { useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import Footer from './Footer'

const initialState = {
    name: '',
    typeOfPet: '',
    breed: '',
    sex: '',
    yearOfBirth: '',
    microchipped: false,
    behavior: {
      specialNeeds: '',
      routine: '',
      trainingRoutine: '',
      fears: '',
      notes: ''
    },
    health: {
      isMedicated: false,
      medicationInfo: [{
        typeOfMedication: "",
        amount: "",
        time: "",
        details: ""
      }]
    },
    allergies: {
      hasAllergies: false,
      typeOfAllergy: '',
      careInstructions: '',
      additionalInfo: ''
    },
    weightInPounds: '',
    size: '',
    lastVetVisit: '',
    vaccines: [{
        date: "",
        typeOfVaccine: ""
    }],
    food: {
      frequency: '',
      foodAllergies: '',
      restrictions: '',
      notes: '',
      meals: [{
        time: "",
        amount: "",
        typeOfFood: "",
        brand: ""
      }]
    },
    treats: [],
    walks: {
      needs: false,
      amountDaily: '',
      distanceInMiles: '',
      timeInMinutes: '',
      route: '',
      preferences: '',
      habits: '',
      details: ''
    },
    toys: [],
    relevantInformation: '',
    picture: ''
  }
function WrapperForm({pet = initialState}) {
    const [formData, setFormData] = useState(pet)
    const {userData, addPet} = useUserStore()
  return (
  <Wizard
  startIndex={0}
  header={<Header />}
  footer={<Footer formData={formData} userData={userData}/>}
  wrapper={<AnimatePresence mode="wait" />}>
    <MainInfo setFormData={setFormData} formData={formData} />
    <Food setFormData={setFormData} formData={formData}/>
    <Behavior setFormData={setFormData} formData={formData}/>
    <Health setFormData={setFormData} formData={formData}/>
    <Walks setFormData={setFormData} formData={formData}/>
    <MoreInfo setFormData={setFormData} formData={formData}/>
  </Wizard>
  )
}

export default WrapperForm