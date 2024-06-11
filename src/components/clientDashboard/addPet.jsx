import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import Input from './Input.jsx'
import styles from './clientStyles.module.css'
import WrapperForm from '../wizardForm/WrapperForm.jsx';
function AddPet() {
    const { userData, updateProfile, setUserData, loading } = useUserStore();
    const [editAddPet, setEditAddPet] = useState(false)
    const [formData, setFormData] = useState(userData)
    const toggleEdit = () => {
        setEditAddPet(!editAddPet);
      };

    	const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        setEditAddPet(false)
        const payload = formData;
        console.log('payload', payload);
        setUserData(payload)
        // userStore.updateProfile(payload);
        // navigate('/');
      };
      useEffect(() => {
        setFormData(userData);
      }, [userData]);
    return (
 <>
 <WrapperForm />
 </>
    );
}

export default AddPet