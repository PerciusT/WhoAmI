import React from "react"
// import ReactDOM from "react-dom"
import Dimensions from "./dimensions.jsx"
import "../../css/Tree.css"
function Tree(props){
	let { width } = Dimensions();
		// console.log(ReactDOM.findDOMNode(this.refs.container).style)
	// let correction=props.correction
	if(width<=500){
		let y= Math.random()*10+1+"%"
		if(props.treeType==="left")
		{
			// console.log(y)
			let x = Math.floor(Math.random() * (-30 + 10 - 1)) - 10+"%"
			// console.log(x)
			return(<img src={props.src} alt={props.alt} className={props.className} style={{"marginTop":y,"left": x}}/>)	
		}
		else
		{
			let x=Math.floor(Math.random() * (50 - 35 + 2)) + 35+"%"
			return(<img src={props.src} alt={props.alt} className={props.className} style={{"marginTop":y,"left": x}} />)
		}
		
	}
	return(
		<img src={props.src} alt={props.alt} className={props.className} style={{"marginTop":props.correction.y, "left":props.correction.x}}/>
	)
}

export default Tree