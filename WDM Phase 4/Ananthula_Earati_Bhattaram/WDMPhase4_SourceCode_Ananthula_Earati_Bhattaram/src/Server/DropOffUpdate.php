<?php
//$servername='localhost';
include('connect.php');
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

    $query=" update Orders set TypeOfDelivery='Delivery',DeliveryDate='".$_POST['pickupdate']."'
    where order_id=". $_POST['orderId']." and Customer_Id=".$_POST['Id']."
    ";
    //echo $query;
    $result = mysqli_query($conn, $query);
    if($result)
    {   
        echo json_encode(["update"=>1]);
    }
    else
    {
        echo json_encode(["update"=>0]);
    }
    
}
catch(Exceptio $e)
{
    echo $e->getMessage();
}

?>