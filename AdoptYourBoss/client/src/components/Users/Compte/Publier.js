import React, { useState, useEffect } from "react";
import NavUsers from "../../Users/Nav/NavUsers";
import axios from 'axios'
import Footer from '../../Footer'

const PublierOffre = () => {

	const url = "http://localhost:5000/offres";
	const [ data, setData ] = useState({titleOffre: "", creator: "", description: "", image: "", jobName: "", contact: "", createDate: ""})

	function submit(e){
		e.preventDefault(e);
		axios.post(url,{
			titleOffre: data.titleOffre,
			creator: data.creator,
			description: data.description,
			image: data.image,
			jobName: data.jobName,
			contact: data.contact
		})
		.then(res =>{
			console.log(res.data)
			window.location.replace("http://localhost:3000/recruteur/Offres")
		})
	}

	function handle(e){
		const newData={...data}
		newData[e.target.id] = e.target.value
		setData(newData)
		console.log(newData)
	}

return (
<div>
	<NavUsers />

	<div class="row justify-content-center">
<div class="col-6 mx-5 bg-dark rounded" style={{marginTop: "150px"}}>

	
<fieldset class="mt-5">
<h1 class="text-light text-center">Publier <span class="text-warning">une</span> offre</h1>
	<form class="mx-5" onSubmit={(e) => submit(e)} action='./admin/'>

		<label for="titre" class="mt-4 text-light mb-2">Titre :</label>
			<input onChange={(e) => handle(e)} id="titleOffre" value={data.titleOffre} type="text" variant="outlined" className="form-control" placeholder="Titre" name="titleOffre" />
		
		<label for="titre" class="mt-4 text-light mb-2">Entreprise :</label>
			<input onChange={(e) => handle(e)} id="creator" value={data.creator} type="text" variant="outlined" className="form-control" placeholder="Société" name="creator" />
			
		<label for="titre" class="mt-4 text-light mb-2">Description :</label>
			<input onChange={(e) => handle(e)} id="description" value={data.description} type="text" variant="outlined" className="form-control" placeholder="Description" name="description" />
			
		<label for="titre" class="mt-4 text-light mb-2">Image :</label>
			<input onChange={(e) => handle(e)} id="image" value={data.image} type="text" variant="outlined" className="form-control" placeholder="Image" name="image" />
			
		<label for="titre" class="mt-4 text-light mb-2">Metier :</label>			
			<input onChange={(e) => handle(e)} id="jobName" value={data.jobName} type="text" variant="outlined" className="form-control" placeholder="Métier demandé" name="jobName" />

			<label for="titre" class="mt-4 text-light mb-2">Contact :</label>			
			<input onChange={(e) => handle(e)} id="contact" value={data.contact} type="text" variant="outlined" className="form-control" placeholder="E-mail de contact" name="contact" />
			<button variant="contained" type="submit" class="my-5 btn btn-warning btn-block">Publier l'offre</button>
	
	</form>  
</fieldset>
</div>
</div>
<Footer />
</div>
	)};

export default PublierOffre;