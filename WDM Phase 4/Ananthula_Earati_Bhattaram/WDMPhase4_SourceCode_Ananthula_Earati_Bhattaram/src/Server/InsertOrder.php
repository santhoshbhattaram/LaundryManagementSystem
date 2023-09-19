<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
try
{   
    $query="select order_Id  from Orders order by order_Id desc limit 1";
    $result= mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)) {
        $last_id= $row["order_Id"];
        $last_id=$last_id+1;
    } 
    // INSERT INTO `Orders` (`order_Id`, `Customer_Id`, `Type`, `Status`, `Quantity`, `AssignedTo`, `OrderDate`, `TypeOfDelivery`, `DeliveryDate`) 
    // VALUES ('6', '123', 'Washing', 'Inprogress', '50', NULL, CURRENT_DATE, NULL, NULL)
    $query="insert into Orders values(
        ".$last_id.",
        ".$_POST["Customer_Id"].",
        '".$_POST["selection"]."',
        'Inprogress',
        ".$_POST["Quantity"].",
        NULL
        ,CURRENT_DATE,
        NULL,
        NULL
        )";
   // echo $query;
    $result=mysqli_query($conn,$query);

    $query="select Bill_Id  from Bill_Details order by Bill_Id desc limit 1";
    $result= mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)) {
        $last_id1= $row["Bill_Id"];
        $last_id1=$last_id1+1;
    } 
    $totalcost=$_POST["Quantity"]*10;
    $query="insert into Bill_Details values(
        ".$last_id1.",
        ".$last_id.",
        ".$totalcost."
        )";
    //echo $query;
    $result=mysqli_query($conn,$query);

    if($result)
    {   
        echo json_encode(["inserted"=>1]);
    }
    else
    {
        echo json_encode(["inserted"=>0]);
    }
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>