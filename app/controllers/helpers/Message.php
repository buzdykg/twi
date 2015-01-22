<?php

class MessageHelper extends AuthController {

    public function __construct()
    {
        $this->service = App::make('Twilio');
    }

    public function add()
    {
        $input = Input::all();

        $msg = $this->service->account->messages->sendMessage($input['from'], $input['to'], $input['content']);

        return ['sid' => $msg->sid];
    }

    public function items()
    {
        $input = Input::all();

        return Utility::stdArrayToPlainArray(
            $this->service->account->messages->getPage(0, 100, ['From' => $input['phone_number']])->getItems(),
            ['sid', 'from', 'to', 'date_sent', 'body']
        );
    }
}