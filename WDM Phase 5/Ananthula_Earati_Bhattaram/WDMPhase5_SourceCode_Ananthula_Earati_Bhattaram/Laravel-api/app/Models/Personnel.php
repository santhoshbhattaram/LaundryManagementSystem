<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Personnel extends Model
{
    public $timestamps = false;
    protected $table='personnel';
    protected $fillable=[
        'Personnel_Id',
        'FName','LName',
        'ContactNo',
        'Email',
        'UserRole'
    ];
}
