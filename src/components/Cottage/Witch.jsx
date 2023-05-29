import React from "react"
import "../../css/witchHouse.css"
function Witchery(props){
	let [click,clickCheck]=new React.useState(0)
	function grow(){
		clickCheck(1)
		setTimeout(function(){props.change(3)},900)
	}

	return(<img src="./images/witch.webp" className={`witchHouse grow ${click==1&&"clickedGrow"}`} onClick={grow} alt=""/>)

}
export default Witchery