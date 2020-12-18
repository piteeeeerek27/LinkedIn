import { Avatar } from '@material-ui/core';
import React from 'react';
import '../styles/HeaderOption.css';

const HeaderOption = ({ avatar, Icon, title }) => {
	return (
		<div className='headerOption'>
			{Icon && <Icon className='icon' />}
			{avatar && <Avatar className='icon' src={avatar} />}
			<h3 className='title'>{title}</h3>
		</div>
	);
};

export default HeaderOption;
