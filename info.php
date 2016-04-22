<?php

header('Content-Type: application/json');
$details = array();
$details[0]['name'] = 'anouar chedadi' ;
$details[0]['email'] = 'anouarched@gmail.com' ;
$details[0]['password'] ='*******'  ;
$details[1]['name'] = 'amine djdn' ;
$details[1]['email'] = 'aminet@gmail.com' ;
$details[1]['password'] = '---------' ;
$details[2]['name'] = 'salim dd1' ;
$details[2]['email'] = 'salim1@gmail.com' ;
$details[2]['password'] = '................' ;
//On renvoie la chaine JSON contenant toutes les infos
echo json_encode($details);
?>
