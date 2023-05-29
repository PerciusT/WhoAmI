import React from "react"
import "../css/hill.css"

function Hill(){
	return(
		<div className="hillContainer" style={{"zIndex":5}}>
			<div className="wave-container">
  				<div className="wave -zero"></div>
  				<div className="wave -one"></div>
  				<div className="wave -two"></div>
  				<div className="wave -three"></div>
			</div>
		</div>
		)
}
export default Hill