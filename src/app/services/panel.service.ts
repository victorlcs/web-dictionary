import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  private numberOfPanel: number = 0;
  private listOfPanel = [];
  private panelsubject = new Subject<any>();
  public panelsubject$ = this.panelsubject.asObservable();
  private isGenInputFocus: boolean = true;

  currentPanel: string;

  constructor() {}

  public set setGenInpputFocus(flag: boolean) {
    this.isGenInputFocus = flag;
  }

  public get getGenInputFocus(): boolean {
    return this.isGenInputFocus;
  }

  // public set setCurPanel(x: string) {
  //   this.currentPanel.next(x);
  // }

  public set setCurPanel(v: string) {
    this.currentPanel = v;
  }

  public get getCurPanel(): string {
    return this.currentPanel;
  }

  generate(num: number) {
    //this.numberToGen.next(num);

    this.numberOfPanel = num;
    this.addRemovePanel();
  }

  addRemovePanel() {
    let variance = this.numberOfPanel - this.listOfPanel.length;
    if (variance > 0) {
      for (var i = 0; i < variance; i++) {
        this.listOfPanel.push({
          panelNumber: this.listOfPanel.length + 1,
        });
        console.log(this.listOfPanel);
      }
    } else {
      let negate = -variance;
      console.log(negate);
      for (var i = 0; i < negate; i++) {
        this.listOfPanel.pop();
        console.log(this.listOfPanel);
      }
    }
    this.panelsubject.next(this.listOfPanel);
  }
}
