import Moon from "./Common/Moon.jsx"
import Star from "./Common/Stars.jsx"
import Cloud from "./Common/Cloud.jsx"
import Trees from "./Common/Trees"
import Hill from "./Common/Hill.jsx"
import Sign from "./Common/Signpost.jsx"
// import Water from "./Front/Water.jsx"
import React from "react"
function Front(props){
	return(<div>

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