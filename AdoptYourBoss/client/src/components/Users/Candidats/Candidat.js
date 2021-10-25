import { useState, useEffect } from 'react'
import axios from "../../../axios"
import { BrowserRouter as Router, Route, useLocation, useParams } from 'react-router-dom'

const Candidat = (props) => 
{
    const queryParams = new URLSearchParams(window.location.search);

    const { id } = useParams();

    console.log(id)

    const link = `http://localhost:5000/users/${id}`
    
    const [ user, setUser ] = useState(
    {
        Nom: "", 
        Prénom: "", 
        job: "", 
        adresse: "", 
        CplAdresse: "", 
        CP: "", 
        Ville: "", 
        Tel: "", 
        Email: "", 
        MDP: "", 
        Roles: "", 
        image: ""
    })

    useEffect(() => 
    {
        async function fetchDataUser()
        {
            const request = await axios.get(link);
            setUser(request.data);
            return request;
        }
        fetchDataUser();
    }, [link]);

    if(user.image === "")
    {
        user.image = "https://www.stratelio.net/img/front_v2/03_experts/02_nos_experts/user-icon.png" 
    }

    return (
        <div class="row justify-content-center text-light" style={{marginTop: "9.5%"}}>
            <div class="col-6 bg-dark compte">
                <div class="row justify-content-center pe-5 mt-5 mb-5">
                    <div class="col-5 text-center">
                        <img class="border border-warning rounded-circle compte-img" src={user.image}></img>
                    </div>
                    <div class="col-7">
                        <div class="row container-compte border border-warning">
                            <div class="row mt-4">
                                <h5>Nom : {user.Nom}</h5>
                            </div>
                            <div class="row">
                                <h5>Prénom : {user.Prénom}</h5>
                            </div>
                            <div class="row">
                                <h5>Métier : {user.job}</h5>
                            </div>
                            <div class="row">
                                <h5>Adresse : {user.adresse}</h5>
                            </div>
                            <div class="row">
                                <h5>Code Postale : {user.CP}</h5>
                            </div>
                            <div class="row">
                                <h5>Ville : {user.Ville}</h5>
                            </div>
                            <div class="row">
                                <h5>Tèl : {user.Tel}</h5>
                            </div>
                            <div class="row">
                                <h5>Email : {user.Email}</h5>
                            </div>
                        </div>
                    </div>
                </div>            
            </div>
        </div>
    )
}

export default Candidat;