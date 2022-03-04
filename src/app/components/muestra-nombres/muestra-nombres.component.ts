import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-muestra-nombres',
  templateUrl: './muestra-nombres.component.html',
  styles: [
  ]
})
export class MuestraNombresComponent implements OnChanges, OnInit {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
  }
  @Input () nombre! : string; 

}
