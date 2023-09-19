<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
try{
// Multiple recipients
$rest_json = file_get_contents("php://input");

$to = 'santhoshbhattaram@gmail.com';//receipent
$_POST = json_decode($rest_json, true);
// Subject
$subject = 'Contacted through Instawash Website';
// Message
 $message = '
 Customer tried contacting to Instawash through website.

 Please find the details of the customer below.
 First Name : '.$_POST['fname'].'
 Last Name  : '.$_POST['lname'].'
 Email      : '.$_POST['cemail'].'
 Mobile     : '.$_POST['cmobile'].'
 Message    : '.$_POST['cmessage'].'
 ';
 mail($to,$subject,$message);
}
catch(Exception $ex)
{
  echo $ex->getMessage();
}
?>
