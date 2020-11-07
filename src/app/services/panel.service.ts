import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanelService {
  // currentPanel = new Subject<string>();
  // observeCurPanel$ = this.currentPanel.asObservable();
  currentPanel: string;

  constructor() {}

  // public set setCurPanel(x: string) {
  //   this.currentPanel.next(x);
  // }

  public set setCurPanel(v: string) {
    this.currentPanel = v;
  }

  public get getCurPanel(): string {
    return this.currentPanel;
  }
}
