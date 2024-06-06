import {create} from 'zustand'


const BASE_URL =  'http://localhost:8080'
export const useClientStore = create((set, get)=> ({
    profile: true,
    service: false,
    myPets: false, 
    info: false,
    toggleProfile: (profile)=>{
        set(()=> {!profile})
    },
    addPet: ()=>{
        
    }
}))