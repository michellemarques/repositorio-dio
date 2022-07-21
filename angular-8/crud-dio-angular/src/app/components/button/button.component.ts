import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string = 'Clique';  
  @Input() btnType: string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
