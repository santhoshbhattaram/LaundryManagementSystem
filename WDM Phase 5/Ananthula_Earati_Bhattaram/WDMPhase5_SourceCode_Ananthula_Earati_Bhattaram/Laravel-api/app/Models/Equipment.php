<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    public $timestamps = false;
    protected $table='equipment';
    protected $fillable=[
        'Equipment_ID',
        'EquipmentName','EquipmentType','Status'
    ];
}
