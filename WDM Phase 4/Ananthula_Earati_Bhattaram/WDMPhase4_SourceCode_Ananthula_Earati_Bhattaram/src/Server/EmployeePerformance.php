<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');

$query="select o.AssignedTo as EmployeeId,p.FName as Name,count(o.order_Id) as OrdersProcessed from Personnel p inner join 
Orders o on o.AssignedTo=p.Personnel_Id
group by o.AssignedTo,p.FName";
$resultarray = array();
$result=mysqli_query($conn,$query);
while($row = mysqli_fetch_assoc($result))
{
   $resultarray[] = array(
  'Month' => ($row['EmployeeId']),
  'Count' => $row['Name'],
  'OrdersProcessed' => $row['OrdersProcessed']
  );
}
echo json_encode($resultarray);

?>