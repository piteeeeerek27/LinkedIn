import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/HeaderOption.scss";

const HeaderOption = ({ avatar, Icon, title, onClick }) => {
	const user = useSelector(selectUser);
	return (
		<div onClick={onClick} className="headerOption">
			{Icon && <Icon className="icon" />}
			{avatar && <Avatar className="icon">{user?.email[0]}</Avatar>}
			<h3 className="title">{title}</h3>
		</div>
	);
};

export default HeaderOption;
