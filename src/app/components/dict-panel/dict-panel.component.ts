import { Component, OnInit } from '@angular/core';
import { Definition } from 'src/app/models/Definition';
import { DictionaryService } from 'src/app/services/dictionary.service';

@Component({
  selector: 'app-dict-panel',
  templateUrl: './dict-panel.component.html',
  styleUrls: ['./dict-panel.component.scss'],
})
export class DictPanelComponent implements OnInit {
  numberOfPanel: number = 5;
  constructor() {}

  ngOnInit(): void {}
}
