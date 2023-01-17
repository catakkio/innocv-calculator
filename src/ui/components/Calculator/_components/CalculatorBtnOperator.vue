<template>
  <p
    class="flex justify-center items-center h-20 w-20 border-2 border-solid rounded-full text-2xl cursor-pointer bg-green-500 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
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
