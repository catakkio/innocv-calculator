<template>
  <div>
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String || Number,
      required: true,
    },
  },
};
</script>

<style></style>
