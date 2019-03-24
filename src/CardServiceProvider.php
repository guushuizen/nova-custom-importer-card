<?php

namespace GuusH\NovaImporter;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class CardServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $this->routes();
        });

        Nova::serving(function (ServingNova $event) {
            Nova::script('NovaImporter', __DIR__.'/../dist/js/card.js');
            Nova::style('NovaImporter', __DIR__.'/../dist/css/card.css');
        });

        $this->publishes([
        	__DIR__ . '/../config/nova-importer.php' => config_path('nova-importer.php')
		]);
    }

    /**
     * Register the card's routes.
     *
     * @return void
     */
    protected function routes()
    {
        if ($this->app->routesAreCached()) {
            return;
        }

        Route::middleware(['nova'])
				->namespace('GuusH\NovaImporter')
                ->prefix('nova-vendor/nova-importer')
                ->group(__DIR__.'/../routes/api.php');
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
