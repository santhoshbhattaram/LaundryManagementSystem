<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');
try
{

    //$conn = mysqli_connect("localhost:3306", "vxa3922", "Vineeth123$", "vxa3922_WDM");
    $query="select * from Orders";
    $resultarray = array();
    $result=mysqli_query($conn,$query);


    while($row = mysqli_fetch_assoc($result))
    {
       $resultarray[] = array(
      'order_Id' => ($row['order_Id']),
      'Customer_Id' => $row['Customer_Id'],
      'Type' => $row['Type'],
      'Status' => ($row['Status']),
      'Quantity' => $row['Quantity'],
      'AssignedTo' => $row['AssignedTo'],
      'OrderDate' => ($row['OrderDate']),
      'TypeOfDelivery' => $row['TypeOfDelivery'],
      'DeliveryDate' => $row['DeliveryDate'],
      );
    }

    echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>