<?php
/*

- Requêtes liées aux utilisateurs  

*/

include ('connexionBDD.php'); // on appelle le modele de connexion de base

echo 'connexion ok'.'<br/>';

$query='select * from utilisateurs';


basicQuerry($bdd,$query);

function basicQuerry($bdd,$querry){
    $ans=$bdd->query($querry);
    $donnees = $ans->fetchall();
    displayArray($donnees);
}


?>

