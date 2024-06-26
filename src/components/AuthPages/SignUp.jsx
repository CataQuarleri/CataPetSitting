import { useUserStore } from '../../stores/userStore';
import { useNavigate } from 'react-router-dom';
import styles from './auth.module.css';

function SignUp() {
	const userStore = useUserStore();
	const navigate = useNavigate();

	const signUpSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const payload = Object.fromEntries(formData);
		console.log('payload', payload);
		userStore.signUp(payload);
		navigate('/');
	};

	return (
		<>
			<form
				className={styles.form}
				onSubmit={signUpSubmit}>
				<h1>Register</h1>
				<input
					className={styles.input}
					type='text'
					name='firstName'
					placeholder='First Name'
					required
				/>
				<input
					className={styles.input}
					type='email'
					name='email'
					placeholder='Email'
					required
				/>
				<input
					className={styles.input}
					type='password'
					name='password'
					placeholder='Password'
					required
				/>
				<input
					className={styles.input}
					type='tel'
					name='phone'
					placeholder='Phone'
					required
				/>
				<button
					className={styles.button}
					type='submit'>
					Sign Up
				</button>
			</form>
		</>
	);
}

export default SignUp;
