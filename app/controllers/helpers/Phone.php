<?php

class PhoneHelper extends AuthController {

    public function __construct()
    {
        $this->service = App::make('Twilio');
    }
    public function items()
    {
        return Utility::stdArrayToPlainArray(
            $this->service->account->incoming_phone_numbers->getPage()->getItems(),
            ['phone_number', 'sid']
        );
    }
}