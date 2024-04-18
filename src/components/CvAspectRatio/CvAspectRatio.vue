<template>
  <component
    :is="as"
    :class="[
      `${carbonPrefix}--aspect-ratio`,
      `${carbonPrefix}--aspect-ratio--${ratio}`,
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
import { carbonPrefix } from '../../global/settings';
import { aspectRatios } from './consts';
import { includesOrError } from '../../global/component-utils/validators';

defineProps({
  /**
   * Provide a string to be rendered as
   * the outermost node of the component. This is useful if you want
   * to deviate from the default `div` tag, where you could specify
   * `section` or `article` instead.
   *
   * ```html
   * <cv-aspect-ratio as="article">My content</cv-aspect-ratio>
   * ```
   */
  as: {
    type: String,
    default: 'div',
  },

  /**
   * Specify the ratio to be used by the aspect ratio
   * container. This will  determine what aspect ratio your content
   * will be displayed in.
   */
  ratio: {
    type: String,
    default: aspectRatios[0],
    validator: includesOrError(aspectRatios, 'CvAspectRatio', 'ratio'),
  },
});
</script>
