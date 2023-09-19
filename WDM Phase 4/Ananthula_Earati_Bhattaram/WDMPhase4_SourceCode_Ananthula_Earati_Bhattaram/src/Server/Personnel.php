<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
try
{

    $conn = mysqli_connect("localhost:3306", "vxa3922", "Vineeth123$", "vxa3922_WDM");
    $query="select * from Personnel";
    $resultarray = array();
    $result=mysqli_query($conn,$query);

    //`Personnel_Id`, `FName`, `LName`, `ContactNo`, `Email`, `UserRole`
    while($row = mysqli_fetch_assoc($result))
    {
       $resultarray[] = array(
      'Personnel_Id' => $row['Personnel_Id'],
      'FName' => ($row['FName']),
      'LName' => ($row['LName']),
      'ContactNo' => $row['ContactNo'],
      'Email' => ($row['Email']),
      'UserRole' => ($row['UserRole'])
      );
    }

    echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>