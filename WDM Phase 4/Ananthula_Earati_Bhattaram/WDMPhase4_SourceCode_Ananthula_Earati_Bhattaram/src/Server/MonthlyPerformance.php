<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');

$query="select concat(MONTHNAME(OrderDate),'',Year(OrderDate) )as Month,Count(order_Id) as Count 
from Orders group by concat(MONTHNAME(OrderDate),'',Year(OrderDate) )";
$resultarray = array();
$result=mysqli_query($conn,$query);
while($row = mysqli_fetch_assoc($result))
{
   $resultarray[] = array(
  'Month' => ($row['Month']),
  'Count' => $row['Count']
  );
}
echo json_encode($resultarray);

?>