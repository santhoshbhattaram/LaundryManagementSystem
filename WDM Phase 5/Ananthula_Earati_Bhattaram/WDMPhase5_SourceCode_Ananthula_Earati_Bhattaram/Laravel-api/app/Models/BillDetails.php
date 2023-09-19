<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BillDetails extends Model
{
    public $timestamps = false;
    protected $table='bill_details';
    protected $fillable=[
        'Bill_Id',
        'Order_ID','TotalCost'
    ];
}
