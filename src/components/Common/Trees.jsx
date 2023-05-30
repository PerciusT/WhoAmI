import React from "react"
import Tree from "./Tree.jsx"
import Dimensions from "./dimensions.jsx"

import "../../css/Tree.css"
// import "../../css/trees.css"

function Trees(){
	function treeGen(){
		let arr=["withered tree","stumpy tree","pine"]
		let treeArr=[]
		const { width } = Dimensions();
		let x=18
		// console.log(width)
		if(width<=400)
		{
			x=2
		}
		else if(width<=600)
		{
			x=10
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
					if(x==="pine"){
						correction.y=(Math.random()*(10-4)+4)*-1+"%"
					}
					if(x==="stumpy tree"){
						correction.y=Math.random()*(10-6)+6+"%"
					}
					return <Tree key={index} src={`./images/${x}.webp`} treeType="left" className="Trees leftTree" alt="Tree in forest web design web development" correction={correction}/>
				})}
			</div>
			<div className="rightTrees">
				{treeGen().map((x,index)=>{
					let correction={
					}
					correction.x=Math.floor(Math.random() * (90 - 45)) + 45+"%"
					correction.y=Math.random()*10+1+"%"
					if(x==="pine"){
						correction.y=(Math.random()*(10-4)+4)*-1+"%"
					}
					if(x==="stumpy tree"){
						correction.y=Math.random()*(10-6)+6+"%"
					}
					return <Tree key={index} src={`./images/${x}.webp`} treeType="right" className="Trees rightTree" alt="Tree in forest web design web development" correction={correction}/>
				})}
			</div>
			
		</div>
		)
}
export default Trees