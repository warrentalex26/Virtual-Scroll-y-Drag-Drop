import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.scss']
})
export class VirtualComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  personas = Array(500).fill(0);

  constructor() { }

  ngOnInit() {
    console.log(this.personas);
  }

  irFinal() {
    this.viewport.scrollToIndex(this.personas.length);
  }
  irInicio() {
    this.viewport.scrollToIndex(0);
  }

  irCentro() {
    this.viewport.scrollToIndex(this.personas.length / 2);

  }

}
