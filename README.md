# Nova Custom Importer Card

[![Latest Stable Version](https://poser.pugx.org/guushuizen/nova-importer/v/stable)](https://packagist.org/packages/guushuizen/nova-importer)
[![Total Downloads](https://poser.pugx.org/guushuizen/nova-importer/downloads)](https://packagist.org/packages/guushuizen/nova-importer)
[![Monthly Downloads](https://poser.pugx.org/guushuizen/nova-importer/d/monthly)](https://packagist.org/packages/guushuizen/nova-importer)
[![License](https://poser.pugx.org/guushuizen/nova-importer/license)](https://packagist.org/packages/guushuizen/nova-importer)

Allows Laravel Nova developers to create custom import functionality for their resources

![Nova Import Card Screenshot](https://raw.githubusercontent.com/sparclex/screenshots/master/nova-import-card-resource-index.png)
## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require guushuizen/nova-importer
```

After this, we need to publish the config.php file:

```bash
php artisan vendor:publish --provider=GuusH\NovaImporter\CardServiceProvider
```

Next up, you must register the card. This is typically done in the `card` method of the corresponding resource or the 
`NovaServiceProvider`.

```php
// in app/Providers/NovaServiceProvider.php or app/Nova/<Resource>.php

// ...

public function card()
{
    return [
        // ...
        new \GuusH\NovaImporter\NovaImporter(App\Nova\User::class),
    ];
}
```

## Customization 

To customize the import process create a new importer class. The importer class is basically just an [import implementation of the laravel-excel package](https://laravel-excel.maatwebsite.nl/3.1/imports/). The easiest way to get started is to extend `Sparclex\NovaImportCard\BasicImporter` and overwrite the different methods. During the import process you may throw an exception of the type `Sparclex\NovaImportCard\ImportException` with an error message visible for the user. You may also add a `message(): String` method to customize the success message. 


The custom importer class can be registered on global or resource basis.

```php
// app/Nova/User.php

class User extends Resource
{

    public static $importer = CustomImporter::class;
    
    // ...
}

// or app/config/nova-import-card.php

return [
    'importer' => CustomImporter::class,
    
    // ...
]
```

## Testing

``` bash
composer test
```

## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.