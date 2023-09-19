<?php
include('connect.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
try
{
    $query = "SELECT COUNT(order_Id) AS TotalOrder FROM Orders";
    // $query .= "SELECT COUNT(Equipment_ID) AS Equipments FROM Equipment";
    // $query .= "SELECT COUNT(order_Id) AS OrdersPending FROM Orders where Status="Inprogress" OR Status="In progress" OR Status="Pending"";
    // $query .= "SELECT SUM(TotalCost) AS TotalProfit  FROM Bill_Details";
    $resultarray = array();
    $result=mysqli_query($conn,$query);
    

    while($row = mysqli_fetch_assoc($result))
    {
      $totalorder=$row['TotalOrder'];
    }
    $query = "SELECT COUNT(Equipment_ID) AS Equipments FROM Equipment";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $Equipments=$row['Equipments'];
    }
    $query = "SELECT COUNT(order_Id) AS OrdersPending FROM Orders WHERE Status='Inprogress' OR Status='In progress' OR Status='Pending'";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $OrdersPending=$row['OrdersPending'];
    }
    $query = "SELECT SUM(TotalCost) AS TotalProfit  FROM Bill_Details";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $TotalProfit=$row['TotalProfit'];
    }
    $resultarray = [
      'TotalOrder' => $totalorder,
      'Equipments'=>$Equipments,
      'OrdersPending'=>$OrdersPending,
      'TotalProfit'=>$TotalProfit
      ];
    echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>