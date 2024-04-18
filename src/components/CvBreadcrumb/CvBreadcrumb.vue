<template>
  <nav :aria-label="ariaLabel">
    <ol
      class="cv-breadcrumb"
      :class="[
        `${carbonPrefix}--breadcrumb`,
        { [`${carbonPrefix}--breadcrumb--no-trailing-slash`]: noTrailingSlash },
      ]"
    >
      <slot />
    </ol>
  </nav>
</template>

<script setup>
import { carbonPrefix } from '../../global/settings';

defineProps({
  /**
   * Specify the label for the breadcrumb container
   */
  ariaLabel: {
    type: String,
    default: 'Breadcrumb',
  },

  /**
   * Optional prop to omit the trailing slash for the breadcrumbs
   */
  noTrailingSlash: {
    type: Boolean,
    default: false,
  },
});
</script>
