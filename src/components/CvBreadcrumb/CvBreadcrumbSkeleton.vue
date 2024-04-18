<template>
  <div
    :class="[
      `${carbonPrefix}--breadcrumb`,
      `${carbonPrefix}--skeleton`,
      { [`${carbonPrefix}--breadcrumb--no-trailing-slash`]: noTrailingSlash },
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { carbonPrefix } from '../../global/settings';

defineProps({
  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash: {
    type: Boolean,
    default: false,
  },
});
</script>
