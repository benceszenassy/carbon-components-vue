import {
  sbCompPrefix,
  storyParametersObject,
} from '../../global/storybook-utils';
import { action } from '@storybook/addon-actions';

import { ref } from 'vue';

import { CvAccordion, CvAccordionItem, CvAccordionSkeleton } from '.';
import { alignConsts, sizeConsts } from './consts';

export default {
  title: `${sbCompPrefix}/CvAccordion`,
  component: CvAccordion,
  argTypes: {
    align: {
      control: 'select',
      options: Object.keys(alignConsts.$labels),
    },
    size: {
      control: 'select',
      options: Object.keys(sizeConsts.$labels),
    },
    isFlush: {
      control: 'boolean',
    },
  },
};

// Define these outside of "Template", it keeps it state when user change controls
const open = ref({
  accItem1: false,
  accItem2: false,
  accItem3: false,
  accItem4: false,
});

const disabledItems = ref(new Set());

function onToggleEpisode3() {
  if (disabledItems.value.has(3)) disabledItems.value.delete(3);
  else disabledItems.value.add(3);
}
// - Define these outside of "Template", it keeps it state when user change controls

const Template =
  template =>
  (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CvAccordion, CvAccordionItem, CvAccordionSkeleton },
    setup: () => {
      return {
        ...args,
        align: alignConsts[alignConsts.$labels[args.align]],
        size: sizeConsts[sizeConsts.$labels[args.size]],
        onChange: action('change'),
        disabledItems,
        onToggleEpisode3,
        open,
      };
    },
    template,
  });

/**
 * DEFAULT STORY
 */

const defaultTemplate = `
<cv-accordion @change="onChange" :align="align" :size="size" :is-flush="isFlush">
  <cv-accordion-item v-for="n in 4" :key="\`acc-item-\${n}\`" :id="n % 2 ? \`acc-item-\${n}\` : ''" :disabled="disabledItems.has(n)">
    <template v-slot:title>Episode {{n}} </template>
    <template v-slot:content>
      <p>Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? R2! R2-D2, where are you? At last! Where have you been? They're heading in this direction.</p>
    </template>
  </cv-accordion-item>
</cv-accordion>

<div style="padding-top: 1rem;">
  <button @click="onToggleEpisode3">Disable Episode 3</button>
</div>
`;

export const Default = Template(defaultTemplate).bind({});
Default.args = {};
Default.parameters = storyParametersObject(
  Default.parameters,
  defaultTemplate,
  Default.args
);

/**
 * VMODEL STORY
 */

const vModelTemplate = `
<div>
  <cv-accordion @change="onChange" :align="align" :size="size" :is-flush="isFlush">
    <cv-accordion-item v-for="n in 4" :key="\`acc-item-\${n}\`" :id="\`accItem\${n}\`" v-model:open="open[\`accItem\${n}\`]">
      <template #title>Episode {{n}} </template>
      <template #content>
        <p>Give us a few minutes to lock it down. Large leak...very dangerous. Who is this? What's your operating number? Boring conversation anyway. Luke! We're going to have company! Aren't you a little short to be a stormtrooper? What? Oh...the uniform.</p>
      </template>
    </cv-accordion-item>
  </cv-accordion>

  <div style="margin-top:1rem; background-color: #888888;  padding:1rem"><div style="font-size: 150%">Sample interaction</div>
    <label for="checkbox">V-model: Check 1:</label>
    <input id="checkbox" type="checkbox" v-model="open.accItem1"/>
    <span>Checked: <span style="font-weight: bold;">{{open.accItem1}}</span></span><br/>
    <label for="checkbox">V-model: Check 2:</label>
    <input id="checkbox" type="checkbox" v-model="open.accItem2"/>
    <span>Checked: <span style="font-weight: bold;">{{open.accItem2}}</span></span><br/>
    <label for="checkbox">V-model: Check 3:</label>
    <input id="checkbox" type="checkbox" v-model="open.accItem3"/>
    <span>Checked: <span style="font-weight: bold;">{{open.accItem3}}</span></span><br/>
    <label for="checkbox">V-model: Check 4:</label>
    <input id="checkbox" type="checkbox" v-model="open.accItem4"/>
    <span>Checked: <span style="font-weight: bold;">{{open.accItem4}}</span></span>
  </div>
</div>
`;

export const VModel = Template(vModelTemplate).bind({});
VModel.args = {};
VModel.parameters = storyParametersObject(
  VModel.parameters,
  vModelTemplate,
  VModel.args
);

/**
 * SKELETON STORY
 */

const skeletonTemplate = `
<cv-accordion-skeleton :align="align" :size="size" :is-flush="isFlush"></cv-accordion-skeleton>
`;

export const Skeleton = Template(skeletonTemplate).bind({});
Skeleton.args = {};
Skeleton.parameters = storyParametersObject(
  Skeleton.parameters,
  skeletonTemplate,
  Skeleton.args
);
