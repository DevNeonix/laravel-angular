<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NgController extends Controller
{
    public function index(){
        return view('layouts.angular');
    }
}
