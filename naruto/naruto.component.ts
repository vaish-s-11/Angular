import { Component, OnInit } from '@angular/core';
import { AnimateService } from '../Services/animate.service';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css'],
  providers: [AnimateService]
})
export class narutoComponent{
  naruto = "Naruto Uzumaki";
  itachi="Itachi Uchiha"
  Service: any;

  constructor(private animateService: AnimateService){

  }

  OnNaruto(){
    this.animateService.OnAnimateClicked(this.naruto);
  }

  OnItachi(){
    this.animateService.OnAnimateClicked(this.itachi);
  }
}