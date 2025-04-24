<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
        Route::middleware('api')
        ->prefix('api')
        ->group(base_path('routes/api.php'));

        Route::middleware('web')
            ->group(base_path('routes/web.php'));
        
        }
        protected function mapProtectedRoutes()
        {
            Route::middleware(['web'])
                ->group(base_path('routes/protected.php'));
        }
        


        public function map()
        {
            $this->mapApiRoutes();
            $this->mapWebRoutes();
            $this->mapProtectedRoutes(); // 👈 Ne pas oublier
        }

}