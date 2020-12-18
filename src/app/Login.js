import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import '../styles/Login.css';
import { auth } from './firebase';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [profilePic, setProfilePic] = useState('');
	const dispatch = useDispatch();

	const loginToApp = (e) => {
		e.preventDefault();

		auth
			.signInWithEmailAndPassword(email, password)
			.then((userAuth) => {
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.user.photoURL,
					}),
				);
			})
			.catch((error) => alert(error));

		setEmail('');
		setPassword('');
		setName('');
	};

	const register = () => {
		if (!name) {
			return alert('Please enter a full name');
		}

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((userAuth) => {
				userAuth.user
					.updateProfile({
						displayName: name,
						photoURL: profilePic,
					})
					.then(() => {
						dispatch(
							login({
								email: userAuth.user.email,
								uid: userAuth.user.uid,
								displayName: name,
								photoUrl: profilePic,
							}),
						);
					});
			})
			.catch((error) => alert(error.message));
	};

	return (
		<div className='login'>
			<img
				src='https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo-2011%E2%80%932019.png'
				alt=''
			/>
			<form>
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					type='text'
					placeholder='Full name (required if registering)'
				/>
				<input
					type='text'
					value={profilePic}
					onChange={(e) => setProfilePic(e.target.value)}
					placeholder='Profile pic URL (optional)'
				/>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='Email'
				/>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
					placeholder='password'
				/>
				<button type='submit' onClick={loginToApp}>
					{' '}
					Sign In
				</button>
			</form>

			<p>
				Not a member? {''}
				<span className='register' onClick={register}>
					Register Now
				</span>
			</p>
		</div>
	);
};

export default Login;
