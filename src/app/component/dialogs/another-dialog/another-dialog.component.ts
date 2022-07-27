import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-another-dialog',
  templateUrl: './another-dialog.component.html',
  styleUrls: ['./another-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnotherDialogComponent implements OnInit {

  value: any;

  constructor() { }

  ngOnInit(): void {
  }

}
