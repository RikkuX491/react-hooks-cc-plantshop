import React, { useState } from "react";

function NewPlantForm({addPlant}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleSubmit(event){
    event.preventDefault()

    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newPlant => addPlant(newPlant))
  }

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Plant name" />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" />
        <input onChange={updateFormData} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
