<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Login;
use App\Models\Personnel;
use Illuminate\Support\Facades\DB;
use App\Models\Visitor;

class LoginController extends Controller
{
/* Login method api*/
    public function index(Request $request)
    {
        $username=$request->input('name');
        $password=$request->input('password');
        $result=DB::select('SELECT * FROM login_master where username=? and password=? limit 1',[$username,$password]);             
        $invaliduser=["InvalidUser"=>1];
        if(empty($result))
        return $invaliduser;
        else
        {
            $role=$result[0]->role;
            if($role=="visitor")
            {
                $result=DB::select('SELECT * FROM Visitor where Email=? limit 1',[$username]);  
                $result=json_encode(['Id'=>$result[0]->Visitor_id,'Name'=>$result[0]->FirstName,'role'=>$role]);           
            }
            else
            {
                $result=DB::select('SELECT * FROM Personnel where Email=? limit 1',[$username]); 
                $result=json_encode(['Id'=>$result[0]->Personnel_Id,'Name'=>$result[0]->FName,'role'=>$role]);
            }

            return $result;
        }
    }

/*Register users*/
    public function store(Request $request)
    {
        $username=$request->input('SEmail');
        $role=$request->input('role');
        $lname=$request->input('LName');
        $fname=$request->input('FName');
        $cnmuber=$request->input('Cnumber');
        $cpassword=$request->input('CPassword');
        $result= DB::select('SELECT username FROM login_master where username=? limit 1',[$username]);
        if(!empty($result))
        {
            $res= json_encode(["Isuser" => 1 ]);
        }
        else
        {
            if($role=="user" || $role=="admin" || $role=="manager")
            {
                $result= DB::select('select Personnel_Id  from Personnel order by Personnel_Id desc limit 1');
                $last_id=$result[0]->Personnel_Id;
                $last_id=$last_id+1; 
                $personel=new Personnel();
                $personel->Personnel_Id=$last_id;
                $personel->FName=$fname;
                $personel->LName=$lname;
                $personel->ContactNo=$cnmuber;
                $personel->Email=$username;
                $personel->UserRole=$role;
                $personel->save();
                $flag=1;
            }
            else if($role=="visitor")
            {
                $result= DB::select('select Visitor_id  from Visitor order by Visitor_id desc limit 1');
                $last_id=$result[0]->Visitor_id;
                $last_id=$last_id+1; 
                $Visitor=new Visitor();
                $Visitor->Visitor_id=$last_id;
                $Visitor->FirstName=$fname;
                $Visitor->LastName=$lname;
                $Visitor->Contact=$cnmuber;
                $Visitor->Email=$username;
                $Visitor->save();
                $flag=1;
            }
            if($flag==1)
            {
                $login=new Login();
                $login->username=$username;
                $login->password=$cpassword;
                $login->role=$role;
                $login->save();
            }
            $res= json_encode(["Isuser" => 0 ]);
        }
        return $res;
    }
}
