<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Visitor extends Model
{
    public $timestamps = false;
    protected $table='visitor';
    protected $fillable=[
        'Visitor_id',
        'FirstName','LastName',
         'Contact','Email'
    ];
}