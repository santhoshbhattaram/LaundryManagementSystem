<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
// $_POST['SEmail']="sahbhattaram@gmail.com";
// $_POST['role']="visitor";
// $_POST['LName']="Bhattaram";
// $_POST['FName']="Sai";
// $_POST['Cnumber']=8897806554;
// $_POST['CPassword']="mbjr@2108";
include('connect.php');
try
{   
    
    //Connection check
    if (!$conn) {
        echo "Connection failed: " .mysqli_connect_error();
    }

    $query="select username from Login_Master where username='".$_POST['SEmail']."'";
    $result=mysqli_query($conn,$query);
    if(mysqli_num_rows($result)==0) 
    {
        if($_POST['role']=="user" || $_POST['role']=="admin" || $_POST['role']=="manager")
        {
            $query="select Personnel_Id  from Personnel order by Personnel_Id desc limit 1";
            $result= mysqli_query($conn, $query);
            while($row = mysqli_fetch_assoc($result)) {
                $last_id= $row["Personnel_Id"];
                $last_id=$last_id+1;
            }
            // $personel_id=$result->
            $query = "insert into Personnel 
                      values(
                      ".$last_id.",
                      '".$_POST['FName']."',
                      '".$_POST['LName']."',
                      ".$_POST['Cnumber'].",
                      '".$_POST['SEmail']."',
                       '".$_POST['role']."'
                       )";
            $result = mysqli_query($conn, $query);
    
            if ($result) {
                $flag=1;
            } 
            else {
                  echo "Error: " . $query . "<br>" . mysqli_error($conn);
            }
        }
        else if($_POST['role']=="visitor")
        {
            $query="select Visitor_id from Visitor order by Visitor_id desc limit 1";
            $result= mysqli_query($conn, $query);
            while($row = mysqli_fetch_assoc($result)) {
                $last_id= $row["Visitor_id"];
                $last_id=$last_id+1;
            }
            // $personel_id=$result->
            $query = "insert into Visitor 
                      values(
                      ".$last_id.",
                      '".$_POST['FName']."',
                      '".$_POST['LName']."',
                      ".$_POST['Cnumber'].",
                      '".$_POST['SEmail']."'                      
                       )";
            $result = mysqli_query($conn, $query);
    
            if ($result) {
                $flag=1;
            } 
            else {
                  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
        if($flag==1)
        {
            $query="insert into Login_Master values
            (
                '".$_POST['SEmail']."',
                '".$_POST['CPassword']."',
                '".$_POST['role']."'
            )
            ";
            $result = mysqli_query($conn, $query);
            if($result)
            {
                $to = $_POST['SEmail'];
                $subject = "Registration Email";
                $message = "
                Thank you for registering to Instwash system. We are delighted to serve you. 
                Please visit and have a great service with us.
                Please find the credentials below.
                 User Name :".$_POST['SEmail']."
                 Password :".$_POST['CPassword']."
                ";
                mail($to,$subject,$message);
            }
            echo json_encode(["Isuser" => 0 ]);
        }
        
    }
    else
    {
        echo json_encode(["Isuser" => 1 ]);
    }
}
catch(Exception $e)
{
    echo 'Message : '.$e->getMessage();
}
finally
{
    mysqli_close($conn);
}
?>