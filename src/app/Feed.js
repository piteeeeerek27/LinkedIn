import React, { useEffect, useState } from 'react';
import '../styles/Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db, auth } from './firebase';
import firebase from 'firebase';

const Feed = () => {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		db.collection('posts').onSnapshot((snapshot) =>
			setPosts(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					data: doc.data(),
				})),
			),
		);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();
		db.collection('posts').add({
			name: 'Piter',
			description: 'test',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};

	return (
		<div className='feed'>
			<div className='inputContainer'>
				<div className='input'>
					<CreateIcon />
					<form>
						<input
							type='text'
							value={input}
							onChange={(e) => setInput(e.target.value)}
							placeholder='Start a post'
						/>
						<button type='submit' onClick={sendPost}>
							Send
						</button>
					</form>
				</div>
				<div className='inputOptions'>
					<InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
					<InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
					<InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
					<InputOption
						Icon={CalendarViewDayIcon}
						title='Write article'
						color='#7fc15e'
					/>
				</div>
			</div>
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post
					key={id}
					name={name}
					description={description}
					message={message}
					photoUrl={photoUrl}
				/>
			))}
			<Post name='piterek' description='test' message='work' />
		</div>
	);
};

export default Feed;
