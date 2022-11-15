import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cplace-frontend-test-docs-cplace-single-text-control',
  templateUrl: './cplace-single-text-control.component.html',
  styleUrls: ['./cplace-single-text-control.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CplaceSingleTextControlComponent {
  @HostBinding('class.cf-docs-test-lib-controls') public CplaceSingleTextControlComponent = true;

  // Example value: page/w1qgtkioenapcfqe1daiy0svu
  uid = 'typeDefinition/kgd9rvwdcy7qqus6w5w3mtag3';

}
