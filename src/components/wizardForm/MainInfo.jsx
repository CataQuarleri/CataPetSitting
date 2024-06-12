import React, { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import styles from './wizardForm.module.css';
import { storage } from '../../auth/firebase';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

function MainInfo({ setFormData, formData }) {
  const { nextStep } = useWizard();
  const [imgUrl, setImgUrl] = useState(null)
  const [progresspercent, setProgresspercent] = useState(0);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileSubmit = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    console.log("STOraGEREF", storageRef)
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on("state_changed",
      (snapshot) => {
        console.log("ON SNAPSHOT", snapshot)
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        console.log("ON ERROR", error)
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL)
          console.log("in downloadURL", downloadURL)
        setFormData((prevData) => ({
          ...prevData,
          picture: downloadURL,
        }));
        });
      }
    );
  };

  return (
    <motion.div
      className={styles.formStep}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.header}>Main Information</h2>
        <div className={styles.entry}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="typeOfPet" className={styles.label}>Type of Pet</label>
          <input
            type="text"
            name="typeOfPet"
            value={formData.typeOfPet}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="breed" className={styles.label}>Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="sex" className={styles.label}>Sex</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="yearOfBirth" className={styles.label}>Year of Birth</label>
          <input
            type="number"
            name="yearOfBirth"
            value={formData.yearOfBirth}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="microchipped" className={styles.label}>
            Microchipped
          </label>
          <input
            type="checkbox"
            name="microchipped"
            checked={formData.microchipped}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <form className={styles.entry} onSubmit={handleFileSubmit}>
          <label htmlFor="picture" className={styles.label}>Upload Picture</label>
          <input
            type="file"
            name="picture"
            accept="image/*"
            // onChange={handleFileChange}
            className={styles.input}
          />
          <button type="submit">ADD PICTURE</button>
        {
        !imgUrl &&
        <div className={styles.outerbar}>
          <div className={styles.innerbar} style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
        </div>
      }
      {
        imgUrl &&
        <img src={imgUrl} alt='uploaded file' height={200} style={{width: "fit-content"}} />
      }
        </form>
        <button type="button" className={styles.nextButton} onClick={nextStep}>
          Next
        </button>

    </motion.div>
  );
}

export default MainInfo;