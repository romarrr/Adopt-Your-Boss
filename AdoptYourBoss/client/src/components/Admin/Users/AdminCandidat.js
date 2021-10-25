import { useState, useEffect } from 'react'
import axios from "../../../axios"
import { BrowserRouter } from 'react-router-dom'

const AdminCandidat = (props) => 
{
    
    const url = `http://localhost:5000/users/`
    
    const [ user, setUser ] = useState([])

    useEffect(() => 
    {
        async function fetchDataOffres()
        {
			const id = props.match.params.id
            const request = await axios.get(url+id);
            setUser(request.data);
            return request;
        }
        fetchDataOffres();
    }, [url]);

    if(user.image === "")
    {
        user.image = "https://www.stratelio.net/img/front_v2/03_experts/02_nos_experts/user-icon.png" 
    }

    return (
        <div class="row text-light" style={{marginTop: "150px"}}>
            <div class="col-6 offset-3 bg-dark compte">
                <div class="row" style={{marginTop: "3.5%"}}>
                    <div class="col-4 offset-1">
                        <img class="border border-warning rounded-circle compte-img" src={user.image}></img>
                    </div>
                    <div class="col-6">
                        <div class="row container-compte border border-warning">
                            <div class="row">
                                <h4>Nom : {user.Nom}</h4>
                            </div>
                            <div class="row">
                                <h4>Prénom : {user.Prénom}</h4>
                            </div>
                            <div class="row">
                                <h4>Métier : {user.job}</h4>
                            </div>
                            <div class="row">
                                <h4>Adresse : {user.adresse}</h4>
                            </div>
                            <div class="row">
                                <h4>Code Postale : {user.CP}</h4>
                            </div>
                            <div class="row">
                                <h4>Ville : {user.Ville}</h4>
                            </div>
                            <div class="row">
                                <h4>Tèl : {user.Tel}</h4>
                            </div>
                            <div class="row">
                                <h4>Email : {user.Email}</h4>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default AdminCandidat;
