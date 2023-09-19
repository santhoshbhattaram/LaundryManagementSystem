<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public $timestamps = false;
    protected $table='orders';
    protected $fillable=[
        'order_Id',
        'Customer_Id','Type',
        'Status',
        'Quantity',
        'AssignedTo',
        'OrderDate',
        'TypeOfDelivery',
        'DeliveryDate'
    ];
}
