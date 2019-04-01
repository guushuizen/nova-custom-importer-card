<?php

namespace GuusH\NovaImporter;

use Illuminate\Http\UploadedFile;

abstract class ImporterClass {

	/**
	 * Handle incoming data for import function.
	 *
	 * @param UploadedFile
	 * @return mixed
	 */
	public abstract function handle($data);
}