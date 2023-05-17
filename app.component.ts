import { Component } from '@angular/core';
import { AnimateService } from './Services/animate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnimateService]
})
export class AppComponent {
  constructor(private enrollService: AnimateService){

  }
  title = 'SubscribeService';
}