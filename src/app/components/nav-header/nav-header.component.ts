import { Component, OnInit, TemplateRef } from '@angular/core';
import { PanelService } from 'src/app/services/panel.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss'],
})
export class NavHeaderComponent implements OnInit {
  genInput: number;
  modalRef: BsModalRef;

  constructor(
    private panelServices: PanelService,
    private modalService: BsModalService
  ) {}

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
