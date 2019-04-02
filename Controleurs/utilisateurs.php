<?php
/*

- Controleur lié aux utilisateurs (connexion,inscription ...): 

*/

if(isset($_GET['function']) || empty($_GET['function'])){
    $function='accueil';
}
else{
    $function=$_GET['function'];
}

switch($function){
    case 'accueil':
        $view='accueil';
        break;
    
    case 'inscription':
        $view='inscription';
        if(isset($_POST['nom']) && isset($_POST['prenom']) && isset($_POST['mdp']) && isset($_POST['mail'])){
            // si un formulaire a ete post
        }
        break;
    
    case 'connexion':
        $view='connexion';
        if(isset($_POST['mail']) && isset($_POST['mdp'])){
            // si un formulaire a ete post
        }
        break;
}

include('Vues/'.$view.'.php');
?>