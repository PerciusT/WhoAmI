import React from "react"
import Moon from "./Common/Moon.jsx"
import Star from "./Common/Stars.jsx"
import Cloud from "./Common/Cloud.jsx"
import Trees from "./Common/Trees"
import Hill from "./Common/Hill.jsx"
import Sign from "./Common/Signpost.jsx"

function About(props){
	return(
		<div>
			<Moon/>
			<Cloud/>
			<Star/>
			<Sign content="Hire" content2="Return" changeTo="0" changeTo2="1" slider={props.slider}/>
			<Hill  frontClass="" hidden={true}>
			</Hill>
			<Trees/>
		</div>
		)
}
export default About