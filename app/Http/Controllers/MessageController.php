<?php

namespace App\Http\Controllers;

use App\Events\Message as EventsMessage;
use App\Http\Requests\StoreMessageRequest;
use App\Http\Requests\UpdateMessageRequest;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    public function index(Request $request)
    {
        event(new EventsMessage($request->message));
        $message = $this->create($request);
        $this->store($message);
    }


    public function create(Request $request)
    {

        $request->validate([
            "message"=>['requirre'],
            "sender"=>['required','integer'],
            'receiver'=>['required','integer']
        ]);

        $message = new Message();
        $message->message = $request->message;
        $message->sender = $request->sender;
        $message->receiver = $request->receiver;
        $message->save();
        return $message;

    }


    public function store($message)
    {
        if ($message->sender!=null && $message->receiver != null) {
            $message->save();
        }
    }





    public function destroy(Message $message)
    {
        //
    }
}
