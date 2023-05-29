import Moon from "./Front/Moon.jsx"
import Star from "./Front/Stars.jsx"
import Cloud from "./Front/Cloud.jsx"
import Trees from "./Front/Trees"
import Hill from "./Hill.jsx"
import React from "react"
function Front(){
	return(<div>

		<Moon/>
		<Cloud/>
		<Star/>

		<Hill/>
		
		<Trees/>
	</div>)
}
export default Front