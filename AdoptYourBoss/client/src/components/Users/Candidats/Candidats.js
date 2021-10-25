import { useState, useEffect } from 'react'
import axios from "../../../axios"

const Candidat = () =>
{
    var sessionUser = JSON.parse(sessionStorage.getItem("user"));

    const link = `http://localhost:5000/users/job/${sessionUser.job}`;
    const [ users, setUsers ] = useState([])

    useEffect(() => 
    {
        async function fetchDataUsers()
        {
            const request = await axios.get(link);
            setUsers(request.data)
            return request;
        }
        fetchDataUsers();
    },[link])

    console.log(users)

    return (
        <div class="can row justify-content-center text-light" style={{marginTop: "150px"}}>  
            
               
                    {users.map((value, index)=>
                    {
                        
                        if(value.image === "")
                        {
                            value.image = "https://www.stratelio.net/img/front_v2/03_experts/02_nos_experts/user-icon.png" 
                        }
                        
                        {
                            if(value.Roles === "candidat"){
                            return(
                                <div class="col-4 mx-5 mb-4 bg-dark rounded">
                                    <div class="row my-3">
                                        <div class="col-4 d-flex align-items-center justify-content-center">
                                            <img class="border border-warning rounded-circle candidats-img"src={value.image} ></img>
                                        </div>
                                        <div class="col mt-2">
                                            <div class="row">
                                                <p class="text-light">{value.Nom} {value.Prénom}</p>
                                            </div>
                                            <div class="row">
                                                <p class="text-light">{value.job}</p>
                                            </div>
                                            <div class="row justify-content-center mb-3 ms-2 mt-2">
                                                <div>
                                                    <a class="btn btn-warning" href={"/recruteur/Candidat/"+value._id}>Consulter</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }}
                        
                    })}
            
            
        </div>
    )
}

export default Candidat;