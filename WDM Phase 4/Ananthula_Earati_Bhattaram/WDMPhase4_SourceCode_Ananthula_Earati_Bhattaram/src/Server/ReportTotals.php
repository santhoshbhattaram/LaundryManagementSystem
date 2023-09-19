<?php
include('connect.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
try
{
    $query = "SELECT COUNT(Visitor_id) AS TotalVisitors FROM Visitor";
    $resultarray = array();
    $result=mysqli_query($conn,$query);
    

    while($row = mysqli_fetch_assoc($result))
    {
       $TotalVisitors=$row['TotalVisitors'];
    }
    $query = "SELECT SUM(TotalCost) AS TotalSales FROM Bill_Details";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $TotalSales=$row['TotalSales'];
    }
    $query = "SELECT COUNT(AssignedTo) AS TotalTasks FROM Orders where AssignedTo is not null";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $TotalTasks=$row['TotalTasks'];
    }
   $query = "SELECT COUNT(Personnel_Id) AS Employees FROM Personnel";
    $result=mysqli_query($conn,$query);
    while($row = mysqli_fetch_assoc($result))
    {
      $Employees=$row['Employees'];
    }
    $resultarray = [
      'TotalVisitors' => $TotalVisitors,
      'TotalSales'=>$TotalSales,
      'TotalTasks'=>$TotalTasks,
      'Employees'=>$Employees
      ];
    echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>