<template>
  <li
    class="cv-breadcrumb-item"
    :class="[
      `${carbonPrefix}--breadcrumb-item`,
      { [`${carbonPrefix}--breadcrumb-item--current`]: isCurrentPage },
    ]"
  >
    <slot />
  </li>
</template>

<script setup>
import { carbonPrefix } from '../../global/settings';

defineProps({
  /**
   * Provide if this breadcrumb item represents the current page
   */
  isCurrentPage: {
    type: Boolean,
    default: false,
  },
});
</script>
