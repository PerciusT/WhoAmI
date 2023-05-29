import React from "react"
import Tree from "./Tree.jsx"
import Dimensions from "./dimensions.jsx"

import "../../css/Tree.css"
// import "../../css/trees.css"

function Trees(){
	function treeGen(){
		let arr=["withered tree","stumpy tree"]
		let treeArr=[]
		const { width } = Dimensions();
		let x=40
		// console.log(width)
		if(width<=400)
		{
			x=10
		}
		else if(width<=600)
		{
			x=15
		}
		for(let i=0;i<x;i++){
			// console.log(i)
			let currentTree=Math.floor(Math.random() * arr.length)
			// return(
			treeArr.push(arr[currentTree])
			// )
		}
		return treeArr
	}
	return(
		<div className="TreeGen">
			{/*<h1 style={{color:"white"}}>Work in progress </h1>*/}
			<div className="leftTrees">
				{treeGen().map((x,index)=>{

					let correction={
					}
					correction.x=Math.floor(Math.random()*25+1)-10+"%"
					correction.y=Math.random()*10+1+"%"
					return <Tree key={index} src={`./images/${x}.png`} treeType="left" className="Trees leftTree" correction={correction}/>
				})}
			</div>
			<div className="rightTrees">
				{treeGen().map((x,index)=>{
					let correction={
					}
					correction.x=Math.floor(Math.random() * (85 - 50 + 1)) + 50+"%"
					correction.y=Math.random()*10+1+"%"
					return <Tree key={index} src={`./images/${x}.png`} treeType="right" className="Trees rightTree" correction={correction}/>
				})}
			</div>
			
		</div>
		)
}
export default Trees