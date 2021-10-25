import { useState, useEffect } from 'react'
import axios from "../../../axios"
import { useHistory } from 'react-router';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import NavUsers from '../../Users/Nav/NavUsers';
import Footer from '../../Footer';

const Users = (props) =>
{
    const link = "http://localhost:5000/users"
    const [ users, setUsers ] = useState([])
    const  [ data ]  = useState({})
    const [ dataStatus ] = useState({status: "approved"});
    const [ searchTerm, setSearchTerm ] = useState([])
    const [ select, setSelect ] = useState("Nom");
    var recherche = "";
    const history = useHistory();
    

console.log(select)
    useEffect(() => 
    {
        async function fetchDataUsers()
        {
            const request = await axios.get(link);
            setUsers(request.data);
            return request;
        }
        fetchDataUsers();
    }, [link]);

    function submit(e, id){
		e.preventDefault(e);

		axios.post(`http://localhost:5000/users/${id}`,
        {
			status: dataStatus.status
		})
		.then(res =>{
			console.log(res.data)
            window.location.reload(false);
		})
	}

    console.log(users)


    function delUsers(id)
    {
        window.location.reload();
        axios.get(`http://localhost:5000/users/delete/${id}`);  
    }

    function upUsers(id)
    {
        // props.history.push("/admin/users/"+id)
        window.location.replace("http://localhost:3000/admin/users/"+id)
    }

    
    function Button(){
     return <button class="btn btn-warning offset-1" type="submit">Approuver</button>;
    }


    function getUser(id)
    {
        // props.history.push("/admin/user/"+id)
        window.location.replace("http://localhost:3000/admin/user/"+id)
    }

    const handleSearchTerm = (e) =>{
        
        var value = e.target.value;

        setSearchTerm(value);
    }

    function onChange(e){

        setSelect((select) => select = e.target.value)
        console.log(select)
    }
    
    
//     console.log(searchTerm)
//    console.log(users)
//    console.log(select)
   

   return(
       <div>
           <NavUsers />
       
    <div  style={{marginTop:"150px"}} >
        
                <div class="input-group w-50 offset-3">
                    <span class="input-group-text" id="basic-addon1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                                <input onChange={handleSearchTerm} type="text" class="form-control" placeholder="Recherchez" aria-label="Input group example" aria-describedby="basic-addon1"/>
                                    <select onChange={(e) => onChange(e)} class="form-select" id="select" aria-label="Default select example">
                                            
                                            <option value="Nom">Nom</option>
                                            <option value="Prénom">Prénom</option>
                                            <option value="Métier">Métier</option>
                                            <option value="Ville">Ville</option>
                                            <option value="Email">Email</option>
                                            <option value="Roles">Roles</option>

                                    </select>
                </div>

    <div class="container-fluid">
    <div class="row admin"></div>
    <div class="row">
    <div class="input-group w-50">
              
      </div>
        <div class="col-8 offset-2 mt-4">
            <div class="table-responsive">
                <div class="card bg-dark admin-users">
                    <table class="table align-items-center text-light mb-0">
                        <thead class="thead-light">
                            <tr>
                                <th scope="col" class="sort text-warning" data-sort="nom">Nom</th>
                                <th scope="col" class="sort text-warning" data-sort="Prénom">Prénom</th>
                                <th scope="col" class="sort text-warning" data-sort="email">Email</th>
                                <th scope="col" class="sort text-warning" data-sort="role">Role</th>
                                <th scope="col" class="sort text-warning" data-sort="status">Status</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                    <tbody class="list">
                        {users.filter((value, index)=>
                        {
                            if(select === "Nom"){
                                    recherche = value.Nom
                                }else if(select === "Prénom"){
                                        recherche = value.Prénom
                                    }else if(select === "Métier"){
                                        recherche = value.job
                                        }else if(select === "Ville"){
                                            recherche = value.Ville
                                            }else if(select === "Email"){
                                                recherche = value.Email
                                                }else if(select === "Roles"){
                                                    recherche = value.Roles
                        } return recherche.toLowerCase().includes(searchTerm)}).map((value, index)=> { 


    const submita = (e) => {  // BOITE DE DIALOGUE DE SUPPRESSION POUR LA PAGE ADMIN
        confirmAlert({
          title: 'Suppression',
          message: 'Etes-vous sur de vouloir supprimer cet utilisateur ?',
          buttons: [
            {
              label: 'Oui',
              onClick: (e)=>delUsers(value._id)
            },
            {
              label: 'Non',
            }
          ]
        });
      };

      return (

                                <tr>
                                    <th scope="row">
                                        <div class="media align-items-center">
                                            <div class="media-body">
                                                <span class="name mb-0 text-lg">{value.Nom}</span>
                                            </div>
                                        </div>
                                    </th>
                                    <td class="text-lg budget">
                                    {value.Prénom}
                                    </td>
                                    <td class="text-lg budget">
                                    {value.Email}
                                    </td>
                                    <td class="text-lg budget">
                                    {value.Roles}
                                    </td>
                                    <td class="text-lg budget">
                                    {value.status}
                                    <span type="hidden" value={value.job}/>
                                    <span type="hidden" value={value.Ville}/>
                                    <span type="hidden" value={value.Email}/>
                                    <span type="hidden" value={value.Roles}/>
                                    </td>
                                    <td >
                                        <div >
                                            <form onSubmit={(e) => submit(e, value._id)}>
                                                <button class="btn btn-warning" onClick={(e)=>submita(value._id)}>Supprimer</button>
                                                <button class="btn btn-warning offset-1" onClick={(e)=>upUsers(value._id)} >Modifier</button>
                                                <button class="btn btn-warning offset-1" onClick={(e)=>getUser(value._id)}>Detail</button>
                                                {value.status === 'pending' && <Button />}
                                            </form>
                                        </div>
                                    </td>
                                </tr>
      )}
                         )}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
              
    </div>
   
</div>
 
</div>
<Footer />
</div>
)};

export default Users;
