import { useState, useEffect } from 'react'
import axios from "../../../axios"

const Compte = () => 
{
    var sessionUser = JSON.parse(sessionStorage.getItem("user"));

    const [compteStep, setCompteStep] = useState(0)

    const link = `http://localhost:5000/users/${sessionUser.id}`

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
        siret: "", 
        NomEntreprise: "", 
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

    function recruteur(user)
    {    
        return (
            <div>
                <div class="row">
                    <h5>N° de siret : {user.siret}</h5>
                </div>
                <div class="row" style={{marginTop: "2.5%"}}>
                    <h5>Nom de l'entreprise : {user.NomEntreprise}</h5>
                </div>
            </div>
        )
    }

    function recruteurUpdate(user)
    {
        return (
            <div>
                <div class="row">
                    <div class="col-5">
                        <h5>Entreprise :</h5>
                    </div>
                    <div class="col-7">
                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="NomEntreprise" onChange={updateForm} value={user.NomEntreprise}/>
                    </div>
                </div>
                <div class="row" style={{marginTop: "2.5%"}}>
                    <div class="col-4">
                        <h5>N°Siret : </h5>
                    </div>
                    <div class="col-8">
                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="Nom" onChange={updateForm} value={user.siret}/>
                    </div>
                </div>
            </div>
        )
    }

    const updateForm = (e) => 
    {
        const newData={...user}
		newData[e.target.id] = e.target.value
		setUser(newData)
    }

    function retour()
    {
        setCompteStep((compteStep) => compteStep = 0)
    }

    function submit(e)
    {
        e.preventDefault(e);
        axios.post(`http://localhost:5000/users/update/${sessionUser.id}`,
        {
            Nom: user.Nom,
            Prénom: user.Prénom,
            job: user.job,
            adresse: user.adresse,
            CP: user.CP,
            Ville: user.Ville,
            tel: user.Tel,
            Email: user.Email,
            image: user.image,
            siret: user.siret,
            NomEntreprise: user.NomEntreprise,
            image: user.image,
        })
        .then(res =>
        {
            console.log(res)
            window.location.reload();
        })
    }

    function modifier(user)
    {
        setCompteStep((compteStep) => compteStep = 1)
    }

    function compte()
    {
        return (
            <div class="row justify-content-center text-light">
                <div class="col-6 bg-dark compte">
                    <div class="row justify-content-center pe-5" style={{marginTop: "5.5%"}}>
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
                                    <h5>Tel : {user.Tel}</h5>
                                </div>
                                <div class="row">
                                    <h5>Email : {user.Email}</h5>
                                </div>
                                { sessionUser.Roles === "recruteur" ? recruteur(user) : ""}
                            </div>
                            <div class="row btn-compte justify-content-center">
                                <div class="col-4 text-center">
                                    <a class="btn btn-warning mb-4 mt-3" onClick={(e) => modifier(user)}>Modifier</a>
                                </div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        )
    }

    function compteUpdate()
    {
        return (
            <div class="row justify-content-center text-light">
                <div class="col-6 bg-dark compte">
                    <div class="row justify-content-center pe-5" style={{marginTop: "5.5%"}}>
                        <div class="col-5 text-center">
                            <img class="border border-warning rounded-circle compte-img" src={user.image}></img>
                        </div>
                        <form class="col-7" onSubmit={(e)=> submit(e, sessionUser.id)}>
                            <div class="row container-compte border border-warning" >
                                <div class="row mt-4">
                                    <div class="col-4">
                                        <h5>Nom : </h5>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="Nom" onChange={updateForm} value={user.Nom}/>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <h5>Prénom : </h5>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="Prénom" onChange={updateForm} value={user.Prénom}/>
                                    </div>                                
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <h5>Métier : </h5>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="job" onChange={updateForm} value={user.job}/>
                                    </div>                                
                                </div>
                                <div class="row">
                                    <div class="col-4">
                                        <h5>Adresse : </h5>
                                    </div>
                                    <div class="col-8">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="adresse" onChange={updateForm} value={user.adresse}/>
                                    </div>                                
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <h5>Code Postale : </h5>
                                    </div>
                                    <div class="col-6">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="CP" onChange={updateForm} value={user.CP}/>
                                    </div>                                
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <h5>Ville : </h5>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="Ville" onChange={updateForm} value={user.Ville}/>
                                    </div>                                
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <h5>Tel : </h5>
                                    </div>
                                    <div class="col-9">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="Tel" onChange={updateForm} value={user.Tel}/>
                                    </div>                                
                                </div>
                                <div class="row">
                                <div class="col-3">
                                    <h5>Email : </h5>
                                        </div>
                                    <div class="col-9">
                                        <input type="text" class="form-control bg-dark border-warning rounded text-light" id="Email" onChange={updateForm} value={user.Email}/>
                                    </div>                                
                                </div>
                                { sessionUser.Roles === "recruteur" ? recruteurUpdate(user) : ""}
                            </div>
                            <div class="row btn-compte  justify-content-around">
                                <div class="col-4 text-center">
                                    <a class="btn btn-warning mt-3 mb-4" onClick={retour}>Retour</a>
                                </div>
                                <div class="col-4 text-center">
                                    <button type="submit" class="btn btn-warning mt-3 mb-4" onClick={modifier}>Confirmer</button>
                                </div>
                            </div>
                        </form>
                    </div>            
                </div>
            </div>
        )
    }

    return (
        <div style={{marginTop: "150px"}}>
            {compteStep === 0 && compte()}
            {compteStep === 1 && compteUpdate()}
        </div>
    )
}

export default Compte;