import React from 'react'
import './css/skill.css'

function Skill(props:any) {
  return (
    <div className={`${props.class} skill-container`}>
        <p>{props.name}</p>
        <div className='skill-wrapper'>
            <div className='skill' style={{width:`${props.knowledgeInPercent}%`}}> {props.knowledgeInPercent}%</div>
        </div>
    </div>
  )
}

export default Skill