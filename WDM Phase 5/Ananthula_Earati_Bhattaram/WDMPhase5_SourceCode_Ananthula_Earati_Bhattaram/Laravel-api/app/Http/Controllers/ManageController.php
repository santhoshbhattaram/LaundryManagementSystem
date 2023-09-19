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
class ManageController extends Controller
{
    public function Orders()
    {
        $result=DB::select('select * from Orders'); 
        echo json_encode($result);
    }
    public function Equipment()
    {
        $result=DB::select('select * from Equipment'); 
        echo json_encode($result);
    }
    public function Tasks()
    {
        $result=DB::select('select (@row_number:=@row_number + 1) AS TaskId,AssignedTo as Personnel_Id,order_Id as Order_Id,
        Status as Status
        FROM Orders,(SELECT @row_number:=0) AS t    
        where AssignedTo is not null and Status=? OR Status=?',['Inprogress','In progress']);
        echo json_encode($result);
    }
    public function Personnel()
    {
        $result=DB::select('select * from Personnel');
        echo json_encode($result);
    }
    public function DeleteOrder(Request $request)
    {
        $order_id=$request->input('order_Id');
        echo $order_id;
        DB::delete('delete from  Orders
        where order_id=?',[$order_id]);

    }
    public function EditOrder(Request $request)
    {
        $Customer_Id=$request->input('Customer_Id');
        $Type=$request->input('Type');
        $Status=$request->input('Status');
        $Quantity=$request->input('Quantity');
        $AssignedTo=$request->input('AssignedTo');
        $order_Id=$request->input('order_Id');
        DB::update('update Orders set Customer_Id=?,Type=?,Status=?,Quantity=?,AssignedTo=?
        where order_Id=?
        ',[$Customer_Id,$Type,$Status,$Quantity,$AssignedTo,$order_Id]);
    }
    public function insertorder(Request $request)
    {
        $result=DB::select('select order_Id  from Orders order by order_Id desc limit 1');
        $last_id=$result[0]->order_Id;
        $last_id=$last_id+1;
        $Customer_Id=$request->input('Customer_Id');
        $selection=$request->input('selection');
        $Quantity=$request->input('Quantity');
        $orders=new Order();
        $orders->order_Id=$last_id;
        $orders->Customer_Id=$Customer_Id;
        $orders->Type=$selection;
        $orders->Status='Inprogress';
        $orders->Quantity=$Quantity;
        $orders->AssignedTo=NULL;
        $orders->OrderDate=Now();
        $orders->TypeOfDelivery=NULL;
        $orders->DeliveryDate=NULL;
        $orders->save();
        $result=DB::select('select Bill_Id  from bill_details order by Bill_Id desc limit 1');
        $last_id1=$result[0]->Bill_Id;
        $last_id1=$last_id1+1;
        $totalcost=$Quantity*10;
        $bill=new BillDetails();
        $bill->Bill_Id=$last_id1;
        $bill->Order_ID=$last_id;
        $bill->TotalCost=$totalcost;
        $bill->save();
        echo json_encode(["inserted"=>1]);
    }

    public function insertequipment(Request $request)
    {
        $result=DB::select('select Equipment_ID  from Equipment order by Equipment_ID   desc limit 1');       
        $last_id=$result[0]->Equipment_ID;
        $last_id=$last_id+1;
        $EName=$request->input('EName');
        $EType=$request->input('EType');
        $equipment=new Equipment();
        $equipment->Equipment_ID=$last_id;
        $equipment->EquipmentName=$EName;
        $equipment->EquipmentType=$EType;
        $equipment->Status='Active';  
        $equipment->save(); 
        echo json_encode(["einsert"=>1]);       
    }
    public function equipupdate(Request $request)
    {

        $equipname=$request->input('EquipmentName');
        $equiptype=$request->input('EquipmentType');
        $equipstatus=$request->input('Status');
        $equipid=$request->input('Equipment_ID');
        DB::update('update Equipment set EquipmentName=?,EquipmentType=?,Status=?
        where Equipment_ID=?',[$equipname,$equiptype,$equipstatus,$equipid]);       
        echo json_encode(["update"=>1]);
    }
    public function equipdelete(Request $request)
    {
        $equipid=$request->input('Equipment_ID');
        DB::delete('delete from  Equipment
        where  Equipment_ID=?',[$equipid]);
    }
}

?>