<?php

namespace GuusH\NovaImporter;

use Illuminate\Support\Facades\Validator;
use Laravel\Nova\Http\Requests\NovaRequest;

class ImportController {

	public function upload(NovaRequest $request) {
		$resource = $request->resource();
		$importClass = $resource::$importerClass;

		$importer = new $importClass();

		$data = Validator::make($request->all(), [
			'file' => 'required|file',
		])->validate();

		$dataString = file_get_contents($data['file']);

		return $importer->handle($dataString);
	}
}