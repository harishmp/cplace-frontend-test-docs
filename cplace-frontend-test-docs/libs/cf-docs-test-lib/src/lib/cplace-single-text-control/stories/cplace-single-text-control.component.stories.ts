import { HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CfContextService,
  CplaceControlService,
  EntityFeatureGetResponse,
  MockCplaceControlService,
  mockCplaceSingleIconControlChangeHandler,
  mockCplaceSingleTextControlChangeHandler,
  MockSubmitRequestMapping,
} from '@cplace-next/cf-frontend-sdk';
import { Meta, Story } from '@storybook/angular';
import { mockTypeSettingsControlStates, mockTypeSettingsPageState } from '../../../../.storybook/assets/data/mock-type-settings-data';
import { CplaceSingleTextControlComponent } from '../cplace-single-text-control.component';
import { CplaceSingleTextControlModule } from '../cplace-single-text-control.module';
import { config } from './config.stories';

export default {
  title: 'Controls',
  ...config,
} as Meta;

export const Controls: Story<CplaceSingleTextControlComponent> = () => ({
  moduleMetadata: {
    imports: [CplaceSingleTextControlModule, BrowserAnimationsModule],
    providers: [
      {
        provide: CplaceControlService,
        useFactory: (httpClient: HttpClient, cfContextService: CfContextService) => {
          const mockSubmitRequestMapping = new Map<string, MockSubmitRequestMapping>();
          mockSubmitRequestMapping.set(mockTypeSettingsControlStates['name'].identity.featureName, {
            controlChangeHandler: mockCplaceSingleTextControlChangeHandler,
            controlState: mockTypeSettingsControlStates['name'],
          });

          mockSubmitRequestMapping.set(mockTypeSettingsControlStates['iconName'].identity.featureName, {
            controlChangeHandler: mockCplaceSingleIconControlChangeHandler,
            controlState: mockTypeSettingsControlStates['iconName'],
          });

          const mockGetRequestMapping = new Map<string, EntityFeatureGetResponse>();
          mockGetRequestMapping.set(mockTypeSettingsPageState.typeDefinitionUid, {
            entityUid: mockTypeSettingsPageState.typeDefinitionUid,
            featureResponses: [
              { controlState: mockTypeSettingsControlStates['name'], featureName: mockTypeSettingsControlStates['name'].identity.featureName },
              {
                controlState: mockTypeSettingsControlStates['iconName'],
                featureName: mockTypeSettingsControlStates['iconName'].identity.featureName,
              },
            ],
          });

          return new MockCplaceControlService(
            httpClient,
            cfContextService,
            mockSubmitRequestMapping,
            mockGetRequestMapping
          );
        },
        deps: [HttpClient, CfContextService],
      },
    ],
  },
  props: {
    typeSettingsPageState: mockTypeSettingsPageState,
  },
});
