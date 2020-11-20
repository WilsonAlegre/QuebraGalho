import { HeaderData } from './header-data.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: 'Início'
  })

  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value;
  }

  set headerData(headerDate: HeaderData) {
    this._headerData.next(headerDate);
  }
}
