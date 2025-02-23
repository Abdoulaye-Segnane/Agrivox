import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MarketPricesComponent } from './pages/market-prices/market-prices.component';
import { WeatherComponent } from './pages/weather/weather.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'market-prices', component: MarketPricesComponent },
    { path: 'weather', component: WeatherComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige vers Home si l'URL est inconnue
];
