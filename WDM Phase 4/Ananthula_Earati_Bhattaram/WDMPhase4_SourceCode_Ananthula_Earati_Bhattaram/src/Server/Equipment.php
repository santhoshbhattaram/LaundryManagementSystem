<?php
include('connect.php');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
try
{

    
    $query="select * from Equipment";
    $resultarray = array();
    $result=mysqli_query($conn,$query);


    while($row = mysqli_fetch_assoc($result))
    {
       $resultarray[] = array(
      'Equipment_Id' => ($row['Equipment_ID']),
      'EquipmentName' => $row['EquipmentName'],
      'EquipmentType' => $row['EquipmentType'],
      'Status' => $row['Status']
      );
    }

    echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>