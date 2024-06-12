import { useAuthStore } from '../../stores/authStore';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css'

function Login() {
	const authStore = useAuthStore();
	const navigate = useNavigate();
	const loginSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const payload = Object.fromEntries(formData);
		await authStore.login(payload);
		navigate('/');
	};
	return (
		<>
			<form onSubmit={loginSubmit} className={styles.form}>
		<h1>Access My Portal</h1>

				<input 
          className={styles.input}
					type='text'
					name='email'
					placeholder='Email'
				/>
				<input
          className={styles.input}
					type='text'
					name='password'
					placeholder='Password'
				/>
				<button className={styles.button}>Log In</button>
			</form>
		</>
	);
}

export default Login;
