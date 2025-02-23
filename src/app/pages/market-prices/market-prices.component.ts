import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-market-prices',
  imports: [CommonModule,MatCardModule, MatTableModule],
  templateUrl: './market-prices.component.html',
  styleUrl: './market-prices.component.css'
})
export class MarketPricesComponent {
  displayedColumns: string[] = ['name', 'price'];
  products = [
    { name: 'Mil', price: 250 },
    { name: 'Riz local', price: 500 },
    { name: 'Arachide', price: 350 },
  ];
}
