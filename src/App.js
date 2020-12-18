import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Feed from './app/Feed';
import { auth } from './app/firebase';
import Header from './app/Header';
import Login from './app/Login';
import Sidebar from './app/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import './styles/App.css';

const App = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// is logged in
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.photoURL,
					}),
				);
			} else {
				// is logged out
				dispatch(logout());
			}
		});
	}, []);

	return (
		<div className='app'>
			<Header />

			{!user ? (
				<Login />
			) : (
				<div className='body'>
					<Sidebar />
					<Feed />
					{/* <Widgets /> */}
				</div>
			)}
		</div>
	);
};

export default App;
