import { ControlStateCollection } from '../../../src/lib/types';

export const mockTypeSettingsPageState = {
  typeDefinitionId: 'kgd9rvwdcy7qqus6w5w3mtag3',
  typeDefinitionUid: 'typeDefinition/kgd9rvwdcy7qqus6w5w3mtag3',
  isPageApplicable: true,
  isFileApplicable: false,
  excelWebQuery:
    'http://localhost:8083/intern/tricia/custom/webQuery?typeId=ngt3g13ixke13qyle0qw7mwx4&userLogin=USER_LOGIN&password=USER_PASSWORD',
};

export const mockTypeSettingsControlStates: ControlStateCollection = {
  name: {
    label: 'Internal Name',
    alert: undefined,
    validationMessage: undefined,
    identity: { featureName: 'name', entityUid: 'typeDefinition/kgd9rvwdcy7qqus6w5w3mtag3' },
    isRequired: true,
    readonly: false,
    controlParameters: { componentName: 'CplaceSingleTextControlComponent', value: 'default.page', isTextArea: false },
  },
  iconName: {
    label: 'Icon Name',
    identity: { featureName: 'iconName', entityUid: 'typeDefinition/kgd9rvwdcy7qqus6w5w3mtag3' },
    isRequired: false,
    readonly: false,
    controlParameters: {
      componentName: 'CplaceSingleIconControlComponent',
      value: {
        name: 'fa-home',
        className: 'fa fa-home',
      },
      availableIcons: [
        {
          name: 'fa-ban',
          className: 'fa fa-ban',
        },
        {
          name: 'fa-search',
          className: 'fa fa-search',
        },
        {
          name: 'fa-home',
          className: 'fa fa-home',
        },
      ],
    },
  },
};
