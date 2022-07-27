import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component/component.component';
import {
  TuiButtonModule,
  TuiDataListModule, TuiDialogModule,
  TuiLoaderModule,
  TuiRootModule,
  TuiTextfieldControllerModule
} from "@taiga-ui/core";
import {TuiInputDateTimeModule, TuiInputModule, TuiIslandModule, TuiMultiSelectModule} from "@taiga-ui/kit";
import { TestDialogComponent } from './dialogs/test-dialog/test-dialog.component';
import { TuiLetModule } from "@taiga-ui/cdk";
import { FormsModule } from "@angular/forms";
import { AnotherDialogComponent } from './dialogs/another-dialog/another-dialog.component';



@NgModule({
  declarations: [
    ComponentComponent,
    TestDialogComponent,
    AnotherDialogComponent
  ],
    imports: [
        CommonModule,
        TuiRootModule,
        TuiIslandModule,
        TuiButtonModule,
        TuiDataListModule,
        TuiLetModule,
        FormsModule,
        TuiTextfieldControllerModule,
        TuiLoaderModule,
        TuiMultiSelectModule,
        TuiDialogModule,
        TuiInputModule,
        TuiInputDateTimeModule,
    ]
})
export class ComponentModule { }
