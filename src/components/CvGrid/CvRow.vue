<template>
  <div
    class="cv-row"
    :class="[
      `${carbonPrefix}--row`,
      {
        [`${carbonPrefix}--row--condensed`]: kind === 'condensed',
        [`${carbonPrefix}--row--narrow`]: kind === 'narrow',
      },
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { carbonPrefix } from '../../global/settings';

defineProps({
  kind: {
    type: String,
    default: 'wide',
    validator: val => ['wide', 'narrow', 'condensed'].includes(val),
  },
});
</script>
