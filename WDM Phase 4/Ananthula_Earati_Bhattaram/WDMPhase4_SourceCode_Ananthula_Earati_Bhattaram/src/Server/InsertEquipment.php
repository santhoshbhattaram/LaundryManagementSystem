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
    $query="select Equipment_ID  from Equipment order by Equipment_ID   desc limit 1";
    $result= mysqli_query($conn, $query);
    while($row = mysqli_fetch_assoc($result)) {
        $last_id= $row["Equipment_ID"];
        $last_id=$last_id+1;
    } 
    if($result)
    {
    $query="insert into Equipment values(
        ".$last_id.",
        '".$_POST["EName"]."',
        '".$_POST["EType"]."',
        'Active'
        )";
    $result=mysqli_query($conn,$query);
    }
    if($result)
    {   
        echo json_encode(["einsert"=>1]);
    }
    else
    {
        echo json_encode(["einsert"=>0]);
    }
}
catch(Exception $e)
{
    echo $e->getMessage();
}


?>