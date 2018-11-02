<?php

namespace App\Http\Controllers;

use App\Bot;

class BotController extends Controller
{
    public function getBot()
    {
        return Bot::select(['slug', 'question', 'answer'])->get()->toArray();
    }
}
