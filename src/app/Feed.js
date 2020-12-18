import React from 'react';
import '../styles/Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

const Feed = () => {
	return (
		<div className='feed'>
			<div className='inputContainer'>
				<div className='input'>
					<CreateIcon />
					<form>
						<input type='text' placeholder='Start a post' />
						<button type='submit'>Send</button>
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
		</div>
	);
};

export default Feed;
