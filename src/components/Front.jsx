import Moon from "./Common/Moon.jsx"
import Star from "./Common/Stars.jsx"
import Cloud from "./Common/Cloud.jsx"
import Trees from "./Common/Trees"
import Hill from "./Common/Hill.jsx"
import Sign from "./Common/Signpost.jsx"
import './About/front.css'
// import Water from "./Front/Water.jsx"
import React from "react"
function Front(props){
	return(<div>
		<div className="frontInfo">
			<h1 className="load">Website in progress!</h1>
			<p className="load">All you see is made with pure code including inside the witch house, the moon the reflection the rivers and hills, refresh the page to see an entirely different forest all done through code except the clouds, individual trees and the outside of the hut!</p>	
		</div>
		
		<Moon/>
		<Cloud/>
		<Star/>

		<Sign content="About" content2="Hire" changeTo="2" changeTo2="0" hidden={false} slider={props.slider}/>
		<Hill frontClass="front" >
		</Hill>
		<Trees/>
	</div>)
}
export default Front