import React from 'react'
import logo from "./location.png"

const Card = (gg) =>{
    
    return (
        <>
    <div className="card">
     <img src={gg.img} alt="null" className="card--img"/>
        <div className="card--info">
        <span className="infoBar">
            <img src={logo} alt="null" className="infobar--img"/>
            <p className="infobar--Title">{gg.location}</p>
            <a className="infobar--map" 
                href={gg.map}
                target="_blank"
                rel="noreferrer">View on Google maps
            </a>
        </span>
        <h1 className="title">{gg.place}</h1>
        <p className="date">{gg.time}</p>
        <p className="description">{gg.description}</p>
        </div>
    </div>
     <hr/>
    </>
    )
}

export default Card