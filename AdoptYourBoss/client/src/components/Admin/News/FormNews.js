import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavUsers from '../../Users/Nav/NavUsers'
import Footer from '../../Footer'

const FormNews = () => {

	const url = "http://localhost:5000/news";
	const [ data, setData ] = useState({titleNews: "", description: "", image: "", createDate: ""})

	function submit(e){
		e.preventDefault(e);
		axios.post(url,{
			titleNews: data.titleNews,
			description: data.description,
			image: data.image
		})
		.then(res =>{
			console.log(res.data)
			window.location.replace("http://localhost:3000/admin/News")
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
<h1 class="text-light text-center">Ajouter <span class="text-warning">une</span> news</h1>
	<form class="mx-5" onSubmit={(e)=>submit(e)}>

		<label for="titre" class="mt-4 text-light mb-2">Titre :</label>
			<input onChange={(e) => handle(e)} id="titleNews" value={data.titleNews} type="text" variant="outlined" class="form-control" placeholder="Titre" name="titleNews" />
		
		<label for="titre" class="mt-3 text-light mb-2">Description :</label>
			<input onChange={(e) => handle(e)} id="description" value={data.description} type="text" variant="outlined" class="form-control" placeholder="Description" name="description" />
			
		<label for="titre" class="mt-3 text-light mb-2">Image :</label>
			<input onChange={(e) => handle(e)} id="image" value={data.image} type="text" variant="outlined" class="form-control" placeholder="Image" name="image" />
			
			<button variant="contained" type="submit" class="my-5 btn btn-warning btn-block">Ajouter la news</button>
	
	</form>  
</fieldset>
</div>
</div>
<Footer />
</div>
	)};

export default FormNews;