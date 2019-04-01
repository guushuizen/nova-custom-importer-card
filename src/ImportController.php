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

		return $importer->handle($data('file'));
	}
}