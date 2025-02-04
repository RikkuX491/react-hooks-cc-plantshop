import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const plantCardComponents = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant}/>
  })

  return (
    <ul className="cards">{plantCardComponents}</ul>
  );
}

export default PlantList;
