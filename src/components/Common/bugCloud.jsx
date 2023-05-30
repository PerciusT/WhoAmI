import React from "react"
import "../../css/cloud.css"

function cloud(props){
  return <div className={`cloud${props.class}`}>
  <div className={`cloud${props.class}__clouds1`}>
    <span></span>
  </div>
  <div className={`cloud${props.class}__clouds2`}>
    <span></span><span></span><span></span><span></span>
  </div>
  <div className={`cloud${props.class}__clouds3`}>
    <span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div className={`cloud${props.class}__clouds4`}>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div className={`cloud${props.class}__clouds5`}>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div className={`cloud${props.class}__rain`}>
    <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
  </div>
  <div className={`cloud${props.class}__lightning`}>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>

}

export default cloud