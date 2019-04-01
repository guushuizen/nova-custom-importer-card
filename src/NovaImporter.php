<?php

namespace GuusH\NovaImporter;

use Laravel\Nova\Card;

class NovaImporter extends Card
{
	protected $resource;

	public function __construct($resource, $accept) {
		parent::__construct();

		$this->resource = $resource;

		$this->withMeta([
			'accept' => $accept,
			'uploadTitle' => $resource::$uploadTitle,
			'resourceLabel' => $resource::label(),
			'resourceSlug' => $resource::uriKey(),
			'choose_button_text' => config('nova-importer.choose_button_text', "Choose file"),
			'not_chosen' => config('nova-importer.not_chosen', "No file selected"),
			'begin_upload' => config('nova-importer.begin_upload', "Upload")
		]);
	}


	/**
     * The width of the card (1/3, 1/2, or full).
     *
     * @var string
     */
    public $width = '1/2';

    /**
     * Get the component name for the element.
     *
     * @return string
     */
    public function component()
    {
        return 'NovaImporter';
    }
}
