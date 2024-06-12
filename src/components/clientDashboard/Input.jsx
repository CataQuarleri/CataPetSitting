import styles from './clientStyles.module.css'
import { useUserStore } from '../../stores/userStore'

function Input({label, data, editProfile, setFormData, nestedData = ""}) {
    const { userData } = useUserStore();
      console.log("OOLD DATA", data)
      let newData;
      if(nestedData != ""){
        newData = nestedData
      }else{
        newData = userData[data]
      }
  //   if(object !== ""){
  //   data = object[data]
  //   console.log('newData', data)
  // }
  return (
    <div className={styles.entry} style={{display: !editProfile ? !newData && "none" : "flex"}}>
              <label htmlFor={data} className={styles.label}>{label}</label>
              <input
                name={data}
                placeholder={newData}
                disabled={data == "email" ? true : !editProfile}
                className={styles.input}
                onChange={(e)=> setFormData(prevState => ({...prevState, [data]: e.target.value}))}
              />
            </div>
  )
}

export default Input