import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {

}
