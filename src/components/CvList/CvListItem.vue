<template>
  <li class="cv-list-item" :class="`${carbonPrefix}--list__item`"><slot /></li>
</template>

<script>
import { carbonPrefix } from '../../global/settings';

export default {
  name: 'CvListItem',
  setup: () => ({ carbonPrefix }),
};
</script>
