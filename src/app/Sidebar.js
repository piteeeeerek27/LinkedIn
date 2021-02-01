import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../styles/Sidebar.scss";

const Sidebar = () => {
	const user = useSelector(selectUser);

	const recentItem = (topic) => (
		<div className="recentItem">
			<span className="hash">#</span>
			<p> {topic} </p>
		</div>
	);

	return (
		<div className="sidebar">
			<div className="top">
				<img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="" />
				<Avatar src={user.photoUrl} className="avatar">
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>

			<div className="stats">
				<div className="stat">
					<p>Who viewed you</p>
					<p className="statNumber">2,543</p>
				</div>
				<div className="stat">
					<p>Views on post</p>
					<p className="statNumber">2,448</p>
				</div>
			</div>

			<div className="bottom">
				<p>Recent</p>
				{recentItem("reactjs")}
				{recentItem("programming")}
				{recentItem("softwareengineering")}
				{recentItem("design")}
				{recentItem("developer")}
			</div>
		</div>
	);
};

export default Sidebar;
