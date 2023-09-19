<?php
//$servername='localhost';
include 'connect.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true); 
// $_POST['order_Id']=1;
// $_POST['Customer_Id']=12321;
// $_POST['Type']="Washing";
// $_POST['Status']="Completed";
// $_POST['Quantity']="60";
// $_POST['AssignedTo']="502";
 try
{


    $query=" delete from  Orders
    where order_id=". $_POST['order_Id']."
    ";
    //echo $query;
    $result = mysqli_query($conn, $query);
    if($result)
    {   
        echo json_encode(["delete"=>1]);
    }
    else
    {
        echo json_encode(["delete"=>0]);
    }
    
}
catch(Exceptio $e)
{
    echo $e->getMessage();
}

?>