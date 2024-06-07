import styles from './clientStyles.module.css'
import { useUserStore } from '../../stores/userStore'

function Input({label, data, editProfile, setFormData}) {
    const { userData } = useUserStore();

  return (
    <div className={styles.entry} style={{display: !editProfile ? !userData[data] && "none" : "flex"}}>
              <label htmlFor={userData[data]} className={styles.label}>{label}</label>
              <input
                name={userData[data]}
                placeholder={userData[data]}
                disabled={data == "email" ? true : !editProfile}
                className={styles.input}
                onChange={(e)=> setFormData(prevState => ({...prevState, [data]: e.target.value}))}
              />
            </div>
  )
}

export default Input