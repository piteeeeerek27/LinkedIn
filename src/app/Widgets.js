import React from "react";
import "../styles/Widgets.scss";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
	const newsArticle = (heading, subtitle) => (
		<div className="articleW">
			<div className="articleLeft">
				<FiberManualRecordIcon />
			</div>
			<div className="articleRight">
				<h4>
					{heading}
					<p>{subtitle}</p>
				</h4>
			</div>
		</div>
	);
	return (
		<div className="widgetss">
			<div className="headerWidgets">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Im Back", "Essa")}
			{newsArticle("Im Back", "Essa")}
			{newsArticle("Im Back", "Essa")}
			{newsArticle("Im Back", "Essa")}
			{newsArticle("Im Back", "Essa")}
			{newsArticle("Im Back", "Essa")}
		</div>
	);
};

export default Widgets;
