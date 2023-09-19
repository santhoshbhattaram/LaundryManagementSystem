<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\ManageController;
use App\Http\Controllers\PickupUpdateController;
use App\Http\Controllers\VisitorController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login',[LoginController::class,'index']);
Route::post('/register',[LoginController::class,'store']);
Route::post('/report',[ReportController::class,'ReportData']);
Route::post('/recentorder',[ReportController::class,'RecentOrders']);
Route::post('/order',[ManageController::class,'Orders']);
Route::post('/equipment',[ManageController::class,'Equipment']);
Route::post('/tasks',[ManageController::class,'Tasks']);
Route::post('/personnel',[ManageController::class,'Personnel']);
Route::post('/deleteorder',[ManageController::class,'DeleteOrder']);
Route::post('/editorder',[ManageController::class,'EditOrder']);
Route::post('/insertorder',[ManageController::class,'insertorder']);
Route::post('/insertequipment',[ManageController::class,'insertequipment']);
Route::post('/equipupdate',[ManageController::class,'equipupdate']);
Route::post('/equipdelete',[ManageController::class,'equipdelete']);
Route::post('/ReportTotals',[ReportController::class,'ReportTotals']);
Route::post('/MonthlyPerformance',[ReportController::class,'MonthlyPerformance']);
Route::post('/pickup',[PickupUpdateController::class,'Pickup']);
Route::post('/visitororder',[VisitorController::class,'visitororder']);
Route::post('/dropoff',[VisitorController::class,'dropoff']);
