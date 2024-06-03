import { useAuthStore } from "../stores/authStore";
import { useNavigate } from "react-router-dom";
function Login() {
  const authStore = useAuthStore()
  const navigate = useNavigate()
    const loginSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        authStore.login(payload)
        console.log("AUTH", authStore.userAuth)
        authStore.getUserData(authStore.userAuth.uid)
        console.log("user", authStore.userData)
        navigate('/')
    }
  return (
    <>
    <form onSubmit={loginSubmit}>
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="password" placeholder="Password"/>
        <button>Log In</button>
    </form>
    </>
  )
}

export default Login