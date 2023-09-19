/* 
ANANTHULA,VINEETH KUMAR  - 1001953922
EARATI,PAVANI  – 1001953926  
BHATTARAM,SAI SANTHOSH  – 1001874167 */
<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$to = "santhoshbhattaram@gmail.com";
$subject = "Incident Reported";
$message = "
Hi Team,
The below incident has been raised for the below order.
Incident Type:".$_POST["IncidentType"]."
 Order :".$_POST["Order"]."
 Comment :".$_POST["Comment"]."
";
mail($to,$subject,$message);
echo json_encode(["sent"=>1])
?>