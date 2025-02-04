import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

import { useState, useEffect } from "react";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(plantsData => {
      setPlants(plantsData)
    })
  }, [])

  function addPlant(newPlantData){
    setPlants([...plants, newPlantData])
  }

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  const filteredPlants = plants.filter(plant => {
    if(searchText === ""){
      return true
    }
    return plant.name.toUpperCase().includes(searchText.toUpperCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search updateSearchText={updateSearchText} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
