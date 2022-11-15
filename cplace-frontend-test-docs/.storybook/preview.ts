import { setStorybookSettings } from '@cplace-next/cf-frontend-sdk/src/lib/utils/storybook';

setStorybookSettings(() => {
    // here you can define your custom settings (e.g. addParameters or addDecorator)
}).then((r: string) => console.log(r));