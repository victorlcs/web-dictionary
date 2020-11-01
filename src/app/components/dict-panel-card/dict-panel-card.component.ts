import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dict-panel-card',
  templateUrl: './dict-panel-card.component.html',
  styleUrls: ['./dict-panel-card.component.scss'],
})
export class DictPanelCardComponent implements OnInit {
  @Input() definition: string;

  constructor() {}

  ngOnInit(): void {}
}
