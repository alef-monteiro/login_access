import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {GenericComponent} from './generic/generic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GenericComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'login_access';
}
