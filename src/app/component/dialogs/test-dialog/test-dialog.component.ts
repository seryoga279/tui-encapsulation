import {ChangeDetectionStrategy, Component, Inject, Injector, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from "@tinkoff/ng-polymorpheus";
import {AnotherDialogComponent} from "../another-dialog/another-dialog.component";

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestDialogComponent implements OnInit {
  value: string | undefined;
  datetime: any;

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

  constructor(
      @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
      @Inject(Injector) private readonly injector: Injector,
  ) { }

  ngOnInit(): void {
  }

  buttonEvent() {
    console.log('click');
  }

  openDialog() {
      this.dialogService
          .open(
              new PolymorpheusComponent(AnotherDialogComponent, this.injector),
              {
                  dismissible: true,
                  label: 'сломанное модальное окно',
                  size: 'l',
              }
          )
          .subscribe((res) => {});
  }

}
