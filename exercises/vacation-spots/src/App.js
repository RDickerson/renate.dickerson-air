import React from 'react';
import VacationSpots from "./VacationSpots"




const App = () => {
  const vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]
  const vacation = vacationSpots.map((location, i) => {
    return (
      <VacationSpots 
        key= {location.place + i}
        place= {location.place}
        price= {location.price}
      />
    )
  })
  return (
    <div>
      {vacation}
    </div>
  )

}
  


export default App;
