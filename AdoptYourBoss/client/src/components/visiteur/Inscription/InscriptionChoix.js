const Inscription = () => 
{
    return (
        <div class="container-fluid">
            <div class="row" style={{marginTop: "15%"}}>
            <div class="col-6 offset-1 connexion-titrep-container">
                    <div class="row text-secondary">
                        <h1 class="connexion-titre text-monospace col">Adopt</h1>
                    </div>
                    <div class="row text-warning mt-3">
                        <h1 class="connexion-titre text-monospace col offset-2">Your</h1>
                    </div>
                    <div class="row text-secondary">
                        <h1 class="connexion-titre text-monospace col offset-4">Boss</h1>
                    </div>
                </div>
                
                <div class="col-3 bg-dark rounded-3 mt-3">
                    <div class="row mb-10">
                        <h4 class="pt-3 text-center text-white">Inscription</h4>
                    </div>
                    <div class="row mb-10">
                        <h5 class="text-white text-center">Vous etes :</h5>
                        <a class="btn btn-warning col-4 offset-4 mb-3" href="./inscriptionCandidat">Candidat</a>
                    </div>
                    <div class="row">
                        <h5 class="text-white text-center">Vous etes :</h5>
                        <a class="btn btn-warning col-4 offset-4 mb-3" href="./inscriptionRecruteur">Recruteur</a>
                    </div>                    
                </div>
            </div>
        </div>
        
    )
}

export default Inscription;