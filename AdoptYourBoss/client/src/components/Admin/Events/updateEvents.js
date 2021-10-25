import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavUsers from '../../Users/Nav/NavUsers'
import Footer from '../../Footer'

const FormUp = (props) => {

	const url = "http://localhost:5000/events/"
	const [ events, setEvents ] = useState([])
	const [ data, setData ] = useState({titleEvent: "", description: "", image: "", lieu: "", dates: ""})

	useEffect(() => 
    {
        async function fetchDataEvents()
        {
			  const id = props.match.params.id
            const request = await axios.get(url+id)
            setData(request.data)
            return request
        }
        fetchDataEvents();
    }, [url]);

	function submit(e){
		e.preventDefault(e);
		const id = props.match.params.id;
		axios.post("http://localhost:5000/events/update/"+id,{
			titleEvent: data.titleEvent,
			descriptionEvent: data.description,
			imageEvent: data.image,
      datesEvent: data.dates,
      lieuEvent: data.lieu,
		})
		.then(res =>{
			console.log(res.data)
			props.history.push("/admin/Évènements")
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
    <h1 class="text-light text-center">Modifier <span class="text-warning">un</span> évènement</h1>
<form class="mx-5" onSubmit={(e) => submit(e)} action='./admin/Évènements'>
  
      
	      <label class="mt-4 text-light mb-2" for="titleEvent">Titre :</label>
        <input onChange={(e) => handle(e)} id="titleEvent" value={data.titleEvent} type="text" name="titleEvent" class="form-control" />
      
  
  
  <label class="mt-4 text-light mb-2" for="descriptionEvent">Description :</label>
    <input onChange={(e) => handle(e)} id="description" value={data.description} type="text" name="descriptionEvent" class="form-control" />
 

  
  <label class="mt-4 text-light mb-2" for="imageEvent">Image :</label>
    <input onChange={(e) => handle(e)} id="image" value={data.image} type="text" name="imageEvent" class="form-control" />
 

  
  <label class="mt-4 text-light mb-2" for="lieuEvent">Lieu :</label>
    <input onChange={(e) => handle(e)} id="lieu" value={data.lieu} type="text" name="lieuEvent" class="form-control" />
  

  
  <label class="mt-4 text-light mb-2" for="datesEvent">Dates :</label>
    <input onChange={(e) => handle(e)} id="dates" value={data.dates} type="text" name="datesEvent" class="form-control" />
  

  <button variant="contained" type="submit" class="col-2 my-5 btn btn-warning btn-block">Mettre à Jour</button>
</form> 
</fieldset>

</div>
</div>
<Footer />
</div>
	)};

export default FormUp;