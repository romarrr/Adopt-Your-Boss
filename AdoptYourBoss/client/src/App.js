// visiteur 
import Nav from './components/visiteur/Nav/Nav';
import NavUsers from './components/Users/Nav/NavUsers' 
import Accueil from './components/visiteur/Accueil/Accueil';
import News from './components/visiteur/News/News';
import Offres from './components/visiteur/Offres/Offres';
import Events from './components/visiteur/Events/Events';
import InscriptionCandidat from './components/visiteur/Inscription/InscriptionCandidat';
import InscriptionRecruteur from './components/visiteur/Inscription/InscriptionRecruteur';
import Inscription from './components/visiteur/Inscription/InscriptionChoix'
import Connexion from './components/visiteur/Connexion/Connexion';
import ConsulterNews from './components/visiteur/News/ConsulterNews';
import ConsulterEvents from './components/visiteur/Events/ConsulterEvents';
import ConsulterOffres from './components/visiteur/Offres/ConsulterOffres';
import Footer from './components/Footer';
import FooterSpe from './components/FooterSpe';
//users
import Compte from './components/Users/Compte/Compte';

//recruteur
import Candidats from './components/Users/Candidats/Candidats';
import Candidat from './components/Users/Candidats/Candidat';
import PublierOffre from './components/Users/Compte/Publier';

// Admin 
import AdminOffres from './components/Admin/Offres/Offres'
import AdminNews from './components/Admin/News/News'
import AdminEvents from './components/Admin/Events/Events'
import offresForm from './components/Admin/Offres/FormOffres';
import newsForm from './components/Admin/News/FormNews'
import eventsForm from './components/Admin/Events/FormEvent'
import upOffre from './components/Admin/Offres/updateOffres'
import upNews from './components/Admin/News/updateNews'
import upEvents from './components/Admin/Events/updateEvents'
import users from './components/Admin/Users/Users'
import upUsers from './components/Admin/Users/updateUsers'
import user from './components/Admin/Users/user'
import AdminCandidat from './components/Admin/Users/AdminCandidat';


import { BrowserRouter as Router, Route } from 'react-router-dom';


function visiteur()
{
    return (
        <div>
            <Route path='/Accueil' render={props => <div><Nav /><Accueil /><Footer /></div>} />
            <Route path='/News' render={props => <div><Nav /><News /><Footer /></div>} />
            <Route path='/ConsulterNews/:id' render={props => <div><Nav /><ConsulterNews /><Footer /></div>} />
            <Route path='/Offres' render={props => <div><Nav /><Offres /><Footer /></div>} />   
            <Route path='/ConsulterOffres/:id' render={props => <div><Nav /><ConsulterOffres /><Footer /></div>} />       
            <Route path='/Évènements' render={props => <div><Nav /><Events /><Footer /></div>}/>
            <Route path='/ConsulterEvents/:id' render={props => <div><Nav /><ConsulterEvents /><Footer /></div>} />
            <Route path='/inscriptionCandidat' render={props => <div><Nav /><InscriptionCandidat /><FooterSpe /></div>}/>
            <Route path='/inscriptionRecruteur' render={props => <div><Nav /><InscriptionRecruteur /><FooterSpe /></div>}/>
            <Route path='/inscription' render={props => <div><Nav /><Inscription /><FooterSpe /></div>}/>
            <Route path='/connexion' render={props => <div><Nav /><Connexion /><FooterSpe /></div>}/>
        </div>
    )
}

function candidat()
{
    return (
        <div>
            <Route path='/candidat/Accueil' render={props => <div><NavUsers /><Accueil /><Footer /></div>}/>
            <Route path='/candidat/News' render={props => <div><NavUsers /><News /><Footer /></div>}/>
            <Route path='/candidat/ConsulterNews/:id' render={props => <div><NavUsers /><ConsulterNews /><Footer /></div>} />
            <Route path='/candidat/Offres' render={props => <div><NavUsers /><Offres /><Footer /></div>}/>
            <Route path='/candidat/ConsulterOffres/:id' render={props => <div><NavUsers /><ConsulterOffres /><Footer /></div>} />
            <Route path='/candidat/Évènements' render={props => <div><NavUsers /><Events /><Footer /></div>}/>
            <Route path='/candidat/ConsulterEvents/:id' render={props => <div><NavUsers /><ConsulterEvents /><Footer /></div>} />
            <Route path='/candidat/Compte' render={props => <div><NavUsers /><Compte /><Footer /></div>}/>
        </div>
    )

}

function recruteur()
{
    return (
        <div>
            <Route path='/recruteur/Accueil' render={props => <div><NavUsers /><Accueil /><Footer /></div>}/>
            <Route path='/recruteur/News' render={props => <div><NavUsers /><News /><Footer /></div>}/>
            <Route path='/recruteur/ConsulterNews/:id' render={props => <div><NavUsers /><ConsulterNews /><Footer /></div>} />
            <Route path='/recruteur/Offres' render={props => <div><NavUsers /><Offres /><Footer /></div>}/>
            <Route path='/recruteur/ConsulterOffres/:id' render={props => <div><NavUsers /><ConsulterOffres /><Footer /></div>} />
            <Route path='/recruteur/Évènements' render={props => <div><NavUsers /><Events /><Footer /></div>}/>
            <Route path='/recruteur/ConsulterEvents/:id' render={props => <div><NavUsers /><ConsulterEvents /><Footer /></div>} />
            <Route path='/recruteur/Compte' render={props => <div><NavUsers /><Compte /><Footer /></div>}/>
            <Route path='/recruteur/Candidats' render={props => <div><NavUsers /><Candidats /><FooterSpe /></div>}/>
            <Route path='/recruteur/Candidat/:id' render={props => <div><NavUsers /><Candidat /><Footer /></div>}/>
            <Route path='/recruteur/Publier' render={props => <div><NavUsers /><PublierOffre /><Footer /></div>}/>
        </div>
    )
}

function admin()
{
    return (
        <div>
            <Route path='/Admin/Offres' exact component={AdminOffres}/>
            <Route path='/Admin/Offres/Form' exact component={offresForm}/>
            <Route path='/Admin/News/Form' exact component={newsForm}/>
            <Route path='/Admin/Évènements/Form' exact component={eventsForm}/>
            <Route path='/Admin/News' exact component={AdminNews}/>
            <Route path='/Admin/Évènements' exact component={AdminEvents}/>
            <Route path='/Admin/offres/Form/:id' exact component={upOffre}/>
            <Route path='/Admin/news/Form/:id' exact component={upNews}/>
            <Route path='/Admin/Accueil' exact component={users}/>
            <Route path='/Admin/Évènements/Form/:id' exact component={upEvents}/>
            <Route path='/Admin/users/:id' exact component={upUsers}/>
            <Route path='/Admin/user/:id' exact component={user}/>
            <Route path='/Admin/Candidats/' exact component={users}/>
            <Route path='/Admin/Compte/' exact component={Compte}/>
        </div>
// Nouvelle routes
// { /* <div>
// <Route path='/Admin/Accueil' render={props => <div><NavUser /><Accueil /></div>}/> 
// <Route path='/Admin/News' render={props => <div><NavUser /><AdminNews /></div>}/>
// <Route path='/Admin/addNews' render={props => <div><NavUser /><FormNews /></div>}/>
// <Route path='/Admin/updateNews/:id' render={props => <div><NavUser /><UpNews /></div>}/>
// <Route path='/Admin/ConsulterNews/:id' render={props => <div><NavUser /><ConsulterNews /></div>} />
// <Route path='/Admin/Offres' render={props => <div><NavUser /><AdminOffres /></div>}/>
// <Route path='/Admin/addOffres' render={props => <div><NavUser /><FormOffre /></div>}/>
// <Route path='/Admin/updateOffre/:id' render={props => <div><NavUser /><UpOffre /></div>}/>
// <Route path='/Admin/ConsulterOffres/:id' render={props => <div><NavUser /><ConsulterOffres /></div>} />
// <Route path='/Admin/Évènements' render={props => <div><NavUser /><AdminEvents /></div>}/>
// <Route path='/Admin/addEvent' render={props => <div><NavUser /><EventsForm /></div>}/>
// <Route path='/Admin/updateEvent/:id' render={props => <div><NavUser /><UpEvents /></div>}/>
// <Route path='/Admin/ConsulterEvents/:id' render={props => <div><NavUser /><ConsulterEvents /></div>} />
// <Route path='/Admin/Candidats' render={props => <div><NavUser /><Users /></div>}/>
// <Route path='/Admin/updateUser/:id' render={props => <div><NavUser /><UpUsers /></div>}/>
// <Route path='/Admin/User/:id' render={props => <div><NavUser /><Candidat /></div>}/>
// <Route path='/Admin/Compte' render={props => <div><NavUser /><Compte /></div>}/>
// </div> */}


    )
}


const App = () => 
{
    
    var user = JSON.parse(sessionStorage.getItem("user"));

    if (user == null)
    {
        return (
            <Router>
                {visiteur()}
            </Router>
        )
    }else
    {
        return (

            <div>
                <Router>
                    {/* Visiteur : */}
                    { user.Roles === "visiteur" && visiteur()}
                    { user.Roles === "admin" && visiteur()}
                    { user.Roles === "candidat" && visiteur()} 
                    { user.Roles === "recruteur" && visiteur()}
                    
                    {/* Candidat routes */}
                    { user.Roles === "candidat" && candidat()}
    
                    {/* Recruteur routes */}
                    { user.Roles === "recruteur" && recruteur()}
    
                    {/* Admin routes */}
                    { user.Roles === "admin" && admin()}
                </Router>
            </div>
    
        );
    }
}

export default App;