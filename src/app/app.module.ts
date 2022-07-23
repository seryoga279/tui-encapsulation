import {Injector, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import { TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE } from '@taiga-ui/i18n';
import {of} from "rxjs";
import { TUI_SANITIZER } from '@taiga-ui/core';
import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {ComponentModule} from "./component/component.module";
import {createCustomElement} from "@angular/elements";
import {ComponentComponent} from "./component/component/component.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ComponentModule
  ],
  providers: [
    {
      provide: TUI_LANGUAGE,
      useValue: of(TUI_RUSSIAN_LANGUAGE),
    },
    {
      provide: TUI_SANITIZER,
      useClass: NgDompurifySanitizer,
    },
  ]
})
export class AppModule {
  constructor(private injector: Injector) {}

  public ngDoBootstrap() {
    const contractEditorComponent = createCustomElement(
        ComponentComponent,
        {
          injector: this.injector,
        }
    );
    customElements.define('test-component', contractEditorComponent);
  }
}
