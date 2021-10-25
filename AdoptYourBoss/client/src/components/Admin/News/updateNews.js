import React, { useState, useEffect } from "react";
import axios from 'axios'
import NavUsers from '../../Users/Nav/NavUsers'
import Footer from '../../Footer'

const FormUp = (props) => {

	const url = "http://localhost:5000/news/"
	const [ news, setNews ] = useState([])
	const [ data, setData ] = useState({titleNews: "", description: "", image: ""})

	useEffect(() => 
    {
        async function fetchDataNews()
        {
			const id = props.match.params.id
            const request = await axios.get(url+id);
            setData(request.data);
            return request;
        }
        fetchDataNews();
    }, [url]);

	function submit(e){
		e.preventDefault(e);
		const id = props.match.params.id
		axios.post("http://localhost:5000/news/update/"+id,{
			titleNews: data.titleNews,
			descriptionNews: data.description,
			imageNews: data.image
		})
		.then(res =>{
			console.log(res.data)
			props.history.push("/admin/News")
		})
	}

    console.log(news)

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
    <h1 class="text-light text-center">Modifier <span class="text-warning">une</span> news</h1>
<form class="mx-5" onSubmit={(e) => submit(e)} action='./admin/News'>

 
	  <label class="form-label text-light mb-2 mt-4" for="titleNews">Titre :</label>
        <input onChange={(e) => handle(e)} id="titleNews" value={data.titleNews} type="text" class="form-control" />
        

  <label class="form-label text-light mb-2 mt-4" for="descriptionNews">Description :</label>
    <input onChange={(e) => handle(e)} id="description" value={data.description} type="text" class="form-control" />
    



 
  <label class="form-label text-light mb-2 mt-4" for="imageNews">Image :</label>
    <input onChange={(e) => handle(e)} id="image" value={data.image} type="text" class="form-control" />
   
 


  <button variant="contained" type="submit" class="col-2 my-5 btn btn-warning btn-block">Mettre à Jour</button>
</form> 
</fieldset>
</div>
</div>
<Footer />
</div>

	)};

export default FormUp;