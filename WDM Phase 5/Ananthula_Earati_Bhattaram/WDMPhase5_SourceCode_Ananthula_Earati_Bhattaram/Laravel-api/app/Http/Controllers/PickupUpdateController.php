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
class PickupUpdateController extends Controller
{
    public function Pickup(Request $request)
    {
        $order_Id=$request->input('orderId');
        $pickupdate=$request->input('pickupdate');
        DB::update('update Orders set TypeOfDelivery=?,DeliveryDate=? 
        where order_Id=?',['Pickup',$pickupdate,$order_Id]);
        echo json_encode(["update"=>1]);
    }
}

?>