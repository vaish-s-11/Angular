import { Component, OnInit } from '@angular/core';
import { AnimateService } from '../Services/animate.service';

@Component({
  selector: 'app-sasuke',
  templateUrl: './sasuke.component.html',
  styleUrls: ['./sasuke.component.css'],
  providers: [AnimateService]
})
export class SasukeComponent{
  title="Sasuke Uchiha!";
  titles="Obito Uchiha!"

  constructor(private animateService: AnimateService){

  }

  OnAnimate(){
    this.animateService.OnAnimateClicked(this.title);
  }
}