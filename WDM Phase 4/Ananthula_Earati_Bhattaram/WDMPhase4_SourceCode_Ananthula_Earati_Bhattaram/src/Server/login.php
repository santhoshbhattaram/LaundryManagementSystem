<?php
//$servername='localhost';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include('connect.php');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
// $_POST['name']="santhosham@gmail.com";
// $_POST['password']="mbjr@2108";
try
{

    //$conn = mysqli_connect("localhost", "root", "", "vxa3922_wdm");
    $query="select * from Login_Master where username='".$_POST['name']."' and password='".$_POST['password']."'";
    $result=mysqli_query($conn,$query);
    //echo $query;
    if(mysqli_num_rows($result)==0) 
    {
        echo json_encode(["InvalidUser"=>1]);
    }
    else
    {   
        while($row = mysqli_fetch_assoc($result)) {
            $role= $row["role"];

        if($role=="visitor")
        {
            $query="select * from Visitor where Email='".$_POST['name']."' limit 1";  
            $resultarray;
            //echo $query;
            $result=mysqli_query($conn,$query);
            while($row = mysqli_fetch_assoc($result))
            {
                $resultarray= json_encode([
                    'Id' =>($row['Visitor_id']),
                    'Name' => $row['FirstName'],
                    'role'=>$role
                    ]
                    );
            }
        }
        else
        {
            $query="select * from Personnel where Email='".$_POST['name']."' limit 1";  
            $resultarray = array();
            //echo $query;
            $result=mysqli_query($conn,$query);
            while($row = mysqli_fetch_assoc($result))
            {
                $resultarray = json_encode([
                    'Id' => $row['Personnel_Id'],
                    'Name' => $row['FName'],
                    'role'=>$role
                    ]
                    );
            }
        }
        echo $resultarray;
    }
}
// echo json_encode($resultarray);
}
catch(Exception $e)
{
    echo $e->getMessage();
}

?>