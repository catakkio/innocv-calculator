<template>
  <p
    class="flex justify-center items-center h-20 w-20 border-2 border-solid rounded-full text-2xl"
  >
    {{ value }}
  </p>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
