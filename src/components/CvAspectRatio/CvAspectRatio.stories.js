import { h } from 'vue';
import {
  sbCompPrefix,
  storyParametersObject,
} from '../../global/storybook-utils';

import { CvAspectRatio, CvAspectRatioConsts } from '.';

import './CvAspectRatio.stories.scss';

export default {
  title: `${sbCompPrefix}/CvAspectRatio`,
  component: CvAspectRatio,
  decorators: [
    story => h('div', { class: 'aspect-ratio-story' }, story().render()),
  ],
  argTypes: {
    ratio: {
      control: { type: 'select' },
      options: CvAspectRatioConsts.aspectRatios,
      defaultValue: CvAspectRatioConsts.aspectRatios[0],
      table: {
        defaultValue: { summary: `"${CvAspectRatioConsts.aspectRatios[0]}"` },
      },
    },
    as: {
      control: 'text',
    },
    width: {
      control: { type: 'range', min: 200, max: 500 },
      description: 'Width of container around `CvAspectRatio`',
    },
  },
};

const Template =
  template =>
  (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CvAspectRatio },
    setup: () => ({ args }),
    template,
  });

/**
 * DEFAULT STORY
 */

const defaultTemplate = `<div class="width-container" :style="{ width: args.width + 'px' }">Container width: {{ args.width }}px
  <cv-aspect-ratio :ratio="args.ratio" :as="args.as">
    Content<br />
    Width-based only!
  </cv-aspect-ratio>
</div>
`;

export const Default = Template(defaultTemplate).bind({});
Default.args = {
  width: 200,
  as: 'div',
};
Default.parameters = storyParametersObject(
  Default.parameters,
  defaultTemplate,
  Default.args
);
