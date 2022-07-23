import {ChangeDetectionStrategy, Component, Inject, Injector, OnInit, ViewEncapsulation} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {TuiDestroyService} from "@taiga-ui/cdk";
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import {takeUntil} from "rxjs";
import {TestDialogComponent} from "../dialogs/test-dialog/test-dialog.component";

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: [
      './component.component.scss',
    '../../../../node_modules/@taiga-ui/core/styles/taiga-ui-theme.less',
    '../../../../node_modules/@taiga-ui/core/styles/taiga-ui-global.less'
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.ShadowDom,
    providers: [
        TuiDestroyService,
    ]
})
export class ComponentComponent implements OnInit {

  constructor(
      @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
      @Inject(Injector) private readonly injector: Injector,
      private destroy$: TuiDestroyService,
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialogService
        .open(
            new PolymorpheusComponent(TestDialogComponent, this.injector),
            {
              dismissible: false,
              label: 'Создание договора',
              size: 'l',
            }
        )
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {});
  }

}
