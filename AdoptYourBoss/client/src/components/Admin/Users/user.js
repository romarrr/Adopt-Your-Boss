import { useState, useEffect } from 'react'
import axios from "../../../axios"
import NavUsers from '../../Users/Nav/NavUsers'
import Footer from '../../Footer'

const Compte = (props) => 
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

    function recruteur(user)
    {    
        return (
            <div>
                <div class="row">
                    <h4>N° de siret : {user.siret}</h4>
                </div>
                <div class="row" style={{marginTop: "2.5%"}}>
                    <h4>Nom de l'entreprise : {user.NomEntreprise}</h4>
                </div>
            </div>
        )
    }


    function compte()
    {

        var dates = new Date(user.createDate);
        var options = {weekday: "long", year: "numeric", month: "long", day: "2-digit"};

        return (
            <div class="row justify-content-center text-light" style={{marginTop: "7.5%"}}>
            <div class="col-6 bg-dark compte pb-5">
                <div class="row justify-content-center pe-5 mt-5">
                    <div class="col-5 text-center">
                        <img class="border border-warning rounded-circle compte-img" src={user.image}></img>
                        <div class="mt-5"><h6>Inscrit depuis le <span style={{textTransform: 'capitalize'}}>{dates.toLocaleDateString("fr-FR", options)}</span></h6></div>
                    </div>
                    <div class="col-7">
                        <div class="row container-compte border border-warning">
                            <div class="row mt-4">
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
                                { user.Roles === "recruteur" ? recruteur(user) : ""}
                            </div>

                        </div>
                    </div>            
                </div>
            </div>
        )
    }

   
    return (
        <div>
            <NavUsers />
        
        <div style={{marginTop: "150px"}}>
            {compte()}
        </div>
            <Footer />
        </div>
    )
}

export default Compte;
