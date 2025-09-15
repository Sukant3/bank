import { Component, OnInit, signal } from '@angular/core';
import { Dataservice } from './dataservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bank');
}





