import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss']
})
export class TestDialogComponent implements OnInit {
  value: string | undefined;
  inputValue: string = '';
  list$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([
      'text 1',
      'text 2',
      'text 3',
      'text 4',
      'text 5',
      'text 6',
      ]
  );

  constructor() { }

  ngOnInit(): void {
  }

  buttonEvent() {
    console.log('click');
  }

}
