import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavUsers from "../../Users/Nav/NavUsers";
import Footer from "../../Footer";

const FormUp = (props) => {

	const url = "http://localhost:5000/users/"
	const [ events, setEvents ] = useState([])
	const [ data, setData ] = useState({Nom: "", Prénom: "", job: "", adresse: "", CplAdresse: "", CP: "", Ville: "", Tel: "", Email: "", MDP: "", Roles: "", siret: "", NomEntreprise: "", image: ""})

	useEffect(() => 
    {
        async function fetchDataUsers()
        {
			const id = props.match.params.id
            const request = await axios.get(url+id);
            setData(request.data);
            return request;
        }
        fetchDataUsers();
    }, [url]);

	function submit(e){
		e.preventDefault(e);
		const id = props.match.params.id;
		axios.post("http://localhost:5000/users/update/"+id,{
			Nom: data.Nom,
			Prénom: data.Prénom,
			job: data.job,
            adresse: data.adresse,
            CplAdresse: data.CplAdresse,
            CP: data.CP,
            Ville: data.Ville,
            tel: data.Tel, 
            Email: data.Email,
            MDP: data.MDP,
            Roles: data.Roles,
            siret: data.siret, 
            NomEntreprise: data.NomEntreprise,
            image: data.image
		})
		.then(res =>{
			console.log(res.data)
			props.history.push("/admin/Accueil")
		})
	}

    console.log(events)

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
<h1 class="text-light text-center pt-3">Modifier <span class="text-warning">un</span> utilisateur</h1>
	<form class="mx-5 justify-content-center" onSubmit={(e) => submit(e)} action='./admin/Accueil'>

	<div class="row justify-content-center mt-5">
	<div class="col-6">
		<label for="Nom" class="text-light">Nom :</label>
		<input onChange={(e) => handle(e)} id="Nom" value={data.Nom} type="text" variant="outlined" class="form-control" placeholder="Nom" name="nom" />
	</div>
	<div class="col-6">
		<label for="Prénom" class="text-light">Prénom :</label>
		<input onChange={(e) => handle(e)} id="Prénom" value={data.Prénom} type="text" variant="outlined" class="form-control" placeholder="Prénom" name="prenom" />
	</div>
	</div>

	<div class="row justify-content-center mt-3">
	<div class="col-6">	
		<label for="adresse" class="text-light">Adresse :</label>
			<input onChange={(e) => handle(e)} id="adresse" value={data.adresse} type="text" variant="outlined" className="form-control" placeholder="Adresse" name="adresse" />
			</div>	
			<div class="col-6">	
		<label for="Complément d'adresse" class="text-light">Complément d'adresse :</label>
			<input onChange={(e) => handle(e)} id="CplAdresse" value={data.CplAdresse} type="text" variant="outlined" className="form-control" placeholder="Complément d'adresse" name="cpladresse" />
			</div>	
			</div>	

			<div class="row justify-content-center mt-3">
	<div class="col-6">
			<label for="Code Postal" class="text-light">Code Postal :</label>
			<input onChange={(e) => handle(e)} id="CP" value={data.CP} type="text" variant="outlined" className="form-control" placeholder="Code Postal" name="cp" />
			</div>	
			<div class="col-6">	
			<label for="Ville" class="text-light">Ville :</label>
			<input onChange={(e) => handle(e)} id="Ville" value={data.Ville} type="text" variant="outlined" className="form-control" placeholder="Ville" name="ville" />
			</div>	
			</div>

			<div class="row justify-content-center mt-3">
	<div class="col-6">
			<label for="job" class="text-light">Métier :</label>
			<input onChange={(e) => handle(e)} id="job" value={data.job} type="text" variant="outlined" className="form-control" placeholder="Métier" name="image" />
			</div>	
			<div class="col-6">	
			<label for="Tel" class="text-light">Tel :</label>
			<input onChange={(e) => handle(e)} id="Tel" value={data.Tel} type="text" variant="outlined" className="form-control" placeholder="Téléphone" name="image" />
			</div>	
			</div>

			<div class="row justify-content-center mt-3">
	<div class="col-6">
			<label for="Email" class="text-light">Email :</label>
			<input onChange={(e) => handle(e)} id="Email" value={data.Email} type="text" variant="outlined" className="form-control" placeholder="Email" name="image" />
			</div>	
			<div class="col-6">	
			<label for="MDP" class="text-light">Mot de passe :</label>
			<input onChange={(e) => handle(e)} id="MDP" value={data.MDP} type="text" variant="outlined" className="form-control" placeholder="Mot de passe" name="image" />
			</div>	
			</div>

			<div class="row justify-content-center mt-3">
	<div class="col-6">
			<label for="Roles" class="text-light">Roles :</label>
			<input onChange={(e) => handle(e)} id="Roles" value={data.Roles} type="text" variant="outlined" className="form-control" placeholder="Roles" name="image" />
			</div>	
			<div class="col-6">	
			<label for="siret" class="text-light">N° Siret :</label>
			<input onChange={(e) => handle(e)} id="siret" value={data.siret} type="text" variant="outlined" className="form-control" placeholder="N° de siret" name="image" />
			</div>	
			</div>

			<div class="row justify-content-center mt-3">
	<div class="col-6">
			<label for="NomEntreprise" class="text-light">Nom d'entreprise :</label>
			<input onChange={(e) => handle(e)} id="NomEntreprise" value={data.NomEntreprise} type="text" variant="outlined" className="form-control" placeholder="Nom de l'entreprise" name="image" />
			</div>	
			<div class="col-6">	
			<label for="image" class="text-light">Image :</label>
			<input onChange={(e) => handle(e)} id="image" value={data.image} type="text" variant="outlined" className="form-control" placeholder="Image" name="image" />
			</div>	
			</div>
			
			<button variant="contained" type="submit" class="my-5 btn btn-warning btn-block">Modifier l'utilisateur</button>
	
	</form>  
</fieldset>
</div>
</div>
<Footer />
</div>
	)};

export default FormUp;