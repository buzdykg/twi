<?php

class HomeController extends BaseController {

	protected $layout = 'layouts.main';

	public function getIndex()
	{
		return View::make('index');
	}

}
