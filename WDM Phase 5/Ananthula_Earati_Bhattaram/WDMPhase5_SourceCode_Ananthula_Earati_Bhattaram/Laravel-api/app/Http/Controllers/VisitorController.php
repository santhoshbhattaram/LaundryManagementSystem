<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Login;
use App\Models\Personnel;
use Illuminate\Support\Facades\DB;
use App\Models\Visitor;
use App\Models\Order;
use App\Models\BillDetails;
use App\Models\Equipment;

class VisitorController extends Controller
{
    public function visitororder(Request $request)
    {
        $Customer_Id=$request->input('Customer_Id');
        // echo $request;
        $result=DB::select('select * from Orders where Customer_Id =?',[$Customer_Id]);
        echo json_encode($result);
    }
    public function dropoff(Request $request)
    {
        $Customer_Id=$request->input('cust');
        $orderId=$request->input('orderId');
        $pickupdate=$request->input('pickupdate');
        $result=DB::select('select * from Orders where Customer_Id =? and order_id =?',[$Customer_Id,$orderId]);
        if(empty($result))
        {
            echo json_encode(["update"=>0]); 
        }
        else
        {
            DB::update('update Orders set TypeOfDelivery=?,DeliveryDate=?
            where order_Id=? and Customer_Id=?',
            ['Delivery',$pickupdate,$orderId,$Customer_Id]);
            echo json_encode(["update"=>1]);
        }
    }
}