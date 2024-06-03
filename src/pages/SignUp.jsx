import axios from 'axios'

function SignUp() {


    const signUpSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)
        const payload = Object.fromEntries(formData)
        console.log("payload", payload)
    }

  return (
    <form onSubmit={signUpSubmit}>
    <input type="text" name="firstName" placeholder="First Name"/>
    <input type="text" name="email" placeholder="Email" />
    <input type="text" name="password" placeholder="Password"/>
    <input type="text" name="phone" placeholder="Phone" />
    <button>Log In</button>
</form>
  )
}

export default SignUp