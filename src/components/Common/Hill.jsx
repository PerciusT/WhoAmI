import React from "react"
import "../../css/hill.css"
// import Moon from "./Front/Moon.jsx"


function Hill(props){
	return(
		<div className="hillContainer" style={{"zIndex":5}}>
			<div className="wave-container">
  				<div className={`wave -zero ${props.frontClass }`}></div>



  					<div className={`wave -one ${props.frontClass }`}></div>

  					<div className={`wave -three ${ props.frontClass }`}></div>
  				
  				<div className={`wave -four ${props.frontClass }`} hidden={props.hidden}></div>

  				<div className={`wave -two ${props.frontClass }`} ></div>

  				{/*<Moon position="80%"/>*/}
			</div>
		</div>
		)
}
export default Hill