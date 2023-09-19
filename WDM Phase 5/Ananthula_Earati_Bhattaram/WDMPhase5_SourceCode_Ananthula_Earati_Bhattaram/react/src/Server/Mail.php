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
$to = $_POST['SEmail'];
$subject = "Registration Email";
$message = "
Thank you for registering to Instwash system. We are delighted to serve you. 
Please visit and have a great service with us.
Please find the credentials below.
 User Name :".$_POST['SEmail']."
 Password :".$_POST['CPassword']."
";
mail($to,$subject,$message);
?>