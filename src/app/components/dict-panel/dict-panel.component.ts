import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/models/Definition';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-dict-panel',
  templateUrl: './dict-panel.component.html',
  styleUrls: ['./dict-panel.component.scss'],
})
export class DictPanelComponent implements OnInit {
  listOfPanel = [];
  constructor(private panelServices: PanelService) {}

  ngOnInit(): void {
    this.panelServices.panelsubject$.subscribe((result) => {
      this.listOfPanel = result;
      console.log(result);
    });
  }
}
