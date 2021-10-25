import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavUsers from "../../Users/Nav/NavUsers";
import Footer from "../../Footer";

const FormUp = (props) => {

	const url = "http://localhost:5000/offres/"
	const [ offres, setOffres ] = useState([])
	const [ data, setData ] = useState({titleOffre: "", creator: "", description: "", image: "", jobName: "", contact:""})

	useEffect(() => 
    {
        async function fetchDataOffres()
        {
			  const id = props.match.params.id
            const request = await axios.get(url+id);
            setData(request.data);
            return request;
        }
        fetchDataOffres();
    }, [url]);

	function submit(e){
		e.preventDefault();
		const id = props.match.params.id;
		axios.post("http://localhost:5000/offres/update/"+id,{
			titleOffres: data.titleOffre,
			creatorOffres: data.creator,
			descriptionOffres: data.description,
			imageOffres: data.image,
			jobNameOffres: data.jobName,
      contact: data.contact
		})
		.then(res =>{
			console.log(res.data)
			props.history.push("/admin/offres")
		})
	}

    console.log(offres)

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
  <div class="col-6 mx-5 justify-content-center bg-dark rounded" style={{marginTop: "150px"}}>
 
    <fieldset class="mt-5">
    <h1 class="text-light text-center">Modifier <span class="text-warning">une</span> offre</h1>
    <form class="mx-5" onSubmit={(e) => submit(e)} action='./admin/offres'>

  <div class="row">
    <div class="col">
      
	      <label class="mt-4 text-light mb-2" for="titleOffres">Titre :</label>
        <input onChange={(e) => handle(e)} id="titleOffre" value={data.titleOffre} type="text" class="form-control" />
        
      
    </div>
    <div class="col">
      
	      <label class="mt-4 text-light mb-2" for="creatorOffres">Entreprise :</label>
        <input onChange={(e) => handle(e)} id="creator" value={data.creator} type="text" class="form-control" />
      </div>
    </div>
  


  
    <label class="mt-4 text-light mb-2" for="descriptionOffres">Description :</label>
    <input onChange={(e) => handle(e)} id="description" value={data.description} type="text" name="descriptionOffres" class="form-control" />
    
 


  
    <label class="mt-4 text-light mb-2" for="imageOffres">Image :</label>
    <input onChange={(e) => handle(e)} id="image" value={data.image} type="text" name="imageOffres" class="form-control" />
   
  


  
  <label class="mt-4 text-light mb-2" for="jobNameOffres">Metier :</label>
    <input onChange={(e) => handle(e)} id="jobName" value={data.jobName} type="text" name="jobNameOffres" class="form-control" />
   
  
    <label class="mt-4 text-light mb-2" for="contactOffres">Contact :</label>
    <input onChange={(e) => handle(e)} id="contact" value={data.contact} type="text" name="contactOffres" class="form-control" />

  <button variant="contained" type="submit" class="my-5 btn btn-warning btn-block">Mettre à Jour</button>
</form> 
</fieldset>
</div>
</div>
<Footer />
</div>
)};

export default FormUp;