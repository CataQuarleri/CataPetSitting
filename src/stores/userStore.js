import { create } from 'zustand';
import { auth } from '../auth/firebase.js';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import axios from 'axios';

const BASE_URL = import.meta.env.DEV ? 'http://localhost:8080' : 'https://crm-api-bpie.onrender.com'
export const useUserStore = create((set, get) => ({
	// state: {
	userAuth: null,
	error: false,
	errorData: null,
	authIsReady: false,
	userData: null,
	loading: false,
	// },
	signUp: async (payload) => {
		try {
			const response = await axios.post(`${BASE_URL}/users/api/signUp`, payload);
			console.log('SIGN UP RESPONSE', response);

			set((state) => ({ ...state, error: false, userAuth: 'Sign up succesfully' }));
			get().login(payload);
		} catch (err) {
			set((state) => ({ ...state, error: true, errorData: err.message }));
		}
	},
	login: async (payload) => {
		try {
			const response = await signInWithEmailAndPassword(auth, payload.email, payload.password);
			console.log('RESPONSE', response);
			get().getUserData(response.user.uid);
			set((state) => ({ ...state, error: false, userAuth: response.data }));
		} catch (err) {
			console.log('ERROR IN LOGIN', err);
			set((state) => ({ ...state, error: true, errorData: err.message }));
		}
	},
	getUserData: async (id) => {
		console.log('IM IN');
		try {
			const response = await axios.get(`${BASE_URL}/users/api/${id}`);
			console.log('call backend', response);
			set((state) => ({ ...state, userData: response.data }));
		} catch (err) {
			console.log('ERROR', err);
			set((state) => ({ ...state, error: true, errorData: err.message }));
		}
	},
	setUserData: async (payload)=>{
		set((state)=> ({...state, userData: payload, loading: true}))
		await get().updateProfile(payload)
		set((state)=> ({...state, userData: payload, loading: false}))

	},
	initialLoad: (user) => {
		// if(user){
		set((state) => ({ ...state, error: false, userAuth: user, authIsReady: true }));
		if (user) {
			get().getUserData(user.uid);
		}
		// }
	},
	logOut: async () => {
		try {
			await signOut(auth);
			set((state) => ({ ...state, userAuth: null, userData: null }));
		} catch (error) {
			console.log('ERROR', error);
			set((state) => ({ ...state, error: true, errorData: error.message }));
		}
	},
	addPet: async (payload) => {
		let userId = get().userData._id
		try {
			set((state) => ({ ...state, loading: true}))
			let response = await axios.put(`${BASE_URL}/pets/api/${userId}`, payload)
			if(response.status == 200){
				// await get().getUserData(userId)
				set((state) => ({ ...state, loading: false}))
				// return "Pet added successfully"
			}else if (response.status == 500) {
				set((state) => ({ ...state, loading: false, error: true, errorData: "Could not update user profile"}))
			}
		} catch (error) {
			console.log("ERROR updating user", error)
			set((state) => ({ ...state, error: true, errorData: error.message }));
		}
	},
	updateProfile: async (payload) => {
		try {
			set((state) => ({ ...state, loading: true}))
			let response = await axios.put(`${BASE_URL}/users/api/${payload._id}`, payload)
			if(response.status == 200){
				await get().getUserData(payload._id)
				set((state) => ({ ...state, loading: false}))
			}else if (response.status == 500) {
				set((state) => ({ ...state, loading: false, error: true, errorData: "Could not update user profile"}))
			}
		} catch (error) {
			console.log("ERROR updating user", error)
			set((state) => ({ ...state, error: true, errorData: error.message }));
		}
	},
	updatePet: async () => {},
	requestServices: async () => {},

}));
