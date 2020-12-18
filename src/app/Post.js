import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import '../styles/Post.css';
import InputOption from './InputOption';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className='post'>
			<div className='headerPost'>
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				<div className='infoPost'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className='bodyPost'>
				<p>{message}</p>
			</div>

			<div className='buttons'>
				<InputOption Icon={ThumbUpOutlinedIcon} title='Like' color='gray' />
				<InputOption Icon={ChatOutlinedIcon} title='Like' color='gray' />
				<InputOption Icon={ShareOutlinedIcon} title='Like' color='gray' />
				<InputOption Icon={SendOutlinedIcon} title='Like' color='gray' />
			</div>
		</div>
	);
});

export default Post;
