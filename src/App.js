import React from 'react'
import "./style.css"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    //breakdown the array into usable objects
const jokeTing = data.map(appData=>{
    return <Card 
    key={appData.title}
        img={appData.imageUrl}
        location={appData.location}
        map={appData.googleMapsUrl}
        place={appData.title}
        time={appData.startDate + " - " + appData.endDate}
        description={appData.description} />
})
    //arranging the app
    return (
     <div>
     <Navbar />
     {jokeTing}
     </div>
    )
}