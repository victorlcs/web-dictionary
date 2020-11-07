import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { EventManager } from '@angular/platform-browser';
import { Definition } from 'src/app/models/Definition';
import { DictionaryService } from 'src/app/services/dictionary.service';
import { PanelService } from 'src/app/services/panel.service';

@Component({
  selector: 'app-dict-panel-card',
  templateUrl: './dict-panel-card.component.html',
  styleUrls: ['./dict-panel-card.component.scss'],
})
export class DictPanelCardComponent implements OnInit {
  listOfDefine: Definition[];
  @Input() cardIndex: number;

  searchForm = new FormControl('');

  constructor(
    private dictServices: DictionaryService,
    private panelServices: PanelService
  ) {}
  @ViewChild('input') input: ElementRef;
  @ViewChild('searchBtn') searchBtn: ElementRef;

  ngOnInit(): void {}

  onSearch() {
    if (this.searchForm.value) {
      this.dictServices
        .defineWord(this.searchForm.value)
        .subscribe((result) => {
          this.listOfDefine = result;
          console.log(result);
        });
    }
  }

  //Hostlistener
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    //console.log(event);
    if (event.key === this.cardIndex.toString()) {
      this.panelServices.setCurPanel = event.key;
      this.input.nativeElement.focus();
      event.preventDefault();
    }

    if (
      event.key === 'Enter' &&
      this.panelServices.getCurPanel === this.cardIndex.toString()
    ) {
      this.onSearch();
    }
  }
}
