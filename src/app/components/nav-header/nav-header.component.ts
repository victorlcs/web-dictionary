import { Component, OnInit } from '@angular/core';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  genInput: number;

  constructor(private panelServices: PanelService) {}

  ngOnInit(): void {}
  onGenPanel() {
    console.log(this.genInput);
    this.panelServices.generate(this.genInput);
  }

  onFocus() {
    console.log('on focus!');
    this.panelServices.setGenInpputFocus = true;
  }

  onBlur() {
    console.log('on blur!');
    this.panelServices.setGenInpputFocus = false;
  }
}
