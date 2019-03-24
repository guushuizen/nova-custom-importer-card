<?php

namespace GuusH\NovaImporter;

abstract class ImporterClass {

	/**
	 * Handle incoming data for import function.
	 *
	 * @param string $data
	 * @return mixed
	 */
	public abstract function handle($data);
}