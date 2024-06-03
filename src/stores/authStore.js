import {create} from 'zustand'
import {auth} from '../auth/firebase.js'
import {signInWithEmailAndPassword} from 'firebase/auth'
import axios from 'axios'

const BASE_URL =  'http://localhost:8080'
export const useAuthStore = create((set, get)=> ({
    // state: {
        userAuth: null,
        error: false,
        errorData: null,
        authIsReady: false,
        userData: null,
    // },
    signUp: async (payload)=>{
        try {
            const response = await axios.post(`${BASE_URL}/signUp`, payload)
            set((state)=>({...state, error:false, userAuth: 'Sign up succesfully'}))
        } catch (err) {
            set((state)=>({...state, error: true, errorData: err.message}))

        }
    },
    login: async (payload)=>{
        try {
            const response = await signInWithEmailAndPassword(auth, payload.email, payload.password);
            console.log("RESPONSE", response)
                set((state)=>({...state, error: false, userAuth: response.data}))
     
            
        } catch (err) {
            set((state)=>({...state, error: true, errorData: err.message}))

            
        }
    },
    getUserData: async(id)=>{
        console.log("IM IN")
        try {
            const response = await axios.get(`${BASE_URL}/users/api/${id}`)
            console.log("call backend", response)
            set((state)=>({...state, userData: response.data}))
        } catch (err) {
            console.log("ERROR", err)
            set((state)=>({...state, error: true, errorData: err.message}))
            
        }
    },
    initialLoad: (user)=>{
        // if(user){
            set((state)=>({...state, error: false, userAuth: user, authIsReady: true}))
        if(user){

        }
            // }

    }
}))