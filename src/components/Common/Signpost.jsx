import React from "react"
import "../../css/signpost.css"

function Sign(props){
	return(
		<div className="postCont">
			<div hidden={props.hidden} className="post" onClick={()=>{
				props.slider(props.changeTo)
			}}>
  				<span>{props.content}</span>
  				{/*<span>Click here</span>*/}
			</div>
			<div className="post2" hidden={props.hidden2} onClick={()=>{
				props.slider(props.changeTo2)
			}}>
  				<span>{props.content2}</span>{/*
  				<span>Click here</span>*/}
			</div>
		</div>)
}

export default Sign