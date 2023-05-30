import React from "react"
import Moon from "./Common/Moon.jsx"
import Star from "./Common/Stars.jsx"
import Cloud from "./Common/Cloud.jsx"
import Trees from "./Common/Trees"
import Hill from "./Common/Hill.jsx"
import Sign from "./Common/Signpost.jsx"
import Witchery from "./Cottage/Witch.jsx"

function Witch(props){
	return(
		<div>
			<Moon/>
			<Cloud class="1"/>
			<Cloud class="2"/>
			<Cloud class="3"/>
			<Star/>
			
			<Sign content="Return" content2="About" changeTo="1" changeTo2="2" slider={props.change}/>
			{/*<Witchery/>*/}
			<Hill frontClass="" hidden={true}>
			
			</Hill>


			<Trees/>
			<Witchery change={props.change}/>
		</div>
		)
}
export default Witch