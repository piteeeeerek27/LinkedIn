import React from 'react';
import Feed from './app/Feed';
import Header from './app/Header';
import Sidebar from './app/Sidebar';
import './styles/App.css';

const App = () => {
	return (
		<div className='app'>
			<Header />
			<div className='body'>
				<Sidebar />
				<Feed />
				{/* <AppBody /> */}
			</div>
		</div>
	);
};

export default App;
