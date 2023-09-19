<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
try
{

    $conn = mysqli_connect("localhost:3306", "vxa3922", "Vineeth123$", "vxa3922_WDM");
    $query="select *  FROM Orders where AssignedTo is not null and Status='Inprogress' OR Status='In progress'";
    $resultarray = array();
    $result=mysqli_query($conn,$query);

    //`TaskId`, `Personnel_Id`, `Order_Id`, `Status`
    $rownum=0;
    while($row = mysqli_fetch_assoc($result))
    {
       $resultarray[] = array(
      'TaskId' => $rownum,
      'Personnel_Id' => $row['AssignedTo'],
      'Order_Id' => $row['order_Id'],
      'Status' => ($row['Status'])
      );
    }

    echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>