import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  @Input() number = 10;

  constructor() {
    console.log('1 - chamou o construtor')
   }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('2 - chamou o OnChanges')
  } 

  ngOnInit(): void {
    console.log('3 - chamou o onInit')
  }

  ngDoCheck(): void {
    console.log('4 - chamou o DoCheck')
 }

  ngAfterContentInit(): void {
    console.log('5 - chamou o AfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('6 - chamou o AfterContentChecked')
  }

  ngAfterViewChecked(): void {
    console.log('7 - chamou o AfterViewChecked')
  }

  ngOnDestroy(): void {
    console.log('8 - chamou o OnDestroy')
  }

}
