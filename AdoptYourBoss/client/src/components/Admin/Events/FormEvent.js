import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavUsers from '../../Users/Nav/NavUsers'
import Footer from '../../Footer'

const FormEvents = () => {

	const url = "http://localhost:5000/events";
	const [ data, setData ] = useState({titleEvent: "", description: "", image: "", createDate: "", lieu: "", dates: ""})
    const [ searchTerm, setSearchTerm ] = useState([])

 

	function submit(e){
		e.preventDefault(e);
		axios.post(url,{
			titleEvent: data.titleEvent,
			description: data.description,
			image: data.image,
			lieu: data.lieu,
			dates: data.dates
		})
		.then(res =>{
			console.log(res.data)
			window.location.replace("http://localhost:3000/admin/Évènements")
		})
	}

	function handle(e){
		const newData={...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData)
	}

	const handleSearchTerm = (e) =>{
        
        var value = e.target.value;
        setSearchTerm(value);
    }


return (
<div>
	<NavUsers />
	<div class="row justify-content-center">
<div class="col-6 mx-5 bg-dark rounded" style={{marginTop: "150px"}}>
	<fieldset class="mt-5">
	<h1 class="text-light text-center">Ajouter <span class="text-warning">un</span> évènement</h1>
	<form class="mx-5" onSubmit={(e) => submit(e)} action='./admin/Évènements'>

		<label for="titre" class="mt-4 text-light mb-2">Titre :</label>
			<input onChange={(e) => handle(e)} id="titleEvent" value={data.titleEvent} type="text" variant="outlined" class="form-control" placeholder="Titre" name="titleEvent" />
		
	
		<label for="description" class="mt-4 text-light mb-2">Description :</label>
			<input onChange={(e) => handle(e)} id="description" value={data.description} type="text" variant="outlined" class="form-control" placeholder="Description" name="description" />
			
		<label for="image" class="mt-4 text-light mb-2">Image :</label>
			<input onChange={(e) => handle(e)} id="image" value={data.image} type="text" variant="outlined" class="form-control" placeholder="Image" name="image" />
			
		<label for="lieu" class="mt-4 text-light mb-2">Lieu :</label>
			<input onChange={(e) => handle(e)} id="lieu" value={data.lieu} type="text" variant="outlined" class="form-control" placeholder="Lieu de l'évènement" name="image" />
			
		<label for="dates" class="mt-4 text-light mb-2">Date :</label>
			<input onChange={(e) => handle(e)} class="text-dark form-control" id="dates" type="date" name="dates" />
		
			<button variant="contained" type="submit" class="my-5 col-3 btn btn-warning btn-block">Ajouter l'évènement</button>
		
	</form>  
</fieldset>
</div>
</div>
<Footer />
</div>

	)};


export default FormEvents;