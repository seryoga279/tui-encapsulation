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
import {TuiInputModule, TuiIslandModule, TuiMultiSelectModule} from "@taiga-ui/kit";
import { TestDialogComponent } from './dialogs/test-dialog/test-dialog.component';
import {TuiLetModule} from "@taiga-ui/cdk";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ComponentComponent,
    TestDialogComponent
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
  ]
})
export class ComponentModule { }
