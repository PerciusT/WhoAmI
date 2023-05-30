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
			<p className="load hideOnPhone">Best experienced on a computer All you see is made with pure code(html css js) including inside the witch house, the moon the reflection the rivers and hills, clouds, stars, refresh the page to see an entirely different forest all done through code except the individual trees and the outside of the hut!</p>	
			<p className="load">Click the signs to navigate! you can also click anything that grows when hovered over just like a game!</p>
		</div>
		
		<Moon/>
		<Cloud class="1"/>
		<Cloud class="2"/>
		<Cloud class="3"/>
		<Star/>

		<Sign content="About" content2="Hire" changeTo="2" changeTo2="0" hidden={false} slider={props.slider}/>
		<Hill frontClass="front" >
		</Hill>
		<Trees/>
	</div>)
}
export default Front