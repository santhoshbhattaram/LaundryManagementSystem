<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');

$query="select year(OrderDate) as Year,sum(b.TotalCost) as Cost from Orders o inner join 
Bill_Details b on o.order_Id=b.Order_ID group by year(OrderDate)";
$resultarray = array();
$result=mysqli_query($conn,$query);
while($row = mysqli_fetch_assoc($result))
{
   $resultarray[] = array(
  'Year' => ($row['Year']),
  'Sales' => $row['Cost']
  );
}
echo json_encode($resultarray);

?>