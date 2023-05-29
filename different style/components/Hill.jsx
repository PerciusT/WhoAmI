import React from "react"
import "../css/hill.css"


function Hill(){
	return(
		<div className="hillContainer" style={{"zIndex":5}}>
			<div className="wave-container" id="canvas">
  				<div className="wave -zero" id="wrapper"></div>
  				<div className="wave -one"></div>
  				<div className="wave -two"></div>
  				<div className="wave -three" id="wrapper"></div>
			</div>
		</div>
		)
}
export default Hill