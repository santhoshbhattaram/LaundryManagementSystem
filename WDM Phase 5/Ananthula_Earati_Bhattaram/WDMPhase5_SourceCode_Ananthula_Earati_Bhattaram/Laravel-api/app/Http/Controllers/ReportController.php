<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Login;
use App\Models\Personnel;
use Illuminate\Support\Facades\DB;
use App\Models\Visitor;

class ReportController extends Controller
{
    public function ReportData(Request $request)
    {
        $result=DB::select('SELECT  COUNT(order_Id) AS TotalOrder FROM Orders');             
        $totalorder=$result[0]->TotalOrder;
        $result=DB::select('SELECT COUNT(Equipment_ID) AS Equipments FROM Equipment');   
        $Equipments=$result[0]->Equipments;
        $result=DB::select('SELECT COUNT(order_Id) AS OrdersPending FROM Orders WHERE Status= ? OR Status= ? OR Status= ?',['Inprogress','In progress','Pending']);           
        $OrdersPending=$result[0]->OrdersPending;

        $result=DB::select('SELECT SUM(TotalCost) AS TotalProfit  FROM Bill_Details');     
        $TotalProfit=$result[0]->TotalProfit;
        
        $resultarray = [
          'TotalOrder' => $totalorder,
          'Equipments'=>$Equipments,
          'OrdersPending'=>$OrdersPending,
          'TotalProfit'=>$TotalProfit
          ];
        echo json_encode($resultarray);
    }
    public function  RecentOrders(Request $request)
    {
        $result=DB::select('select * from Orders order by OrderDate desc limit 10');
        echo json_encode($result);
    }
    public function ReportTotals()
    {
        $resultarray = array();
        $result=DB::select('SELECT COUNT(Visitor_id) AS TotalVisitors FROM Visitor');
        $TotalVisitors=$result[0]->TotalVisitors;
        $result=DB::select('SELECT SUM(TotalCost) AS TotalSales FROM Bill_Details');
        $TotalSales=$result[0]->TotalSales;
        $result=DB::select('SELECT COUNT(AssignedTo) AS TotalTasks FROM Orders where AssignedTo is not null');
        $TotalTasks=$result[0]->TotalTasks;
        $result =DB::select('SELECT COUNT(Personnel_Id) AS Employees FROM Personnel');
        $Employees=$result[0]->Employees;
        $resultarray = [
          'TotalVisitors' => $TotalVisitors,
          'TotalSales'=>$TotalSales,
          'TotalTasks'=>$TotalTasks,
          'Employees'=>$Employees
          ];
        echo json_encode($resultarray);
    }
    public function MonthlyPerformance()
    {
        $result=DB::select("select concat(MONTHNAME(OrderDate),'',Year(OrderDate) )as Month,
        Count(order_Id) as Count 
        from Orders group by concat(MONTHNAME(OrderDate),'',Year(OrderDate))");
        $resultarray = array();
        $resultarray[] = array(
        'Month' => $result[0]->Month,
        'Count' => $result[0]->Count
        );
        echo json_encode($resultarray);

    }
}