<template>
  <ul
    :class="[
      `${carbonPrefix}--accordion ${carbonPrefix}--skeleton`,
      {
        [`${carbonPrefix}--accordion--${align}`]: align,
        [`${carbonPrefix}--accordion--${size}`]: size, // TODO: remove in V12
        [`${carbonPrefix}--layout--size-${size}`]: size,
        [`${carbonPrefix}--accordion--flush`]: isFlush && align !== 'start',
      },
    ]"
  >
    <cv-accordion-item-skeleton :open="true">
      <cv-skeleton-text width="90%"></cv-skeleton-text>
      <cv-skeleton-text width="80%"></cv-skeleton-text>
      <cv-skeleton-text width="95%"></cv-skeleton-text>
    </cv-accordion-item-skeleton>
    <cv-accordion-item-skeleton></cv-accordion-item-skeleton>
    <cv-accordion-item-skeleton></cv-accordion-item-skeleton>
    <cv-accordion-item-skeleton></cv-accordion-item-skeleton>
  </ul>
</template>

<script setup>
import { carbonPrefix } from '../../global/settings';
import { CvSkeletonText } from '../CvSkeletonText';
import CvAccordionItemSkeleton from './_CvAccordionItemSkeleton.vue';
import { alignConsts, sizeConsts } from './consts';

defineProps({
  /**
   * Specify the alignment of the accordion heading
   * title and chevron. Defaults to `end`.
   */
  align: {
    type: String,
    default: 'end',
    validator: val => alignConsts.includes(val),
  },

  /**
   * Specify the size of the Accordion. Currently
   * supports the following: `sm`, `md`, `lg`
   */
  size: {
    type: String,
    default: '',
    validator: val => sizeConsts.includes(val),
  },

  /**
   * Specify whether Accordion text should be flush,
   * default is `false`, does not work with `align="start"`.
   */
  isFlush: {
    type: Boolean,
    default: false,
  },
});
</script>
