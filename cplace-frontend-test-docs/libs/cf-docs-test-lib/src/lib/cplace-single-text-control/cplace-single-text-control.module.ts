import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CplaceSingleTextControlComponent } from './cplace-single-text-control.component';
import { I18nModule, CplaceControlModule, TranslationService } from '@cplace-next/cf-frontend-sdk';
import * as de from './lang/de.json';
import * as en from './lang/en.json';


@NgModule({
  declarations: [
    CplaceSingleTextControlComponent
  ],
  imports: [
    CommonModule,
    CplaceControlModule,
    I18nModule,
    ButtonModule
  ],
  exports: [
    CplaceSingleTextControlComponent
  ]
})
export class CplaceSingleTextControlModule { 
  constructor(private translationService: TranslationService) {
    this.translationService.addTranslation({
      translations: {
        en: en,
        de: de,
      },
    });
  }
}
