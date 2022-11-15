import { moduleMetadata } from '@storybook/angular';
import { CplaceSingleTextControlComponent } from '../cplace-single-text-control.component';
import { CplaceSingleTextControlModule } from '../cplace-single-text-control.module';


export const config = {
  decorators: [
    moduleMetadata({
      imports: [CplaceSingleTextControlModule],
    }),
  ],
  component: CplaceSingleTextControlComponent,
  parameters: {},
};