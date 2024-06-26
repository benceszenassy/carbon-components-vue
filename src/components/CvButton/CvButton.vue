<template>
  <button
    class="cv-button"
    :class="buttonClasses"
    :disabled="disabled || skeleton"
    @click="$emit('click', $event)"
  >
    <!-- @slot Default content of button -->
    <slot v-if="!skeleton" />

    <cv-svg
      v-if="!skeleton && icon"
      :svg="icon"
      :class="`${carbonPrefix}--btn__icon`"
    />
  </button>
</template>

<script>
import { carbonPrefix } from '../../global/settings';
import {
  props as commonCvButtonProps,
  useCvButtonCommon,
} from './CvButtonCommon';
import CvSvg from '../CvSvg/_CvSvg.vue';

const { disabled, icon, kind, size } = commonCvButtonProps;

export default {
  name: 'CvButton',
  components: { CvSvg }, // emitted to allow testing of click
  props: {
    // Docgen comments added for storybook doc page
    /**
     * disabled by property or if skeleton
     */
    disabled,
    /**
     * \@carbon/icons-vue icon, href, svg or symbol
     */
    icon,
    /**
     * Carbon button kind
     */
    kind,
    /**
     * Size of the button
     */
    size,
    /**
     * skeleton - shows the skeleton version of the button
     */
    skeleton: Boolean,
  },
  emits: ['click'],
  setup(props) {
    const { buttonClasses } = useCvButtonCommon(
      props.kind,
      props.size,
      props.skeleton
    );

    return {
      buttonClasses,
      carbonPrefix,
    };
  },
};
</script>
